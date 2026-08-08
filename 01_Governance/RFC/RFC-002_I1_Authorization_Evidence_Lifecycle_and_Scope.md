# RFC-002 — I1 Authorization-Evidence Lifecycle and Scope

```text
Document ID: RFC-002
Version: 0.1.0
Status: Proposed
Owner: Chief Architect / Engineering Owner
Classification: Informational
Depends On: GOV-001, GOV-002, SPEC-002, SPEC-004, CHG-044, CHG-048
Last Updated: 2026-08-09
```

## 1. Purpose

Propose a governed I1-owned authorization-evidence lifecycle so I3 and later increments can consume, rather than recreate, authoritative validity and scope semantics.

## 2. Questions for Decision

1. Issued, valid, expired, revoked, and superseded evidence states.
2. Canonical requested-scope schema and matching rules.
3. Authoritative time source and boundary semantics.
4. Revocation timing and concurrent transaction behavior.
5. Historical immutability versus current validity.
6. I3 requested-scope provenance boundary.
7. Migration and backward compatibility for existing I1 evidence.
8. Ownership of validation, reconciliation, and audit events.

## 3. Constraints

I1 remains the authority owner. I3 may reference the exact evidence used but cannot fabricate, modify, or infer I1 validity. Missing, malformed, unavailable, expired, revoked, or scope-mismatched evidence must conservatively reject protected creation.

## 4. Proposed Next Step

Review this RFC and CHG-048. If approved for change, create an ADR that records the actual selected model before any I1/I3 schema or behavior implementation.

## 5. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Proposed RFC. | Chief Architect / Engineering Owner |
