import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

import { listMigrations } from './lib/migrations.mjs';

const operation = process.argv[2];
if (!['--status', '--apply'].includes(operation)) {
  throw new Error('Use --status or --apply.');
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL is required. Copy .env.example for local development.',
  );
}

const migrationsDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../db/migrations',
);
const migrations = await listMigrations(migrationsDirectory);
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });

try {
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS aegis_schema_migrations (
      id text PRIMARY KEY,
      checksum text NOT NULL,
      applied_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  const applied = new Map(
    (
      await client.query('SELECT id, checksum FROM aegis_schema_migrations')
    ).rows.map((row) => [row.id, row.checksum]),
  );

  for (const migration of migrations) {
    const previousChecksum = applied.get(migration.id);
    if (previousChecksum && previousChecksum !== migration.checksum) {
      throw new Error(`Applied migration checksum changed: ${migration.id}`);
    }

    if (previousChecksum || operation === '--status') {
      console.log(
        `${previousChecksum ? 'applied' : 'pending'} ${migration.id}`,
      );
      continue;
    }

    await client.query('BEGIN');
    try {
      await client.query(migration.sql);
      await client.query(
        'INSERT INTO aegis_schema_migrations (id, checksum) VALUES ($1, $2)',
        [migration.id, migration.checksum],
      );
      await client.query('COMMIT');
      console.log(`applied ${migration.id}`);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    }
  }
} finally {
  await client.end();
}
