import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for I1 recovery validation.');
}

const tables = [
  'i1_audit_events',
  'i1_authorization_evidence',
  'i1_role_bindings',
  'i1_policy_references',
  'i1_principal_references',
];
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

try {
  await client.connect();
  await client.query('BEGIN');
  for (const table of tables) {
    await client.query(`DROP TABLE ${table}`);
  }
  await client.query('ROLLBACK');

  const result = await client.query(
    `SELECT table_name FROM information_schema.tables
     WHERE table_schema = 'public' AND table_name = ANY($1::text[])`,
    [tables],
  );
  if (result.rows.length !== tables.length) {
    throw new Error('Synthetic rollback did not restore every I1 table.');
  }
  console.log('I1 synthetic migration rollback validation passed.');
} catch (error) {
  await client.query('ROLLBACK').catch(() => undefined);
  throw error;
} finally {
  await client.end();
}
