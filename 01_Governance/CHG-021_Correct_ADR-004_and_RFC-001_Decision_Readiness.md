# CHG-021 — Correct ADR-004 and RFC-001 Decision Readiness

```text
Document ID: CHG-021
Title: Correct ADR-004 and RFC-001 Decision Readiness
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-003, PRD-001, AR-PKG-001, AR-SYS-001, RFC-001, ADR-004
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-021
Change Lifecycle State: Closed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Architecture proposal and decision-record correction
Change Classification: Major
Urgency: Normal
```

## 2. Current Condition

AR-PKG-001 identifies five linked architecture-package findings: ADR-004 and RFC-001 omit direct reliance on ADR-003 (CR-3); ADR-004 lacks required GOV-004 §24 content (M-C); RFC-001 lacks required GOV-004 §19 content and consultation evidence (M-D); role-separation/compensating-review evidence is absent (M-F); and RFC-001 leaves domain-responsibility overlap unresolved while ADR-004 presents the split as settled (M-G).

ADR-004 and RFC-001 are Draft. Their status does not authorize implementation, but it does not exempt them from truthful dependencies, complete decision-readiness structure, or genuine consultation.

## 3. Proposed Change

Subject to Major-change review and approval:

1. Add ADR-003 to the direct dependencies of ADR-004 and RFC-001.
2. Complete or explicitly link the required GOV-004 §24 ADR and §19 RFC content, including decision question, rationale, affected artifacts/owners, impact analysis, migration, security/operational considerations, decision authority/basis, implementation and validation implications, review comments, dissent, and resulting-ADR relationships where applicable.
3. Conduct and record genuine RFC consultation, including an explicit resolution or deferred disposition for the domain-responsibility overlap question.
4. Record role separation, or where independence is not practical, the GOV-004 §9.12 rationale and compensating review.
5. Preserve Draft status unless the separate applicable approval paths are completed. Do not use this change to approve ADR-004, RFC-001, architecture, specifications, or implementation.

## 4. Scope and Boundaries

Target artifacts are ADR-004 and RFC-001, plus this Change Record. AR-SYS-001 and AR-PKG-001 may be referenced as evidence; changes to their lifecycle or review content remain governed by CHG-020 or a separately approved record.

This proposal does not predetermine the architectural answer to the domain-overlap question. It requires an accountable, recorded disposition before ADR-004 can present the eleven-domain allocation as settled. It does not redefine PRD-001 requirements or ADR-003 authority boundaries.

Implementation must not begin until CHG-020 resolves AR-SYS-001 decision readiness and the required architecture/RFC/ADR approvals are completed.

## 5. Classification and Impact Assessment

Classification: Major. The change affects a foundational architecture proposal's decision readiness, dependencies, review process, and downstream Draft specification relationship. It does not change CONST-001, canonical governance ownership, or approved product requirements. If consultation or impact analysis identifies a change to foundational direction, the record shall be reclassified and routed before implementation.

Affected considerations include architecture boundaries, responsibility allocation, quality attributes, security, operations, migration, extensibility, downstream specifications, review authority, dissent, and validation. Each material category must be addressed or recorded as no impact before approval.

## 6. Validation Plan

- Confirm ADR-004 and RFC-001 list ADR-003 as a direct dependency and retain only truthful dependencies.
- Confirm each GOV-004 §19/§24 required category is present or explicitly linked to a stable, applicable source.
- Confirm RFC consultation identifies reviewers, affected owners, comments, responses, unresolved dissent, and final disposition.
- Confirm the domain-overlap question has a documented resolution, rejection, or explicit deferral consistent with ADR-004's scope.
- Confirm Decision Authority and authority basis are distinct from generic ownership where required.
- Confirm CHG-020's AR-SYS-001 outcome is honored; no false review-confirmed or approval assertion appears.
- Confirm no PRD requirement or approved authority boundary is redefined, and `git diff --check` passes.

## 7. Current Disposition

Superseded by §13 following Review, Approval, Implementation, Validation, and Closure. Preserved as the original proposal disposition. CHG-021 is Closed, but neither ADR-004 nor RFC-001 is Approved and no architecture or implementation authorization is created by this correction.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal to correct ADR-004/RFC-001 dependencies and decision-readiness defects recorded as CR-3 and M-C, M-D, M-F, and M-G in AR-PKG-001 §9. | Chief Architect / Product Owner | CHG-021 |
| 0.1.0 | 2026-08-08 | Added PRD-001 as a direct dependency because the proposed ADR/RFC impact and boundary analysis consumes the approved product requirements. | Chief Architect / Product Owner | CHG-021 |
| 0.1.0 | 2026-08-08 | Reviewed, approved, implemented, validated, and closed: corrected direct ADR-003 dependencies; completed Draft decision-readiness content and RFC consultation evidence; recorded role-separation limitation and compensating review; resolved the RFC's domain-responsibility interpretation; and retained truthful non-approval statuses. | Chief Architect / Product Owner | CHG-021 |

## 9. Review Activity

```text
Review State: Reviewed — Pending Major Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Major Approval
```

The Review verified AR-PKG-001 findings CR-3, M-C, M-D, M-F, and M-G against the live headers and content of ADR-004, RFC-001, AR-SYS-001, ADR-003, and GOV-004 §§19, 21, 24, 25, and 29. The findings were substantiated: ADR-003 was omitted from both target dependency declarations; ADR-004 lacked several required Draft decision-readiness categories; RFC-001 lacked required consultation/readiness content; and the RFC's domain-overlap question had no recorded disposition.

The Review approved the bounded corrective approach in §3 because it makes the records truthful and reviewable without deciding the architecture, changing PRD-001, or masking AR-SYS-001's `Revision Required` state. The designated roles still overlap and no independent reviewer is currently designated; that limitation must be disclosed with a compensating validation review, not treated as approval evidence.

## 10. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: GOV-001 authority model; GOV-002 Major-change process; GOV-004 §§19–29; ADR-003
Approved Scope: CHG-021 §3 and §4 only
Approval Result: Approved with Conditions
```

Conditions: implementation shall preserve ADR-004 as Draft and RFC-001 as no more than `Revision Required`; it shall not claim independent review, architecture approval, or implementation authorization; it shall record AR-SYS-001's actual `Revision Required` state; and it shall confine the domain-responsibility disposition to interpreting the existing AR-SYS-001 responsibility table rather than changing architectural or product ownership.

## 11. Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

Implementation added ADR-003 to the direct `Depends On` fields of ADR-004 and RFC-001. ADR-004 received only Draft decision-readiness structure required by GOV-004 §24: its architecture question, rationale, impact analysis, affected artifacts and owners, decision administration, implementation/validation implications, and readiness limitations. RFC-001 received its missing GOV-004 §19/§21 content, including the recorded consultation, impact analysis, affected owners, migration/security/operational considerations, comments/dissent, resulting-ADR relationship, and disposition.

The RFC recorded that multi-domain requirement coverage is traceability and collaboration, not duplicate canonical ownership; it did not alter AR-SYS-001's responsibilities, ADR-003's authority boundary, or PRD-001. RFC-001 transitioned `Draft → In Review → Revision Required` because AR-SYS-001 is still `Revision Required` and no independent reviewer is designated. ADR-004 remained Draft. No implementation artifact, product requirement, specification, governance rule, or Architecture Review was modified.

## 12. Validation Activity

```text
Validation State: Validated
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
Role-Separation Disclosure: Implementer and Validator overlap because no separate reviewer is currently designated. The compensating control was a separate, post-implementation criteria review against CHG-021 §6 and GOV-004 §§19, 21, 24, 25, and 29.
```

- Passed: both target headers now declare ADR-003, and the remaining declared dependencies are directly consumed by their contents.
- Passed: ADR-004 now contains every GOV-004 §24 category applicable to a Draft ADR, explicitly recording unset decision date, no supersession, and remaining readiness limitations rather than inventing approval evidence.
- Passed: RFC-001 now contains every GOV-004 §19 category, and its consultation record identifies the owner, reviewer-designation limitation, affected owners, comments, responses, unresolved concerns, and final `Revision Required` disposition.
- Passed: the domain-overlap question is resolved as an interpretation of existing domain responsibilities; no PRD-001 requirement, ADR-003 boundary, architecture decision, or implementation authorization changed.
- Passed: CHG-020's outcome is honored. AR-SYS-001 remains `Revision Required`; ADR-004's corresponding checklist remains unchecked; neither target claims approval.
- Passed: `git diff --check` completed without errors.

## 13. Closure Activity

```text
Closure State: Closed
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
```

CHG-021 closes the identified record-completeness, traceability, consultation, and readiness-reporting defects only. It does not close the separate AR-SYS-001 corrections, designate an independent reviewer, approve the RFC or ADR, approve architecture, or authorize implementation. Those remain separate prerequisite work.
