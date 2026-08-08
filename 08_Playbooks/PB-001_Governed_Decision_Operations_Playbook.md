# PB-001 — Governed Decision Operations Playbook

```text
Document ID: PB-001
Title: Governed Decision Operations Playbook
Version: 1.0.0
Status: Approved
Owner: Product Owner / Operations Owner
Classification: Normative
Authority Level: Level 8
Depends On: GOV-001, FRM-001, SPEC-001, SPEC-007
Referenced By: EX-001, TRN-001 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-035
```

## Purpose

Provides the operational procedure for applying an approved investment-decision framework while preserving evidence, authority, review, execution, and outcome records. It does not define investment strategy, product requirements, framework rules, or approval authority.

## Scope

Applies to the execution and recovery procedure for governed decision operations described below. It does not authorize an action, supersede an approved framework or specification, or create obligations beyond the procedure's stated steps and controls.

## 1. Procedure

1. Confirm actor identity, authority, portfolio scope, and applicable framework.
2. Create a Draft decision and correlation ID.
3. Capture portfolio snapshot and constraints.
4. Register and associate evidence with provenance.
5. Record alternatives, assumptions, risks, and AI assistance.
6. Run framework steps and deterministic validations.
7. Submit for review; resolve or record findings.
8. Obtain approval or rejection from competent authority.
9. If approved, separately record the external action and acknowledgement.
10. Reconcile ambiguous or partial external outcomes.
11. Schedule outcome observations and reviews.
12. Close only when required evidence and obligations are complete.

## 2. Stop Conditions

Stop and escalate when authority is missing, evidence provenance fails, constraints conflict, framework is unapproved, authorization fails, provider result is ambiguous, validation fails, or the requested action exceeds recorded scope.

## 3. Recovery

Do not repeat an external action without checking its idempotency and reconciliation record. Preserve failed attempts. Use compensating action only when explicitly supported and authorized. Record incident and recovery evidence.

## 4. Completion Evidence

Decision revision, review/approval, framework execution, evidence graph, authorization decision, external action/reconciliation, outcome schedule, audit correlation, and operator disposition.

## 5. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial governed decision-operations playbook Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Corrected `Authority Level` from Level 6 to Level 8 to match GOV-001 §3's Playbooks assignment. No substantive rule changed. | Chief Architect / Product Owner | CHG-014 |
| 0.1.0 | 2026-08-08 | Added GOV-001 to `Depends On`: `Authority Level: Level 8` directly consumes GOV-001 §3's authority model. | Chief Architect / Product Owner | CHG-023 |
| 0.1.0 | 2026-08-08 | Added descriptive Purpose and Scope sections without changing any operating procedure or control. | Chief Architect / Product Owner | CHG-022 |
| 1.0.0 | 2026-08-08 | Retrospectively recorded under CHG-043: this artifact's approval transition (Draft → Approved, Change ID CHG-035) was made under CHG-035 but never received a revision-history row or version increment. Version corrected to 1.0.0 to match the Approved-baseline convention used elsewhere in this project; no operating procedure or control changed. | Chief Architect / Product Owner | CHG-043 |
