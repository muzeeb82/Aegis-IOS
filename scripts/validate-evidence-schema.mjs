import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const schemaPath = path.resolve(
  scriptDirectory,
  '../schemas/evidence-record.schema.json',
);

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

if (schema.$schema !== 'https://json-schema.org/draft/2020-12/schema') {
  throw new Error(
    'Evidence Record schema must declare JSON Schema draft 2020-12.',
  );
}

if (!Array.isArray(schema.required) || schema.required.length === 0) {
  throw new Error(
    'Evidence Record schema must declare required evidence fields.',
  );
}

console.log(`Evidence Record schema is present: ${schema.$id}`);
