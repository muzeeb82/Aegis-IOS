# GOV-004 Architecture Review

```text
Document ID: AR-GOV-004-001
Title: GOV-004 Architecture Governance Architecture Review
Version: 0.1.0
Status: Validated
Owner: Chief Architect / Product Owner
Classification: Informational — Architecture Review
Authority Level: Not Applicable — Informational review artifact outside the normative authority hierarchy
Depends On: CONST-001, GOV-001, GOV-002, GOV-003, RB-GOV-004-001, ADR-002, ADR-003
Referenced By: GOV-004
Last Updated: 2026-08-07
```


## 1. Review Objective

Determine how GOV-004 should formally govern architecture qualification, Architecture Reviews, RFCs, ADRs, implementation conformance, and architectural supersession without:

- Creating a parallel change lifecycle.
- Creating a parallel authority hierarchy.
- Treating consultation as approval.
- Treating an approved decision as implemented architecture.
- Treating implementation as validated conformance.
- Absorbing GOV-003 document representation.
- Rewriting the provenance of ADR-002 or ADR-003.
- Creating an ungoverned emergency path.
- Establishing unsupported repository conventions silently.

## 2. Architectural Disposition

**Disposition: Architecturally sound — proceed to the GOV-004 full draft after validation of this review.**

GOV-004 should operate as the architecture-specific decision-governance layer within the existing governance system:

```text
GOV-001
    └── authority, ownership, classifications, conflict resolution

GOV-002
    └── general change lifecycle, implementation, validation, closure

GOV-003
    └── artifact identity, metadata, structure, status representation

GOV-004
    └── architecture qualification, review, RFCs, ADRs, conformance
```

This is a responsibility model, not a new authority hierarchy.

## 3. Core Architectural Decisions

### AD-GOV004-001 — One Governing Lifecycle

Architecture work shall participate in one architecture-governance lifecycle:

**Question Identified → Qualified → Review Initiated → Inputs Prepared → Reviewed → Decision Authorized → Decision Recorded → Change Implemented → Conformance Validated → Closed**

This lifecycle operates within the broader GOV-002 change lifecycle.

Architecture Reviews, RFCs, ADRs, and GOV-002 Change Records perform different functions within the lifecycle. They shall not create competing end-to-end processes.

### AD-GOV004-002 — Four Distinct Record Responsibilities

The four principal records shall remain distinct:

| Record | Responsibility |
|---|---|
| GOV-002 Change Record | Governs the overall change, approval, implementation, validation, and closure |
| Architecture Review | Evaluates the architecture question, evidence, alternatives, impacts, risks, and decision readiness |
| RFC | Develops a material proposal through structured consultation |
| ADR | Records the approved architecture decision |

One record may reference another, but shall not acquire the other record’s responsibility.

### AD-GOV004-003 — Qualification Precedes Process Selection

Every potential architecture change shall first be qualified for architectural significance.

Qualification determines:

- Whether architecture governance is required.
- Required review depth.
- Whether consultation through an RFC is required.
- Whether a direct ADR path is permitted.
- Required decision authority.
- Required conformance validation.

Process selection shall not be based solely on document size, implementation effort, or schedule pressure.

### AD-GOV004-004 — Architecture Significance Is Distinct from Change Classification

GOV-002 change classification and GOV-004 architecture significance answer different questions:

- **Change classification:** How significant is the governed change overall?
- **Architecture significance:** How material are its architectural consequences?

The architecture-significance levels shall be:

1. No Architecture Review Required.
2. Focused Architecture Review.
3. Full Architecture Review.
4. Strategic Architecture Review.

The two assessments inform each other but do not map automatically one-to-one.

### AD-GOV004-005 — Architecture Review Is the Common Evaluation Mechanism

A Focused, Full, or Strategic architecture matter shall receive an Architecture Review proportionate to its significance.

The review may be embedded within an RFC process or conducted as a separately identified review.

An Architecture Review shall conclude with a recorded disposition, such as:

- No architecture decision required.
- Direct ADR permitted.
- RFC required.
- Additional evidence required.
- Proposal requires correction.
- Conflict requires escalation.
- Proposal rejected.
- Decision deferred.

An Architecture Review does not itself become an approved architecture decision unless the final decision is separately recorded through an ADR.

### AD-GOV004-006 — RFC-First and Direct-ADR Paths Are Both Permitted

A direct ADR path is permitted when:

- The architectural question is sufficiently understood.
- Material alternatives are already known and assessable.
- Affected owners are identifiable.
- Consultation scope is limited.
- The decision does not require broad proposal development.
- Impact analysis is sufficient.
- The Architecture Review confirms decision readiness.

An RFC-first path is required when:

- Multiple materially viable alternatives require structured consultation.
- Several owners or domains are materially affected.
- The proposal introduces a cross-cutting mechanism.
- Migration or compatibility consequences are substantial.
- The proposal requires iterative development before decision.
- Strategic direction is affected.
- The Architecture Review determines that the proposal is not ready for direct decision.

Bypassing an RFC shall not permit bypassing Architecture Review, impact analysis, affected-owner consultation, or decision authority.

### AD-GOV004-007 — RFC Is a Proposal, Not a Decision

An RFC shall develop and expose a proposal for structured review.

Completion, consensus, or wide support does not make an RFC an approved architecture decision.

An RFC may result in:

- One ADR.
- Multiple ADRs.
- Revision.
- Deferral.
- Rejection.
- Withdrawal.
- No ADR.

A lasting approved architecture decision shall be recorded in an ADR.

### AD-GOV004-008 — ADR Is the Authoritative Decision Record

Each approved architecture decision shall have one authoritative ADR.

An ADR shall state:

- The architectural question.
- Context.
- Decision.
- Alternatives.
- Rationale.
- Consequences.
- Authority.
- Affected relationships.
- Implementation and validation implications.
- Supersession relationships.

An ADR shall not absorb unrelated governance rules, product requirements, specifications, or implementation detail merely because they are affected by the decision.

### AD-GOV004-009 — Approved Is the Canonical Positive ADR Status

The canonical positive ADR status shall be:

```text
Status: Approved
```

This preserves consistency with ADR-002 and ADR-003 and aligns with GOV-003 artifact-status representation.

Permitted ADR statuses shall include:

- Draft.
- Approved.
- Rejected.
- Superseded.
- Deprecated.
- Withdrawn.
- Archived.

`Accepted` may appear in explanatory text but shall not become a parallel positive ADR status.

ADR status remains distinct from GOV-002 change-record lifecycle state.

### AD-GOV004-010 — Decision Authority Is Derived

GOV-004 shall not create a separate architecture authority hierarchy.

Decision authority shall derive from:

- GOV-001.
- Canonical concept ownership.
- Affected artifact authority.
- Applicable approved ADRs.
- Approved delegation.
- GOV-002 change classification.
- GOV-004 architecture significance.

An ADR cannot approve a change beyond the authority of its Decision Authority.

A proposed decision affecting constitutional content, canonical ownership, or authority relationships shall be routed to the applicable higher authority.

### AD-GOV004-011 — Dissent Is Preserved but Does Not Automatically Veto

Material dissent shall be recorded with:

- Concern.
- Evidence.
- Affected risk.
- Requested resolution.
- Final disposition.

A concern blocks decision when it identifies an unresolved violation of higher authority, canonical ownership, mandatory architecture constraint, or required validation condition.

Other dissent may be accepted as a known risk by competent Decision Authority.

Dissent does not create veto authority unless an approved governing rule assigns it.

### AD-GOV004-012 — Decision, Implementation, and Conformance Are Separate

The process shall preserve:

```text
Architecture Decision → Implementation → Conformance Validation
```

An Approved ADR establishes the decision.

It does not prove that:

- Implementation occurred.
- Implementation is complete.
- Implementation conforms.
- Required migration succeeded.
- Expected consequences were realized.

The GOV-002 change record governs implementation and closure. GOV-004 governs architecture-conformance criteria and review.

### AD-GOV004-013 — Architecture Validation Uses Executed Evidence

Conformance validation shall evaluate the actual artifact or implementation against:

- Approved ADRs.
- Applicable architecture constraints.
- Required interfaces and boundaries.
- Dependency direction.
- Approval conditions.
- Migration requirements.
- Applicable GOV-001 Quality Attributes.
- Absence of unauthorized drift.

Expected conformance shall not be recorded as validated conformance.

### AD-GOV004-014 — Supersession Is Explicit and Historical

An ADR may be:

- Fully superseded.
- Partially superseded.
- Amended.
- Deprecated.
- Retired through archival where appropriate.

Full supersession replaces the complete governing effect of the earlier decision.

Partial supersession shall identify the exact provisions replaced and those that remain governing.

Supersession shall preserve:

- Original ADR identity.
- Historical context.
- Replacement relationship.
- Effective date.
- Migration implications.
- Dependent-artifact impacts.

An ADR identifier shall not be reused.

### AD-GOV004-015 — Emergency Architecture Decisions Remain Governed

Emergency architecture decisions shall use an expedited path within GOV-002 and GOV-004.

The minimum path shall retain:

- Emergency qualification.
- Named accountable authority.
- Defined temporary or permanent scope.
- Available evidence.
- Risk assessment.
- Recovery or rollback approach.
- Retrospective Architecture Review.
- ADR creation when a lasting decision results.
- Conformance validation.
- Closure.

Schedule pressure alone does not qualify as an emergency.

### AD-GOV004-016 — Existing ADR Provenance Is Preserved

ADR-002 and ADR-003 remain approved architecture decisions.

They shall be described as products of the precedent-based review discipline that existed before GOV-004.

GOV-004 shall not claim that:

- It governed their creation.
- Their review process was already formally codified.
- Their validity depends on retrospective conformance.
- Their metadata or filenames must change automatically.

Future changes to them shall follow GOV-002, GOV-003, and GOV-004 as applicable.

### AD-GOV004-017 — GOV-004 Applies Prospectively

GOV-004 becomes governing when its approved version becomes effective.

Architecture work initiated afterward shall follow GOV-004.

In-progress architecture work shall be assessed at transition:

- If no material review or decision has occurred, it shall adopt GOV-004.
- If review is substantially complete but no decision exists, the responsible owner shall map existing evidence into the applicable GOV-004 path.
- If an architecture decision is already approved, it shall retain its provenance and shall not be reopened solely because it predates GOV-004.
- Any material new change after GOV-004 approval shall follow GOV-004.

### AD-GOV004-018 — Supporting Artifacts Use the Established Companion-First Pattern

The established pattern is:

```text
<COMPANION-TYPE>-<PRIMARY-ARTIFACT-ID>-<NUMBER>
```

Accordingly, `RB-GOV-004-001` and `AR-GOV-004-001` identify the GOV-004 Requirements Baseline and Architecture Review. The retired identifiers `GOV-004-RB-001` and `GOV-004-AR-001` shall not be reused.

This pattern is scoped to the supporting artifacts represented in this workstream. Repository-wide generalization requires a governed GOV-003 change.

## 4. Architecture Significance Model

### 4.1 No Architecture Review Required

Appropriate when the proposed change:

- Does not alter architectural meaning.
- Does not change a boundary, dependency, interface, constraint, or cross-cutting mechanism.
- Does not affect architecture conformance.
- Is accurately handled through ordinary GOV-002 review.

The qualification and rationale should still be recorded when architectural significance was reasonably in question.

### 4.2 Focused Architecture Review

Appropriate when:

- The effect is architecturally real but contained.
- A limited number of components or owners are affected.
- Existing architecture principles and patterns clearly constrain the solution.
- Migration and reversibility are manageable.
- A direct ADR may be appropriate.

### 4.3 Full Architecture Review

Required when:

- Multiple components, owners, or artifact families are materially affected.
- Cross-cutting interfaces or dependencies change.
- Material alternatives exist.
- Migration, compatibility, security, or operational consequences are significant.
- A new architectural mechanism or constraint is introduced.

### 4.4 Strategic Architecture Review

Required when the proposal affects:

- Foundational system direction.
- Constitutional boundaries.
- Canonical ownership.
- Authority relationships.
- Product or system identity.
- Fundamental architecture style.
- Long-term provider or technology independence.
- Organization-wide or baseline-level architectural commitments.

A Strategic Architecture Review does not itself possess authority to amend higher-authority artifacts.

## 5. Process-Selection Model

| Qualification result | Architecture Review | RFC | ADR |
|---|---|---|---|
| No Architecture Review Required | Qualification record only | No | No, unless a decision record is independently warranted |
| Focused | Focused review | Optional | Required for a lasting architecture decision |
| Full | Full review | Required when structured proposal development or broad consultation is needed | Required for an approved decision |
| Strategic | Strategic review | Normally required | Required for each approved architecture decision |

This table is a default process-selection model.

The recorded qualification and review disposition shall govern the actual path.

## 6. Architecture Review Record Model

An Architecture Review shall contain or link to:

- Stable Review ID.
- Title.
- Version.
- Status.
- Review objective.
- Architecture question.
- Scope.
- Change ID.
- Review significance.
- Current architecture.
- Proposed change.
- Constraints.
- Alternatives.
- Affected artifacts and owners.
- Impact analysis.
- Evidence.
- Assumptions.
- Risks.
- Dissent.
- Findings.
- Required corrections.
- Disposition.
- Decision path.
- Validation checklist.
- Revision history.

GOV-003 governs physical representation. GOV-004 owns these architecture-specific semantics.

## 7. RFC Architecture

### 7.1 Required RFC Responsibilities

An RFC shall contain or link to:

- Stable RFC ID.
- Problem or opportunity.
- Scope.
- Proposed architecture.
- Current state.
- Alternatives.
- Rationale.
- Impact analysis.
- Affected owners.
- Migration considerations.
- Security and operational considerations.
- Open questions.
- Review comments.
- Dissent.
- Disposition.
- Resulting ADRs.
- Revision history.

### 7.2 RFC Status Profile

GOV-004 owns the architecture-specific meanings of the RFC status values.

| Status | Type | Meaning | Terminal |
|---|---|---|---|
| Draft | Artifact maturity | Proposal is being prepared | No |
| In Review | Proposal/review status | Structured consultation is active | No |
| Revision Required | Review disposition | Material correction is required | No |
| Approved for Decision | Proposal-readiness status | Proposal may proceed to the separate decision process; architecture is not approved | No |
| Rejected | Decision outcome | Proposal will not proceed under its current scope | Yes |
| Deferred | Proposal disposition | Work or decision is postponed | No |
| Withdrawn | Common disposition | Proposal was removed | Yes |
| Superseded | Common maturity | A later RFC replaced it | Yes |
| Archived | Common maturity | Retained outside active processing | Yes |

RFC status does not include `Approved`. Only a resulting ADR may reach `Approved`. `Approved for Decision` is not architecture approval, ADR approval, implementation authorization, or GOV-002 completion.

### 7.3 RFC Status Transitions

```text
Draft → In Review
In Review → Revision Required
Revision Required → Draft
Revision Required → In Review
In Review → Approved for Decision
In Review → Rejected
In Review → Deferred
Deferred → Draft
Deferred → In Review
Draft → Withdrawn
In Review → Withdrawn
Revision Required → Withdrawn
Deferred → Withdrawn
Approved for Decision → Superseded
Approved for Decision → Archived
Rejected → Archived
Withdrawn → Archived
Superseded → Archived
```

## 8. ADR Architecture

### 8.1 Required ADR Responsibilities

An ADR shall contain:

- Document ID.
- Title.
- Version.
- Status.
- Owner.
- Classification.
- Authority Level.
- Depends On.
- Referenced By.
- Last Updated.
- Context.
- Decision.
- Alternatives considered.
- Rationale.
- Consequences.
- Affected artifacts.
- Decision Authority.
- Decision date.
- Related Change ID.
- Related Review or RFC.
- Implementation implications.
- Validation implications.
- Supersession relationships.
- Revision history.

Conditional metadata fields shall follow GOV-003 without automatic retrofit to existing ADRs.

### 8.2 Decision Atomicity

An ADR should record one coherent architecture decision.

Several tightly coupled decisions may share an ADR only when separating them would make the decision incomplete or misleading.

Unrelated decisions shall not be combined for convenience.

### 8.3 Consequences

Consequences shall include material:

- Benefits.
- Costs.
- Constraints.
- Risks.
- Migration requirements.
- Operational effects.
- Deferred decisions.
- Known limitations.

### 8.4 ADR Status Profile

| Status | Type | Meaning | Terminal |
|---|---|---|---|
| Draft | Common artifact maturity | Proposed decision record not yet approved | No |
| Approved | Common maturity and positive outcome | Decision governs within its approved scope | No |
| Rejected | Architecture decision outcome | Proposed decision was not approved | Yes |
| Superseded | Common maturity | A later ADR replaced its governing effect | Yes |
| Deprecated | Common maturity | Decision is discouraged or scheduled for replacement | No |
| Withdrawn | Common maturity | Draft was removed before approval | Yes |
| Archived | Common maturity | Retained outside active processing | Yes |

ADR status remains distinct from GOV-002 Change Record lifecycle state. Terminal means the end of active decision processing; later archival does not reactivate the decision.

### 8.5 ADR Status Transitions

```text
Draft → Approved
Draft → Rejected
Draft → Withdrawn
Approved → Superseded
Approved → Deprecated
Deprecated → Superseded
Rejected → Archived
Withdrawn → Archived
Superseded → Archived
Deprecated → Archived
```

An Approved ADR shall not return to Draft.

## 9. Review and Decision Authority

### 9.1 Review Participation

Review participation may be broad.

Decision authority remains bounded by approved governance.

### 9.2 Required Owner Review

A materially affected canonical owner shall be included in review.

Absence of owner review shall be resolved or explicitly escalated before decision.

### 9.3 Authority Conflict

If reviewers disagree about authority or ownership, the conflict shall be resolved under GOV-001 before the ADR is Approved.

### 9.4 Approval Evidence

ADR approval shall identify:

- Decision Authority.
- Authority basis.
- Approval date.
- Approval conditions.
- Applicable limitations.

## 10. Conformance Architecture

Architecture conformance shall be validated through evidence appropriate to the decision.

Evidence may include:

- Artifact review.
- Dependency analysis.
- Interface inspection.
- Implementation tests.
- Deployment review.
- Data-flow validation.
- Security assessment.
- Migration evidence.
- Operational evidence.
- Traceability checks.

A conformance result shall identify:

- ADR and version.
- Scope validated.
- Validator.
- Method.
- Evidence.
- Findings.
- Actual result.
- Limitations.
- Required corrections.

## 11. Supersession Architecture

### 11.1 Full Supersession

The replacement ADR shall identify the earlier ADR as fully superseded.

The earlier ADR shall identify its replacement where its approved representation is updated through GOV-002.

### 11.2 Partial Supersession

The replacement shall identify:

- Exact superseded provisions.
- Continuing provisions.
- Effective date.
- Compatibility consequences.
- Required downstream updates.

### 11.3 Amendment

A contained change may amend the existing ADR when it preserves the same decision identity and GOV-002 impact analysis confirms amendment is appropriate.

A materially different decision should receive a new ADR and supersession relationship.

### 11.4 Historical Integrity

Historical ADR content shall not be rewritten to make the replacement appear original.

## 12. Transition Architecture

Upon GOV-004 approval:

- New architecture work shall use GOV-004.
- In-progress work shall be assessed and mapped to the applicable path.
- Approved ADR-002 and ADR-003 remain valid.
- Existing metadata and filenames remain unchanged unless governed separately.
- GOV-002 §18.3’s informal precedent is replaced prospectively.
- Historical references to the earlier precedent remain truthful descriptions of their period.

## 13. Relationship to Adjacent Governance

### GOV-001

Owns authority, canonical ownership, classifications, conflicts, exceptions, and Quality Attributes.

### GOV-002

Owns the overall change lifecycle, change classification, implementation controls, validation evidence, emergency change handling, and closure.

### GOV-003

Owns identifiers, metadata, document profiles, status representation, references, revision histories, and repository-document standards.

### GOV-004

Will own architecture qualification, review, RFC and ADR semantics, decision recording, conformance, and architectural supersession.

## 14. Key Risks and Controls

| Risk | Required control |
|---|---|
| RFC becomes de facto approval | ADR required for lasting approved decisions |
| Architecture Review becomes a decision record | Separate review disposition from ADR |
| Direct ADR bypasses consultation | Objective direct-path criteria and review-readiness confirmation |
| Architecture significance is inferred from change tier | Separate recorded assessments |
| ADR claims authority it does not possess | Derived authority and authority-basis evidence |
| Dissent is erased | Required dissent record and disposition |
| Approved decision is treated as implemented | Separate decision, implementation, and conformance |
| Expected conformance is treated as validated | Executed evidence and actual result |
| Partial supersession creates ambiguity | Exact provision-level replacement |
| Emergency path becomes permanent bypass | Retrospective review, ADR, validation, and closure |
| GOV-004 rewrites prior provenance | Prospective transition rule |
| Supporting identifier becomes silent repository standard | Scope pattern to GOV-004 artifacts and route generalization through GOV-003 |

## 15. ADR Determination for GOV-004 Development

This review does not require a separate ADR before GOV-004 drafting.

It defines the internal architecture of the governance artifact that will normatively establish the architecture-governance process.

No new GOV-001 authority level, artifact classification, or canonical owner is introduced.

If the full GOV-004 draft proposes to change those upstream concepts, drafting shall stop and the change shall be routed through the applicable higher-authority process.

## 16. Architecture Review Checklist

- [ ] One architecture-governance lifecycle is defined.
- [ ] GOV-002 remains the overall change lifecycle.
- [ ] Change Record, Architecture Review, RFC, and ADR responsibilities remain distinct.
- [ ] Qualification precedes process selection.
- [ ] Architecture significance remains distinct from change classification.
- [ ] Focused, Full, and Strategic review thresholds are defined.
- [ ] Architecture Review is the common evaluation mechanism.
- [ ] Direct ADR and RFC-first paths have objective conditions.
- [ ] RFC completion does not constitute architecture approval.
- [ ] Every lasting approved architecture decision has an ADR.
- [ ] `Approved` is the canonical positive ADR status.
- [ ] ADR status remains distinct from GOV-002 lifecycle state.
- [ ] Decision authority is derived from existing governance.
- [ ] Dissent is preserved and blocking conditions are defined.
- [ ] Decision, implementation, and conformance remain distinct.
- [ ] Conformance requires executed evidence.
- [ ] Full and partial supersession preserve historical truth.
- [ ] Emergency decisions remain governed and retrospective.
- [ ] ADR-002 and ADR-003 retain valid, truthful provenance.
- [ ] GOV-004 applies prospectively.
- [ ] In-progress work has an explicit transition model.
- [ ] Supporting-artifact compound IDs are not silently generalized.
- [ ] GOV-003 remains the owner of representation standards.
- [ ] No new authority, classification, or canonical owner is introduced.
- [ ] The proposed full-draft architecture covers every approved baseline requirement.

## 17. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1.0 | 2026-08-07 | Initial architecture review. During validation, corrected supporting-artifact identifier order and finalized RFC/ADR status profiles after GOV-003 v1.1.0 approval. | Chief Architect / Product Owner |

**AR-GOV-004-001 v0.1.0 Status:** **Validated**.
