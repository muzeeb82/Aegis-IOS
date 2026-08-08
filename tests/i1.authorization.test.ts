import { describe, expect, it } from 'vitest';

import { evaluateAuthorization } from '../src/i1/authorization.js';

const request = {
  principalId: 'principal-1',
  action: 'read',
  resource: 'identity-record',
  scope: 'tenant-a',
  sensitivity: 'Internal',
  lifecycleState: 'active',
} as const;

describe('I1 authorization', () => {
  it('denies by default when there is no active role binding', () => {
    expect(evaluateAuthorization(request, [], [])).toMatchObject({
      permitted: false,
      reason: 'no-active-role-binding',
    });
  });

  it('permits only an exact matching role policy and scope', () => {
    expect(
      evaluateAuthorization(
        request,
        [
          {
            principalId: 'principal-1',
            role: 'reader',
            scope: 'tenant-a',
            active: true,
          },
        ],
        [
          {
            role: 'reader',
            action: 'read',
            resource: 'identity-record',
            scope: 'tenant-a',
            sensitivity: 'Internal',
            lifecycleState: 'active',
          },
        ],
      ),
    ).toMatchObject({ permitted: true, reason: 'permitted' });
  });

  it('denies an otherwise permitted request when roles conflict', () => {
    expect(
      evaluateAuthorization(
        request,
        [
          {
            principalId: 'principal-1',
            role: 'requester',
            scope: 'tenant-a',
            active: true,
          },
          {
            principalId: 'principal-1',
            role: 'approver',
            scope: 'tenant-a',
            active: true,
          },
        ],
        [
          {
            role: 'requester',
            action: 'read',
            resource: 'identity-record',
            scope: 'tenant-a',
            sensitivity: 'Internal',
            lifecycleState: 'active',
          },
        ],
        [{ firstRole: 'requester', secondRole: 'approver' }],
      ),
    ).toMatchObject({
      permitted: false,
      reason: 'separation-of-duty-conflict',
    });
  });

  it('denies an active role without a matching policy', () => {
    expect(
      evaluateAuthorization(
        request,
        [
          {
            principalId: 'principal-1',
            role: 'reader',
            scope: 'tenant-a',
            active: true,
          },
        ],
        [],
      ),
    ).toMatchObject({ permitted: false, reason: 'no-matching-policy' });
  });

  it('excludes an inactive role binding', () => {
    expect(
      evaluateAuthorization(
        request,
        [
          {
            principalId: 'principal-1',
            role: 'reader',
            scope: 'tenant-a',
            active: false,
          },
        ],
        [],
      ),
    ).toMatchObject({ permitted: false, reason: 'no-active-role-binding' });
  });

  it('denies a policy that does not match sensitivity or lifecycle state', () => {
    const policy = {
      role: 'reader',
      action: 'read',
      resource: 'identity-record',
      scope: 'tenant-a',
      sensitivity: 'Restricted',
      lifecycleState: 'archived',
    };
    const binding = {
      principalId: 'principal-1',
      role: 'reader',
      scope: 'tenant-a',
      active: true,
    };

    expect(evaluateAuthorization(request, [binding], [policy])).toMatchObject({
      permitted: false,
      reason: 'no-matching-policy',
    });
  });
});
