# CHG-019 — Complete FRM-001 Framework Applicability Controls

```text
Document ID: CHG-019
Title: Complete FRM-001 Framework Applicability Controls
Version: 0.1.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, SPEC-001, FRM-001, PB-001, EX-001, TRN-001, AR-PKG-001
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-019
Change Lifecycle State: Closed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Product Owner / Investment Framework Owner
Date Identified: 2026-08-08
Change Type: Framework change
Change Classification: Major
Urgency: Normal
```

## 2. Current Condition

FRM-001 is a Normative Level 6 Draft framework. Its §1 Purpose and §§2–5 define a strategy-neutral decision process, but do not identify the decision types to which that process is eligible to apply. FRM-001 also does not state how the framework's Draft, Approved, retired, or otherwise ineligible state affects its use.

SPEC-001 §9 requires every approved framework definition to state eligible decision types and requires that Draft or retired frameworks shall not be applied where an Approved framework is required. AR-PKG-001 §9.3 records this as finding M-K.

## 3. Proposed Change

Subject to Major-change review and approval, amend **FRM-001 only** to add the exact text below as new subsections under FRM-001's existing §1 Purpose, without renumbering any existing FRM-001 section:

### 3.1 Proposed New FRM-001 §1.1 — Applicability

> This Framework is eligible for any investment decision requiring structured, evidence-based evaluation and traceable approval under PRD-001 CAP-001 (Investment Decision Management) and CAP-004 (Investment Framework Execution), including asset allocation changes, security selection, portfolio rebalancing, and risk-mitigation actions, regardless of asset class, portfolio, or strategy. This Framework does not define, narrow, or expand PRD-001's Product Capability Scope; it states only which decisions this Framework itself may process. It is not eligible for a decision outside Investment Decision Management as PRD-001 defines it.

### 3.2 Proposed New FRM-001 §1.2 — Framework-State Applicability

> Only an Approved version of this Framework may be applied where an Approved framework is required. A Draft or retired version shall not be applied in that circumstance. An executor shall verify the Framework's Approved status and version at Stage 3 (Identify approved framework version and required evidence) before proceeding; if no Approved version exists, execution shall stop and escalate per PB-001 §2 Stop Conditions.

### 3.3 Implementation Steps

1. Insert §1.1 and §1.2 above, in full, into FRM-001 immediately following its existing §1 Purpose text.
2. Add one revision-history row recording the change and citing CHG-019.

This exact text — not a taxonomy to be selected later — is the substance subject to Major-change Review and Approval. Deferring the substantive wording to Implementation, as an earlier draft of this record proposed, would let Implementation choose the Normative rule after Approval, contrary to GOV-002's requirement that a Major change's scope be defined before approval. §3.1's decision-type list is deliberately non-exhaustive ("including," not an enumerated closed set) so it does not itself become a rigid taxonomy requiring constant amendment, while still being definite enough to review and approve now. §3.1 explicitly covers EX-001 §1's worked allocation-change scenario, closing the specific downstream-consistency risk this record's Review identified.

## 4. Scope and Boundaries

The sole target artifact is FRM-001. Authorized implementation, if approved, is confined to:

- a new or amended applicability/scope section;
- an explicit framework-state applicability condition; and
- one revision-history row.

The change must not redefine PRD-001 requirements, **PRD-001 §4 Product Capability Scope**, SPEC-001 decision lifecycle states, GOV-001 authority, investment strategy, portfolio policy, approval authority, or any acceptance criterion. Product Capability Scope is named explicitly and separately from "requirements" because PRD-001 §4 (CAP-001 Investment Decision Management; CAP-004 Investment Framework Execution) deliberately leaves decision types undefined at the capability level — the exact seam this amendment writes a boundary across. An eligible-decision-types clause may describe FRM-001's own applicability; it must not be drafted in a way that implicitly narrows or widens what "investment decision" or "framework execution" means at the product-capability level. It must not change FRM-001's Classification, Authority Level, Status, Owner, dependencies, downstream references, version, or existing process stages unless a scope amendment is reviewed and approved.

PB-001, EX-001, and TRN-001 are affected consumers for review only; they are not implementation targets in CHG-019. AR-PKG-001 is evidence only and remains out of scope.

## 5. Classification and Impact Assessment

**Major** is required under GOV-002 §6.3. The proposed addition affects the operative applicability of a Normative framework and its downstream consumers, including a playbook, example, and training artifact. It adds a material control over when the framework may be used; it is not a presentation-only or metadata correction.

Impact analysis shall determine whether the selected decision types require consequential changes to PB-001, EX-001, TRN-001, or architecture/specification artifacts. If so, they shall be proposed separately rather than silently included. The framework owner and the owners of named downstream consumers shall review the proposed wording. Review must confirm that the state condition consumes SPEC-001 §9 rather than redefines it.

Whoever drafts the eligible-decision-type wording shall check it specifically against EX-001 §1's worked scenario (a target-allocation change between asset classes), since EX-001 is FRM-001's sole worked example and TRN-001's assessment exercise executes it directly. If the selected wording does not cover an allocation-change decision, a follow-on EX-001/TRN-001 change shall be opened at the same time rather than left as a silent inconsistency.

## 6. Validation Plan

- Confirm FRM-001 §1.1 is inserted verbatim as specified in §3.1 and FRM-001 §1.2 verbatim as specified in §3.2, immediately following existing §1 Purpose, with no other FRM-001 section renumbered or altered.
- Confirm §1.2's condition states that a Draft or retired framework is not applicable where an Approved framework is required, without creating a conflicting lifecycle vocabulary.
- Confirm §1.1/§1.2 are consistent with SPEC-001 §9 and do not redefine PRD-001 requirements, PRD-001 §4 Product Capability Scope, approval authority, or investment policy.
- Confirm §1.1's decision-type list covers EX-001 §1's allocation-change scenario; if a future amendment narrows it below that coverage, require a linked EX-001/TRN-001 follow-on change.
- Confirm the diff is limited to the two new FRM-001 subsections specified in §3.1–§3.2 and one revision-history row.
- Confirm `git diff --check` passes and no implementation authorization, RRC-001 execution, Phase C4 closure, release action, or tag is claimed.

## 7. Current Disposition

CHG-019 is Proposed and awaits Major-change review. It does not approve the future taxonomy, implement any FRM-001 change, validate a result, or close the finding.

Superseded by §16 following Review, Re-Review, a second independent review, Approval, Implementation, Validation, and Closure. Preserved here for historical accuracy rather than edited in place. As of §16, CHG-019 is **Closed**; FRM-001 §1.1/§1.2 are implemented exactly as specified in §3.1–§3.2.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial Major Draft to complete FRM-001 applicability controls in response to AR-PKG-001 §9.3 finding M-K. | Chief Architect / Product Owner | CHG-019 |
| 0.1.0 | 2026-08-08 | Revision per Review: added "PRD-001 §4 Product Capability Scope" as an explicit named boundary in §4, and added a non-blocking §5 instruction requiring the eventual decision-type wording to be checked against EX-001's worked scenario. | Chief Architect / Product Owner | CHG-019 |
| 0.1.0 | 2026-08-08 | Revision per second independent review: replaced the decision-pending taxonomy placeholder in §3 with the exact proposed FRM-001 §1.1/§1.2 text (§3.1–§3.2), so the Normative rule is defined and reviewable before Approval rather than left to Implementation, per GOV-002's defined-scope requirement for Major changes. | Chief Architect / Product Owner | CHG-019 |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

Independent verification confirmed §2's factual claim (FRM-001 has no eligible-decision-types statement and no Draft/retired-applicability condition), confirmed §2's SPEC-001 §9 quotation is exact, confirmed PB-001/TRN-001 carry no decision-type assumption that would conflict, confirmed Major classification is correct under GOV-002 §6.3, and confirmed EX-001's sole worked example (an asset-allocation-change decision) is a concrete downstream consumer that the eventual FRM-001 wording must remain consistent with or trigger a follow-on change for.

One gap blocked approval as originally drafted: §4's boundary list named "PRD-001 requirements" and "any acceptance criterion" individually but never named "PRD-001 §4 Product Capability Scope" — the specific PRD-001 concept most exposed by this change, since PRD-001 §4 (CAP-001, CAP-004) deliberately leaves decision types undefined at the capability level, which is exactly the seam this amendment writes a boundary across. Every other adjacent protected concept was named individually; this one was not.

This Review does not approve, implement, validate, or close CHG-019.

## 10. Re-Review Activity

```text
Review State: Reviewed — Pending Major Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Major Approval
```

### 10.1 Findings

- §4 now names "PRD-001 §4 Product Capability Scope" explicitly and states why it matters, closing the gap.
- §5 now instructs the eventual wording to be checked against EX-001's allocation-change scenario, so the decision-type taxonomy work (still correctly left open for Approval/Implementation) cannot silently create a downstream inconsistency.
- The decision-pending nature of the exact eligible-decision-type wording remains correctly unresolved by this record — Approval authorizes the applicability-control *requirement*, not a specific taxonomy.
- No unresolved Review finding remains.

This Re-Review does not approve, implement, validate, or close CHG-019.

## 11. Second Independent Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner (independent pass)
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

A second, independent review found that §10.1's Passed finding was premature. §10.1 treated the "decision-pending nature of the exact eligible-decision-type wording" as correctly left open for Approval or Implementation — this was itself the defect. GOV-002's Major-change requirements presuppose the record defines its own substantive scope before approval; leaving the actual Normative rule text undecided at Draft/Review stage would let Implementation choose that rule after Approval had already been granted, which is not a decision Approval can meaningfully authorize in advance. The record needed to select and state the exact FRM-001 amendment text now, not defer it.

This Review does not approve, implement, validate, or close CHG-019.

## 12. Final Re-Review Activity

```text
Review State: Reviewed — Pending Major Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Major Approval
```

### 12.1 Findings

- §3.1's FRM-001 §1.1 text states an eligible-decision-type boundary broad enough to cover asset allocation changes, security selection, rebalancing, and risk-mitigation actions, framed against PRD-001 CAP-001/CAP-004, and explicitly disclaims redefining PRD-001's Product Capability Scope.
- §3.1 explicitly covers EX-001 §1's worked allocation-change scenario by name, closing the specific downstream-consistency risk raised in §9's original Review.
- §3.2's FRM-001 §1.2 text faithfully realizes SPEC-001 §9's Draft/retired-applicability rule without inventing a new lifecycle vocabulary, and ties verification to FRM-001's existing Stage 3 language rather than adding a parallel process.
- §6's Validation Plan now checks for the exact §3.1/§3.2 text verbatim, not a generic "eligible decision types are stated" criterion.
- The decision-type list is deliberately non-exhaustive ("including," not a closed enumeration), which keeps it reviewable and stable without requiring amendment for every new decision variant — this is a reasoned design choice, not a residual deferral of the substantive rule.
- No unresolved Review finding remains.

This Final Re-Review does not approve, implement, validate, or close CHG-019.

## 13. Approval Activity

```text
Approval State: Approved — Pending Implementation
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: FRM-001 artifact ownership; GOV-002 Major-change controls
Approved Scope: Insert FRM-001 §1.1 and §1.2 verbatim as specified in §3.1–§3.2, immediately following existing §1 Purpose, plus one revision-history row. No other FRM-001 field, section, or existing content changes.
Approval Result: Approved
```

This approval does not implement, validate, or close CHG-019.

## 14. Implementation Activity

```text
Implementation State: Implemented — Pending Validation
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-08
Implementation Result: Completed within Approved Scope
```

### 14.1 Changes Implemented

1. Inserted FRM-001 §1.1 Applicability, verbatim as specified in §3.1, immediately after existing §1 Purpose.
2. Inserted FRM-001 §1.2 Framework-State Applicability, verbatim as specified in §3.2, immediately after §1.1.
3. Added one revision-history row citing CHG-019.

### 14.2 Implementation Boundaries

- No existing FRM-001 section was renumbered, edited, or removed. §2 through §6 (now physically following the two new subsections) retain their original numbers, text, and order.
- FRM-001's `Version`, `Status`, `Owner`, `Classification`, `Authority Level`, `Depends On`, `Referenced By`, `Change ID`, and `Last Updated` fields are unchanged, consistent with §13's "no other field... changes" condition.
- No other artifact was modified.

## 15. Validation Activity

```text
Validation State: Validated
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-08
Validation Result: Passed
```

- Passed: FRM-001 §1.1 and §1.2 match §3.1–§3.2's approved text exactly, word for word.
- Passed: §1.1 explicitly disclaims redefining PRD-001's Product Capability Scope and explicitly covers EX-001 §1's allocation-change scenario by name.
- Passed: §1.2 faithfully realizes SPEC-001 §9's Draft/retired-applicability rule without introducing a new lifecycle vocabulary, and ties verification to FRM-001's existing Stage 3 language.
- Passed: `git diff` for FRM-001 is confined to the two new subsections and one revision-history row — no other line changed.
- Passed: `git diff --check` passes.
- Passed: no implementation authorization, RRC-001 execution, Phase C4 closure, release action, or tag is introduced.

## 16. Closure Activity

```text
Closure State: Closed
Closer: Chief Architect / Product Owner
Closure Date: 2026-08-08
Closure Result: Closed — Validation Passed
```

CHG-019 is Closed. FRM-001 now states an explicit, reviewed and approved applicability boundary and framework-state condition, realizing SPEC-001 §9. AR-PKG-001 finding M-K is resolved. This closure does not approve FRM-001 as a whole, execute RRC-001, close Phase C4, or create a release tag. AR-PKG-001 was not modified by this closure.
