# CHG-048 — Assess I1 Authorization-Evidence Lifecycle and Scope

```text
Document ID: CHG-048
Version: 0.1.0
Status: Draft — Pending Review
Owner: Chief Architect / Engineering Owner
Classification: Informational — Change Record
Depends On: GOV-001, GOV-002, GOV-003, SPEC-002, SPEC-004, CHG-044, CHG-047
Change Classification: Major
Change Lifecycle State: Draft
```

## 1. Change Record

Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Engineering Owner
Artifact Owner: Chief Architect / Engineering Owner
Date Identified: 2026-08-09
Change Type: Cross-increment authorization impact analysis
Urgency: Normal

## 2. Current Condition

I1 authorization evidence records permitted state and scope but do not define an authoritative lifecycle for issuance, expiry, revocation, supersession, canonical scope matching, or time-bound validity. I3 must not duplicate those semantics.

## 3. Proposed Assessment Scope

Assess, without implementation: I1 evidence lifecycle; canonical scope schema and matching; authoritative time; revocation timing and concurrency; historical immutability versus current validity; I3 requested-scope representation; backward-compatible migration; and ownership of validation, reconciliation, and audit events.

## 4. Boundaries

This Draft authorizes no I1 schema, policy, I3 authorization, migration, or ADR change. I3 may continue only controls that consume existing permitted evidence without inventing lifecycle semantics.

## 5. Impact Analysis

| Category | Assessment |
|---|---|
| Authority ownership | Material. I1 remains the sole owner of authorization validity. |
| I3 acceptance | Material. Expiry, revocation, and scope-matching cases are governance-blocked, not passed. |
| Compatibility | Material. Existing I1 evidence requires a backward-compatible path. |
| Audit and recovery | Material. Historical authorization references must remain resolvable and attributable. |

## 6. Required Evidence Before Decision

- RFC-002 review of the eight assessment topics.
- Explicit impact analysis and ADR review before any cross-increment model change.
- Defined negative behavior for missing, malformed, unavailable, expired, revoked, or scope-mismatched evidence.

## 7. Review Activity

Review Result: Pending.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft impact analysis for the I1 authorization-lifecycle gap found during I3 persistence design. | Chief Architect / Engineering Owner | CHG-048 |
