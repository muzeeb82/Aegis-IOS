export type PrincipalKind = 'human' | 'workload';

export interface PrincipalReference {
  readonly id: string;
  readonly kind: PrincipalKind;
  readonly subjectReference: string;
  readonly createdAt: string;
}

export interface ResolvedIdentity {
  readonly principal: PrincipalReference;
  readonly assuranceLevel: string;
}

/**
 * Boundary for a future federated identity provider. I1 deliberately supplies
 * no provider implementation or provider-specific dependency.
 */
export interface IdentityAdapter {
  resolve(subjectReference: string): Promise<ResolvedIdentity | null>;
}

export function createPrincipalReference(input: {
  id: string;
  kind: PrincipalKind;
  subjectReference: string;
  createdAt: string;
}): PrincipalReference {
  for (const [field, value] of Object.entries(input)) {
    if (typeof value === 'string' && value.trim().length === 0) {
      throw new Error(`${field} must not be empty.`);
    }
  }

  return Object.freeze({ ...input });
}
