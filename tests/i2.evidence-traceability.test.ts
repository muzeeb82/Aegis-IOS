import { describe, expect, it } from 'vitest';

import {
  createEvidence,
  createProvenance,
  createTransformation,
  reviseEvidence,
} from '../src/i2/evidence.js';
import {
  createTypedRelationship,
  traverseFrom,
} from '../src/i2/traceability.js';

const permitted = {
  permitted: true,
  reason: 'synthetic-policy-permit',
} as const;
const denied = { permitted: false, reason: 'no-matching-policy' } as const;

describe('I2 evidence and traceability', () => {
  it('associates immutable evidence revisions with recorded provenance (AC-002, AC-011)', () => {
    const provenance = createProvenance(
      {
        id: 'provenance-1',
        sourceIdentity: 'synthetic-source',
        sourceType: 'synthetic',
        sourceTimestamp: '2026-08-09T00:00:00Z',
        acquiredAt: '2026-08-09T00:00:01Z',
        acquisitionMethod: 'synthetic-fixture',
        contentHash: 'hash-1',
        responsibleActor: 'synthetic-owner',
      },
      permitted,
    );
    const evidence = createEvidence(
      {
        id: 'evidence-1',
        subject: 'synthetic evidence',
        sourceType: 'synthetic',
        ingestedAt: '2026-08-09T00:00:02Z',
        provenanceId: provenance.id,
        transformationIds: [],
        contentHash: 'hash-1',
        sensitivity: 'Internal',
        createdBy: 'synthetic-owner',
        correlationId: 'correlation-1',
        integrityToken: 'integrity-1',
      },
      permitted,
    );
    const corrected = reviseEvidence(
      evidence,
      {
        subject: 'corrected synthetic evidence',
        sourceType: 'synthetic',
        ingestedAt: evidence.ingestedAt,
        provenanceId: provenance.id,
        transformationIds: [],
        contentHash: 'hash-2',
        sensitivity: 'Internal',
      },
      'correct synthetic content reference',
      permitted,
    );

    expect(evidence.revision).toBe(1);
    expect(corrected.evidence).toMatchObject({
      revision: 2,
      provenanceId: provenance.id,
    });
    expect(() =>
      reviseEvidence(
        evidence,
        {
          subject: evidence.subject,
          sourceType: evidence.sourceType,
          ingestedAt: evidence.ingestedAt,
          provenanceId: provenance.id,
          transformationIds: [],
          contentHash: evidence.contentHash,
          sensitivity: evidence.sensitivity,
        },
        'unauthorized overwrite attempt',
        denied,
      ),
    ).toThrow('Unauthorized evidence operation');
  });

  it('records transformations with input and output revisions (AC-011)', () => {
    expect(
      createTransformation(
        {
          id: 'transformation-1',
          inputRevisionIds: ['evidence-1-r1'],
          outputRevisionId: 'evidence-1-r2',
          method: 'synthetic-normalization',
          occurredAt: '2026-08-09T00:00:03Z',
          actorId: 'synthetic-owner',
        },
        permitted,
      ),
    ).toMatchObject({ outputRevisionId: 'evidence-1-r2' });
  });

  it('traverses a requirement through decision, evidence, and provenance (AC-003, AC-012)', () => {
    const relationships = [
      createTypedRelationship(
        {
          id: 'relationship-1',
          fromId: 'FR-001',
          toId: 'decision-1',
          type: 'requirement-validates',
          createdAt: '2026-08-09T00:00:00Z',
          createdBy: 'synthetic-owner',
        },
        permitted,
      ),
      createTypedRelationship(
        {
          id: 'relationship-2',
          fromId: 'decision-1',
          toId: 'evidence-1-r1',
          type: 'decision-uses',
          createdAt: '2026-08-09T00:00:00Z',
          createdBy: 'synthetic-owner',
        },
        permitted,
      ),
      createTypedRelationship(
        {
          id: 'relationship-3',
          fromId: 'evidence-1-r1',
          toId: 'provenance-1',
          type: 'record-derives-from',
          createdAt: '2026-08-09T00:00:00Z',
          createdBy: 'synthetic-owner',
        },
        permitted,
      ),
    ];

    expect(traverseFrom('FR-001', relationships)).toHaveLength(3);
    expect(
      traverseFrom('FR-001', relationships).map((item) => item.toId),
    ).toEqual(['decision-1', 'evidence-1-r1', 'provenance-1']);
  });

  it('denies unauthorized provenance, transformation, and relationship mutations', () => {
    expect(() =>
      createProvenance(
        {
          id: 'provenance-denied',
          sourceIdentity: 'synthetic-source',
          sourceType: 'synthetic',
          sourceTimestamp: '2026-08-09T00:00:00Z',
          acquiredAt: '2026-08-09T00:00:01Z',
          acquisitionMethod: 'synthetic-fixture',
          contentHash: 'hash-denied',
          responsibleActor: 'synthetic-owner',
        },
        denied,
      ),
    ).toThrow('Unauthorized evidence operation');
    expect(() =>
      createTransformation(
        {
          id: 'transformation-denied',
          inputRevisionIds: ['evidence-1-r1'],
          outputRevisionId: 'evidence-1-r2',
          method: 'synthetic-normalization',
          occurredAt: '2026-08-09T00:00:03Z',
          actorId: 'synthetic-owner',
        },
        denied,
      ),
    ).toThrow('Unauthorized evidence operation');
    expect(() =>
      createTypedRelationship(
        {
          id: 'relationship-denied',
          fromId: 'FR-001',
          toId: 'decision-1',
          type: 'requirement-validates',
          createdAt: '2026-08-09T00:00:00Z',
          createdBy: 'synthetic-owner',
        },
        denied,
      ),
    ).toThrow('Unauthorized traceability operation');
  });
});
