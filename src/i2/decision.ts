export type DecisionLifecycleState =
  | 'Draft'
  | 'Ready for Review'
  | 'In Review'
  | 'Approved'
  | 'Rejected'
  | 'Execution Pending'
  | 'Execution Recorded'
  | 'Outcome Review Pending'
  | 'Reviewed'
  | 'Closed'
  | 'Withdrawn'
  | 'Superseded';

export interface AuthorizationEvidence {
  readonly permitted: boolean;
  readonly reason: string;
}

export interface DecisionTransition {
  readonly from: DecisionLifecycleState;
  readonly to: DecisionLifecycleState;
  readonly actorId: string;
  readonly occurredAt: string;
  readonly evidenceId: string;
}

export interface DecisionRecord {
  readonly id: string;
  readonly schemaVersion: number;
  readonly revision: number;
  readonly decisionType: string;
  readonly subject: string;
  readonly scope: string;
  readonly portfolioContext: string;
  readonly proposal: string;
  readonly alternatives: readonly string[];
  readonly reasoning: string;
  readonly assumptions: readonly string[];
  readonly constraints: readonly string[];
  readonly risks: readonly string[];
  readonly evidenceRevisions: readonly string[];
  readonly frameworkReferences: readonly string[];
  readonly governanceReferences: readonly string[];
  readonly requiredParticipants: readonly string[];
  readonly requiredAuthority: string;
  readonly lifecycleState: DecisionLifecycleState;
  readonly transitionHistory: readonly DecisionTransition[];
  readonly createdAt: string;
  readonly createdBy: string;
  readonly correlationId: string;
  readonly integrityToken: string;
  readonly sensitivity: string;
}

export type DecisionDraft = Omit<
  DecisionRecord,
  'schemaVersion' | 'revision' | 'lifecycleState' | 'transitionHistory'
>;

export interface DecisionRevision {
  readonly decision: DecisionRecord;
  readonly previousRevision: number;
  readonly correctionReason: string;
}

export interface ApprovalRecord {
  readonly id: string;
  readonly decisionId: string;
  readonly decisionRevision: number;
  readonly authorityId: string;
  readonly evidenceId: string;
  readonly recordedAt: string;
}

const transitions: Readonly<
  Record<DecisionLifecycleState, readonly DecisionLifecycleState[]>
> = {
  Draft: ['Ready for Review', 'Withdrawn'],
  'Ready for Review': ['In Review', 'Withdrawn'],
  'In Review': ['Approved', 'Rejected', 'Withdrawn'],
  Approved: ['Execution Pending', 'Superseded'],
  Rejected: [],
  'Execution Pending': ['Execution Recorded'],
  'Execution Recorded': ['Outcome Review Pending'],
  'Outcome Review Pending': ['Reviewed'],
  Reviewed: ['Closed'],
  Closed: [],
  Withdrawn: [],
  Superseded: [],
};

function requireAuthorization(authorization: AuthorizationEvidence): void {
  if (!authorization.permitted) {
    throw new Error(`Unauthorized decision operation: ${authorization.reason}`);
  }
}

function requireValue(value: string, field: string): void {
  if (value.trim().length === 0) {
    throw new Error(`${field} must not be empty.`);
  }
}

function freezeRecord(record: DecisionRecord): DecisionRecord {
  return Object.freeze({
    ...record,
    alternatives: Object.freeze([...record.alternatives]),
    assumptions: Object.freeze([...record.assumptions]),
    constraints: Object.freeze([...record.constraints]),
    risks: Object.freeze([...record.risks]),
    evidenceRevisions: Object.freeze([...record.evidenceRevisions]),
    frameworkReferences: Object.freeze([...record.frameworkReferences]),
    governanceReferences: Object.freeze([...record.governanceReferences]),
    requiredParticipants: Object.freeze([...record.requiredParticipants]),
    transitionHistory: Object.freeze([...record.transitionHistory]),
  });
}

export function createDecision(
  draft: DecisionDraft,
  authorization: AuthorizationEvidence,
): DecisionRecord {
  requireAuthorization(authorization);
  for (const [value, field] of [
    [draft.id, 'id'],
    [draft.decisionType, 'decisionType'],
    [draft.subject, 'subject'],
    [draft.scope, 'scope'],
    [draft.reasoning, 'reasoning'],
    [draft.requiredAuthority, 'requiredAuthority'],
    [draft.createdBy, 'createdBy'],
    [draft.correlationId, 'correlationId'],
    [draft.integrityToken, 'integrityToken'],
    [draft.sensitivity, 'sensitivity'],
  ] as const) {
    requireValue(value, field);
  }

  return freezeRecord({
    ...draft,
    schemaVersion: 1,
    revision: 1,
    lifecycleState: 'Draft',
    transitionHistory: [],
  });
}

export function reviseDecision(
  decision: DecisionRecord,
  revision: Pick<
    DecisionDraft,
    | 'proposal'
    | 'alternatives'
    | 'reasoning'
    | 'assumptions'
    | 'constraints'
    | 'risks'
    | 'evidenceRevisions'
  >,
  correctionReason: string,
  authorization: AuthorizationEvidence,
): DecisionRevision {
  requireAuthorization(authorization);
  requireValue(correctionReason, 'correctionReason');
  if (
    !['Draft', 'Ready for Review', 'In Review'].includes(
      decision.lifecycleState,
    )
  ) {
    throw new Error(
      `Decision revision is not permitted in ${decision.lifecycleState}.`,
    );
  }

  return Object.freeze({
    previousRevision: decision.revision,
    correctionReason,
    decision: freezeRecord({
      ...decision,
      ...revision,
      revision: decision.revision + 1,
      lifecycleState: 'Draft',
      transitionHistory: [],
    }),
  });
}

export function transitionDecision(
  decision: DecisionRecord,
  target: DecisionLifecycleState,
  transition: Omit<DecisionTransition, 'from' | 'to'>,
  authorization: AuthorizationEvidence,
): DecisionRecord {
  requireAuthorization(authorization);
  if (!transitions[decision.lifecycleState].includes(target)) {
    throw new Error(
      `Invalid decision transition: ${decision.lifecycleState} -> ${target}`,
    );
  }
  requireValue(transition.actorId, 'actorId');
  requireValue(transition.occurredAt, 'occurredAt');
  requireValue(transition.evidenceId, 'evidenceId');
  const nextTransition: DecisionTransition = Object.freeze({
    ...transition,
    from: decision.lifecycleState,
    to: target,
  });
  return freezeRecord({
    ...decision,
    lifecycleState: target,
    transitionHistory: [...decision.transitionHistory, nextTransition],
  });
}

export function recordApproval(
  approval: ApprovalRecord,
  decision: DecisionRecord,
  authorization: AuthorizationEvidence,
): ApprovalRecord {
  requireAuthorization(authorization);
  if (decision.lifecycleState !== 'In Review') {
    throw new Error(
      'Approval may be recorded only while the decision is In Review.',
    );
  }
  if (
    approval.decisionId !== decision.id ||
    approval.decisionRevision !== decision.revision
  ) {
    throw new Error('Approval must reference the current decision revision.');
  }
  for (const [value, field] of [
    [approval.id, 'id'],
    [approval.authorityId, 'authorityId'],
    [approval.evidenceId, 'evidenceId'],
    [approval.recordedAt, 'recordedAt'],
  ] as const) {
    requireValue(value, field);
  }
  return Object.freeze({ ...approval });
}
