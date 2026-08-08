import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for I2 recovery validation.');
}

const tables = [
  'i2_typed_relationships',
  'i2_transformations',
  'i2_evidence_revisions',
  'i2_evidence',
  'i2_provenance',
  'i2_approvals',
  'i2_decision_transitions',
  'i2_decision_revisions',
  'i2_decisions',
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
    throw new Error('Synthetic rollback did not restore every I2 table.');
  }
  console.log('I2 synthetic migration rollback validation passed.');
} catch (error) {
  await client.query('ROLLBACK').catch(() => undefined);
  throw error;
} finally {
  await client.end();
}
