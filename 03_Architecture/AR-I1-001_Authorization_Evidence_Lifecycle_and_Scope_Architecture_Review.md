# AR-I1-001 — Authorization-Evidence Lifecycle and Scope Architecture Review

```text
Document ID: AR-I1-001
Title: Authorization-Evidence Lifecycle and Scope Architecture Review
Version: 0.2.2
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
| Architecture Review Lead — Muzeeb ur Rahman Farooqi | Own review scope, findings, readiness, and disposition. |
| Candidate Decision Authority (Product Owner) — Muzeeb ur Rahman Farooqi | Confirm decision constraints; decision-authority basis must be recorded before any later ADR approval. |
| I1 security owner / CHG-044 — Muzeeb ur Rahman Farooqi | Define authoritative lifecycle and validation implications. |
| I3 portfolio/framework owner / CHG-047 — Muzeeb ur Rahman Farooqi | Define requested-scope provenance and AC impacts. |
| SPEC-002 and SPEC-004 owners — Muzeeb ur Rahman Farooqi | Confirm data-contract and security impacts. |
| Validator — Muzeeb ur Rahman Farooqi (not independent) | Review evidence and compensating controls. |

All listed roles are currently held by Muzeeb ur Rahman Farooqi. Validation is therefore not independent. Before a final decision-readiness disposition, an external or otherwise independent reviewer must be designated and must review the evidence bundle and any dissent disposition; this is the compensating control for the recorded overlap.

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

Consultation is not open. Before the confirmed opening time, this record must identify named reviewers, affected owners, immutable evidence inputs, a response method, an opening date, a closing date, and non-response treatment. At that opening time, AR-I1-001 and RFC-002 transition to `In Review` and consultation begins. Default non-response is recorded as no response, not consent or approval.

### 7.1 Draft Consultation Setup — Not Open

This setup prepares consultation only. It does not open consultation, establish consent, determine readiness, approve RFC-002, authorize an ADR, or authorize implementation.

**Window and channel**

- Proposed opening: 2026-08-11, 10:00 Asia/Kolkata (IST).
- Proposed closing: 2026-08-15, 18:00 Asia/Kolkata (IST).
- Authoritative response channel: top-level comments on GitHub PR #10.
- Inline comments may identify artifact-specific findings, but must be summarized in a top-level PR #10 comment before the consultation closes.
- The Architecture Review Lead records a dated consultation summary and preserves links to all response comments as the review record.

**Required evidence inputs and access responsibilities**

| Input | Pinned reference | Responsible owner | Required use |
|---|---|---|---|
| I1 authorization foundation | CHG-044 v1.1.0, commit `2e22b300a0344cc4963d486c17b9fe539b0992b4`; current `master` baseline commit `031e98d3702f09b62606aa4b6cc59137690f1838` | I1 security owner | Establish current evidence, audit, and authorization behavior. |
| I3 authorized boundary | CHG-047 v1.0.0, commit `01890a75489ab7b1d0ccbc09b39fb1ba6467b2a2` | I3 portfolio/framework owner | Identify requested-scope provenance and governance-blocked AC-005/006 cases. |
| Change assessment | CHG-048 v0.2.2, commit `fd6f231c9d4ae914e1c9a6932029200d836a233a` | Architecture Review Lead | Establish impacts, risks, and the assessment-only boundary. |
| RFC proposal | RFC-002 v0.2.2, commit `fd6f231c9d4ae914e1c9a6932029200d836a233a` | Architecture Review Lead | Evaluate alternatives without selecting one prematurely. |
| Normative data constraints | SPEC-002 v1.0.0, commit `1f3f865ef8b79586aff2174523a7ac95a2e1b2f6` | SPEC-002 owner | Assess data-contract, migration, recovery, and validation effects. |
| Normative security constraints | SPEC-004 v1.0.0, commit `de3e41612127cd8212a0889a4fc559bf16a5e0c6` | SPEC-004 owner | Assess security, availability, recovery, and validation effects. |

**Review questions and evaluation**

Responses must address the architecture question in §1 and evaluate each RFC-002 alternative using the §5 criteria: authority ownership, fail-closed behavior, least privilege, historical immutability, scope precision, concurrency, availability, migration compatibility, auditability, recovery, operational complexity, and I3 non-duplication. The review must specifically establish whether lifecycle validity, canonical scope matching, trusted time, and availability checks remain solely owned by I1.

**Response, dissent, and exception handling**

- Non-response is recorded as no response and is never consent or approval.
- A late response is preserved in the record but does not automatically reopen consultation. The Architecture Review Lead decides whether a material late finding requires an extension or suspension and records the reason.
- A dissent must be a top-level PR #10 comment labelled `Dissent`, including supporting evidence, risk, and requested resolution. The Architecture Review Lead records its disposition; unresolved material dissent prevents a decision-ready outcome.
- Consultation may be extended or suspended for a material finding, missing evidence, unavailable required participant, unresolved dissent, or a change to the defined scope. Any such action is recorded in the PR and this review record before the original closing time where practicable.

**Required output and disposition owner**

The Architecture Review Lead owns the consultation summary, findings, dissent disposition, evidence index, and recommendation. After consultation begins in `In Review`, its documented outcome may be additional evidence required, `Revision Required`, `Deferred`, `Rejected`, continued review, or—only when all decision-readiness requirements pass—`Approved for Decision`. Consultation cannot itself create an ADR or authorize implementation.

### 7.2 Draft Opening Action — Pending Review

On 2026-08-09, Muzeeb ur Rahman Farooqi confirmed availability for the proposed 2026-08-11 10:00 IST through 2026-08-15 18:00 IST window and access to the §7.1 evidence bundle. The Architecture Review Lead independently verified that each pinned commit in §7.1 resolves in the local repository on the same date.

The named operating roles are held by Muzeeb ur Rahman Farooqi; the independent-validator limitation and compensating control in §3 remain in force. No independent reviewer is yet designated, and this prevents a final decision-readiness disposition but does not alter the Draft consultation setup.

If this opening action is accepted in review, the Architecture Review Lead must make a separate, dated PR #10 top-level opening notice that identifies: this governing record at its then-current commit; the Architecture Review Lead; participating role holders and the non-independent-validation limitation; the authoritative response channel; the confirmed closing timestamp; the non-response and dissent rules; and the §7.1 evidence bundle. In that same recorded action, AR-I1-001 and RFC-002 may transition from `Draft` to `In Review`, and consultation may begin. Until then, both artifacts remain `Draft` and consultation is not open.

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
| 0.1.1 | 2026-08-09 | Clarified the Product Owner as a candidate Decision Authority pending an explicit recorded authority basis. | Architecture Review Lead |
| 0.2.0 | 2026-08-09 | Added Draft-only consultation setup: named role holders, overlap limitation and compensating review, evidence inputs, proposed dates, PR #10 channel, response handling, and disposition controls. Consultation remains unopened. | Architecture Review Lead |
| 0.2.1 | 2026-08-09 | Corrected consultation lifecycle ordering and replaced mutable SPEC references with immutable versioned commit references. Dates remain proposed pending verified availability and evidence access. | Architecture Review Lead |
| 0.2.2 | 2026-08-09 | Recorded availability and evidence-access confirmation and added a Draft opening action for review. No status transition or consultation opening occurred. | Architecture Review Lead |
