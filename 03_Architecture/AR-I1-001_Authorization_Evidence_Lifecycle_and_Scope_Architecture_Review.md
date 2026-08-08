# AR-I1-001 — Authorization-Evidence Lifecycle and Scope Architecture Review

```text
Document ID: AR-I1-001
Title: Authorization-Evidence Lifecycle and Scope Architecture Review
Version: 0.1.0
Status: Draft
Owner: Architecture Review Lead
Classification: Informational
Authority Level: Not Applicable — Architecture Review outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, CHG-044, CHG-047, CHG-048, RFC-002, SPEC-002, SPEC-004
Referenced By: None identified
Related Change ID: CHG-048
Related RFC: RFC-002
Last Updated: 2026-08-09
```

## 1. Architecture Question and Significance

How should I1 establish authoritative, current authorization validity and canonical scope matching while preserving immutable historical evidence for I3 and later consumers? A Full Architecture Review is required because I1, I3, security, data, migration, recovery, audit, and validation ownership are materially affected, and RFC-002 presents multiple viable alternatives.

## 2. Scope, Exclusions, Assumptions, and Boundaries

Scope: lifecycle, scope context, trusted time, revocation, availability, compatibility, audit, recovery, and validation contracts. Exclusions: no selected model, ADR, schema migration, authorization-semantic implementation, or AC-005/006 unblocking. Assumptions: I1 remains sole authorization owner; I3 may retain requested-scope provenance and exact I1 references only. Constraint: missing, malformed, unavailable, expired, revoked, superseded, or scope-mismatched evidence must fail closed once semantics are approved.

## 3. Affected Artifacts and Participants

| Role / artifact | Required contribution |
|---|---|
| Architecture Review Lead | Own review scope, findings, readiness, and disposition. |
| Product Owner / Decision Authority | Confirm decision constraints and approve any later ADR. |
| I1 security owner / CHG-044 | Define authoritative lifecycle and validation implications. |
| I3 portfolio/framework owner / CHG-047 | Define requested-scope provenance and AC impacts. |
| SPEC-002 and SPEC-004 owners | Confirm data-contract and security impacts. |
| Independent validator | Review evidence and compensating controls. |

Role overlap must be recorded. If independent validation is impractical, the review records the limitation and compensating review before disposition.

## 4. Evidence Plan

- Current I1 authorization-evidence schema, behavior, audit chain, and available validity fields.
- I3 requested snapshot/execution context and governance-blocked AC-005/006 cases.
- SPEC-002 data ownership and revision/compatibility requirements.
- SPEC-004 threat analysis: replay, substitution, stale evidence, scope overreach, revocation race, outage, tampering, and audit destruction.
- Migration, backward compatibility, transaction/isolation, authoritative-time, availability, recovery, restart, and reconciliation analysis.
- Test/evidence plan proving negative behavior and historical linkage after the eventual approved implementation.

## 5. Alternatives and Evaluation Criteria

Evaluate every RFC-002 alternative against authority ownership, fail-closed behavior, least privilege, historical immutability, scope precision, concurrency, availability, migration compatibility, auditability, recovery, operational complexity, and I3 non-duplication. Required alternatives include immutable events versus mutable status; point-in-time versus continuing validity; exact/hierarchical/capability scope matching; fail-closed versus grandfathered legacy evidence; synchronous versus reconciliation revocation; database versus trusted I1/application time; and persisted versus synchronous availability validation.

## 6. Findings, Dissent, and Correction Tracking

Findings: Pending. Dissent: None recorded; consultation must provide a dissent channel. Corrections are logged without erasing prior findings. A material finding returns the RFC to Revision Required or adds evidence requirements; it is not silently resolved in implementation.

## 7. Consultation Plan

Consultation is not open. Before RFC-002 may enter `In Review`, this record must identify named reviewers, affected owners, evidence inputs, a response method, an opening date, a closing date, and non-response treatment. Default non-response is recorded as no response, not consent or approval.

## 8. Decision Readiness and Disposition

Readiness requires completed evidence review, alternatives analysis, affected-owner input, risks and migration/recovery implications, dissent disposition, explicit recommendation, and no unresolved blocker. The review may dispose: RFC required, additional evidence required, revision required, or decision-ready. RFC-002 may reach `Approved for Decision` only after its own consultation and this review confirm readiness; only then may a Draft ADR be created.

## 9. Validation Checklist

- [ ] Review scope and Full-review rationale are explicit.
- [ ] Owners, reviewers, role separation, and independence limits are identified.
- [ ] Evidence covers security, data, migration, availability, concurrency, recovery, and reconciliation.
- [ ] Alternatives use consistent evaluation criteria.
- [ ] Consultation window and non-response treatment are defined before opening.
- [ ] AC-005/006 lifecycle cases remain Blocked until an approved ADR and implementation evidence exist.
- [ ] No consultation, ADR, or implementation authorization is implied by Draft status.

## 10. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft Full Architecture Review record for CHG-048 and RFC-002. | Architecture Review Lead |
