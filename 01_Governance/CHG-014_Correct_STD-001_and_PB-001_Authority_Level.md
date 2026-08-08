# CHG-014 — Correct STD-001 and PB-001 Authority Level

```text
Document ID: CHG-014
Title: Correct STD-001 and PB-001 Authority Level
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, STD-001, PB-001, AR-PKG-001
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-014
Change Lifecycle State: Closed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Metadata correction
Change Classification: Minor
Urgency: Normal
```

## 2. Current Condition

STD-001 declares `Authority Level: Level 6`. PB-001 declares `Authority Level: Level 6`. GOV-001 §3 Authority Model assigns Level 6 to Frameworks, Level 7 to Standards, and Level 8 to Playbooks. Both values are wrong for their own artifact family; both currently read as a copy of FRM-001's correct value (6) applied without adjustment.

This finding is recorded as CR-1 and CR-2 in AR-PKG-001 §9.2 (Second-Pass Substantive Review, Findings Register — Critical), identified through an independent parallel review of the delivery-artifact set against GOV-001 §3.

## 3. Proposed Change

Subject to Minor-change review and approval:

1. Change STD-001's `Authority Level` from `Level 6` to `Level 7`.
2. Change PB-001's `Authority Level` from `Level 6` to `Level 8`.
3. Add one revision-history entry to each of STD-001 and PB-001 recording the correction and citing CHG-014.
4. No other field, section, or word of either document's substantive content changes.

## 4. Scope and Boundaries

Exactly two files may change under this approval: **STD-001** and **PB-001**, limited to the `Authority Level` field and one added revision-history row each, as specified in §3. This change record is also updated to record its own lifecycle.

This proposal does not change either artifact's `Classification` (both correctly Normative per GOV-003 §6.3.1 and unaffected by this finding), `Version`, `Status`, `Owner`, `Depends On`, `Referenced By`, or any body content. It does not address any other finding recorded in AR-PKG-001 §9–§11 (traceability, GOV-004 content completeness, Purpose/Scope sections, or any other artifact). It does not approve STD-001 or PB-001's substantive content, execute RRC-001, close Phase C4, or create a release tag.

## 5. Classification and Impact Assessment

Change Type: Metadata correction.

Initial Change Classification: Minor. The correction changes a single metadata field per file to align with an already-approved, unambiguous rule (GOV-001 §3's Authority Model table). The correction restores the artifacts' declared precedence to the already-approved GOV-001 authority model; it does not change that governing model or either artifact's substantive rules. It does not alter either artifact's Classification or any normative content. It does not touch a Constitutional or Governance-tier artifact and carries no CONST-001 §8 ADR prerequisite.

Impact analysis shall confirm: the correct target values per GOV-001 §3, that no other artifact's `Depends On`/`Referenced By` assumes the incorrect Level 6 value for STD-001 or PB-001, and that GOV-001 §4's conflict-resolution procedure would now resolve correctly using the corrected values.

## 6. Validation Plan

- Confirm STD-001's `Authority Level` reads `Level 7` and matches GOV-001 §3's Standards row exactly.
- Confirm PB-001's `Authority Level` reads `Level 8` and matches GOV-001 §3's Playbooks row exactly.
- Confirm no other field or body content changed in either file (diff confined to `Authority Level` plus one revision-history row per file).
- Confirm no artifact in the repository references STD-001 or PB-001's Authority Level as `Level 6` (grep repository-wide for false dependents of the incorrect value).
- Confirm `git diff --check` passes and the committed scope matches the approved scope.

## 7. Current Disposition

Superseded by §12 following Review, Approval, Implementation, and Validation. Preserved here for historical accuracy rather than edited in place.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal to correct STD-001 and PB-001 Authority Level values, per AR-PKG-001 §9.2 findings CR-1 and CR-2. | Chief Architect / Product Owner | CHG-014 |
| 0.1.0 | 2026-08-08 | Corrected §5 wording: the change restores declared precedence to the already-approved GOV-001 authority model rather than leaving precedence unaltered, since Level 6 → 7/8 is itself a precedence correction. | Chief Architect / Product Owner | CHG-014 |
| 0.1.0 | 2026-08-08 | Corrected a post-approval scope violation: the initial implementation also changed `Change ID` in STD-001 and PB-001, which §3–§4 did not authorize. Reverted `Change ID` in both files and updated §10–§11 to reflect the corrected, in-scope implementation and re-validation. | Chief Architect / Product Owner | CHG-014 |

## 9. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: STD-001 and PB-001 artifact ownership; GOV-002 Minor-change controls
Approved Scope: STD-001 Authority Level Level 6 → Level 7; PB-001 Authority Level Level 6 → Level 8; one revision-history row in each. No other change is authorized.
Approval Result: Approved
```

This approval does not implement, validate, or close CHG-014.

## 10. Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

### 10.1 Changes Implemented

1. STD-001: `Authority Level` changed from `Level 6` to `Level 7`; one revision-history row added.
2. PB-001: `Authority Level` changed from `Level 6` to `Level 8`; one revision-history row added.

### 10.2 Implementation Boundaries

- No other field of either document changed: `Version`, `Status`, `Owner`, `Classification`, `Change ID`, `Depends On`, `Referenced By`, `Last Updated`, and all body content (§1–§5 in each) are unmodified.
- No other artifact was modified.

### 10.3 Scope Correction

The first implementation pass also changed `Change ID` from "Not assigned — unapproved Draft" to `CHG-014` in both STD-001 and PB-001. §3–§4's approved scope authorizes only the `Authority Level` field and one revision-history row per file; it does not authorize `Change ID`. This was a genuine scope violation, not a stylistic choice — it was caught before commit and corrected by reverting `Change ID` in both files to their prior value. §10.1 and §10.2 above reflect the corrected, in-scope implementation. §11 below reflects re-validation against the corrected files.

## 11. Validation Activity

```text
Validation State: Validated
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
```

- Passed: STD-001's `Authority Level` reads `Level 7`, matching GOV-001 §3's Authority Model table row "7 | Standards" exactly.
- Passed: PB-001's `Authority Level` reads `Level 8`, matching GOV-001 §3's Authority Model table row "8 | Playbooks" exactly.
- Passed: `git diff` for both files is confined to the `Authority Level` field and one added revision-history row each — no other line changed. `Change ID` in both files is confirmed reverted to "Not assigned — unapproved Draft," its prior value, per the §10.3 scope correction.
- Passed: repository-wide grep confirms no other artifact's live metadata references STD-001 or PB-001 as `Level 6`; the only remaining `Level 6` mentions are historical, inside CHG-014 itself and AR-PKG-001 §9.2/§10.2, correctly describing the pre-correction state.
- Passed: with the correction, GOV-001 §4's conflict-resolution procedure ("higher authority prevails") now resolves correctly between STD-001 (7), PB-001 (8), and FRM-001 (6) — STD-001 and PB-001 no longer falsely claim authority co-equal with Frameworks.
- Passed: `git diff --check` passes.
- Passed: neither artifact's Classification, Version, Status, or substantive rules changed.

## 12. Closure Activity

```text
Closure State: Closed
Closer: Chief Architect / Product Owner
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
```

CHG-014 is Closed. STD-001's and PB-001's `Authority Level` values now match GOV-001 §3 exactly (Level 7 and Level 8 respectively). AR-PKG-001 §9.2 findings CR-1 and CR-2 are resolved. This closure does not address any other AR-PKG-001 §9–§11 finding, execute RRC-001, close Phase C4, or create a release tag.
