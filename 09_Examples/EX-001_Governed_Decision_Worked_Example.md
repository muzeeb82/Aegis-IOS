# EX-001 — Governed Decision Worked Example

```text
Document ID: EX-001
Title: Governed Decision Worked Example
Version: 1.0.0
Status: Approved (Illustrative)
Owner: Product Owner / Training Owner
Classification: Informational
Authority Level: Not Applicable — Illustrative artifact outside normative hierarchy
Depends On: FRM-001, PB-001, SPEC-001
Referenced By: TRN-001 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-035
```

## 1. Scenario

A fictional training portfolio considers changing a target allocation from Asset Class A to Asset Class B. Names, values, and evidence are synthetic. This is not investment advice or a recommendation.

## 2. Walkthrough

- `DEC-EX-001` is created as Draft with a six-month horizon and named authority.
- `PORT-SNAP-EX-001` records synthetic holdings and constraints.
- Three synthetic evidence records are registered with source and as-of dates.
- Alternatives are: no change, phased change, immediate change.
- FRM-001 is executed; uncertainty and one contradictory evidence item are retained.
- An AI execution produces a comparison table, marked proposed and linked to its model/context record.
- A human reviewer requests a sensitivity check; a new Decision revision records it.
- Competent authority approves the phased alternative. Approval does not record external execution.
- A synthetic external action is recorded separately with an idempotency key and acknowledgement.
- A later outcome observation records results without editing the approved decision revision.

## 3. Expected Traceability

An authorized learner can traverse Decision → Portfolio Snapshot → Evidence Revisions → Framework Execution → AI Execution → Review → Approval → External Action → Outcome Review.

## 4. Validation Questions

- [ ] Can the exact evidence and framework versions be identified?
- [ ] Is AI assistance visibly non-authoritative?
- [ ] Are approval and external execution separate?
- [ ] Does later learning preserve the original reasoning?
- [ ] Are all data clearly synthetic and non-advisory?

## 5. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial synthetic worked-example Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 1.0.0 | 2026-08-08 | Retrospectively recorded under CHG-043: this artifact's approval transition (Draft → Approved (Illustrative), Change ID CHG-035) was made under CHG-035 but never received a revision-history row or version increment. Version corrected to 1.0.0 to match the Approved-baseline convention used elsewhere in this project; no scenario content changed. | Chief Architect / Product Owner | CHG-043 |
