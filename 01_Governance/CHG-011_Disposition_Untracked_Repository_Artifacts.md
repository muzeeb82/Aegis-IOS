# CHG-011 — Disposition Untracked Repository Artifacts

```text
Document ID: CHG-011
Title: Disposition Untracked Repository Artifacts
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-002, GOV-003, ARCH-MANIFEST-001, CHG-008
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-011
Change Lifecycle State: Closed
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

### 2.1 Prefix-Registration Sequencing Now Resolved

CHG-008 is Closed. GOV-003 §6.3.1 now registers `FRM`, `STD`, `PB`, `EX`, `TRN`, and `IMP`. `RFC` and `ADR` are governed by GOV-004 §18–§26, and `AR` is established by AR-GOV-004-001 precedent (CHG-008 §2.1). No prefix used by any of the 18 inventoried artifacts remains unregistered or ungoverned. The sequencing concern that returned this record for revision is resolved.

## 3. Proposed Change

Subject to review and approval:

1. Retain all 18 inventoried artifacts as tracked Draft artifacts — see §3.1 for the per-artifact disposition. None is relocated.
2. Add each artifact to Git exactly as it currently exists, preserving its own Draft (or other non-governing) status, version, and content unchanged.
3. Git tracking is a repository-state action only; it does not approve, validate, or elevate the status of any artifact's content. Each artifact remains subject to its own future Review and Approval.
4. Update RRC-001 only if separately authorized by CHG-012; this record does not revise readiness criteria.

### 3.1 Per-Artifact Disposition

| Artifact | Path | Disposition | Basis |
|---|---|---|---|
| ADR-004 | `01_Governance/ADR/` | Retain | Governed by GOV-004 §23–§26 (ADR family); Draft, correctly unapproved |
| RFC-001 | `01_Governance/RFC/` | Retain | Governed by GOV-004 §18–§22 (RFC family); Draft |
| AR-PKG-001 | `03_Architecture/` | Retain | `AR` prefix established by AR-GOV-004-001 precedent; internal review artifact, correctly unapproved |
| AR-SYS-001 | `03_Architecture/` | Retain | Same basis as AR-PKG-001; Draft |
| SPEC-002 | `05_Specifications/SPEC-002/` | Retain | Governed by ADR-003's Specifications authority level; Draft |
| SPEC-003 | `05_Specifications/SPEC-003/` | Retain | Same basis as SPEC-002 |
| SPEC-004 | `05_Specifications/SPEC-004/` | Retain | Same basis as SPEC-002 |
| SPEC-005 | `05_Specifications/SPEC-005/` | Retain | Same basis as SPEC-002 |
| SPEC-006 | `05_Specifications/SPEC-006/` | Retain | Same basis as SPEC-002 |
| SPEC-007 | `05_Specifications/SPEC-007/` | Retain | Same basis as SPEC-002 |
| SPEC-008 | `05_Specifications/SPEC-008/` | Retain | Same basis as SPEC-002 |
| FRM-001 | `06_Frameworks/` | Retain | `FRM` registered by GOV-003 §6.3.1 (CHG-008) |
| STD-001 | `07_Standards/` | Retain | `STD` registered by GOV-003 §6.3.1 (CHG-008) |
| PB-001 | `08_Playbooks/` | Retain | `PB` registered by GOV-003 §6.3.1 (CHG-008) |
| EX-001 | `09_Examples/` | Retain | `EX` registered by GOV-003 §6.3.1 (CHG-008) |
| TRN-001 | `10_Training/Academy/` | Retain | `TRN` registered by GOV-003 §6.3.1 (CHG-008) |
| IMP-001 | `12_Implementation/` | Retain | `IMP` registered by GOV-003 §6.3.1 (CHG-008) |
| CHG-008 | `01_Governance/` | Retain | Governed by GOV-002 as a standard change record; now Closed |

No artifact is relocated. Every artifact's Path already matches its family's location in Architecture_Manifest.md's repository map (§7's validation-plan item).

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

Superseded by §13 following Approval and a blocked Implementation attempt. This section is preserved for historical accuracy rather than edited in place.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal from independent repository validation finding and verified inventory. | Chief Architect / Product Owner | CHG-011 |
| 0.1.0 | 2026-08-08 | Revision per Review: added §2.1 confirming CHG-008's closure resolves prefix sequencing, and §3.1 stating an explicit Retain disposition and basis for each of the 18 inventoried artifacts. No relocation is proposed for any artifact. | Chief Architect / Product Owner | CHG-011 |
| 0.1.0 | 2026-08-08 | Re-Reviewed and Approved (§10–§11). Implementation attempted and blocked by a stale, unremovable `.git/index.lock` (§12) — an environment constraint, not a content or governance defect. Status corrected to Approved — Implementation Blocked; not Closed. | Chief Architect / Product Owner | CHG-011 |
| 0.1.0 | 2026-08-08 | Resumed implementation after the verified stale lock was cleared in an environment with delete authority; exactly the 18 approved artifacts were staged and freshly validated. See §14–§15. | Chief Architect / Product Owner | CHG-011 |
| 0.1.0 | 2026-08-08 | Closed after the 18 approved artifacts were committed in `9aecc4537662119259c90bed4ff09d3c1c414fd1` and final scope review passed. See §16. | Chief Architect / Product Owner | CHG-011 |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Review corrected the live untracked-count context from 18 to 22, distinguishing the 18 pre-existing content artifacts from CHG-009 through CHG-012. It also found that the proposal does not select a governed disposition for each content artifact or establish the prerequisite treatment for unregistered `AR-` and `RFC-` identifier families. Before approval, the record shall specify each artifact's retain-or-relocate disposition and the required sequencing with identifier-profile governance.

This Review does not approve, implement, validate, stage, commit, or close CHG-011.

## 10. Re-Review Activity

```text
Review State: Reviewed — Pending Minor Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Minor Approval
```

The Re-Review confirmed §3.1's per-artifact disposition covers exactly the 18-item inventory with no omissions or additions, that every stated basis is accurate (verified against GOV-004 §18–§26 for RFC/ADR, AR-GOV-004-001 for `AR`, and GOV-003 §6.3.1 for `FRM`/`STD`/`PB`/`EX`/`TRN`/`IMP`), and that Retain is the correct disposition for all 18 — none requires relocation, as each already sits in the repository path its family owns per Architecture_Manifest.md. Minor classification is confirmed: tracking existing Draft content in Git changes version-control representation only.

This Re-Review does not approve, implement, validate, stage, commit, or close CHG-011.

## 11. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: GOV-002 Minor-change controls; repository-state ownership
Approved Scope: Git-track exactly the 18 artifacts in §3.1 with the Retain disposition, unchanged in content
Approval Result: Approved with Conditions
```

### 11.1 Approval Conditions

- Implementation shall `git add` exactly the 18 files in §3.1 — no content edit to any of them.
- No artifact's Draft/non-governing status, version, or substantive content may change.
- CHG-009 through CHG-012 and the pre-existing tracked working-tree modifications (CHG-004, CHG-005, CHG-006, CHG-007, GOV-003, RRC-001, SPEC-001) remain outside this record's scope.
- Validation shall confirm `git status` shows exactly the 18 files newly tracked and nothing else changed.

This approval does not implement, validate, or close CHG-011.

## 12. Implementation Activity (Superseded — See §14)

```text
Implementation State: Blocked — Not Implemented
Implementer: Chief Architect / Product Owner
Implementation Attempt Date: 2026-08-08
Implementation Result: Blocked by environment constraint
```

### 12.1 Attempted Action and Blocker

`git add` was attempted against exactly the 18 files listed in §3.1. The attempt failed: `fatal: Unable to create '.git/index.lock': File exists.` Diagnosis confirmed the lock is stale (`lsof`/`fuser` show no process holds it) but cannot be removed from this environment — file deletion in this connected folder is blocked at the filesystem-mount level, confirmed independently by attempting to remove an unrelated throwaway test file, which failed identically.

No file was staged. No file content was changed. This is an execution-environment limitation, not a governance or content defect — §3.1's disposition and basis remain correct and unaffected.

### 12.2 Required Before Implementation Can Proceed

The stale `.git/index.lock` must be cleared from outside this environment (directly on the host machine) before `git add` can succeed. This record cannot self-resolve that condition.

## 13. Current Disposition (Superseding §7)

**Closed.** The blocked implementation attempt in §12 is preserved as historical evidence. The exact 18-artifact Retain set was later staged, committed, freshly validated, and closed — see §§14–§16.

## 14. Resumed Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

### 14.1 Changes Implemented

1. Cleared the verified stale zero-byte `.git/index.lock` in an environment with authority to remove that lock.
2. Ran `git add` against exactly the 18 artifacts listed in §3.1.
3. Confirmed no tracked working-tree modification and no artifact content was included in the staged set.

## 15. Validation Activity

```text
Validation State: Validated — Pending Closure
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
Independence Note: No separate validator is assigned; exact staged-inventory comparison and Git status review were used as compensating evidence.
```

### 15.1 Evidence and Result

- Passed: the staged set contains exactly the 18 §3.1 Retain artifacts and no tracked working-tree modification.
- Passed: each staged artifact remains byte-for-byte unchanged in the working tree and retains its current Draft or other non-governing status.
- Passed: the excluded tracked modifications remain unstaged and untouched.
- Passed: no artifact was relocated, no release action occurred, and `git diff --check` passes.

This validation does not close CHG-011. Closure requires a final disposition review and an intentional commit of the approved staged artifacts.

## 16. Closure Activity

```text
Closure State: Closed
Closer: Chief Architect / Product Owner
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
Tracking Commit: 9aecc4537662119259c90bed4ff09d3c1c414fd1
```

### 16.1 Closure Basis

- Commit `9aecc4537662119259c90bed4ff09d3c1c414fd1` contains exactly the 18 artifacts authorized by §3.1 and no tracked working-tree modification.
- All retained artifacts preserve their Draft or other non-governing status and their content was not changed by CHG-011.
- The prior blocked attempt remains preserved in §12; it was resolved by clearing a verified stale lock in an environment with delete authority.
- No artifact was relocated, no release action occurred, and `git diff --check` passes.

This closure does not approve any Draft content, execute RRC-001, close Phase C4, or authorize any other change record.
