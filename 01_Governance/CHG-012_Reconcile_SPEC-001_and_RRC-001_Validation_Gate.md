# CHG-012 — Reconcile SPEC-001 and RRC-001 Validation Gate

```text
Document ID: CHG-012
Title: Reconcile SPEC-001 and RRC-001 Validation Gate
Version: 0.1.0
Status: Draft (Revision Required)
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-002, GOV-003, GOV-004, RRC-001, SPEC-001, CHG-007, CHG-008
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Proposed
```

## 1. Change Record

```text
Change ID: CHG-012
Change Lifecycle State: Proposed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Validation correction; specification-state correction; baseline and release change
Change Classification: Major
Urgency: Normal
```

## 2. Current Condition

RRC-001 requires SPEC-001 to remain Reserved until Phase C4 closes and specification work begins. SPEC-001 is currently a substantive Draft specification. RRC-001 also omits the later Draft artifacts now present in the repository, so its dependency and mandatory-criteria scope does not represent the actual repository state it would validate.

## 3. Proposed Change

Subject to Major-change review and approval:

1. Resolve the conflict between SPEC-001's actual Draft state and RRC-001's Reserved-state criterion through one explicit, governed disposition.
2. Amend RRC-001's dependencies and mandatory criteria to account for the relevant actual repository artifacts and their required lifecycle states.
3. Preserve the distinction between Draft content, approved content, executed validation, Phase C4 closure, and release tagging.
4. Record the selected SPEC-001 disposition and the full affected-artifact set before implementation; no criterion shall be represented as passed merely because it is revised.

## 4. Scope and Boundaries

Initial affected artifacts: RRC-001, SPEC-001, this change record, and directly relevant Draft artifacts identified through impact analysis, including ADR-004, RFC-001, AR-PKG-001, AR-SYS-001, SPEC-002 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001, CHG-008, and any required registration record.

This proposal does not approve SPEC-001 or any other Draft artifact, execute RRC-001, close Phase C4, create a tag, or retroactively authorize prior work. It does not change CONST-001, GOV-001 canonical ownership, or architecture decisions.

## 5. Classification and Impact Assessment

Change Type: Validation correction; specification-state correction; baseline and release change.

Initial Change Classification: Major. The proposal changes mandatory validation controls and affects multiple downstream artifacts. Review shall assess the selected SPEC-001 disposition, affected owners, architecture implications, migration or recovery needs, and whether any scope expansion requires renewed classification.

## 6. Validation Plan

- Confirm the selected SPEC-001 disposition is explicit, truthful, and consistent with upstream authority.
- Confirm every RRC-001 dependency and mandatory criterion reflects a direct, necessary relationship.
- Confirm no Draft artifact is represented as Approved or validated without evidence.
- Confirm no circular dependencies are introduced.
- Confirm RRC-001 remains unexecuted until its approved criteria are actually run.
- Confirm no release tag or Phase C4 closure is created by this change.
- Confirm `git diff --check` passes and the final scope matches the approved scope.

## 7. Current Disposition

**Draft — Revision Required Before Review Can Pass.** No RRC-001 or SPEC-001 change is authorized, implemented, validated, or approved by this record.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal from independent repository validation findings. | Chief Architect / Product Owner | CHG-012 |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Review confirmed the direct conflict between SPEC-001's live Draft state and RRC-001's Reserved-state criterion. It found that the proposal does not select the corrective disposition for SPEC-001, does not define the exact RRC-001 dependency and mandatory-criterion changes, and uses an open-ended affected-artifact set. Before approval, the record shall define the selected gate-resolution path, exact authorized file scope, direct dependency criteria, and required affected-owner review.

This Review does not approve, implement, validate, execute RRC-001, close Phase C4, create a tag, or close CHG-012.
