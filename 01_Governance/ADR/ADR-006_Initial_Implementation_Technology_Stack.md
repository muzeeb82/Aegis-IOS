# ADR-006 — Initial Implementation Technology Stack

```text
Document ID: ADR-006
Title: Initial Implementation Technology Stack
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Engineering Owner
Classification: Normative
Authority Level: Level 3
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-004, IMP-001, CHG-036, CHG-037
Referenced By: CHG-036, CHG-037
Last Updated: 2026-08-08
Change ID: CHG-037
```

## 1. Context

Increment I0 requires a reproducible local environment, schema tooling, tests, and CI. ADR-004 intentionally deferred technology selection; this decision supplies the minimum stack needed for the initial cohesive deployment without changing the modular-core architecture.

## 2. Decision

The initial implementation uses TypeScript on Node.js for application services and tooling, PostgreSQL for transactional persistence, OpenAPI for external API contracts, Docker for reproducible local service environments, and GitHub Actions for CI quality gates.

Domain modules shall remain independent of database, HTTP, container, and provider SDK details through the ports-and-adapters boundaries approved by ADR-004.

## 3. Alternatives Considered

- Swift/iOS-first: rejected because the current system scope requires a backend operating system and integration boundaries before a client-specific runtime.
- Python-first: rejected for the initial baseline because TypeScript provides one typed language across service code, contracts, tooling, and CI checks.
- Immediate multi-service platform: rejected by ADR-004 as premature.

## 4. Consequences

Increment I0 may now create Node/TypeScript project tooling, PostgreSQL schema/migration tooling, OpenAPI contract scaffolding, Docker local services, and GitHub Actions checks. No vendor-specific AI or connector dependency is selected, and later replacement remains subject to evidence and governed change.

## 5. Approval

Decision Authority: Chief Architect / Product Owner. Authority Basis: ADR-004, GOV-002, and CHG-037. Effective Date: 2026-08-08.

## 6. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 1.0.0 | 2026-08-08 | Approved initial technology selection for Increment I0. | Chief Architect / Engineering Owner | CHG-037 |
