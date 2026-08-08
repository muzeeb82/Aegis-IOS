import crypto from 'node:crypto';

export type AuditEventType =
  | 'authentication'
  | 'authorization-change'
  | 'denied-privileged-action'
  | 'policy-change';

export interface AuditEventInput {
  readonly id: string;
  readonly type: AuditEventType;
  readonly principalId: string;
  readonly occurredAt: string;
  readonly correlationId: string;
  readonly detail: string;
}

export interface AuditEvent extends AuditEventInput {
  readonly previousIntegrityToken: string | null;
  readonly integrityToken: string;
}

function digest(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function canonicalEvent(input: AuditEventInput): string {
  return JSON.stringify({
    correlationId: input.correlationId,
    detail: input.detail,
    id: input.id,
    occurredAt: input.occurredAt,
    principalId: input.principalId,
    type: input.type,
  });
}

export function createAuditEvent(
  input: AuditEventInput,
  previousIntegrityToken: string | null = null,
): AuditEvent {
  return Object.freeze({
    ...input,
    previousIntegrityToken,
    integrityToken: digest(
      `${previousIntegrityToken ?? ''}:${canonicalEvent(input)}`,
    ),
  });
}

export function verifyAuditChain(events: readonly AuditEvent[]): boolean {
  let previousIntegrityToken: string | null = null;

  return events.every((event) => {
    const expected = createAuditEvent(
      event,
      previousIntegrityToken,
    ).integrityToken;
    const valid =
      event.previousIntegrityToken === previousIntegrityToken &&
      event.integrityToken === expected;
    previousIntegrityToken = event.integrityToken;
    return valid;
  });
}
