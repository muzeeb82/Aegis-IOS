import { describe, expect, it } from 'vitest';

import {
  createDecision,
  recordApproval,
  reviseDecision,
  transitionDecision,
} from '../src/i2/decision.js';

const permitted = {
  permitted: true,
  reason: 'synthetic-policy-permit',
} as const;
const denied = { permitted: false, reason: 'no-matching-policy' } as const;
const transition = {
  actorId: 'synthetic-reviewer',
  occurredAt: '2026-08-09T00:00:00Z',
  evidenceId: 'evidence-transition-1',
} as const;

function draftDecision() {
  return {
    id: 'decision-1',
    decisionType: 'synthetic-governed-decision',
    subject: 'I2 validation subject',
    scope: 'synthetic',
    portfolioContext: 'not-applicable',
    proposal: 'synthetic proposal',
    alternatives: ['synthetic alternative'],
    reasoning: 'synthetic reasoning',
    assumptions: ['synthetic assumption'],
    constraints: ['synthetic constraint'],
    risks: ['synthetic risk'],
    evidenceRevisions: ['evidence-1-r1'],
    frameworkReferences: [],
    governanceReferences: ['SPEC-001'],
    requiredParticipants: ['synthetic-reviewer'],
    requiredAuthority: 'synthetic-approver',
    createdAt: '2026-08-09T00:00:00Z',
    createdBy: 'synthetic-owner',
    correlationId: 'correlation-1',
    integrityToken: 'integrity-1',
    sensitivity: 'Internal',
  } as const;
}

describe('I2 decision lifecycle and revisions', () => {
  it('creates an immutable, complete decision record (AC-001)', () => {
    const decision = createDecision(draftDecision(), permitted);

    expect(decision).toMatchObject({ revision: 1, lifecycleState: 'Draft' });
    expect(Object.isFrozen(decision)).toBe(true);
    expect(Object.isFrozen(decision.evidenceRevisions)).toBe(true);
  });

  it('creates a successor revision without overwriting the original (AC-001)', () => {
    const original = createDecision(draftDecision(), permitted);
    const revision = reviseDecision(
      original,
      {
        proposal: 'corrected synthetic proposal',
        alternatives: ['synthetic alternative'],
        reasoning: 'corrected reasoning',
        assumptions: ['synthetic assumption'],
        constraints: ['synthetic constraint'],
        risks: ['synthetic risk'],
        evidenceRevisions: ['evidence-1-r2'],
      },
      'correct a synthetic rationale',
      permitted,
    );

    expect(original.revision).toBe(1);
    expect(original.proposal).toBe('synthetic proposal');
    expect(revision).toMatchObject({ previousRevision: 1 });
    expect(revision.decision).toMatchObject({
      revision: 2,
      lifecycleState: 'Draft',
    });
  });

  it('rejects unauthorized and closed-state revision overwrite attempts (AC-001)', () => {
    const original = createDecision(draftDecision(), permitted);
    const closed = { ...original, lifecycleState: 'Closed' as const };
    const revision = {
      proposal: original.proposal,
      alternatives: original.alternatives,
      reasoning: original.reasoning,
      assumptions: original.assumptions,
      constraints: original.constraints,
      risks: original.risks,
      evidenceRevisions: original.evidenceRevisions,
    };

    expect(() =>
      reviseDecision(original, revision, 'synthetic', denied),
    ).toThrow('Unauthorized decision operation');
    expect(() =>
      reviseDecision(closed, revision, 'synthetic', permitted),
    ).toThrow('Decision revision is not permitted in Closed');
  });

  it('permits a valid, evidenced transition and rejects invalid or unauthorized transitions (AC-004)', () => {
    const draft = createDecision(draftDecision(), permitted);
    const ready = transitionDecision(
      draft,
      'Ready for Review',
      transition,
      permitted,
    );

    expect(ready.transitionHistory).toEqual([
      expect.objectContaining({ from: 'Draft', to: 'Ready for Review' }),
    ]);
    expect(() =>
      transitionDecision(draft, 'Approved', transition, permitted),
    ).toThrow('Invalid decision transition');
    expect(() =>
      transitionDecision(draft, 'Ready for Review', transition, denied),
    ).toThrow('Unauthorized decision operation');
  });

  it('records approval only for the current In Review revision (AC-004)', () => {
    const draft = createDecision(draftDecision(), permitted);
    const ready = transitionDecision(
      draft,
      'Ready for Review',
      transition,
      permitted,
    );
    const inReview = transitionDecision(
      ready,
      'In Review',
      transition,
      permitted,
    );

    expect(
      recordApproval(
        {
          id: 'approval-1',
          decisionId: inReview.id,
          decisionRevision: inReview.revision,
          authorityId: 'synthetic-approver',
          evidenceId: 'evidence-approval-1',
          recordedAt: '2026-08-09T00:00:00Z',
        },
        inReview,
        permitted,
      ),
    ).toMatchObject({ decisionRevision: 1 });
  });
});
