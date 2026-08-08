# RFC-002 — I1 Authorization-Evidence Lifecycle and Scope

```text
Document ID: RFC-002
Title: I1 Authorization-Evidence Lifecycle and Scope
Version: 0.2.2
Status: Draft
Owner: Chief Architect / Engineering Owner
Classification: Informational
Authority Level: Not Applicable — RFC outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, SPEC-002, SPEC-004, CHG-044, CHG-047, CHG-048
Referenced By: AR-I1-001
Related Change ID: CHG-048
Last Updated: 2026-08-09
```

## 1. Problem and Current State

I1 evidence records permitted state and a scope value, but does not define issued, valid, expired, revoked, or superseded states; canonical authorization context; scope matching; trusted time; or availability behavior. I3 cannot safely create parallel semantics.

## 2. Scope and Boundaries

This RFC develops a proposal only. It covers I1 lifecycle, canonical authorization context, requested-scope provenance, validation, audit, migration, recovery, and reconciliation. It does not authorize an ADR, schema migration, I1/I3 implementation, or a claim that governance-blocked AC-005/006 cases pass.

## 3. Architecture Question and Qualification

Question: how should an I1-owned authorization-evidence lifecycle establish current validity while preserving immutable historical evidence for I3 and later consumers? Architecture significance is **Full Architecture Review**: multiple artifact families and owners are affected, a durable cross-domain constraint is proposed, and viable alternatives require structured consultation. GOV-004 requires an RFC-first path and a new Architecture Review record before decision readiness.

Required owners/reviewers: Chief Architect, Product Owner, Engineering Owner, I1 security owner, I3 portfolio/framework owner, architecture-review lead, and independent validator.

## 4. Proposed Architecture Direction

I1 remains the sole authority owner. It should issue immutable evidence revisions and expose a governed validity evaluation contract over subject, tenant, action, resource type, resource identifier, portfolio/account, purpose, environment, evidence version, lifecycle, sensitivity, and trusted evaluation time. I3 may store requested execution scope and the exact I1 evidence reference, but may not infer validity.

## 5. Alternatives and Rationale

| Topic | Alternatives to evaluate |
|---|---|
| Lifecycle | Immutable lifecycle events; mutable evidence status. |
| Validity | Point-in-time authorization; continuing validity at protected creation. |
| Scope | Exact matching; hierarchical matching; capability-based matching. |
| Legacy evidence | Fail-closed migration; explicitly grandfathered evidence. |
| Revocation | Synchronous enforcement; reconciliation-based enforcement. |
| Time | Database time; trusted application/I1 time. |
| Availability | Locally persisted authoritative evidence; synchronous I1 evaluation; governed cached contract. |

No alternative is selected in this Draft.

## 6. Impact and Affected Owners

Affected artifacts: CHG-044/I1 authorization and audit foundation, SPEC-002 data contract, SPEC-004 security contract, CHG-047/I3 authorization, I3 migration and recovery evidence, and future validation/training/operations materials. Risks include replay, stale/reused evidence, revocation races, scope overreach, unavailable I1 dependencies, and migration incompatibility. Security, operational, migration, recovery, compatibility, documentation, and deferred-consequence impacts require Full Architecture Review evidence; no-impact conclusions require rationale.

## 7. Migration and Operations Considerations

The selected model must preserve existing I1 evidence as immutable history, define backward compatibility and migration disposition, fail closed for missing/malformed/unresolvable evidence, document transaction/isolation and canonical-time assumptions, and prove recovery/reconciliation preserves exact authorization and audit linkage. I1 service unavailability and persisted-evidence unavailability are separate cases requiring an explicit decision.

## 8. Open Questions and Governance-Blocked Cases

Expiry, revocation, and scope-matching cases for I3 AC-005/006 are governance-blocked. They shall be recorded as Blocked, not Passed, Skipped, or silently excluded, until an ADR and implementation evidence exist.

## 9. Consultation, Disposition, and ADR Path

Consultation has not begun. Before `In Review`, GOV-004 §19 inputs, affected owners, reviewers, consultation window, Full Architecture Review record, evidence plan, dissent handling, and decision criteria must be prepared. Resulting ADRs: none. A Draft ADR may be created only after RFC-002 reaches `Approved for Decision` under GOV-004 §25.1.

## 10. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial proposal outline. | Chief Architect / Engineering Owner |
| 0.2.0 | 2026-08-09 | Revision Required addressed: completed Draft RFC structure, qualification, alternatives, impacts, consultation path, and blocked-case treatment. | Chief Architect / Engineering Owner |
| 0.2.1 | 2026-08-09 | Corrected informational Authority Level and specified the GOV-004 §25.1 Approved-for-Decision prerequisite for a Draft ADR. | Chief Architect / Engineering Owner |
| 0.2.2 | 2026-08-09 | Added AR-I1-001 as the required Full Architecture Review consumer. | Chief Architect / Engineering Owner |
