import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for I1 persistence validation.');
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
const timestamp = '2026-08-08T00:00:00Z';

try {
  await client.connect();
  await client.query('BEGIN');

  await client.query(
    `
    INSERT INTO i1_principal_references (
      id, lifecycle_state, created_at, created_by, updated_at, updated_by,
      correlation_id, integrity_token, sensitivity, principal_kind, subject_reference
    ) VALUES (
      'validation-principal', 'active', $1, 'validator', $1, 'validator',
      'validation-correlation', 'validation-token', 'Internal', 'human', 'synthetic-subject'
    )
  `,
    [timestamp],
  );
  await client.query(
    `
    INSERT INTO i1_role_bindings (
      id, lifecycle_state, principal_id, role_name, scope, created_at, created_by,
      updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'validation-role', 'active', 'validation-principal', 'validator', 'synthetic',
      $1, 'validator', $1, 'validator', 'validation-correlation', 'validation-token', 'Internal'
    )
  `,
    [timestamp],
  );
  await client.query(
    `
    INSERT INTO i1_policy_references (
      id, lifecycle_state, role_name, action_name, resource_name, scope, created_at,
      created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'validation-policy', 'active', 'validator', 'read', 'identity-record', 'synthetic',
      $1, 'validator', $1, 'validator', 'validation-correlation', 'validation-token', 'Internal'
    )
  `,
    [timestamp],
  );
  await client.query(
    `
    INSERT INTO i1_authorization_evidence (
      id, lifecycle_state, principal_id, action_name, resource_name, scope, permitted, reason,
      created_at, created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'validation-authorization', 'active', 'validation-principal', 'read', 'identity-record',
      'synthetic', true, 'permitted', $1, 'validator', $1, 'validator',
      'validation-correlation', 'validation-token', 'Internal'
    )
  `,
    [timestamp],
  );
  await client.query(
    `
    INSERT INTO i1_audit_events (
      id, lifecycle_state, event_type, principal_id, created_at, created_by, updated_at,
      updated_by, correlation_id, event_detail, integrity_token, sensitivity
    ) VALUES (
      'validation-audit', 'active', 'authentication', 'validation-principal',
      $1, 'validator', $1, 'validator', 'validation-correlation',
      'synthetic validation event', 'validation-token', 'Internal'
    )
  `,
    [timestamp],
  );

  const result = await client.query(`
    SELECT
      (SELECT count(*) FROM i1_principal_references) AS principals,
      (SELECT count(*) FROM i1_role_bindings) AS roles,
      (SELECT count(*) FROM i1_policy_references) AS policies,
      (SELECT count(*) FROM i1_authorization_evidence) AS evidence,
      (SELECT count(*) FROM i1_audit_events) AS audit_events
  `);
  const counts = result.rows[0];
  if (Object.values(counts).some((count) => Number(count) !== 1)) {
    throw new Error(
      `Unexpected I1 persistence counts: ${JSON.stringify(counts)}`,
    );
  }

  await client.query('ROLLBACK');
  console.log('I1 persistence validation passed using synthetic data.');
} catch (error) {
  await client.query('ROLLBACK').catch(() => undefined);
  throw error;
} finally {
  await client.end();
}
