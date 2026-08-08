# CHG-012 — Reconcile SPEC-001 and RRC-001 Validation Gate

```text
Document ID: CHG-012
Title: Reconcile SPEC-001 and RRC-001 Validation Gate
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-002, GOV-003, GOV-004, RRC-001, SPEC-001, CHG-007, CHG-008
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-012
Change Lifecycle State: Closed
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

### 3.1 Selected Disposition: Amend RRC-001, Do Not Revert SPEC-001

Two dispositions were considered:

- **Revert SPEC-001 to Reserved.** Rejected. SPEC-001 (377 lines) and SPEC-002 through SPEC-008 represent real, substantive design work already produced honestly as Draft, "Pending Internal Review and Architecture Approval." Reverting would destroy that work product to satisfy a checklist item that was written before this scope of parallel specification drafting was decided. Unlike CONST-001 under CHG-009, no artifact was implemented as falsely Approved here — SPEC-001 has always truthfully declared itself Draft and unapproved. There is no dishonesty to reverse, only a stale checklist criterion to correct.
- **Amend RRC-001's criterion (selected).** RRC-001 is Informational and outside the normative authority hierarchy; it is a checklist the project owns and may revise like any other Draft governance artifact, through the ordinary Minor/Major change process — unlike CONST-001 §8, RRC-001 contains no rule that changing it requires anything beyond GOV-002. Amending it to reflect that specification drafting may proceed in Draft, in parallel with Phase C4 governance closure, preserves the original criterion's intent (no Draft content masquerading as Approved) without discarding real work.

### 3.2 Exact RRC-001 Edits

1. Replace the "Content integrity" bullet `SPEC-001 remains Reserved until Phase C4 closes and specification work begins.` with a new "Design-package artifacts" subsection (§3.3) requiring every listed Draft artifact to remain Draft/Reserved and not be represented as Approved or governing, plus closure criteria for CHG-008, CHG-011, and CHG-012.
2. Add to `Depends On`: ADR-004, ADR-005, RFC-001, AR-PKG-001, AR-SYS-001, SPEC-002 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001, CHG-008, CHG-009, CHG-010, CHG-011, CHG-012 — the artifacts this change makes RRC-001 directly respons­ible for checking.
3. Add one revision-history entry recording this amendment; do not alter any existing revision-history row.

### 3.3 New RRC-001 Criterion Text (Replacing the SPEC-001-Reserved Bullet)

```text
### Design-package artifacts

- [ ] ADR-004, RFC-001, AR-PKG-001, AR-SYS-001, SPEC-001 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, and IMP-001 each exist only as Draft (or Reserved) and none is represented as Approved or governing.
- [ ] CHG-008 is present with a Passed and Closed record.
- [ ] CHG-009 and CHG-010 are present with Passed and Closed records.
- [ ] CHG-011 is present with a Passed and Closed record.
- [ ] CHG-012 is present with a Passed and Closed record.
```

This does not require any design-package artifact to be Approved before Phase C4 may close — it requires only that none is falsely represented as Approved while Draft.

## 4. Scope and Boundaries

Exactly one file may change under this approval: **RRC-001**, exactly as specified in §3.2. This change record is also updated to record its own lifecycle.

SPEC-001, SPEC-002 through SPEC-008, ADR-004, RFC-001, AR-PKG-001, AR-SYS-001, FRM-001, STD-001, PB-001, EX-001, TRN-001, and IMP-001 are named in RRC-001's new criterion (§3.3) as artifacts RRC-001 must check, but none of them is modified by this change.

This proposal does not approve SPEC-001 or any other Draft artifact, execute RRC-001, close Phase C4, create a tag, or retroactively authorize prior work. It does not change CONST-001, GOV-001 canonical ownership, or architecture decisions.

## 5. Classification and Impact Assessment

Change Type: Validation correction; specification-state correction; baseline and release change.

Initial Change Classification: Major. The proposal changes mandatory validation controls and affects multiple downstream artifacts. Review shall assess the selected SPEC-001 disposition, affected owners, architecture implications, migration or recovery needs, and whether any scope expansion requires renewed classification.

**Classification reassessment (post-disposition):** Major remains correct even though only one file (RRC-001) is edited. The change materially alters a mandatory Phase C4 exit criterion — replacing a hard Reserved-state requirement with a Draft-permitted requirement — which is exactly the kind of "material change to validation or approval controls" GOV-002 §6.3 identifies as Major, regardless of file count.

## 6. Validation Plan

- Confirm the selected SPEC-001 disposition is explicit, truthful, and consistent with upstream authority.
- Confirm every RRC-001 dependency and mandatory criterion reflects a direct, necessary relationship.
- Confirm no Draft artifact is represented as Approved or validated without evidence.
- Confirm no circular dependencies are introduced.
- Confirm RRC-001 remains unexecuted until its approved criteria are actually run.
- Confirm no release tag or Phase C4 closure is created by this change.
- Confirm `git diff --check` passes and the final scope matches the approved scope.

## 7. Current Disposition

Superseded by later sections following revision, Review, and Approval. Preserved here for historical accuracy rather than edited in place.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal from independent repository validation findings. | Chief Architect / Product Owner | CHG-012 |
| 0.1.0 | 2026-08-08 | Revision per Review: selected and justified the RRC-001-amendment disposition over reverting SPEC-001 (§3.1), specified the exact RRC-001 edits and new criterion text (§3.2–§3.3), narrowed §4 to a single-file scope, and reassessed classification (§5, remains Major). | Chief Architect / Product Owner | CHG-012 |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Review confirmed the direct conflict between SPEC-001's live Draft state and RRC-001's Reserved-state criterion. It found that the proposal does not select the corrective disposition for SPEC-001, does not define the exact RRC-001 dependency and mandatory-criterion changes, and uses an open-ended affected-artifact set. Before approval, the record shall define the selected gate-resolution path, exact authorized file scope, direct dependency criteria, and required affected-owner review.

This Review does not approve, implement, validate, execute RRC-001, close Phase C4, create a tag, or close CHG-012.

## 10. Re-Review Activity

```text
Review State: Reviewed — Pending Major Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Major Approval
```

### 10.1 Findings

- §3.1's rejection of reverting SPEC-001 is sound: SPEC-001 was never falsely represented as Approved, so there is no dishonesty to reverse — unlike the CONST-001/CHG-009 precedent, which involved an actual unauthorized implementation.
- §3.1's basis for amending RRC-001 is sound: RRC-001 is Informational, outside the normative authority hierarchy, and contains no analog to CONST-001 §8's ADR requirement — GOV-002's ordinary Major-change process is sufficient authority to amend it.
- §3.2–§3.3's exact edit and new criterion text are unambiguous, reference a closed dependency set, and require every named Draft artifact to remain honestly Draft rather than requiring any of them to be Approved before Phase C4 can close — this preserves the original criterion's intent.
- §4's scope is now a single file (RRC-001), resolving the Review's "open-ended affected-artifact set" finding.
- §5's Major classification is correctly retained on the basis of control-materiality, not file count.
- No unresolved Review finding remains.

This Re-Review does not approve, implement, validate, execute RRC-001, close Phase C4, create a tag, or close CHG-012.

## 11. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: RRC-001 artifact ownership; GOV-002 Major-change controls
Approved Scope: The exact RRC-001 edit specified in §3.2–§3.3, and this record's own lifecycle
Approval Result: Approved with Conditions
```

### 11.1 Approval Conditions

- Implementation shall replace only the named "Content integrity" bullet and add only the §3.3 subsection and the §3.2 `Depends On` additions to RRC-001.
- No other RRC-001 section, criterion, or the §4 Execution Record's `Not Executed` state may change.
- SPEC-001 and every other named Draft artifact remain unmodified and unapproved.
- No release tag is approved or created; Phase C4 remains open.
- Validation shall confirm the RRC-001 diff matches §3.2–§3.3 exactly before CHG-012 may close.

This approval does not implement, validate, execute RRC-001, close Phase C4, create a tag, or close CHG-012.

## 12. Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

### 12.1 Changes Implemented

1. Replaced RRC-001's "SPEC-001 remains Reserved until Phase C4 closes and specification work begins." bullet with the new "Design-package artifacts" subsection specified in §3.3.
2. Added ADR-004, ADR-005, RFC-001, AR-PKG-001, AR-SYS-001, SPEC-002 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001, CHG-008, CHG-009, CHG-010, CHG-011, and CHG-012 to RRC-001's `Depends On`.
3. Added one revision-history entry to RRC-001 recording this change under CHG-012.

### 12.2 Implementation Boundaries

- SPEC-001 and every other named Draft artifact were not modified.
- RRC-001's §4 Execution Record remains `Not Executed`; no criterion was checked.
- No release tag, Phase C4 closure, or `master` merge occurred.

## 13. Validation Activity

```text
Validation State: Validated
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
```

- Passed: RRC-001's diff is confined to exactly the `Depends On` addition, the criterion replacement, and one revision-history row — verified via `git diff`.
- Passed: RRC-001 remains v0.1.0, Draft (Pending Validation), and Not Executed.
- Passed: no Draft artifact named in the new criterion was modified or represented as Approved.
- Passed: no release tag exists and Phase C4 remains open.
- Passed: no circular dependency was introduced — RRC-001 depends on the design-package artifacts as checklist targets; none of them depends on RRC-001.
- Passed: `git diff --check` passes.

## 14. Closure Activity

```text
Closure State: Closed
Closer: Chief Architect / Product Owner
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
```

CHG-012 is Closed. RRC-001's SPEC-001/RRC-001 validation-gate conflict is reconciled: specification and design-package drafting may proceed in Draft during Phase C4, subject to the new criterion that none of it is represented as Approved or governing. This closure does not execute RRC-001, close Phase C4, or create a release tag.
