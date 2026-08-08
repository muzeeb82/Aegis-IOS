# ADR-004 — Foundational System Architecture

```text
Document ID: ADR-004
Title: Foundational System Architecture
Version: 0.1.0
Status: Draft
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 3
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-003, PRD-001, AR-SYS-001, RFC-001
Referenced By: SPEC-001 through SPEC-008 (proposed)
Last Updated: 2026-08-08
Change ID: CHG-021
```

## 1. Architecture Question

What foundational system architecture can realize PRD-001's approved requirements while preserving ADR-003's Architecture-to-PRD authority boundary, governed decision traceability, AI independence, replaceable integrations, security, auditability, and future extensibility?

## 2. Proposed Decision

Aegis IOS shall use a governed modular-core architecture with ports and adapters. Domain modules own their records and rules; dependencies point inward toward domain contracts. Initial cohesive deployment is permitted. Service extraction requires evidence and a later approved ADR.

Canonical governance and product knowledge remains in governed repository artifacts. Operational records remain in Aegis-owned stores. AI providers, connectors, infrastructure, caches, indexes, and generated summaries remain replaceable and non-authoritative.

Material records preserve immutable revisions and traceable transitions. Protected boundaries use deny-by-default authorization. Cross-boundary work is explicit, idempotent, observable, and recoverable.

## 3. Context

PRD-001 requires governed decisions, provenance, portfolios, frameworks, learning, AI independence, integrations, traceability, access control, operations, and extensions. No approved foundational system architecture currently realizes these requirements.

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
| Validation | Material. AR-SYS-001 remains `Revision Required`; no decision or implementation validation is complete. |

## 7. Affected Artifacts and Owners

| Artifact | Owner | Relationship |
|---|---|---|
| PRD-001 | Chief Architect / Product Owner | Approved product requirements consumed; not amended by this ADR. |
| ADR-003 | Chief Architect / Product Owner | Approved authority-boundary decision consumed by this ADR. |
| AR-SYS-001 | Chief Architect / Product Owner | Architecture review input; currently `Revision Required`. |
| RFC-001 | Chief Architect / Product Owner | Consultation record and resulting-ADR input; currently `Revision Required`. |
| SPEC-001 through SPEC-008 | Chief Architect / Product Owner | Downstream Draft specifications; no approval or implementation authorized. |
| FRM-001, STD-001, PB-001, EX-001, TRN-001, IMP-001 | Chief Architect / Product Owner | Downstream Draft delivery artifacts; no approval or implementation authorized. |

## 8. Decision Administration

```text
Decision Authority: Chief Architect / Product Owner
Authority Basis: GOV-001 authority model; GOV-004 §§23–28; ADR-003 Architecture/PRD boundary
Decision Date: Not established — this ADR remains Draft
Related Change ID: CHG-021
Related Architecture Review: AR-SYS-001
Related RFC: RFC-001
Supersession Relationships: None. This Draft neither supersedes nor is superseded by an Approved ADR.
```

## 9. Implementation and Validation Implications

No implementation is authorized by this Draft. Before any approval or implementation, AR-SYS-001's `Revision Required` findings must be resolved through the applicable governed process; RFC-001 must reach a truthful decision-readiness disposition; affected-owner review, decision authority, and validation implications must be completed; and an approved GOV-002 change must authorize the exact increment.

## 10. Dissent and Readiness Limitations

No material dissent has been resolved as approval evidence. The RFC consultation recorded under RFC-001 resolves the domain-responsibility interpretation, but the outstanding AR-SYS-001 review findings and the absence of an independent reviewer designation remain decision-readiness limitations. They prevent this ADR from moving beyond Draft.

## 11. Decision Status

**Draft — Not Approved.** This record contains a proposed decision only. It does not govern or authorize implementation.

## 12. Validation Checklist

- [ ] AR-SYS-001 is Review Confirmed.
- [ ] RFC-001 consultation is complete.
- [ ] Decision authority explicitly approves this exact scope.
- [ ] Consequences and downstream updates are accepted.
- [ ] Related GOV-002 change is approved before implementation.

## 13. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposed foundational architecture decision. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Under CHG-021: added ADR-003 as a direct dependency and completed Draft decision-readiness sections for the architecture question, rationale, impact analysis, affected artifacts, authority basis, implementation/validation implications, and readiness limitations. Draft status retained; no architecture decision or implementation authorization recorded. | Chief Architect / Product Owner | CHG-021 |
