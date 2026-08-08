import { describe, expect, it } from 'vitest';

import { createPrincipalReference } from '../src/i1/identity.js';

describe('I1 identity boundary', () => {
  it('creates a provider-neutral human principal reference', () => {
    expect(
      createPrincipalReference({
        id: 'principal-1',
        kind: 'human',
        subjectReference: 'synthetic-subject-1',
        createdAt: '2026-08-08T00:00:00Z',
      }),
    ).toMatchObject({ kind: 'human', subjectReference: 'synthetic-subject-1' });
  });

  it('rejects an empty provider-neutral subject reference', () => {
    expect(() =>
      createPrincipalReference({
        id: 'principal-1',
        kind: 'workload',
        subjectReference: '',
        createdAt: '2026-08-08T00:00:00Z',
      }),
    ).toThrow('subjectReference must not be empty.');
  });
});
