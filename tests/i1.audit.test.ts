import { describe, expect, it } from 'vitest';

import { createAuditEvent, verifyAuditChain } from '../src/i1/audit.js';

describe('I1 audit evidence', () => {
  it('creates and verifies a tamper-evident event chain', () => {
    const first = createAuditEvent({
      id: 'audit-1',
      type: 'authentication',
      principalId: 'principal-1',
      occurredAt: '2026-08-08T00:00:00Z',
      correlationId: 'correlation-1',
      detail: 'synthetic authentication event',
    });
    const second = createAuditEvent(
      {
        id: 'audit-2',
        type: 'denied-privileged-action',
        principalId: 'principal-1',
        occurredAt: '2026-08-08T00:00:01Z',
        correlationId: 'correlation-1',
        detail: 'synthetic denied action event',
      },
      first.integrityToken,
    );

    expect(verifyAuditChain([first, second])).toBe(true);
    expect(verifyAuditChain([{ ...second, detail: 'altered' }])).toBe(false);
  });
});
