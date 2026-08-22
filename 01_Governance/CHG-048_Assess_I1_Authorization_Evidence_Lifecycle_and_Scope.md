# CHG-048 — Assess I1 Authorization-Evidence Lifecycle and Scope

```text
Document ID: CHG-048
Title: Assess I1 Authorization-Evidence Lifecycle and Scope
Version: 0.2.3
Status: Draft
Owner: Chief Architect / Engineering Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, SPEC-002, SPEC-004, CHG-044, CHG-047
Referenced By: RFC-002, AR-I1-001
Last Updated: 2026-08-22
Change Lifecycle State: Draft
```

## 1. Change Record

```text
Change ID: CHG-048
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Engineering Owner
Artifact Owner: Chief Architect / Engineering Owner
Date Identified: 2026-08-09
Change Type: Cross-increment authorization impact analysis
Change Classification: Major
Urgency: Normal
```

## 2. Purpose, Current Condition, and Assessment-Only Proposal

Purpose: establish whether a governed I1 lifecycle and scope model is needed before I3 can claim lifecycle-dependent AC-005/006 cases. Current I1 evidence lacks authoritative expiry, revocation, supersession, requested-context matching, and time-bound validity. This phase authorizes assessment only; no concrete I1/I3 behavior change is proposed or authorized.

## 3. Architecture Qualification and Decision Path

Architecture question: how I1 establishes current authorization validity while retaining immutable historical references. Significance: Full Architecture Review, separately from this Major GOV-002 classification. RFC-002 is required because multiple viable alternatives and owners need consultation. Required path: CHG-048 assessment → Architecture Review → RFC consultation → Approved for Decision → Draft ADR → approved implementation change.

## 4. Affected Artifacts and Impact Analysis

| Area | Assessment |
|---|---|
| I1 / CHG-044 | Authoritative lifecycle, scope, validation, reconciliation, and audit ownership may change. |
| I3 / CHG-047 | Requested-scope provenance may be stored, but validity semantics remain blocked. |
| Specs | SPEC-002 and SPEC-004 may need approved clarification after an ADR. |
| Migration/compatibility | Existing evidence needs an explicit fail-closed or grandfathered disposition. |
| Security/operations/recovery | Time, revocation races, service availability, audit linkage, replay, rollback, and recovery need explicit design and tests. |
| Documentation/training/deferred consequences | Required after a selected model; none is silently no-impact. |

## 5. Risks, Conflicts, and Initial Validation

Risks: evidence reuse, scope overreach, stale validity, revocation races, unavailable authority, broken historical linkage, and circular I1/I3 dependencies. Conflict: I3 must retain requested execution context without owning authorization meaning. Initial validation must cover missing, malformed, unavailable, expired, revoked, superseded, substituted, and scope-mismatched evidence; all lifecycle-dependent AC-005/006 cases remain Blocked.

## 6. Boundaries and Required Evidence

No I1 schema, policy, I3 authorization, migration, ADR, or implementation is authorized. I3 may continue only architecture-neutral immutability, transactions, approved framework versions, existing permitted-evidence references, replay protection, recovery, and reconciliation. Decision evidence requires RFC-002, a Full Architecture Review, alternatives, affected-owner consultation, migration/security/operational/recovery analysis, and ADR approval.

## 7. Review Activity

Review Result: Revision Required. The initial Draft lacked complete initiation, qualification, and impact analysis content. This v0.2.0 revision addresses those findings; re-review is pending.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft impact analysis. | Chief Architect / Engineering Owner | CHG-048 |
| 0.2.0 | 2026-08-09 | Revision Required addressed: completed metadata, assessment-only proposal, Full Architecture Review qualification, impacts, risks, validation, and required decision path. | Chief Architect / Engineering Owner | CHG-048 |
| 0.2.1 | 2026-08-09 | Corrected the artifact Status to the canonical Draft maturity state; §7 retains the Revision Required review result. | Chief Architect / Engineering Owner | CHG-048 |
| 0.2.2 | 2026-08-09 | Added AR-I1-001 as the required Full Architecture Review consumer. | Chief Architect / Engineering Owner | CHG-048 |
| 0.2.3 | 2026-08-22 | Rebaselined the elapsed Draft consultation window without claiming that consultation opened; a new reviewed window and independent reviewer remain required. | Chief Architect / Engineering Owner | CHG-048 |

## 9. Consultation Rebaseline

The proposed 2026-08-11 10:00 IST through 2026-08-15 18:00 IST consultation window elapsed without the separate top-level PR #10 opening notice required by AR-I1-001 §7.2. No status transition to `In Review` was recorded. Consultation therefore did not open, no response or non-response disposition accrued under that proposed window, and no review or decision-readiness outcome may be inferred from the passage of time.

CHG-048 remains `Draft`. Before consultation may open, AR-I1-001 and RFC-002 must record a newly reviewed future window, a named independent reviewer, verified access to the immutable evidence inputs, and the required response, dissent, non-response, extension, suspension, and disposition controls. This rebaseline does not authorize an ADR, I1/I3 implementation, or AC-005/006 unblocking.
