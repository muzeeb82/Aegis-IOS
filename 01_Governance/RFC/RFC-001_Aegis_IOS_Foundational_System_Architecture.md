# RFC-001 — Aegis IOS Foundational System Architecture

```text
Document ID: RFC-001
Title: Aegis IOS Foundational System Architecture
Version: 0.1.0
Status: Approved for Decision
Owner: Chief Architect / Product Owner
Classification: Informational — Architecture proposal
Authority Level: Not Applicable — RFC outside normative authority hierarchy
Depends On: GOV-002, GOV-003, GOV-004, ADR-003, PRD-001, AR-SYS-001, SPEC-001
Referenced By: ADR-004 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-021
```

## 1. Proposal

Adopt the architecture defined in AR-SYS-001: a governed modular core using ports and adapters, immutable governed revisions, event-backed audit evidence, explicit domain/data ownership, deny-by-default security, provider-neutral AI orchestration, and replaceable connectors.

Initial deployment should be cohesive. Distribution into independently deployed services requires later evidence and a separate architecture decision.

## 2. Problem

The approved PRD defines fifteen product requirements but the repository has no approved technical architecture. Implementation without a foundational decision would create hidden ownership, provider coupling, inconsistent records, and uncontrolled integration boundaries.

## 3. Scope and Boundaries

The proposal establishes logical architecture, not vendors, protocols, service objectives, providers, or production authorization. Repository governance remains normative; operational storage owns transactions; provider memory and derived indexes remain non-authoritative.

## 4. Current State

The repository has an approved governance and product baseline but no Approved foundational architecture. AR-SYS-001 supplies the architecture-review input and is `Review Confirmed` under GOV-004 §14. ADR-004 is a related Draft decision record, not an approved architecture. No production implementation, vendor selection, or operational migration is authorized.

## 5. Proposed Architecture

The proposal is the governed modular core described in §1. It assigns each domain one canonical system responsibility and uses ports and adapters for external integrations. Requirement coverage may span domains, but shared requirement coverage is not shared ownership of records or rules: the named domain responsibility in AR-SYS-001 §8.3 remains the ownership boundary.

## 6. Alternatives

Repository-only, provider-centric AI, and immediate microservices alternatives are rejected for the reasons recorded in AR-SYS-001 §7. The recommended option best balances correctness, auditability, maintainability, extensibility, reliability, and AI independence.

## 7. Rationale

The proposed architecture is preferred because it retains governed knowledge and product authority in Aegis IOS, isolates replaceable providers and connectors, and permits a cohesive initial deployment without precluding later extraction. It is not proposed as a substitute for PRD-001 requirements or as an approval of an implementation.

## 8. Consequences

The design requires disciplined module contracts, data ownership, conformance tests, security review, and eight specifications. It reduces early deployment complexity while preserving future extraction. It prohibits direct provider ownership of domain rules and silent mutation of historical decisions.

## 9. Impact Analysis

| Consideration | Assessment |
|---|---|
| Architecture and ownership | Material. The proposal establishes logical module boundaries and must preserve one owner for each canonical runtime responsibility. |
| Product and governance authority | No change. PRD-001 remains product authority and the repository remains normative knowledge authority, consistent with ADR-003. |
| Security and privacy | Material. Deny-by-default authorization, audit evidence, secret references, and protected-boundary controls require detailed design and validation before implementation. |
| Operations, reliability, and observability | Material. Runtime evidence, recovery, monitoring, and failure semantics require specification and validation before implementation. |
| Migration and compatibility | No current migration because no implementation exists. Future service extraction, schema evolution, and connector changes require explicit evidence and governed decisions. |
| Downstream artifacts | Material. ADR-004, the specification set, and delivery artifacts remain Draft and cannot be treated as approval or implementation evidence. |

## 10. Affected Owners

All currently affected artifacts are owned by the Chief Architect / Product Owner. This identifies accountability but does not satisfy the independent-review preference for Major changes where a separate reviewer can be designated.

| Area | Accountable owner | Affected artifact(s) |
|---|---|---|
| Product requirements | Chief Architect / Product Owner | PRD-001 |
| Architecture review and decision | Chief Architect / Product Owner | AR-SYS-001, ADR-004 |
| Specification and delivery design | Chief Architect / Product Owner | SPEC-001 through SPEC-008, FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001 |

## 11. Migration, Security, and Operational Considerations

No production migration is proposed. The initial deployment remains cohesive; extraction is deferred until evidence supports it. Before implementation, the applicable specifications and validation must address contract/version compatibility, data-transition safety, authorization, protected-data handling, auditability, connector failure behavior, observability, recovery, and operational ownership.

## 12. Consultation Questions

- Are the eleven domain responsibilities complete and non-overlapping?
- Is modular-monolith-first appropriate for initial evidence and operating capacity?
- Are normative repository, transactional store, audit stream, and derived-state boundaries clear?
- Are AI and connector promotion/side-effect boundaries sufficiently strict?
- Which decisions require separate ADRs before implementation?

## 13. Consultation Record

```text
Consultation State: Completed — decision readiness confirmed under CHG-027
Consultation Window: 2026-08-08
Proposal Owner and Author: Chief Architect / Product Owner
Affected Owner: Chief Architect / Product Owner
Reviewer Designation: No independent reviewer is currently designated
Compensating Control: Separately recorded criteria-driven reviews under CHG-021 and CHG-027, checked after correction against GOV-004 §§19–22 and the applicable Architecture Review criteria; a separate independent reviewer remains preferred where practical before ADR approval.
```

| Topic | Comment and evidence | Author response / disposition |
|---|---|---|
| Domain-responsibility overlap | AR-SYS-001 §8.3 maps several requirements to more than one domain, while this RFC previously asked whether responsibilities were non-overlapping. | **Resolved for this proposal:** multi-domain requirement coverage expresses collaboration and traceability, not duplicate canonical ownership. Each domain retains the distinct responsibility named in AR-SYS-001 §8.3; cross-domain operations must use explicit contracts. Detailed data/API ownership remains for the specifications and is not decided here. |
| Architecture/PRD boundary | ADR-003 prohibits Architecture artifacts from defining product capability requirements. | Confirmed. This RFC consumes PRD-001 but does not add, amend, or approve product requirements. |
| AR-SYS-001 readiness | AR-SYS-001 is `Review Confirmed` under CHG-027. | **Resolved.** The Architecture Review now supplies confirmed decision-readiness evidence; ADR approval remains a separate action. |
| Role separation | Proposal owner, affected owner, and decision authority are presently the same role. | No independent reviewer is currently designated. A separate post-correction criteria review under CHG-027 is the compensating control; a distinct reviewer remains preferred where practical before ADR approval. |

## 14. Review Comments and Dissent

No external reviewer comments or dissent have been received because no independent reviewer is currently designated. This absence is not approval. The Architecture Review confirmation and the recorded compensating review resolve RFC decision readiness; the continuing absence of a designated independent reviewer remains a disclosed limitation for the Decision Authority rather than silent consensus.

## 15. Resulting ADRs

ADR-004 is the related Draft ADR that may record an architecture decision only after this RFC is truthfully ready for decision and the ADR's own GOV-004 requirements are met. This RFC neither approves ADR-004 nor establishes architecture.

## 16. Disposition

**Approved for Decision.** Consultation has resolved the domain-responsibility interpretation and AR-SYS-001 is Review Confirmed. This RFC is sufficiently developed to proceed to ADR-004 decision; it does not approve architecture, implementation, or validation.

## 17. Validation Checklist

- [x] Affected-owner consultation and recorded responses are present; absence of an independent reviewer is explicitly recorded as a limitation.
- [x] Alternatives and impact categories are recorded.
- [x] The domain-responsibility overlap interpretation is resolved for this proposal; remaining readiness limitations are recorded.
- [x] AR-SYS-001 review findings are resolved and final decision scope is suitable for ADR-004.
- [x] No vendor choice or implementation is implied.

## 18. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial foundational-architecture RFC Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Under CHG-021: added ADR-003 as a direct dependency; completed required RFC decision-readiness content and consultation record; recorded the domain-responsibility disposition and readiness limitations. Status transitioned `Draft → In Review → Revision Required`; no approval or implementation authorization recorded. | Chief Architect / Product Owner | CHG-021 |
| 0.2.0 | 2026-08-08 | Under CHG-027: re-executed RFC consultation/readiness review after AR-SYS-001 reached Review Confirmed; transitioned `Revision Required → In Review → Approved for Decision`. Architecture approval remains exclusively for ADR-004. | Chief Architect / Product Owner | CHG-027 |
