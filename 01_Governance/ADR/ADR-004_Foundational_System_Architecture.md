# ADR-004 — Foundational System Architecture

```text
Document ID: ADR-004
Title: Foundational System Architecture
Version: 0.1.0
Status: Draft
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 3
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, PRD-001, AR-SYS-001, RFC-001
Referenced By: SPEC-001 through SPEC-008 (proposed)
Last Updated: 2026-08-08
Change ID: Not assigned — unapproved Draft
```

## 1. Proposed Decision

Aegis IOS shall use a governed modular-core architecture with ports and adapters. Domain modules own their records and rules; dependencies point inward toward domain contracts. Initial cohesive deployment is permitted. Service extraction requires evidence and a later approved ADR.

Canonical governance and product knowledge remains in governed repository artifacts. Operational records remain in Aegis-owned stores. AI providers, connectors, infrastructure, caches, indexes, and generated summaries remain replaceable and non-authoritative.

Material records preserve immutable revisions and traceable transitions. Protected boundaries use deny-by-default authorization. Cross-boundary work is explicit, idempotent, observable, and recoverable.

## 2. Context

PRD-001 requires governed decisions, provenance, portfolios, frameworks, learning, AI independence, integrations, traceability, access control, operations, and extensions. No approved foundational system architecture currently realizes these requirements.

## 3. Alternatives

1. Document-centric repository only — insufficient operational capability.
2. Provider-centric AI application — violates AI independence and durable ownership.
3. Immediate microservices — premature operational and consistency complexity.
4. Governed modular core — recommended balance.

## 4. Consequences

- Module APIs, dependency direction, data ownership, and conformance tests become mandatory.
- Detailed specifications and security review precede implementation.
- Provider and infrastructure selection remains deferred.
- Later distribution remains possible but is not pre-authorized.

## 5. Decision Status

**Draft — Not Approved.** This record contains a proposed decision only. It does not govern or authorize implementation.

## 6. Validation Checklist

- [ ] AR-SYS-001 is Review Confirmed.
- [ ] RFC-001 consultation is complete.
- [ ] Decision authority explicitly approves this exact scope.
- [ ] Consequences and downstream updates are accepted.
- [ ] Related GOV-002 change is approved before implementation.

## 7. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposed foundational architecture decision. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
