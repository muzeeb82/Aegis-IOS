import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

// The migration runner is intentionally plain ESM so it can execute without a build step.
// @ts-expect-error JavaScript migration helper has no generated declaration file.
import { listMigrations } from '../scripts/lib/migrations.mjs';

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => fs.rm(directory, { recursive: true, force: true })),
  );
});

describe('migration harness', () => {
  it('sorts valid migrations and fingerprints their content', async () => {
    const directory = await fs.mkdtemp(
      path.join(os.tmpdir(), 'aegis-migrations-'),
    );
    temporaryDirectories.push(directory);
    await fs.writeFile(path.join(directory, '0002_second.sql'), 'SELECT 2;\n');
    await fs.writeFile(path.join(directory, '0001_first.sql'), 'SELECT 1;\n');

    await expect(listMigrations(directory)).resolves.toMatchObject([
      { id: '0001_first.sql' },
      { id: '0002_second.sql' },
    ]);
  });

  it('rejects invalid migration filenames', async () => {
    const directory = await fs.mkdtemp(
      path.join(os.tmpdir(), 'aegis-migrations-'),
    );
    temporaryDirectories.push(directory);
    await fs.writeFile(path.join(directory, 'first.sql'), 'SELECT 1;\n');

    await expect(listMigrations(directory)).rejects.toThrow(
      'Invalid migration filename',
    );
  });
});
