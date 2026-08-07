# GOV-004 — Architecture Governance

**Phase C3.3 Validation Draft**

```text
Document ID: GOV-004
Title: Architecture Governance
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 1
Depends On: CONST-001, GOV-001, GOV-002, GOV-003, CHARTER-001, PRD-001, RB-GOV-004-001, AR-GOV-004-001, ADR-002, ADR-003
Referenced By: None identified
Last Updated: 2026-08-07
```

---

## 1. Purpose

GOV-004 establishes how architecture questions and changes are qualified, reviewed, proposed, decided, recorded, implemented, validated, superseded, and retired within Aegis IOS.

Its purpose is to ensure that architecture evolves through:

- Explicit questions.
- Proportionate review.
- Evidence-based analysis.
- Consideration of viable alternatives.
- Defined decision authority.
- Traceable decisions.
- Controlled implementation.
- Executed conformance validation.
- Preserved decision history.

GOV-004 formalizes the architecture-governance process that replaces the precedent-based arrangement identified in GOV-002 §18.3.

It governs architecture decision-making prospectively and does not claim retroactive authority over earlier decisions.

---

## 2. Scope

GOV-004 applies to proposed changes with material consequences for:

- System boundaries.
- Component responsibilities.
- Dependency direction.
- Interfaces.
- Data architecture.
- Integration architecture.
- Security architecture.
- Runtime architecture.
- Deployment architecture.
- Repository architecture.
- Technology or provider abstraction.
- Cross-cutting mechanisms.
- Architectural constraints.
- Migration and compatibility.
- Long-term scalability, maintainability, or extensibility.
- AI independence.
- Multiple downstream artifacts or implementations.
- Canonical ownership or authority where an architecture proposal exposes a higher-governance question.

GOV-004 governs the process used to make and maintain architecture decisions.

It does not become the canonical system-architecture artifact merely because it governs architecture work.

---

## 3. Architecture-Governance Principles

### 3.1 Authority Before Convenience

Architectural convenience shall not override constitutional, governance, ownership, or authority constraints.

### 3.2 Evidence Before Decision

Material architecture decisions shall be supported by evidence proportionate to their significance, scope, reversibility, and risk.

### 3.3 Alternatives Before Commitment

Where materially different viable alternatives exist, they shall be identified and evaluated before commitment.

A predetermined result shall not be presented as an alternatives review.

### 3.4 One Decision, One Authoritative Record

Each approved architecture decision shall have one authoritative Architecture Decision Record.

Supporting reviews, RFCs, and Change Records may reference the decision but shall not create competing accounts of it.

### 3.5 Proportional Governance

Architecture-review depth shall be proportionate to architectural significance.

Proportionality shall not be used to bypass required authority, owner participation, evidence, or validation.

### 3.6 Decision and Implementation Are Distinct

Approval of architecture does not prove that implementation occurred or conforms.

### 3.7 Preserve Decision History

Supersession, amendment, deprecation, retirement, and archival shall preserve prior decisions and their historical context.

### 3.8 Prospective Governance

GOV-004 governs architecture work prospectively from its effective approval.

It shall not represent itself as having governed decisions made before that date.

### 3.9 Governed Evolution

Changes to GOV-004 shall follow GOV-002.

---

## 4. Definitions

### Architecture Governance

The governed process for qualifying, reviewing, deciding, recording, implementing, validating, superseding, and retiring architecture decisions.

### Architecture Content

The actual system structures, boundaries, responsibilities, constraints, interfaces, patterns, and deployment decisions created through architecture work.

### Architecture Question

A defined uncertainty, conflict, proposal, or decision need with potential architectural consequences.

### Architecture Review

A governed evaluation of an architecture question or proposal, including evidence, alternatives, impacts, risks, findings, and decision readiness.

An Architecture Review is not automatically an approved architecture decision.

### Request for Comments

A governed proposal used to obtain structured consultation, evaluate alternatives, and develop a material architecture proposal before decision.

An RFC is not an approved architecture decision.

### Architecture Decision Record

The authoritative record of an approved architecture decision, including its context, rationale, alternatives, consequences, authority, and relationships.

### Architecture Decision

An approved choice establishing or changing an architectural direction, structure, constraint, boundary, or relationship.

### Architecture Significance

The materiality of an architecture question or change based on scope, risk, affected relationships, reversibility, and long-term consequences.

### Decision Authority

The person or governed role authorized to approve the applicable architecture decision.

### Architecture Conformance

The degree to which an actual artifact or implementation complies with an approved architecture decision and its applicable constraints.

### Full Supersession

Replacement of the complete governing effect of an earlier architecture decision.

### Partial Supersession

Replacement of explicitly identified provisions of an earlier decision while its remaining provisions continue to govern.

### Emergency Architecture Decision

An expedited architecture decision required because the ordinary decision timeline would create material risk.

---

## 5. Architecture-Change Qualification

### 5.1 Qualification Requirement

A proposed change shall be qualified before deciding whether architecture governance is required.

Qualification shall consider material effects on:

- System or repository boundaries.
- Component responsibility.
- Dependency direction.
- Data ownership or flow.
- External integration.
- Security boundaries.
- Runtime behavior.
- Deployment.
- Provider independence.
- Cross-cutting interfaces.
- Migration or compatibility.
- Long-term extensibility.
- Multiple downstream consumers.
- Approved architectural constraints.
- Canonical ownership or authority.

### 5.2 Non-Determinative Factors

Architectural significance shall not be determined solely by:

- Textual diff size.
- Document length.
- Implementation effort.
- Number of files.
- Schedule pressure.
- Perceived simplicity.

A small textual change may have Strategic architectural consequences.

### 5.3 Qualification Record

The qualification shall record:

- Architecture question.
- Proposed change.
- Affected artifacts or systems.
- Initial significance.
- Rationale.
- Required review depth.
- Whether an RFC is required.
- Whether a direct ADR path may be considered.
- Required owners and reviewers.
- Related GOV-002 Change ID.

### 5.4 Requalification

A change shall be requalified when later evidence reveals broader architectural consequences.

---

## 6. Architecture Significance

### 6.1 No Architecture Review Required

This classification applies when the proposed change:

- Does not alter architectural meaning.
- Does not change a boundary, dependency, interface, constraint, or cross-cutting mechanism.
- Does not affect architecture conformance.
- Can be governed completely through GOV-002 without an architecture decision.

The qualification rationale shall be recorded when architectural significance was reasonably in question.

### 6.2 Focused Architecture Review

A Focused Architecture Review applies when:

- The architectural effect is contained.
- Few components or owners are affected.
- Existing architecture clearly constrains the solution.
- Migration and reversibility are manageable.
- Material system-wide alternatives are absent.
- A direct ADR may be appropriate.

### 6.3 Full Architecture Review

A Full Architecture Review is required when:

- Multiple components, owners, or artifact families are materially affected.
- Cross-cutting interfaces or dependencies change.
- Material alternatives exist.
- Migration or compatibility consequences are significant.
- Security, operations, data, or deployment are materially affected.
- A new architecture mechanism or constraint is proposed.

### 6.4 Strategic Architecture Review

A Strategic Architecture Review is required when the proposal materially affects:

- Foundational system direction.
- Constitutional boundaries.
- Canonical ownership.
- Authority relationships.
- Product or system identity.
- Fundamental architecture style.
- Long-term provider or technology independence.
- Organization-wide or baseline-level architecture commitments.

A Strategic Architecture Review cannot independently approve a change owned by higher authority.

### 6.5 Relationship to GOV-002 Classification

GOV-002 change classification and GOV-004 architecture significance are distinct:

- Change classification evaluates the governed change overall.
- Architecture significance evaluates its architectural consequences.

They shall be recorded separately.

Neither automatically determines the other.

---

## 7. Architecture-Governance Lifecycle

The canonical lifecycle is:

**Question Identified → Qualified → Review Initiated → Inputs Prepared → Reviewed → Decision Authorized → Decision Recorded → Change Implemented → Conformance Validated → Closed**

### 7.1 Question Identified

An architectural uncertainty, conflict, proposal, or decision need has been identified.

### 7.2 Qualified

Architectural significance and the required governance path have been assessed.

### 7.3 Review Initiated

The Architecture Review has an owner, scope, required participants, and stable Review ID.

### 7.4 Inputs Prepared

The review has sufficient evidence, alternatives, impact analysis, and owner participation for its declared review purpose.

### 7.5 Reviewed

The review has executed and its findings, dissent, corrections, risks, and disposition are recorded.

### 7.6 Decision Authorized

Competent Decision Authority has approved the defined architecture decision.

Authorization does not imply implementation.

### 7.7 Decision Recorded

The approved decision is represented by an Approved ADR.

### 7.8 Change Implemented

The associated GOV-002 change has implemented the approved decision.

### 7.9 Conformance Validated

Validation has executed against the actual artifact or implementation.

### 7.10 Closed

Required decision, implementation, evidence, validation, references, and dispositions are complete under GOV-002 and GOV-004.

### 7.11 Lifecycle Integrity

Architecture Reviews, RFCs, ADRs, and Change Records participate in this lifecycle but shall not create competing end-to-end lifecycles.

---

## 8. Record Responsibilities

| Record | Canonical responsibility |
|---|---|
| GOV-002 Change Record | Overall change, classification, approval, implementation, validation, and closure |
| Architecture Review | Evaluation of the architecture question, evidence, alternatives, impacts, risks, findings, and readiness |
| RFC | Structured development and consultation of a material proposal |
| ADR | Authoritative record of an approved architecture decision |

One record may link to another.

No record shall absorb another record’s canonical responsibility.

---

## 9. Roles and Accountability

### 9.1 Requestor

Identifies the architecture question or need for change.

### 9.2 Architecture Change Owner

Coordinates the architecture-governance path and maintains its relationships with the GOV-002 Change Record.

### 9.3 Architecture Review Lead

Defines the review scope, readiness, participants, evidence, findings, and disposition.

### 9.4 RFC Author

Develops and maintains the RFC proposal and its review responses.

### 9.5 Reviewer

Evaluates assigned architecture, evidence, quality, risk, or domain concerns.

### 9.6 Affected Owner

Represents an artifact, concept, component, or domain materially affected by the proposal.

### 9.7 Subject-Matter Expert

Provides evidence or analysis without acquiring approval authority merely through expertise.

### 9.8 Decision Authority

Approves or rejects the architecture decision within the authority derived from existing governance.

### 9.9 ADR Owner

Maintains the authoritative decision record and its continuing relationships.

### 9.10 Implementer

Implements the authorized architecture change without silently expanding or reinterpreting it.

### 9.11 Architecture Validator

Executes architecture-conformance validation against the actual implementation or artifact.

### 9.12 Role Separation

One person may perform multiple roles when appropriate.

The record shall preserve the distinction between:

- Proposal.
- Review.
- Decision.
- Implementation.
- Validation.

For Major or Strategic changes, validation should be independent of implementation where practical. If not practical, the reason and compensating review shall be recorded under GOV-002.

---

## 10. Architecture Review Initiation

An Architecture Review shall identify:

- Stable Review ID.
- Title.
- Version.
- Status.
- Review owner.
- Related Change ID.
- Architecture question.
- Review significance.
- Scope.
- Affected artifacts and owners.
- Required reviewers.
- Required inputs.
- Intended disposition.
- Review schedule where material.

A review shall not begin as though it is decision-ready when its purpose is only preliminary consultation.

---

## 11. Review Readiness

### 11.1 Minimum Inputs

Decision-readiness review requires:

- Defined architecture question.
- Current architecture or condition.
- Proposed change.
- Scope.
- Rationale.
- Known constraints.
- Affected owners.
- Material alternatives.
- Initial impact analysis.
- Assumptions.
- Risks.
- Required decision.
- Related Change ID.

### 11.2 Early Review

An early review may proceed with incomplete inputs when its purpose is discovery or consultation.

It shall state:

- Which inputs are incomplete.
- What the review may determine.
- What it cannot yet determine.
- What is required before decision readiness.

### 11.3 Readiness Failure

A review shall not recommend decision when missing information could materially alter:

- Authority.
- Ownership.
- Alternatives.
- Impact.
- Risk.
- Validation.
- Migration.
- Decision scope.

---

## 12. Architecture Impact Analysis

Impact analysis shall address, where applicable:

- Constitutional constraints.
- Governance authority.
- Canonical ownership.
- Project and product requirements.
- Specifications.
- Component responsibilities.
- Interfaces.
- Data ownership, lineage, and flow.
- Security.
- Reliability.
- Performance.
- Scalability.
- Maintainability.
- Explainability.
- Auditability.
- Extensibility.
- Usability.
- AI independence.
- Operations and recovery.
- Deployment.
- Migration.
- Compatibility.
- Repository structure.
- Documentation and training.
- Validation.
- Reversibility.
- Deferred consequences.

Applicable Quality Attributes shall be referenced from GOV-001 rather than redefined.

For material categories with no impact, the review should record the conclusion rather than omit the category silently.

---

## 13. Architecture Review Record

An Architecture Review shall contain or link to:

- Review metadata.
- Objective.
- Architecture question.
- Scope.
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

GOV-003 governs its representation.

GOV-004 governs its architecture-specific semantics.

---

## 14. Architecture Review Status Profile

GOV-004 owns the meanings of Architecture Review profile statuses.

| Status | Type | Meaning | Terminal |
|---|---|---|---|
| Draft | Common artifact maturity | Review is being prepared and has not completed execution | No |
| In Review | Review status | Review execution is active | No |
| Revision Required | Review disposition | Findings require correction before review confirmation or decision readiness | No |
| Review Confirmed | Review outcome | Review content, findings, corrections, and disposition have been checked and confirmed | Yes |
| Superseded | Common artifact maturity | A later review replaces its active use | Yes |
| Withdrawn | Common artifact maturity | Review was removed before confirmation | Yes |
| Archived | Common artifact maturity | Review is retained for history outside active processing | Yes |

`In Review`, `Revision Required`, and `Review Confirmed` are Architecture Review profile extensions authorized by GOV-003 v1.1.0 §9.7.

`Review Confirmed` is specific to the Architecture Review artifact. It does not mean:

- The linked GOV-002 Change Record has reached its `Validated` lifecycle state.
- Architecture implementation has occurred.
- Architecture conformance has passed.
- An architecture decision has been Approved.

The status name deliberately avoids reusing GOV-002’s canonical `Validated` Change Record lifecycle state and GOV-003’s validation-result vocabulary.

For this profile, Terminal means the end of active Architecture Review processing. A later transition to Archived does not reactivate the review.

### 14.1 Permitted Transitions

```text
Draft → In Review
In Review → Revision Required
Revision Required → Draft
Revision Required → In Review
In Review → Review Confirmed
Draft → Withdrawn
In Review → Withdrawn
Revision Required → Withdrawn
Review Confirmed → Superseded
Review Confirmed → Archived
Withdrawn → Archived
Superseded → Archived
```

An Architecture Review with `Review Confirmed` status may identify further work, an RFC requirement, or a direct ADR path.

Review confirmation does not imply that those later activities are complete.

This terminology applies prospectively under GOV-004. It does not rewrite the historical validation disposition of AR-GOV-004-001, which was completed before GOV-004 became effective.

## 15. Architecture Review Dispositions

A review shall conclude with one or more explicit dispositions:

- No architecture decision required.
- Direct ADR permitted.
- RFC required.
- Additional evidence required.
- Revision required.
- Authority or ownership conflict requires escalation.
- Proposal rejected.
- Decision deferred.

The disposition shall identify its rationale and next governed step.

---

## 16. Process Selection

| Qualification | Architecture Review | RFC | ADR |
|---|---|---|---|
| No Architecture Review Required | Qualification record only | No | No, unless a separate decision record is justified |
| Focused | Focused review | Optional | Required for a lasting architecture decision |
| Full | Full review | Required when structured proposal development or broad consultation is needed | Required for an approved decision |
| Strategic | Strategic review | Normally required | Required for each approved architecture decision |

This table is a default model.

The recorded qualification and Architecture Review disposition govern the actual path.

---

## 17. Direct ADR Path

A direct ADR path is permitted only when:

- The architecture question is sufficiently understood.
- Material alternatives are known and assessable.
- Affected owners are identified.
- Required consultation is limited.
- Broad proposal development is unnecessary.
- Impact analysis is sufficient.
- The Architecture Review confirms decision readiness.
- Required authority is available.

A direct ADR path shall not bypass:

- Architecture Review.
- Affected-owner participation.
- Alternatives analysis.
- Impact analysis.
- Decision authority.
- Validation requirements.

---

## 18. RFC Qualification

An RFC is required when:

- Multiple materially viable alternatives require structured consultation.
- Multiple owners or domains are materially affected.
- The proposal introduces a cross-cutting mechanism.
- Migration or compatibility consequences are substantial.
- The proposal requires iterative development.
- Strategic direction is affected.
- Decision readiness has not been achieved.
- The Architecture Review requires it.

An RFC may also be used voluntarily when structured consultation would materially improve decision quality.

---

## 19. RFC Required Content

An RFC shall contain or link to:

- Stable RFC ID.
- Title.
- Version.
- Status.
- Owner.
- Classification.
- Authority Level.
- Depends On.
- Referenced By.
- Last Updated.
- Related Change ID.
- Problem or opportunity.
- Scope.
- Current state.
- Proposed architecture.
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

---

## 20. RFC Status Profile

GOV-004 owns the architecture-specific meanings of the RFC statuses defined here.

| Status | Type | Meaning | Terminal |
|---|---|---|---|
| Draft | Artifact maturity | Proposal is being prepared and is not ready for governed consultation | No |
| In Review | Proposal/review status | Proposal is undergoing structured consultation | No |
| Revision Required | Review disposition | Material findings require correction before further decision readiness | No |
| Approved for Decision | Proposal-readiness status | Proposal is sufficiently developed to proceed to architecture decision; the architecture itself is not Approved | No |
| Rejected | Decision outcome | Proposal was reviewed and will not proceed under its current scope | Yes |
| Deferred | Proposal disposition | Further proposal work or decision is intentionally postponed | No |
| Withdrawn | Common artifact disposition | Proposal was removed from consideration | Yes |
| Superseded | Common artifact maturity | A later RFC replaced the proposal | Yes |
| Archived | Common artifact maturity | RFC is retained for history outside active processing | Yes |

The extended values are authorized by GOV-003 v1.1.0 §9.7.

They do not replace or duplicate GOV-002 Change Record states.

RFC status does not include `Approved`.

Only a resulting ADR may reach `Approved`.

`Approved for Decision` shall not be interpreted as:

- Architecture approval.
- ADR approval.
- Implementation authorization.
- GOV-002 change completion.

For this profile, Terminal means the end of active proposal processing. A later archival transition does not reactivate the RFC.

### 20.1 Permitted Transitions

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

An RFC reaching `Approved for Decision` may result in one or more Draft ADRs.

It shall not transition into an ADR because the RFC and ADR are distinct artifacts.

---

## 21. RFC Review and Consultation

RFC consultation shall identify:

- Required reviewers.
- Affected owners.
- Review period or decision window where material.
- Findings.
- Author responses.
- Resolved concerns.
- Unresolved dissent.
- Required revisions.
- Final disposition.

A lack of comments shall not constitute approval.

Consensus may inform Decision Authority but does not replace it.

---

## 22. RFC Outcomes

An RFC may result in:

- One ADR.
- Multiple ADRs.
- Revision.
- Deferral.
- Rejection.
- Withdrawal.
- Supersession.
- No ADR.

The outcome shall be recorded and linked to resulting artifacts.

---

## 23. ADR Qualification and Purpose

An ADR is required for a lasting approved architecture decision.

An ADR shall:

- Record the decision.
- Identify its context.
- State its rationale.
- Preserve alternatives.
- Record consequences.
- Identify Decision Authority.
- Define relevant implementation and validation implications.
- Preserve supersession relationships.

An ADR shall not become an uncontrolled container for:

- General governance policy.
- Product requirements.
- Detailed specifications.
- Unrelated implementation decisions.
- Multiple unrelated architecture decisions.

---

## 24. ADR Required Content

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
- Architecture question.
- Decision.
- Alternatives considered.
- Rationale.
- Consequences.
- Affected artifacts.
- Decision Authority.
- Authority basis.
- Decision date.
- Related Change ID.
- Related Architecture Review.
- Related RFC where applicable.
- Implementation implications.
- Validation implications.
- Supersession relationships.
- Revision history.

Conditional metadata shall follow GOV-003.

Existing ADRs are not retrofitted automatically.

---

## 25. ADR Creation and Approval

### 25.1 Draft Creation

A Draft ADR may be created when:

- A direct ADR path is confirmed; or
- An RFC reaches Approved for Decision.

### 25.2 Decision Readiness

Before approval, the ADR shall have:

- Defined scope.
- Sufficient context.
- Material alternatives.
- Impact analysis.
- Affected-owner review.
- Resolved authority questions.
- Recorded dissent.
- Validation implications.
- Identified Decision Authority.

### 25.3 Approval Evidence

Approval shall record:

- Decision Authority.
- Authority basis.
- Approval date.
- Conditions.
- Limitations.
- Effective date where different.

### 25.4 Governing Effect

An ADR becomes governing only when its Status is Approved and all required higher-authority conditions are satisfied.

---

## 26. ADR Status Profile

GOV-004 owns the architecture-specific decision meaning represented by an ADR.

| Status | Type | Meaning | Terminal |
|---|---|---|---|
| Draft | Common artifact maturity | Proposed decision record not yet approved | No |
| Approved | Common artifact maturity and positive decision outcome | Decision has received required authority and governs within its approved scope | No |
| Rejected | Architecture decision outcome | Proposed decision was considered and not approved | Yes |
| Superseded | Common artifact maturity | A later Approved ADR replaced all or an identified portion of its governing effect | Yes |
| Deprecated | Common artifact maturity | Decision remains historically identifiable but is discouraged or scheduled for replacement | No |
| Withdrawn | Common artifact maturity | Draft proposal was removed before approval | Yes |
| Archived | Common artifact maturity | ADR is retained for history outside active decision processing | Yes |

`Rejected` is authorized by GOV-003 v1.1.0 §9.7.

ADR status remains distinct from GOV-002 Change Record lifecycle state. An ADR’s `Approved`, `Rejected`, `Superseded`, or other profile status shall not be interpreted as the lifecycle state of its related GOV-002 Change Record.

For this profile, Terminal means the end of active proposal or decision processing. A later archival transition does not reactivate the decision.

`Approved` is non-terminal because it may later become Deprecated or Superseded.

`Deprecated` is non-terminal because it may later become Superseded or Archived.

### 26.1 Permitted Transitions

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

Changing an Approved decision requires an amendment or successor decision governed through GOV-002 and GOV-004.

---

## 27. RFC and ADR Boundary

The boundary is:

- RFC proposes and develops.
- Architecture Review evaluates.
- ADR records the approved decision.
- GOV-002 Change Record governs the overall change.

An RFC does not become an ADR.

An Approved-for-Decision RFC does not establish architecture.

An Approved ADR does not prove implementation.

---

## 28. Decision Authority

Decision authority derives from:

- GOV-001.
- Canonical concept ownership.
- Affected artifact authority.
- Applicable approved ADRs.
- Approved delegation.
- GOV-002 change classification.
- GOV-004 architecture significance.

GOV-004 does not create an independent architecture authority hierarchy.

An ADR shall not approve beyond the authority of its Decision Authority.

A proposal affecting constitutional content, canonical ownership, artifact classification, or authority relationships shall be routed to the applicable higher authority.

---

## 29. Dissent and Escalation

### 29.1 Dissent Record

Material dissent shall record:

- Concern.
- Evidence.
- Affected risk.
- Requested resolution.
- Decision Authority’s disposition.

### 29.2 Blocking Dissent

Dissent blocks decision when it identifies an unresolved:

- Higher-authority violation.
- Canonical-ownership conflict.
- Mandatory architecture-constraint violation.
- Required-validation gap.
- Materially incomplete decision input.
- Authority conflict.

### 29.3 Known Risk

Competent Decision Authority may accept other dissent as a known risk.

The rationale and risk owner shall be recorded.

### 29.4 Escalation

Unresolved authority or ownership conflict shall follow GOV-001.

Dissent does not create veto authority unless approved governance assigns it.

---

## 30. Implementation Conformance

Architecture decision, implementation, and validation are separate:

```text
Approved ADR → Implementation → Conformance Validation
```

Implementation shall:

- Follow the Approved ADR.
- Preserve its scope and constraints.
- Avoid undocumented reinterpretation.
- Record deviations.
- Link implementation evidence.
- Route defects through GOV-002 and GOV-004.

An implementation conflict shall not be resolved through an undocumented exception.

---

## 31. Architecture Conformance Validation

Validation shall execute against the actual artifact or implementation.

It shall verify, where applicable:

- Approved ADR compliance.
- Required boundaries.
- Component responsibilities.
- Interface conformance.
- Dependency direction.
- Data-flow constraints.
- Security constraints.
- Migration requirements.
- Approval conditions.
- Applicable GOV-001 Quality Attributes.
- Absence of unauthorized architecture drift.

The validation record shall identify:

- ADR and version.
- Scope.
- Validator.
- Method.
- Evidence.
- Findings.
- Actual result.
- Limitations.
- Required corrections.

Expected conformance shall not be recorded as validated conformance.

---

## 32. Decision Supersession and Amendment

### 32.1 Full Supersession

A successor ADR may replace the complete governing effect of an earlier ADR.

### 32.2 Partial Supersession

A successor ADR may replace identified provisions while other provisions continue to govern.

Partial supersession shall identify:

- Replaced provisions.
- Continuing provisions.
- Effective date.
- Compatibility effects.
- Required downstream updates.

### 32.3 Amendment

A contained correction may amend an existing ADR when:

- Decision identity remains the same.
- The change does not materially replace the decision.
- GOV-002 impact analysis confirms amendment is appropriate.
- Historical provenance is preserved.

A materially different decision shall receive a new ADR.

### 32.4 Historical Integrity

Supersession or amendment shall not rewrite the earlier ADR to make the successor appear original.

ADR identifiers shall not be reused.

---

## 33. Deprecation, Retirement, and Archival

### 33.1 Deprecation

Deprecation indicates that an Approved decision remains historically identifiable but is discouraged or scheduled for replacement.

### 33.2 Retirement

Retirement shall identify:

- Effective date.
- Replacement where applicable.
- Migration disposition.
- Remaining dependent artifacts.
- Residual risks.

### 33.3 Archival

Archival retains the ADR outside active decision processing.

Archival shall preserve its prior decision outcome and relationships.

---

## 34. Emergency Architecture Decisions

### 34.1 Qualification

Emergency handling is permitted only when the ordinary architecture timeline would create material:

- Security risk.
- Operational or continuity risk.
- Legal or regulatory exposure.
- Data-integrity risk.
- Recovery failure.
- Irreversible architectural damage.

Schedule pressure alone is insufficient.

### 34.2 Minimum Record

The emergency record shall identify:

- Change ID.
- Architecture question.
- Emergency condition.
- Decision Authority.
- Scope.
- Available evidence.
- Known risk.
- Temporary or permanent intent.
- Recovery or rollback approach.

### 34.3 Retrospective Governance

Emergency architecture work shall subsequently complete:

- Qualification.
- Impact analysis.
- Architecture Review.
- RFC where still required.
- ADR when a lasting decision results.
- Implementation evidence.
- Conformance validation.
- Closure.

Emergency action shall not become permanent architecture through silence.

---

## 35. Evidence and Traceability

Architecture-governance evidence shall identify or link:

- GOV-002 Change ID.
- Architecture Review ID.
- RFC ID where applicable.
- ADR ID where applicable.
- Qualification.
- Review inputs.
- Alternatives.
- Impact analysis.
- Findings.
- Dissent.
- Decision.
- Approval.
- Implementation evidence.
- Conformance result.
- Supersession.
- Closure.

Architecture traceability shall not redefine project or product traceability owned by CHARTER-001 or PRD-001.

---

## 36. Repository Representation

GOV-003 owns:

- Artifact identifiers.
- Metadata fields.
- Document profiles.
- Filename representation.
- Status representation.
- Cross-references.
- Revision-history structure.
- Repository-document placement standards.

GOV-004 owns the architecture-specific semantics represented in Architecture Reviews, RFCs, and ADRs.

Approval of GOV-004 shall not automatically rename, relocate, or retrofit existing artifacts.

---

## 37. ADR-002 and ADR-003 Precedent

ADR-002 and ADR-003 were approved before GOV-004.

They provide evidence of the earlier precedent-based discipline, including:

- Defined questions.
- Alternatives.
- Explicit decisions.
- Authority reasoning.
- Validation.
- Correction before approval.
- Stable identity.

GOV-004 shall not claim that it governed their creation.

Their approved decisions remain valid unless changed through applicable governance.

---

## 38. Transition to Formal Architecture Governance

GOV-004 replaces the informal precedent-based arrangement identified in GOV-002 §18.3 prospectively.

### 38.1 New Work

Architecture work initiated after GOV-004 becomes effective shall follow GOV-004.

### 38.2 In-Progress Work

In-progress work shall be assessed:

- Work without material review shall adopt GOV-004.
- Substantially reviewed work without a decision shall map existing evidence into the applicable GOV-004 path.
- An already Approved decision shall retain its provenance.
- A material new change after GOV-004 approval shall follow GOV-004.

### 38.3 Existing ADRs

Approval of GOV-004 shall not:

- Reopen ADR-002 or ADR-003 automatically.
- Rewrite their provenance.
- Imply that GOV-004 existed previously.
- Force metadata or filename migration.
- Invalidate decisions because they predate GOV-004.

---

## 39. Supporting-Artifact Identifiers

The established companion-first pattern used in this workstream is:

```text
<COMPANION-TYPE>-<PRIMARY-ARTIFACT-ID>-<NUMBER>
```

Examples:

```text
AR-GOV-002-001
AR-GOV-003-001
RB-GOV-004-001
AR-GOV-004-001
```

For this workstream:

- `RB` identifies a Requirements Baseline.
- `AR` identifies an Architecture Review.

GOV-004 records this precedent but does not establish it as a repository-wide supporting-artifact profile.

Generalization requires a governed GOV-003 change.

Retired identifiers shall not be reused.

---

## 40. Relationship to Adjacent Governance

### GOV-001

Owns authority, canonical ownership, classifications, conflicts, Exception Management, and Quality Attributes.

### GOV-002

Owns the general change lifecycle, change classification, implementation controls, validation evidence, emergency change handling, and closure.

### GOV-003

Owns artifact identity, metadata, profiles, status representation, references, revision histories, and document-placement standards.

### GOV-004

Owns architecture qualification, Architecture Review semantics, RFC and ADR processes, architecture decisions, conformance, and architectural supersession.

---

## 41. Non-Ownership Boundaries

GOV-004 does not independently define or redefine:

- Purpose, Vision, Mission, or Values.
- Governance Principles owned by GOV-001.
- Canonical concept ownership.
- Artifact classifications.
- Authority Levels.
- GOV-002 change classifications.
- GOV-002 lifecycle states.
- GOV-003 representation standards.
- Project Objectives.
- Project Success Criteria.
- Product Goals.
- Requirement Acceptance Criteria.
- Quality Attributes.
- Product requirements.
- Architecture content unrelated to the decision process.

GOV-004 governs how architecture content is reviewed and decided.

---

## 42. Validation Checklist

Before GOV-004 is approved or revised, verify that:

- [ ] Architecture-change qualification criteria are objective.
- [ ] Architecture significance remains distinct from GOV-002 change classification.
- [ ] One architecture-governance lifecycle is defined.
- [ ] Architecture Reviews, RFCs, ADRs, and Change Records have distinct responsibilities.
- [ ] No competing end-to-end lifecycle is introduced.
- [ ] Review readiness prevents false decision readiness.
- [ ] Focused, Full, and Strategic review thresholds are defined.
- [ ] Direct ADR and RFC-first paths have objective conditions.
- [ ] Direct ADR does not bypass Architecture Review.
- [ ] RFC is treated as a proposal rather than a decision.
- [ ] RFC status does not include Approved.
- [ ] Approved for Decision cannot be mistaken for architecture approval.
- [ ] Every lasting Approved architecture decision has an ADR.
- [ ] Approved is the canonical positive ADR status.
- [ ] Rejected is authorized under GOV-003 v1.1.0.
- [ ] Architecture Review, RFC, and ADR status extensions have defined meanings and transitions.
- [ ] Artifact statuses remain distinct from GOV-002 lifecycle states.
- [ ] Decision authority derives from existing governance.
- [ ] Material dissent and its disposition remain traceable.
- [ ] Blocking dissent conditions are explicit.
- [ ] Decision, implementation, and conformance remain distinct.
- [ ] Conformance requires executed evidence.
- [ ] Applicable Quality Attributes are referenced from GOV-001.
- [ ] Full and partial supersession are explicit.
- [ ] Amendment preserves decision identity and history.
- [ ] Emergency decisions require retrospective governance.
- [ ] GOV-003 remains the owner of document representation.
- [ ] Approval does not automatically migrate existing ADRs.
- [ ] ADR-002 and ADR-003 retain truthful provenance.
- [ ] GOV-004 applies prospectively.
- [ ] In-progress work has a transition rule.
- [ ] Supporting-artifact identifiers are not generalized silently.
- [ ] No new authority level, classification, or canonical owner is introduced.
- [ ] GOV-004 governs changes to itself through GOV-002.
- [ ] No ungoverned path exists for a permanent architecture decision.
- [ ] Architecture Review status does not reuse GOV-002’s `Validated` lifecycle-state name.
- [ ] `Review Confirmed` is distinguished from decision approval, implementation, and conformance validation.
- [ ] ADR status is explicitly distinguished from GOV-002 Change Record lifecycle state.
- [ ] CHARTER-001 and PRD-001 are included as dependencies supporting §35’s ownership boundary.
- [ ] Dependencies and references remain truthful and valid.

---

## 43. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-08-07 | Phase C3.3 validation draft. Establishes architecture qualification, review thresholds, Architecture Review/RFC/ADR boundaries, decision authority, status profiles, conformance validation, supersession, emergency handling, and prospective transition from precedent-based architecture governance. | Chief Architect / Product Owner |

---

**Phase C3.3 Status:** **Approved — Complete**
