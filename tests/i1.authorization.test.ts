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
          },
        ],
        [{ firstRole: 'requester', secondRole: 'approver' }],
      ),
    ).toMatchObject({
      permitted: false,
      reason: 'separation-of-duty-conflict',
    });
  });
});
