# FRM-001 — Governed Investment Decision Framework

```text
Document ID: FRM-001
Title: Governed Investment Decision Framework
Version: 1.0.0
Status: Approved
Owner: Product Owner / Investment Framework Owner
Classification: Normative
Authority Level: Level 6
Depends On: GOV-001, PRD-001, SPEC-001
Referenced By: PB-001, EX-001, TRN-001 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-035
```

## 1. Purpose

Provides a strategy-neutral process for producing traceable investment decisions. It governs process quality, not investment outcomes, security selection, or guaranteed returns.

### 1.1 Applicability

This Framework is eligible for any investment decision requiring structured, evidence-based evaluation and traceable approval under PRD-001 CAP-001 (Investment Decision Management) and CAP-004 (Investment Framework Execution), including asset allocation changes, security selection, portfolio rebalancing, and risk-mitigation actions, regardless of asset class, portfolio, or strategy. This Framework does not define, narrow, or expand PRD-001's Product Capability Scope; it states only which decisions this Framework itself may process. It is not eligible for a decision outside Investment Decision Management as PRD-001 defines it.

### 1.2 Framework-State Applicability

Only an Approved version of this Framework may be applied where an Approved framework is required. A Draft or retired version shall not be applied in that circumstance. An executor shall verify the Framework's Approved status and version at Stage 3 (Identify approved framework version and required evidence) before proceeding; if no Approved version exists, execution shall stop and escalate per PB-001 §2 Stop Conditions.

## 2. Required Stages

1. Define decision question, owner, authority, scope, horizon, and deadline.
2. Record portfolio context, constraints, and applicable rules.
3. Identify approved framework version and required evidence.
4. Gather evidence with provenance and limitations.
5. Develop materially distinct alternatives, including no-action where applicable.
6. Evaluate alternatives against explicit criteria; record uncertainty and disconfirming evidence.
7. Record reasoning, assumptions, risks, conflicts, and proposed decision.
8. Execute required review and approval.
9. Record external execution/action separately from approval.
10. Observe outcomes at defined horizons; review and capture learning without rewriting the original decision.

## 3. Minimum Outputs

Decision record, evidence links, portfolio snapshot, alternatives, evaluation, risks, authority evidence, execution reference where applicable, outcome plan, and traceability links.

## 4. Failure Conditions

The framework fails when authority is absent, required evidence lacks provenance, material conflicts are hidden, AI output is treated as decision authority, lifecycle stages are bypassed, or results are represented before execution.

## 5. Validation Checklist

- [ ] Every stage has actual evidence or an approved non-applicability rationale.
- [ ] Original decision and later outcome remain separate.
- [ ] AI assistance and human authority are distinguishable.
- [ ] Decision is reproducible from referenced versions.
- [ ] Exceptions and overrides have authority and expiry.

## 6. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial strategy-neutral decision-framework Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Added §1.1 Applicability and §1.2 Framework-State Applicability, realizing SPEC-001 §9's eligible-decision-types and Draft/retired-applicability requirements. | Chief Architect / Product Owner | CHG-019 |
| 0.1.0 | 2026-08-08 | Added GOV-001 to `Depends On`: `Authority Level: Level 6` directly consumes GOV-001 §3's authority model. | Chief Architect / Product Owner | CHG-023 |
| 1.0.0 | 2026-08-08 | Retrospectively recorded under CHG-043: this artifact's approval transition (Draft → Approved, Change ID CHG-035) was made under CHG-035 but never received a revision-history row or version increment. Version corrected to 1.0.0 to match the Approved-baseline convention used elsewhere in this project; no framework content changed. | Chief Architect / Product Owner | CHG-043 |
