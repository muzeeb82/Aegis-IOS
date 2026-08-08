# CHG-021 — Correct ADR-004 and RFC-001 Decision Readiness

```text
Document ID: CHG-021
Title: Correct ADR-004 and RFC-001 Decision Readiness
Version: 0.1.0
Status: Draft (Pending Review)
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-003, PRD-001, AR-PKG-001, AR-SYS-001, RFC-001, ADR-004
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Proposed
```

## 1. Change Record

```text
Change ID: CHG-021
Change Lifecycle State: Proposed
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

Proposed. No architecture decision, consultation completion, status transition, or target-artifact modification is claimed.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal to correct ADR-004/RFC-001 dependencies and decision-readiness defects recorded as CR-3 and M-C, M-D, M-F, and M-G in AR-PKG-001 §9. | Chief Architect / Product Owner | CHG-021 |
| 0.1.0 | 2026-08-08 | Added PRD-001 as a direct dependency because the proposed ADR/RFC impact and boundary analysis consumes the approved product requirements. | Chief Architect / Product Owner | CHG-021 |
