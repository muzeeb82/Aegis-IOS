# ADR-004 — Foundational System Architecture

```text
Document ID: ADR-004
Title: Foundational System Architecture
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 3
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-003, PRD-001, AR-SYS-001, RFC-001
Referenced By: SPEC-001 through SPEC-008 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-028
```

## 1. Architecture Question

What foundational system architecture can realize PRD-001's approved requirements while preserving ADR-003's Architecture-to-PRD authority boundary, governed decision traceability, AI independence, replaceable integrations, security, auditability, and future extensibility?

## 2. Decision

Aegis IOS shall use a governed modular-core architecture with ports and adapters. Domain modules own their records and rules; dependencies point inward toward domain contracts. Initial cohesive deployment is permitted. Service extraction requires evidence and a later approved ADR.

Canonical governance and product knowledge remains in governed repository artifacts. Operational records remain in Aegis-owned stores. AI providers, connectors, infrastructure, caches, indexes, and generated summaries remain replaceable and non-authoritative.

Material records preserve immutable revisions and traceable transitions. Protected boundaries use deny-by-default authorization. Cross-boundary work is explicit, idempotent, observable, and recoverable.

## 3. Context

PRD-001 requires governed decisions, provenance, portfolios, frameworks, learning, AI independence, integrations, traceability, access control, operations, and extensions. Before this decision, no approved foundational system architecture realized these requirements.

## 4. Alternatives Considered

1. Document-centric repository only — insufficient operational capability.
2. Provider-centric AI application — violates AI independence and durable ownership.
3. Immediate microservices — premature operational and consistency complexity.
4. Governed modular core — recommended balance.

## 5. Rationale

The proposed modular core is preferred because it provides explicit domain ownership and stable inward-facing contracts without prematurely committing Aegis IOS to distributed deployment. It preserves the approved product requirements as product-owned input: this ADR does not define, amend, or approve PRD-001 capabilities. It also keeps AI providers, connectors, and infrastructure replaceable rather than canonical sources of product or governance knowledge.

## 6. Consequences and Impact Analysis

- Module APIs, dependency direction, data ownership, and conformance tests become mandatory.
- Detailed specifications and security review precede implementation.
- Provider and infrastructure selection remains deferred.
- Later distribution remains possible but is not pre-authorized.

| Consideration | Impact and current disposition |
|---|---|
| Architecture and ownership | Material. Domain boundaries and dependency direction are proposed; RFC-001 records the ownership consultation result. |
| Product requirements | No change. PRD-001 remains the product authority under ADR-003. |
| Security and privacy | Material. Deny-by-default authorization, audit evidence, protected-boundary controls, and a later security specification are required before implementation. |
| Operations and reliability | Material. Observability, recoverability, and operational evidence require detailed specification and validation before implementation. |
| Migration and compatibility | No immediate migration because no implementation exists. Future extraction or interface-version changes require separate evidence and governed decisions. |
| Validation | Material. AR-SYS-001 is `Review Confirmed`; architecture implementation validation remains incomplete and is required before release. |

## 7. Affected Artifacts and Owners

| Artifact | Owner | Relationship |
|---|---|---|
| PRD-001 | Chief Architect / Product Owner | Approved product requirements consumed; not amended by this ADR. |
| ADR-003 | Chief Architect / Product Owner | Approved authority-boundary decision consumed by this ADR. |
| AR-SYS-001 | Chief Architect / Product Owner | Architecture review input; `Review Confirmed`. |
| RFC-001 | Chief Architect / Product Owner | Consultation record and resulting-ADR input; `Approved for Decision`. |
| SPEC-001 through SPEC-009 | Chief Architect / Product Owner | Downstream Draft specifications; no approval or implementation authorized. |
| FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001 | Chief Architect / Product Owner | Downstream Draft delivery artifacts; no approval or implementation authorized. |

## 8. Decision Administration

```text
Decision Authority: Chief Architect / Product Owner
Authority Basis: GOV-001 authority model; GOV-004 §§23–28; ADR-003 Architecture/PRD boundary
Decision Date: 2026-08-08
Related Change ID: CHG-028
Related Architecture Review: AR-SYS-001
Related RFC: RFC-001
Supersession Relationships: None. This ADR neither supersedes nor is superseded by another Approved ADR.
```

## 9. Implementation and Validation Implications

No implementation is authorized by this ADR. Before implementation, an approved GOV-002 change must authorize the exact increment; applicable specifications, security review, and implementation validation obligations must be satisfied; and each increment must remain within this decision's scope.

## 10. Dissent and Readiness Limitations

No material dissent is recorded. The RFC consultation resolves the domain-responsibility interpretation, and AR-SYS-001 is Review Confirmed. No independent reviewer is currently designated; the limitation and compensating reviews are preserved in RFC-001 and CHG-027 and were considered by the Decision Authority before approval.

## 11. Decision Status

**Approved.** This ADR establishes the foundational architecture decision effective 2026-08-08. It governs architecture within its stated scope, but it does not authorize implementation; each implementation increment requires a separate approved GOV-002 change record.

## 12. Validation Checklist

- [x] AR-SYS-001 is Review Confirmed.
- [x] RFC-001 consultation is complete and the RFC is Approved for Decision.
- [x] Decision authority explicitly approves this exact scope.
- [x] Consequences and downstream updates are accepted as Draft design obligations.
- [x] Related GOV-002 change is required and must be approved before implementation.

## 13. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposed foundational architecture decision. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Under CHG-021: added ADR-003 as a direct dependency and completed Draft decision-readiness sections for the architecture question, rationale, impact analysis, affected artifacts, authority basis, implementation/validation implications, and readiness limitations. Draft status retained; no architecture decision or implementation authorization recorded. | Chief Architect / Product Owner | CHG-021 |
| 1.0.0 | 2026-08-08 | Under CHG-028: approved the existing governed modular-core decision after AR-SYS-001 Review Confirmation and RFC-001 approval for decision. No implementation authorization, vendor selection, or product-requirement change. | Chief Architect / Product Owner | CHG-028 |
