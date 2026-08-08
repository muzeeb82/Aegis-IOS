import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for I2 reconciliation validation.');
}

const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

try {
  await client.connect();
  const result = await client.query(`
    SELECT
      (SELECT count(*) FROM i2_decisions d
       LEFT JOIN i2_decision_revisions r ON r.decision_id = d.id AND r.revision = d.current_revision
       WHERE r.id IS NULL) AS decisions_without_current_revision,
      (SELECT count(*) FROM i2_evidence e
       LEFT JOIN i2_evidence_revisions r ON r.evidence_id = e.id AND r.revision = e.current_revision
       WHERE r.id IS NULL) AS evidence_without_current_revision
  `);
  if (Object.values(result.rows[0]).some((count) => Number(count) !== 0)) {
    throw new Error(
      `I2 reconciliation failed: ${JSON.stringify(result.rows[0])}`,
    );
  }
  console.log('I2 reconciliation validation passed.');
} finally {
  await client.end();
}
