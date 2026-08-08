# CHG-011 — Disposition Untracked Repository Artifacts

```text
Document ID: CHG-011
Title: Disposition Untracked Repository Artifacts
Version: 0.1.0
Status: Draft (Revision Required)
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-002, GOV-003, ARCH-MANIFEST-001, CHG-008
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Proposed
```

## 1. Change Record

```text
Change ID: CHG-011
Change Lifecycle State: Proposed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Repository-structure and repository-state correction
Change Classification: Minor
Urgency: Normal
```

## 2. Current Condition

At identification, the working tree contained 18 non-ignored, untracked content artifacts. After creation of CHG-009 through CHG-012, the live working tree contains 22 untracked Markdown artifacts: those 18 content artifacts plus four untracked change-record Drafts. This prevents the RRC-001 repository-state criteria from passing and leaves Draft repository content outside Git tracking.

The current inventory is ADR-004, CHG-008, RFC-001, AR-PKG-001, AR-SYS-001, SPEC-002 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, and IMP-001. This evidence corrects the independent validation report's count of 12 while preserving its underlying finding.

## 3. Proposed Change

Subject to review and approval:

1. Determine the governed disposition of each listed artifact: retain as a tracked Draft artifact or relocate it outside the canonical repository tree.
2. Add to Git only artifacts explicitly approved for retention, preserving their existing Draft or other non-governing statuses.
3. Record any required identifier-profile or prefix-registration dependencies without treating Git tracking as content approval.
4. Update RRC-001 only if separately authorized by CHG-012; this record does not revise readiness criteria.

## 4. Scope and Boundaries

The proposed content-artifact scope is limited to the 18 inventoried artifacts, this change record, and Git index/commit state after approval. CHG-009 through CHG-012 are excluded from the inventory and require their own disposition. The existing tracked working-tree modifications are explicitly excluded.

This proposal does not approve any Draft content, register unapproved identifier families, alter architecture or specification content, execute RRC-001, close Phase C4, or create a release tag.

## 5. Classification and Impact Assessment

Change Type: Repository-structure and repository-state correction.

Initial Change Classification: Minor. The proposed action changes version-control representation, not governed content or authority. Review shall confirm that retention does not require an unrecorded profile, prefix, or architecture decision; if it does, this proposal shall be returned for scope expansion or sequencing.

## 6. Validation Plan

- Reconcile the approved disposition against the 18-item inventory.
- Confirm each retained artifact is tracked and no unintended file is added.
- Confirm retained artifacts preserve their actual non-governing status.
- Confirm unapproved identifier-profile work remains governed by its applicable change record.
- Confirm excluded tracked modifications remain untouched.
- Confirm `git status`, `git diff --check`, and RRC-001 repository-state evidence reflect the actual result.

## 7. Current Disposition

**Draft — Revision Required Before Review Can Pass.** No artifact has been staged, committed, relocated, approved, validated, or released by this record.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal from independent repository validation finding and verified inventory. | Chief Architect / Product Owner | CHG-011 |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Review corrected the live untracked-count context from 18 to 22, distinguishing the 18 pre-existing content artifacts from CHG-009 through CHG-012. It also found that the proposal does not select a governed disposition for each content artifact or establish the prerequisite treatment for unregistered `AR-` and `RFC-` identifier families. Before approval, the record shall specify each artifact's retain-or-relocate disposition and the required sequencing with identifier-profile governance.

This Review does not approve, implement, validate, stage, commit, or close CHG-011.
