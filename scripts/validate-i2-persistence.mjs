import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for I2 persistence validation.');
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
const timestamp = '2026-08-09T00:00:00Z';

try {
  await client.connect();
  await client.query('BEGIN');

  await client.query(
    `INSERT INTO i2_decisions (
      id, lifecycle_state, decision_type, subject, scope, portfolio_context, required_authority,
      created_at, created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-decision', 'Draft', 'synthetic', 'synthetic subject', 'synthetic', 'not-applicable',
      'synthetic-authority', $1, 'validator', $1, 'validator', 'i2-validation-correlation',
      'i2-decision-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_decision_revisions (
      id, lifecycle_state, decision_id, revision, proposal, reasoning, created_at, created_by,
      updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-decision-r1', 'Recorded', 'i2-validation-decision', 1, 'synthetic proposal',
      'synthetic reasoning', $1, 'validator', $1, 'validator', 'i2-validation-correlation',
      'i2-decision-revision-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_provenance (
      id, lifecycle_state, source_identity, source_type, source_timestamp, acquired_at,
      acquisition_method, content_hash, responsible_actor, created_at, created_by, updated_at,
      updated_by, correlation_id, sensitivity, integrity_token
    ) VALUES (
      'i2-validation-provenance', 'Recorded', 'synthetic-source', 'synthetic', $1, $1,
      'synthetic-fixture', 'synthetic-hash', 'validator', $1, 'validator', $1, 'validator',
      'i2-validation-correlation', 'Internal', 'i2-provenance-token'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_evidence (
      id, lifecycle_state, subject, source_type, sensitivity, created_at, created_by, updated_at,
      updated_by, correlation_id, integrity_token
    ) VALUES (
      'i2-validation-evidence', 'Recorded', 'synthetic evidence', 'synthetic', 'Internal', $1,
      'validator', $1, 'validator', 'i2-validation-correlation', 'i2-evidence-token'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_evidence_revisions (
      id, lifecycle_state, evidence_id, revision, ingested_at, provenance_id, content_hash,
      created_at, created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-evidence-r1', 'Recorded', 'i2-validation-evidence', 1, $1,
      'i2-validation-provenance', 'synthetic-hash', $1, 'validator', $1, 'validator',
      'i2-validation-correlation', 'i2-evidence-revision-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_transformations (
      id, lifecycle_state, input_revision_ids, output_revision_id, method, occurred_at, actor_id,
      created_at, created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-transformation', 'Recorded', '["i2-validation-evidence-r1"]'::jsonb,
      'i2-validation-evidence-r1', 'synthetic-normalization', $1, 'validator', $1, 'validator',
      $1, 'validator', 'i2-validation-correlation', 'i2-transformation-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_decision_transitions (
      id, lifecycle_state, decision_id, decision_revision, from_state, to_state, actor_id,
      occurred_at, evidence_id, created_at, created_by, updated_at, updated_by, correlation_id,
      integrity_token, sensitivity
    ) VALUES (
      'i2-validation-transition', 'Recorded', 'i2-validation-decision', 1, 'Draft',
      'Ready for Review', 'validator', $1, 'i2-validation-evidence', $1, 'validator', $1,
      'validator', 'i2-validation-correlation', 'i2-transition-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_approvals (
      id, lifecycle_state, decision_id, decision_revision, authority_id, evidence_id, recorded_at,
      created_at, created_by, updated_at, updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-approval', 'Recorded', 'i2-validation-decision', 1,
      'synthetic-authority', 'i2-validation-evidence', $1, $1, 'validator', $1, 'validator',
      'i2-validation-correlation', 'i2-approval-token', 'Internal'
    )`,
    [timestamp],
  );
  await client.query(
    `INSERT INTO i2_typed_relationships (
      id, lifecycle_state, from_id, to_id, relationship_type, created_at, created_by, updated_at,
      updated_by, correlation_id, integrity_token, sensitivity
    ) VALUES (
      'i2-validation-relationship', 'Recorded', 'FR-001', 'i2-validation-decision',
      'requirement-validates', $1, 'validator', $1, 'validator', 'i2-validation-correlation',
      'i2-relationship-token', 'Internal'
    )`,
    [timestamp],
  );

  for (const [table, id, column] of [
    ['i2_decision_revisions', 'i2-validation-decision-r1', 'proposal'],
    ['i2_evidence_revisions', 'i2-validation-evidence-r1', 'content_hash'],
  ]) {
    await client.query('SAVEPOINT immutable_revision_check');
    try {
      await client.query(
        `UPDATE ${table} SET ${column} = ${column} WHERE id = $1`,
        [id],
      );
      throw new Error(`${table} accepted an immutable revision overwrite.`);
    } catch (error) {
      if (!String(error).includes('I2 revisions are immutable')) {
        throw error;
      }
    } finally {
      await client.query('ROLLBACK TO SAVEPOINT immutable_revision_check');
      await client.query('RELEASE SAVEPOINT immutable_revision_check');
    }
  }

  const result = await client.query(`
    SELECT
      (SELECT count(*) FROM i2_decisions) AS decisions,
      (SELECT count(*) FROM i2_decision_revisions) AS decision_revisions,
      (SELECT count(*) FROM i2_decision_transitions) AS transitions,
      (SELECT count(*) FROM i2_approvals) AS approvals,
      (SELECT count(*) FROM i2_evidence) AS evidence,
      (SELECT count(*) FROM i2_evidence_revisions) AS evidence_revisions,
      (SELECT count(*) FROM i2_provenance) AS provenance,
      (SELECT count(*) FROM i2_transformations) AS transformations,
      (SELECT count(*) FROM i2_typed_relationships) AS relationships
  `);
  if (Object.values(result.rows[0]).some((count) => Number(count) !== 1)) {
    throw new Error(
      `Unexpected I2 persistence counts: ${JSON.stringify(result.rows[0])}`,
    );
  }

  await client.query('ROLLBACK');
  console.log('I2 persistence validation passed using synthetic data.');
} catch (error) {
  await client.query('ROLLBACK').catch(() => undefined);
  throw error;
} finally {
  await client.end();
}
