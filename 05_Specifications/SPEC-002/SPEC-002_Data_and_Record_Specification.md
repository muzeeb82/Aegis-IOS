# SPEC-002 — Data and Record Specification

```text
Document ID: SPEC-002
Title: Data and Record Specification
Version: 0.1.0
Status: Draft (Pending Internal Review and Architecture Approval)
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 5
Depends On: PRD-001, SPEC-001, AR-SYS-001
Referenced By: SPEC-003, SPEC-004, SPEC-005, SPEC-006, SPEC-007, SPEC-008, AR-PKG-001, RRC-001
Last Updated: 2026-08-08
Change ID: Not assigned — unapproved Draft
```

## 1. Purpose and Scope

This specification defines canonical operational records, ownership, identity, provenance, revision, lineage, retention, and migration behavior. It does not define repository-document ownership or select a database product.

## 2. Data Domains

| Domain | Owned aggregates |
|---|---|
| Decision | Decision, DecisionRevision, DecisionTransition, Approval |
| Evidence | Evidence, EvidenceRevision, Provenance, Transformation |
| Portfolio | Portfolio, Account, InstrumentMapping, Holding, PortfolioSnapshot, Constraint |
| Framework | FrameworkDefinition, FrameworkVersion, FrameworkExecution |
| Learning | OutcomeObservation, OutcomeReview, LearningRecord |
| AI | AIExecution, AIMessageReference, ToolInvocation |
| Integration | ConnectorDefinition, ImportBatch, ExportDelivery, Reconciliation |
| Identity | PrincipalReference, RoleBinding, PolicyReference, AuthorizationEvidence |
| Operations | Job, Incident, HealthObservation, RecoveryExecution |
| Traceability | TypedRelationship |

Each aggregate has one owning domain. Other domains reference its stable ID and version; they shall not maintain competing canonical copies.

## 3. Common Envelope

Every aggregate shall contain `id`, `record_type`, `schema_version`, `revision`, `lifecycle_state`, `created_at`, `created_by`, `updated_at`, `updated_by`, `effective_at` where applicable, `correlation_id`, `integrity_token`, `sensitivity`, and typed references.

Identifiers are opaque and immutable. Time is stored in UTC with source time retained when materially different. Enumerations are governed and unknown values fail safely.

## 4. Revision and Immutability

- Approved, executed, imported, or audit-significant revisions are immutable.
- Correction creates a successor revision linked by `corrects`; supersession uses `supersedes`.
- Optimistic concurrency prevents lost updates.
- Deletion of protected history is prohibited except through an approved privacy/retention disposition that preserves a non-sensitive tombstone and audit evidence.
- Derived views carry source revisions and may be rebuilt.

## 5. Provenance and Lineage

Provenance records identify source, source identifier, acquisition method, acquired time, source time, license/usage constraint, content hash where feasible, transformation chain, quality observations, and responsible connector or actor.

Every transformation links input versions to output versions. A decision shall continue to resolve the exact data and evidence versions it used.

## 6. Retention and Classification

Retention is policy-driven by record type, jurisdiction, sensitivity, lifecycle, and legal hold. Expiration schedules a governed disposition; it does not silently delete. Encryption-key retirement and content redaction must preserve allowed metadata and audit continuity.

## 7. Migration

Schema changes shall provide compatibility classification, forward migration, rollback or recovery plan, reconciliation query, and validation evidence. Destructive migrations require explicit approval and recoverable backup. Readers shall reject unsupported future schemas rather than misinterpret them.

## 8. Validation

- [ ] Every aggregate has exactly one owner.
- [ ] Required envelope fields are enforced.
- [ ] Historical revisions cannot be overwritten.
- [ ] Provenance traverses from decision input to origin.
- [ ] Concurrency and retry tests prevent duplication and lost updates.
- [ ] Retention/redaction preserves lawful audit evidence.
- [ ] Migration, rollback, and reconciliation execute against representative data.

## 9. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial complete data-contract Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Corrected `Referenced By` to the verified direct-consumer inventory established by CHG-015 §3.1 (added SPEC-004, AR-PKG-001, RRC-001). | Chief Architect / Product Owner | CHG-015 |
