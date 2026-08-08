import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.resolve(
  testDirectory,
  '../schemas/evidence-record.schema.json',
);

describe('Evidence Record schema', () => {
  it('contains every SPEC-008 §3 evidence field', () => {
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) as {
      required: string[];
    };

    expect(schema.required).toEqual(
      expect.arrayContaining([
        'testId',
        'version',
        'requirements',
        'subject',
        'environment',
        'dataSet',
        'executor',
        'startedAt',
        'endedAt',
        'expectedResult',
        'actualResult',
        'evidence',
        'disposition',
        'reviewer',
      ]),
    );
  });
});
