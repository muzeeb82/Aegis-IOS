# SPEC-006 — Connector and Integration Specification

```text
Document ID: SPEC-006
Title: Connector and Integration Specification
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 5
Depends On: PRD-001, ADR-004, SPEC-001, SPEC-002, SPEC-003, SPEC-004, AR-SYS-001
Referenced By: CHG-018, SPEC-008, SPEC-009, AR-PKG-001, RRC-001
Last Updated: 2026-08-08
Change ID: CHG-034
```

## 1. Connector Contract

A connector declares ID, type, version, owner, provider, supported capabilities, input/output schemas, authentication reference, rate limits, retry policy, data classification, health behavior, compatibility, and lifecycle.

Connector types include market/reference data, broker/custodian, document/research, identity, notification, and export/reporting. This list does not approve a provider.

## 2. Lifecycle

```text
Draft → Conformance Testing → Approved → Active
Active → Suspended → Active
Approved/Active/Suspended → Deprecated → Retired
```

Activation requires authorization and conformance evidence. Suspension stops new work without erasing delivery or provenance history.

## 3. Import

Imports use a durable batch with request, source checkpoint, raw-response reference, mapping version, normalized records, validation results, duplicates, rejects, and reconciliation result. Canonical updates occur only after validation. Replay is idempotent.

## 4. Export and Commands

External commands use an idempotency key and durable delivery record. Ambiguous timeout outcomes enter reconciliation; they are never automatically reported as failed or successful without evidence. External acknowledgement and Aegis state remain distinct facts.

## 5. Reconciliation

Reconciliation compares source and Aegis records at a declared time, identifies missing, extra, stale, conflicting, and mapping-error cases, and records disposition. Automatic correction is limited to explicitly approved safe cases; material differences require review.

## 6. Failure Control

Retries are bounded and classified. Rate limiting, authentication failure, provider outage, invalid content, duplicate delivery, partial response, and schema drift have distinct states and operator guidance. Circuit breaking shall not hide queued obligations.

## 7. Validation Checklist

- [ ] Contract tests use success, duplicate, timeout, rate-limit, authentication, malformed, partial, and schema-drift cases.
- [ ] Imports preserve raw-source and mapping provenance.
- [ ] Exports prove idempotency and ambiguous-outcome reconciliation.
- [ ] Replacement adapter passes the same capability suite.
- [ ] Credentials never enter governed records or logs.
- [ ] Domain behavior remains unchanged when a provider adapter is replaced.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial connector and integration Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Corrected `Referenced By` to the verified direct-consumer inventory established by CHG-015 §3.1 (added CHG-018, AR-PKG-001, RRC-001). | Chief Architect / Product Owner | CHG-015 |
| 0.1.0 | 2026-08-08 | Added SPEC-009 as a verified direct consumer; connector-specific lifecycle and integration ownership remains in SPEC-006. | Chief Architect / Product Owner | CHG-018 |
| 1.0.0 | 2026-08-08 | Retrospectively recorded under CHG-042: this specification's approval transition (Draft → Approved, ADR-004 added as a direct dependency) was made under CHG-034 but never received a revision-history row. Connector ownership and integration boundaries are unchanged; no runtime conformance gate changed. | Chief Architect / Product Owner | CHG-042 |
