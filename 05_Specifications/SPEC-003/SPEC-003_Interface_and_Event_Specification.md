# SPEC-003 — Interface and Event Specification

```text
Document ID: SPEC-003
Title: Interface and Event Specification
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 5
Depends On: PRD-001, ADR-004, SPEC-001, SPEC-002, AR-SYS-001
Referenced By: CHG-031, SPEC-004, SPEC-005, SPEC-006, SPEC-007, SPEC-008, SPEC-009, AR-PKG-001, RRC-001
Last Updated: 2026-08-08
Change ID: CHG-031
```

## 1. Purpose

Defines versioned command, query, API, event, error, idempotency, and compatibility contracts without selecting a transport or implementation framework.

## 2. Contract Rules

- Commands request change; events state completed facts; queries have no domain side effects.
- Every mutation carries request ID, idempotency key, actor context, correlation ID, expected version, and schema version.
- Every response carries outcome, correlation ID, resource version, and structured error when unsuccessful.
- Pagination uses stable cursors; filtering and sorting are explicit and bounded.
- Protected fields are omitted or redacted according to authorization, never merely hidden by clients.

## 3. Core Operations

| Area | Required operations |
|---|---|
| Decisions | create, revise, submit, review, decide, record execution, attach outcome, close, retrieve, search |
| Evidence | register, revise, associate, retrieve provenance |
| Portfolios | create, update mandate reference, ingest positions, snapshot, reconcile, retrieve |
| Frameworks | register version, approve reference, execute, retrieve execution |
| AI | request execution, cancel where safe, retrieve execution and validation |
| Connectors | register, configure reference, activate, synchronize, deliver, reconcile, health |
| Traceability | create typed link, traverse graph, validate dangling link |
| Operations | retrieve health, jobs, incidents, audit and recovery evidence |

## 4. Event Envelope

Events contain event ID, event type, event schema version, aggregate ID/type/version, occurred time, recorded time, actor, correlation, causation, tenant/portfolio scope where applicable, sensitivity, and payload. Event consumers are idempotent and record their processing checkpoint.

## 5. Errors

Error categories are `validation`, `authentication`, `authorization`, `not_found`, `conflict`, `rate_limited`, `dependency_unavailable`, `timeout`, `unsupported_version`, and `internal`. Errors include safe message, machine code, retryability, field issues where safe, and correlation ID. Secrets and protected existence are not disclosed.

## 6. Compatibility

Backward-compatible additions may be Minor; removing, renaming, narrowing, or changing meaning is breaking. Breaking changes require a new major contract version, migration window, consumer inventory, and retirement plan. Events already recorded retain their original schema and meaning.

## 7. Validation

- [ ] Contract tests cover success, validation, authorization, conflict, retry, and dependency failure.
- [ ] Duplicate mutations with one idempotency key produce one governed outcome.
- [ ] Consumer replay does not duplicate material effects.
- [ ] Unsupported schemas fail explicitly.
- [ ] Compatibility tests protect every supported consumer version.
- [ ] Sensitive fields remain protected in errors, logs, and events.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial interface and event-contract Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Corrected `Referenced By` to the verified direct-consumer inventory established by CHG-015 §3.1 (added SPEC-004, AR-PKG-001, RRC-001). | Chief Architect / Product Owner | CHG-015 |
| 0.1.0 | 2026-08-08 | Added SPEC-009 as a verified direct consumer for extension-package interface and compatibility behavior. | Chief Architect / Product Owner | CHG-018 |
| 1.0.0 | 2026-08-08 | Under CHG-031: approved the existing interface and event contract; added ADR-004 as a direct dependency and recorded approval provenance without changing behavior or runtime validation gates. | Chief Architect / Product Owner | CHG-031 |
