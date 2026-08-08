import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const migrationFilePattern = /^\d{4}_[a-z0-9][a-z0-9_-]*\.sql$/;

export async function listMigrations(migrationsDirectory) {
  const entries = await fs.readdir(migrationsDirectory, {
    withFileTypes: true,
  });
  const names = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.sql'))
    .map((entry) => entry.name)
    .sort();

  for (const name of names) {
    if (!migrationFilePattern.test(name)) {
      throw new Error(`Invalid migration filename: ${name}`);
    }
  }

  return Promise.all(
    names.map(async (name) => {
      const sql = await fs.readFile(
        path.join(migrationsDirectory, name),
        'utf8',
      );
      return {
        id: name,
        sql,
        checksum: crypto.createHash('sha256').update(sql).digest('hex'),
      };
    }),
  );
}
