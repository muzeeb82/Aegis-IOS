import type { AuthorizationEvidence } from './decision.js';

export interface ProvenanceRecord {
  readonly id: string;
  readonly sourceIdentity: string;
  readonly sourceType: string;
  readonly sourceTimestamp: string;
  readonly acquiredAt: string;
  readonly acquisitionMethod: string;
  readonly contentHash: string;
  readonly responsibleActor: string;
}

export interface TransformationRecord {
  readonly id: string;
  readonly inputRevisionIds: readonly string[];
  readonly outputRevisionId: string;
  readonly method: string;
  readonly occurredAt: string;
  readonly actorId: string;
}

export interface EvidenceRecord {
  readonly id: string;
  readonly schemaVersion: number;
  readonly revision: number;
  readonly subject: string;
  readonly sourceType: string;
  readonly ingestedAt: string;
  readonly provenanceId: string;
  readonly transformationIds: readonly string[];
  readonly contentHash: string;
  readonly sensitivity: string;
  readonly lifecycleState: 'Recorded' | 'Superseded';
  readonly createdBy: string;
  readonly correlationId: string;
  readonly integrityToken: string;
}

export interface EvidenceRevision {
  readonly evidence: EvidenceRecord;
  readonly previousRevision: number;
  readonly correctionReason: string;
}

function requireAuthorization(authorization: AuthorizationEvidence): void {
  if (!authorization.permitted) {
    throw new Error(`Unauthorized evidence operation: ${authorization.reason}`);
  }
}

function requireValue(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new Error(`${field} must not be empty.`);
  }
}

export function createProvenance(
  provenance: ProvenanceRecord,
  authorization: AuthorizationEvidence,
): ProvenanceRecord {
  requireAuthorization(authorization);
  for (const [value, field] of Object.entries(provenance)) {
    requireValue(String(value), field);
  }
  return Object.freeze({ ...provenance });
}

export function createTransformation(
  transformation: TransformationRecord,
  authorization: AuthorizationEvidence,
): TransformationRecord {
  requireAuthorization(authorization);
  for (const [value, field] of [
    [transformation.id, 'id'],
    [transformation.outputRevisionId, 'outputRevisionId'],
    [transformation.method, 'method'],
    [transformation.occurredAt, 'occurredAt'],
    [transformation.actorId, 'actorId'],
  ] as const) {
    requireValue(value, field);
  }
  if (transformation.inputRevisionIds.length === 0) {
    throw new Error('inputRevisionIds must not be empty.');
  }
  return Object.freeze({
    ...transformation,
    inputRevisionIds: Object.freeze([...transformation.inputRevisionIds]),
  });
}

export function createEvidence(
  evidence: Omit<
    EvidenceRecord,
    'schemaVersion' | 'revision' | 'lifecycleState'
  >,
  authorization: AuthorizationEvidence,
): EvidenceRecord {
  requireAuthorization(authorization);
  for (const [value, field] of [
    [evidence.id, 'id'],
    [evidence.subject, 'subject'],
    [evidence.sourceType, 'sourceType'],
    [evidence.ingestedAt, 'ingestedAt'],
    [evidence.provenanceId, 'provenanceId'],
    [evidence.contentHash, 'contentHash'],
    [evidence.sensitivity, 'sensitivity'],
    [evidence.createdBy, 'createdBy'],
    [evidence.correlationId, 'correlationId'],
    [evidence.integrityToken, 'integrityToken'],
  ] as const) {
    requireValue(value, field);
  }
  return Object.freeze({
    ...evidence,
    schemaVersion: 1,
    revision: 1,
    lifecycleState: 'Recorded',
    transformationIds: Object.freeze([...evidence.transformationIds]),
  });
}

export function reviseEvidence(
  evidence: EvidenceRecord,
  revision: Pick<
    EvidenceRecord,
    | 'subject'
    | 'sourceType'
    | 'ingestedAt'
    | 'provenanceId'
    | 'transformationIds'
    | 'contentHash'
    | 'sensitivity'
  >,
  correctionReason: string,
  authorization: AuthorizationEvidence,
): EvidenceRevision {
  requireAuthorization(authorization);
  requireValue(correctionReason, 'correctionReason');
  if (evidence.lifecycleState !== 'Recorded') {
    throw new Error(
      `Evidence revision is not permitted in ${evidence.lifecycleState}.`,
    );
  }
  return Object.freeze({
    previousRevision: evidence.revision,
    correctionReason,
    evidence: Object.freeze({
      ...evidence,
      ...revision,
      revision: evidence.revision + 1,
      transformationIds: Object.freeze([...revision.transformationIds]),
    }),
  });
}
