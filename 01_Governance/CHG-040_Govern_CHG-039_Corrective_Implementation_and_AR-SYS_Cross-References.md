# CHG-040 — Govern the CHG-039 Corrective Implementation and Correct AR-SYS-001/002/003 Cross-References

```text
Document ID: CHG-040
Title: Govern the CHG-039 Corrective Implementation and Correct AR-SYS-001/002/003 Cross-References
Version: 0.3.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, AR-SYS-001, AR-SYS-002, AR-SYS-003, CHG-020, CHG-027, CHG-039
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-040
Change Lifecycle State: Closed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Retroactive governance of ungoverned corrective implementation, plus traceability correction
Change Classification: Major
Urgency: Normal
```

## 2. Current Condition

### 2.1 The GOV-002 §11.5 gap

CHG-039's third-round Approval Activity (§12) authorized exactly two implementation targets: AR-SYS-001's three-edit `Review Confirmed → Superseded` transition, and AR-SYS-002's creation. After that Implementation's Validation failed (CHG-039 §16 — an unauthorized fourth AR-SYS-001 edit, and an internal contradiction in AR-SYS-002 §10), CHG-039 §§17–18 performed corrective work that introduced three further material implementation targets never put through Review or Approval:

- A second AR-SYS-001 revision-history row (documenting the Change ID violation and its revert).
- AR-SYS-002's own `Review Confirmed → Superseded` transition, pointer, and revision-history row.
- AR-SYS-003's creation: a full new Architecture Review artifact, genuinely executed to `Review Confirmed`, including a cross-row consistency check that CHG-039's original Validation Plan (§6) never required.

GOV-002 §11.5 states: "A change requires renewed review or approval when implementation would: Materially exceed approved scope. ... Alter required validation. ..." Both conditions were met. CHG-039 §20 records this finding and states that §§16–19 are preserved as honest evidence of what was done, but do not themselves constitute the approval GOV-002 §11.5 requires. This record, CHG-040, is that renewed review and approval.

### 2.2 Why govern in place rather than revert

AR-SYS-001's unauthorized edit (the `Change ID` field) was cleanly revertible to a prior valid value and was reverted directly under CHG-039 §17 — that correction is not reopened here. AR-SYS-002 and AR-SYS-003 are different: AR-SYS-002 cannot be reverted to `Review Confirmed`, because that status is now known to rest on an internally contradictory §10 — reverting the supersession would restore a status that is actively false, not merely unapproved. The only sound path is to review and, if warranted, approve the corrective content that already exists, exactly as CHG-024 did for AR-PKG-001's uncommitted second-pass review content: content already physically present in the working tree, produced without its own dedicated prior approval, retroactively but properly governed through a genuine Review-then-Approval cycle before being treated as valid.

### 2.3 Traceability gaps found

A header-only inspection (per the CHG-015 §6 methodology) of every file whose `Depends On` or `Governed By` field names AR-SYS-002 or AR-SYS-003 finds:

- **AR-SYS-002**'s genuine direct consumers: `CHG-039`, `AR-SYS-003`. Its `Referenced By` currently reads "None identified."
- **AR-SYS-003**'s genuine direct consumer: `CHG-039`. Its `Referenced By` currently reads "None identified."
- **AR-SYS-001** is also implicated: this record's own header declares `AR-SYS-001` in `Depends On`, as does CHG-039, and AR-SYS-002 and AR-SYS-003 both declare `AR-SYS-001` in `Depends On` too — so a fully correct AR-SYS-001 `Referenced By` value would need at minimum `CHG-039, CHG-040, AR-SYS-002, AR-SYS-003` added under the same self-reference rule applied to AR-SYS-002 and AR-SYS-003 below.

**AR-SYS-001's `Referenced By` is excluded from this record entirely, not partially fixed.** The same header-only inspection, run against AR-SYS-001 specifically, finds it is a genuine direct consumer target of roughly twenty files beyond what its current `Referenced By` lists — including CHG-024, CHG-026, CHG-027, CHG-028, CHG-029, CHG-038, and every SPEC-001 through SPEC-009 file citing it directly (some already listed, some not) — none of which is related to CHG-039 or this correction chain. AR-SYS-001's `Referenced By` appears to have last been properly maintained around the CHG-018/CHG-021 timeframe and never updated for anything added since. Adding only `CHG-039, CHG-040, AR-SYS-002, AR-SYS-003` here would leave the field still knowingly incomplete — the same defect this project has repeatedly corrected elsewhere, just at smaller scale. The whole AR-SYS-001 `Referenced By` inventory, including the four entries this correction chain would otherwise add, is left to its own dedicated, comprehensive Minor traceability record, verified with the same per-file rigor CHG-015 originally established.

## 3. Proposed Change

Subject to Major-change review and approval:

1. **AR-SYS-001.** Add one revision-history row citing CHG-040, stating that this record has reviewed and approves the AR-SYS-001 `Change ID` violation-and-revert row CHG-039 §17 already added. `Referenced By` is **not** changed by this record — not even to add `AR-SYS-002, AR-SYS-003, CHG-039, CHG-040` — because that field is already known, per §2.3, to be missing roughly twenty other genuine entries; a partial fix here would leave it still knowingly incomplete. The complete AR-SYS-001 `Referenced By` inventory is left to its own dedicated Minor traceability record. No other line of AR-SYS-001 changes.
2. **AR-SYS-002.** Add one revision-history row citing CHG-040, stating that this record has reviewed and approves AR-SYS-002's `Review Confirmed → Superseded` transition, pointer, and revision-history row that CHG-039 §18 already added. Correct `Referenced By` from "None identified" to `CHG-039, AR-SYS-003, CHG-040` (self-reference, per the CHG-015 §6 general inclusion rule, since this record's own header names AR-SYS-002 in `Depends On`). No other line of AR-SYS-002 changes.
3. **AR-SYS-003.** Add one revision-history row citing CHG-040, stating that this record has reviewed and approves AR-SYS-003's creation and `Review Confirmed` disposition that CHG-039 §18 already produced, including its cross-row consistency check. Correct `Referenced By` from "None identified" to `CHG-039, CHG-040` (self-reference). No other line of AR-SYS-003 changes — this record does not re-open, re-execute, or re-litigate AR-SYS-003's substantive §§1–19 content; that content was independently found "internally coherent" on prior review and is not reassessed here.
4. **CHG-039.** No edit. CHG-039 §16–§20 remain as the honest historical record of the reopening; this record does not rewrite them. Once CHG-040 closes, CHG-039 may proceed to its own re-Validation, now that the corrective implementation it depended on is properly governed.

## 4. Scope and Boundaries

The only implementation targets are: AR-SYS-001's revision-history field only (no `Referenced By` change); and AR-SYS-002's and AR-SYS-003's revision-history and `Referenced By` fields, exactly as specified in §3. This record does not touch AR-SYS-001's `Status` field, superseding pointer, first CHG-039 revision-history row, or `Referenced By` field at all (within CHG-039's originally approved scope, not implicated by any finding, or — for `Referenced By` — deliberately deferred whole to a dedicated record per §2.3). It does not touch AR-SYS-002's or AR-SYS-003's substantive content (§§1–19 in each). It does not edit CHG-039, RFC-001, or ADR-004. It does not open or perform the ADR-004 evidence-reassessment follow-on record described in CHG-039 §3.4 — that remains blocked until this record closes and CHG-039 itself is re-Validated and re-Closed.

## 5. Classification and Impact Assessment

Major classification: this record is the renewed review and approval GOV-002 §11.5 requires for implementation that materially exceeded CHG-039's approved scope and altered required validation. It does not itself change any architecture, requirement, or governance rule; it retroactively governs already-existing, already-reviewed-once (informally) content and makes a narrowly bounded traceability correction.

Impact analysis: no architecture, product, or governance content changes. The principal risk is treating this record's approval as if it re-validates AR-SYS-003's substantive content — it does not; §4 states this explicitly, and CHG-039's own re-Validation (separate, after this record closes) is what determines whether AR-SYS-003 is accepted as decision-readiness evidence.

## 6. Validation Plan

- Confirm AR-SYS-001 receives exactly one new revision-history row and no `Referenced By` change of any kind; confirm no other line changes.
- Confirm AR-SYS-002 receives exactly one new revision-history row and `Referenced By` corrected to exactly `CHG-039, AR-SYS-003, CHG-040`; confirm its `Status`, pointer, and existing rows are unchanged.
- Confirm AR-SYS-003 receives exactly one new revision-history row and `Referenced By` corrected to exactly `CHG-039, CHG-040`; confirm its §§1–19 substantive content is byte-for-byte unchanged.
- Confirm CHG-039 is not edited by this record.
- Confirm `git diff --check` passes.
- **Operational note:** the pre-existing, out-of-scope `README.md` whitespace item remains unresolved and unrelated to this record, as recorded throughout CHG-038 and CHG-039.

## 7. Disposition

Closed. §§9–14 record the completed Review (two rounds), Approval, Implementation, Validation, and Closure activities.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal to retroactively govern CHG-039's ungoverned corrective implementation (AR-SYS-001 revision-history addition, AR-SYS-002 supersession, AR-SYS-003 creation) per GOV-002 §11.5, and to correct the AR-SYS-001/002/003 mutual `Referenced By` gaps directly implicated by that correction chain. | Chief Architect / Product Owner | CHG-040 |
| 0.2.0 | 2026-08-08 | Reviewed (second round). Corrected header `Status`/`Change Lifecycle State` to `Reviewed` to match §7/§9's actual review state. Removed all AR-SYS-001 `Referenced By` changes from §3 item 1 — including the self-reference entries `CHG-039, CHG-040` this correction chain would otherwise add — because a partial addition would leave the field still knowingly incomplete per §2.3's broader finding; the complete AR-SYS-001 inventory (now stated to include at minimum `CHG-039, CHG-040, AR-SYS-002, AR-SYS-003`) is left entirely to its own dedicated Minor traceability record. Updated §2.3, §4, and §6 to match. | Chief Architect / Product Owner | CHG-040 |
| 0.3.0 | 2026-08-08 | Approved, implemented, validated, and closed the exact scope reviewed in §10: one revision-history row on each of AR-SYS-001, AR-SYS-002, and AR-SYS-003; `Referenced By` corrected on AR-SYS-002 and AR-SYS-003 only. | Chief Architect / Product Owner | CHG-040 |

## 9. Review Activity

Review Result: Passed.

Review confirmed: the GOV-002 §11.5 citation is accurate to its actual text (quoted in §2.1); the "govern in place, don't revert" rationale in §2.2 is sound and precedented (CHG-024) given AR-SYS-002 cannot be reverted to a status now known to be false; the proposed `Referenced By` corrections in §3 match a fresh header-only verification (§2.3) and correctly apply the CHG-015 §6 self-reference rule to AR-SYS-002 and AR-SYS-003 with respect to this record's own `Depends On`; the record does not re-open or re-litigate AR-SYS-003's substantive content, and does not open the ADR-004 follow-on record prematurely; and the larger, separate AR-SYS-001 `Referenced By` staleness found during drafting (§2.3) is disclosed rather than either silently folded into this record's scope or silently ignored.

## 10. Second Review Activity

Review Result: Passed.

Second review found two defects: (1) the header (`Status: Draft`) and §1 (`Change Lifecycle State: Proposed`) contradicted §7 and §9, which already described this record as Reviewed and pending Major approval — corrected to `Reviewed — Pending Major Approval` / `Reviewed` in both places (§8 v0.2.0). (2) §3 item 1 proposed adding `AR-SYS-002, AR-SYS-003` to AR-SYS-001's `Referenced By` — a knowingly partial fix, since §2.3 already disclosed that AR-SYS-001's `Referenced By` is missing roughly twenty other genuine entries, and since the self-reference rule applied consistently would also require `CHG-039, CHG-040` there, not just the two artifact entries. Corrected: all AR-SYS-001 `Referenced By` changes are removed from this record; the complete inventory — including the four entries this correction chain would otherwise have added — is deferred whole to a dedicated, comprehensive Minor traceability record. §2.3, §3 item 1, §4, and §6 were updated accordingly (§8 v0.2.0). Ready for a fresh Major review.

## 11. Fresh Major Review

Review Result: Passed.

Fresh review confirmed: the header and lifecycle state now match the reviewed status; AR-SYS-001's known-incomplete `Referenced By` field is entirely excluded, avoiding a knowingly partial correction; AR-SYS-002's complete direct-consumer set is exactly `CHG-039, AR-SYS-003, CHG-040`; AR-SYS-003's complete direct-consumer set is exactly `CHG-039, CHG-040`; the record is correctly Major-classified, preserves CHG-039's historical evidence, and keeps ADR-004 reassessment blocked; no unrelated file was changed and scoped validation is clean. Ready for Major approval.

## 12. Approval Activity

Approval Result: Approved.

Approved scope is exactly §3 as reviewed and passed in §11: one revision-history row on each of AR-SYS-001, AR-SYS-002, and AR-SYS-003; `Referenced By` corrected on AR-SYS-002 (to `CHG-039, AR-SYS-003, CHG-040`) and AR-SYS-003 (to `CHG-039, CHG-040`) only — not on AR-SYS-001. No other content of any of the three artifacts is approved for change. This approval does not itself re-validate AR-SYS-003's substantive §§1–19 content, open the ADR-004 follow-on record, or re-validate or close CHG-039.

## 13. Implementation Activity

Implementation Result: Completed.

- **AR-SYS-001**: one revision-history row added, citing CHG-040, ratifying the Change ID violation-and-revert row CHG-039 §17 added. No other line changed; `Referenced By` untouched.
- **AR-SYS-002**: one revision-history row added, citing CHG-040, ratifying the supersession CHG-039 §18 performed. `Referenced By` corrected from "None identified" to `CHG-039, AR-SYS-003, CHG-040`. No other line changed.
- **AR-SYS-003**: one revision-history row added, citing CHG-040, ratifying its creation and `Review Confirmed` disposition. `Referenced By` corrected from "None identified" to `CHG-039, CHG-040`. No substantive §§1–19 content changed.

No RFC-001, ADR-004, or CHG-039 edit was made. The ADR-004 follow-on record was not opened.

## 14. Validation Activity

Validation Result: Passed.

Validation confirmed each artifact received exactly the approved edit and nothing else:

- AR-SYS-001's diff against its pre-CHG-039 baseline is now: the three originally-approved edits (Status, pointer, first revision-history row), the Change-ID revert row, and this one new ratifying row — five revision-history rows and one Status/pointer change in total, no `Referenced By` change, no other line touched.
- AR-SYS-002's diff is: creation content (unchanged from CHG-039 §18), the supersession edits (Status, pointer, revision-history row), and this one new row plus the `Referenced By` correction — no other line touched.
- AR-SYS-003's diff is: creation content (unchanged), plus this one new row and the `Referenced By` correction — its §§1–19 substantive content is byte-for-byte unchanged from CHG-039 §18/§19.
- CHG-039 was not edited by this record.

`git diff --check` passes for this record's own scope. As recorded throughout CHG-038/CHG-039, the pre-existing `README.md` whitespace item remains unresolved and unrelated to this record.

## 15. Closure Activity

Closure Result: Closed.

CHG-040 closes the retroactive governance of CHG-039's §§17–19 corrective implementation and the AR-SYS-002/AR-SYS-003 `Referenced By` corrections only. It does not validate or close CHG-039 — CHG-039's own re-Validation and re-Closure are separate next actions, now unblocked since the corrective implementation it depended on is properly governed. It does not open the ADR-004 evidence-reassessment follow-on record. It does not address AR-SYS-001's broader `Referenced By` staleness disclosed in §2.3, which remains a separate, dedicated Minor correction.
