# CHG-008 — Register Delivery Artifact Profiles and Prefixes

```text
Document ID: CHG-008
Title: Register Delivery Artifact Profiles and Prefixes
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-002, GOV-003, GOV-004, ARCH-MANIFEST-001
Referenced By: FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-008
Change Lifecycle State: Closed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Standards change; document-standard profile registration
Change Classification: Minor
Urgency: Normal
```

## 2. Current Condition

GOV-003 applies to frameworks, standards, playbooks, examples, training, and implementation artifacts, but its initial profile and prefix guidance does not register explicit repository conventions for these delivery families. The complete-design Draft introduces provisional IDs (FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001) that require governance before approval.

### 2.1 Scope Boundary — AR- and RFC- Are Not Covered Here

CHG-011 identified that `AR-` (Architecture Review) and `RFC-` (Request for Comments) prefixes are also in use (AR-GOV-004-001, AR-PKG-001, AR-SYS-001, RFC-001) without appearing in this registration table. They are intentionally excluded from CHG-008's scope because they are already governed elsewhere:

- `RFC` is already defined by GOV-004 §18–§22 (RFC Qualification, Required Content, and Status Profile).
- `ADR` is already defined by GOV-004 §23–§26 (ADR Qualification, Required Content, Creation and Approval, and Status Profile), and by ADR-002/ADR-003's own precedent, which predates GOV-004's formalization.
- `AR` (Architecture Review) has existing precedent through AR-GOV-004-001, which is Approved-family content using the `AR-` prefix without requiring a separate registration change record, in the same way ADR-002/ADR-003 established the `ADR` prefix by precedent before GOV-004 codified it.

CHG-008 therefore registers only the six prefixes in §3 that have no existing governance coverage. This is a scope clarification, not a scope expansion; GOV-004 is added to `Depends On` above because §2.1 relies on it.

## 3. Proposed Change

Amend GOV-003 prospectively to register:

| Prefix | Artifact family | Default classification |
|---|---|---|
| `FRM` | Governed framework | Normative unless explicitly illustrative |
| `STD` | Standard | Normative |
| `PB` | Playbook | Normative unless explicitly illustrative |
| `EX` | Worked example | Informational |
| `TRN` | Training artifact | Informational |
| `IMP` | Implementation/test/release plan | Informational unless an approved profile states otherwise |

Each family shall reuse GOV-003's common metadata, identity, version, status, traceability, validation, and revision-history rules. This change creates representation profiles only; it does not create a new GOV-001 classification or authority level.

## 4. Scope

If approved, modify only GOV-003, this change record, and metadata of affected Draft artifacts where review requires correction. Do not retrofit unrelated approved artifacts. Do not register `AR`, `RFC`, or `ADR` — see §2.1.

## 5. Classification

Initial Change Type: Standards Change. Initial Classification: Minor. Architecture Significance: No Architecture Review Required, because the proposal standardizes representation without changing system architecture or canonical ownership.

## 6. Validation Plan

- Confirm each prefix is unique, necessary, and mapped to one family.
- Confirm profiles reuse common GOV-003 semantics.
- Confirm classifications and authority remain owned by GOV-001.
- Confirm no approved artifact is retroactively rewritten.
- Confirm the Architecture Manifest paths already cover these families.
- Confirm `AR`, `RFC`, and `ADR` remain out of scope and are not registered by this change.

## 7. Current Disposition

**Closed.** GOV-003 was Reviewed (§9), Approved (§10), Implemented, Validated, and Closed (§11–§13) — see those sections for evidence.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal created from complete-design internal review finding. | Chief Architect / Product Owner | CHG-008 |
| 0.1.0 | 2026-08-08 | Added the GOV-002 §9 Change Record block (Requestor, Change Owner, Artifact Owner, Date Identified, Urgency) and a new §2.1 clarifying that `AR`, `RFC`, and `ADR` are out of scope because GOV-004 and existing precedent already govern them. Added GOV-004 to `Depends On`. | Chief Architect / Product Owner | CHG-008 |

## 9. Review Activity

```text
Review State: Reviewed — Pending Minor Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Minor Approval
```

The Review confirmed: the six proposed prefixes (`FRM`, `STD`, `PB`, `EX`, `TRN`, `IMP`) are each unique and mapped to exactly one artifact family; the proposal does not create a new GOV-001 classification, authority level, or canonical ownership; §2.1's exclusion of `AR`/`RFC`/`ADR` is correct because GOV-004 §18–§26 and existing ADR-002/ADR-003/AR-GOV-004-001 precedent already govern those prefixes; and the Architecture Manifest's repository map already covers the six target families' paths (`06_Frameworks/`, `07_Standards/`, `08_Playbooks/`, `09_Examples/`, `10_Training/`, `12_Implementation/`). Minor classification is confirmed — this is a representation-profile registration, not an architecture or authority change.

This Review does not approve, implement, validate, or close CHG-008.

## 10. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: GOV-001 artifact ownership of GOV-003; GOV-002 Minor-change controls
Approved Scope: The six-prefix table in §3, added to GOV-003 only
Approval Result: Approved with Conditions
```

### 10.1 Approval Conditions

- Implementation shall add exactly the §3 table to GOV-003 and update its `Last Updated` and revision history.
- No GOV-003 rule, authority level, classification, or existing content may change beyond adding the table and recording the correction.
- `AR`, `RFC`, and `ADR` shall not be registered or mentioned as newly governed by this implementation.
- No Draft artifact (FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001) is approved or altered by this change.

This approval does not implement, validate, or close CHG-008.

## 11. Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

### 11.1 Changes Implemented

1. Added a new "Delivery Artifact-Family Profiles" subsection to GOV-003 containing exactly the six-row prefix table from §3.
2. Updated GOV-003's `Last Updated` field and added a CHG-008 revision-history entry.

### 11.2 Implementation Boundaries

- No other GOV-003 section changed.
- No Draft artifact using these prefixes was modified.
- `AR`, `RFC`, and `ADR` were not added to the table.

## 12. Validation Activity

```text
Validation State: Validated
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
```

- Passed: GOV-003 now contains exactly the six-row table from §3, each prefix unique and mapped to one family.
- Passed: GOV-003's diff is confined to the new subsection, `Last Updated`, and one revision-history row — verified via `git diff`.
- Passed: GOV-003 retains its Version, Status, authority, and ownership unchanged.
- Passed: no Draft artifact was modified.
- Passed: `AR`, `RFC`, and `ADR` are absent from the new table.
- Passed: `git diff --check` passes.

## 13. Closure Activity

```text
Closure State: Closed
Closer: Chief Architect / Product Owner
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
```

CHG-008 is Closed. FRM-001, STD-001, PB-001, EX-001, TRN-001, and IMP-001 now use a registered prefix family; their own Draft status and content are unchanged and remain subject to their own future Review and Approval.
