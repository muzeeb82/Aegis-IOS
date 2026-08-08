# RFC-001 — Aegis IOS Foundational System Architecture

```text
Document ID: RFC-001
Title: Aegis IOS Foundational System Architecture
Version: 0.1.0
Status: Draft
Owner: Chief Architect / Product Owner
Classification: Informational — Architecture proposal
Authority Level: Not Applicable — RFC outside normative authority hierarchy
Depends On: GOV-002, GOV-003, GOV-004, PRD-001, AR-SYS-001, SPEC-001
Referenced By: ADR-004 (proposed)
Last Updated: 2026-08-08
Change ID: Not assigned — unapproved Draft
```

## 1. Proposal

Adopt the architecture defined in AR-SYS-001: a governed modular core using ports and adapters, immutable governed revisions, event-backed audit evidence, explicit domain/data ownership, deny-by-default security, provider-neutral AI orchestration, and replaceable connectors.

Initial deployment should be cohesive. Distribution into independently deployed services requires later evidence and a separate architecture decision.

## 2. Problem

The approved PRD defines fifteen product requirements but the repository has no approved technical architecture. Implementation without a foundational decision would create hidden ownership, provider coupling, inconsistent records, and uncontrolled integration boundaries.

## 3. Boundaries

The proposal establishes logical architecture, not vendors, protocols, service objectives, providers, or production authorization. Repository governance remains normative; operational storage owns transactions; provider memory and derived indexes remain non-authoritative.

## 4. Alternatives

Repository-only, provider-centric AI, and immediate microservices alternatives are rejected for the reasons recorded in AR-SYS-001 §7. The recommended option best balances correctness, auditability, maintainability, extensibility, reliability, and AI independence.

## 5. Consequences

The design requires disciplined module contracts, data ownership, conformance tests, security review, and eight specifications. It reduces early deployment complexity while preserving future extraction. It prohibits direct provider ownership of domain rules and silent mutation of historical decisions.

## 6. Consultation Questions

- Are the eleven domain responsibilities complete and non-overlapping?
- Is modular-monolith-first appropriate for initial evidence and operating capacity?
- Are normative repository, transactional store, audit stream, and derived-state boundaries clear?
- Are AI and connector promotion/side-effect boundaries sufficiently strict?
- Which decisions require separate ADRs before implementation?

## 7. Disposition

**Draft.** No consultation, approval, implementation, or validation is claimed.

## 8. Validation Checklist

- [ ] Required owners review the complete proposal.
- [ ] Alternatives and impacts are confirmed.
- [ ] Findings are resolved or recorded.
- [ ] Final decision scope is suitable for ADR-004.
- [ ] No vendor choice or implementation is implied.

## 9. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial foundational-architecture RFC Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
