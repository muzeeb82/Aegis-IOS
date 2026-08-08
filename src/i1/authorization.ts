export interface RoleBinding {
  readonly principalId: string;
  readonly role: string;
  readonly scope: string;
  readonly active: boolean;
}

export interface PolicyReference {
  readonly role: string;
  readonly action: string;
  readonly resource: string;
  readonly scope: string;
}

export interface AuthorizationRequest {
  readonly principalId: string;
  readonly action: string;
  readonly resource: string;
  readonly scope: string;
  readonly sensitivity: string;
  readonly lifecycleState: string;
}

export interface SeparationOfDutyRule {
  readonly firstRole: string;
  readonly secondRole: string;
}

export interface AuthorizationDecision {
  readonly permitted: boolean;
  readonly reason:
    | 'permitted'
    | 'no-active-role-binding'
    | 'separation-of-duty-conflict'
    | 'no-matching-policy';
  readonly evaluatedRoles: readonly string[];
}

function matchesScope(candidate: string, requested: string): boolean {
  return candidate === '*' || candidate === requested;
}

export function evaluateAuthorization(
  request: AuthorizationRequest,
  roleBindings: readonly RoleBinding[],
  policies: readonly PolicyReference[],
  separationOfDutyRules: readonly SeparationOfDutyRule[] = [],
): AuthorizationDecision {
  const roles = roleBindings
    .filter(
      (binding) =>
        binding.active &&
        binding.principalId === request.principalId &&
        matchesScope(binding.scope, request.scope),
    )
    .map((binding) => binding.role)
    .sort();

  if (roles.length === 0) {
    return {
      permitted: false,
      reason: 'no-active-role-binding',
      evaluatedRoles: roles,
    };
  }

  const hasConflict = separationOfDutyRules.some(
    (rule) => roles.includes(rule.firstRole) && roles.includes(rule.secondRole),
  );
  if (hasConflict) {
    return {
      permitted: false,
      reason: 'separation-of-duty-conflict',
      evaluatedRoles: roles,
    };
  }

  const isPermitted = policies.some(
    (policy) =>
      roles.includes(policy.role) &&
      policy.action === request.action &&
      policy.resource === request.resource &&
      matchesScope(policy.scope, request.scope),
  );

  return {
    permitted: isPermitted,
    reason: isPermitted ? 'permitted' : 'no-matching-policy',
    evaluatedRoles: roles,
  };
}
