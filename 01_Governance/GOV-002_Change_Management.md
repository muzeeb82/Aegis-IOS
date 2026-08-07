# GOV-002 — Change Management

**Phase C3.1 Validation Draft**

```text
Document ID: GOV-002
Title: Change Management
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 1
Depends On: CONST-001, GOV-001, CHARTER-001, PRD-001, ADR-002, ADR-003
Referenced By: All governed artifacts and baselines subject to change
Last Updated: 2026-08-07
```

---

## 1. Purpose

GOV-002 establishes the governed process for proposing, assessing, approving, implementing, validating, recording, and closing changes to Aegis IOS artifacts and baselines.

Its purpose is to ensure that change occurs deliberately, visibly, proportionately, and with sufficient evidence to preserve:

- Architectural integrity.
- Canonical ownership.
- Authority relationships.
- Traceability.
- Explainability.
- Auditability.
- Identifier stability.
- Historical truth.
- Long-term maintainability.

A governance system must govern its own evolution. Changes to governance artifacts, including GOV-002, shall follow the approved change process.

---

## 2. Scope

GOV-002 applies to proposed changes affecting:

- Normative artifacts.
- Runtime artifacts where their behavior affects governed work.
- Informational artifacts when they represent an approved baseline, validation result, release record, or other governed repository state.
- Canonical concepts and their references.
- Architecture decisions.
- Product requirements.
- Specifications.
- Standards.
- Frameworks.
- Playbooks.
- Repository structure.
- Implementation where a change affects conformance with approved artifacts.
- Governance baselines, project phases, and release baselines.

GOV-002 governs the change process. It does not automatically grant authority to approve a change.

Approval authority derives from GOV-001, the owner of the affected concept or artifact, applicable architecture decisions, and any approved delegation.

---

## 3. Governing Principles and Self-Application

### 3.1 Governed Evolution

No governed artifact or baseline shall be permanently modified through an unrecorded or unauthorized process.

### 3.2 Existing Rule Governs Its Successor

The currently approved version of an artifact governs the process by which a successor version is proposed and approved.

A replacement version does not become governing merely because it has been drafted or implemented.

### 3.3 Proportional Control

The depth of impact analysis, review, approval, validation, and evidence shall be proportionate to the significance and risk of the change.

Proportionality shall not be used to bypass a required control.

### 3.4 One Change Record

Each governed change shall have one authoritative change record.

Supporting evidence may exist in linked artifacts, but parallel records shall not create conflicting accounts of the same change.

### 3.5 Evidence Before Closure

A proposed result, planned correction, or expected test outcome shall not be recorded as completed validation.

### 3.6 Preserve Historical Truth

Approved historical records shall not be silently rewritten to make later decisions appear to have existed earlier.

Corrections and superseding decisions shall preserve traceable history.

### 3.7 Narrow Authorized Scope

Implementation shall remain within the approved change scope.

Unrelated improvements discovered during implementation shall be proposed separately unless the authorized scope is formally amended.

### 3.8 Classification Does Not Override Authority

A lower change classification shall not be used to bypass canonical ownership, authority, architecture review, or conflict-resolution requirements.

---

## 4. Definitions

### Change

A proposed modification to a governed artifact, baseline, implementation, repository structure, relationship, or recorded decision.

### Change Record

The authoritative record containing or linking to the proposal, classification, impact analysis, decision, implementation evidence, validation result, and closure disposition for a change.

### Change Owner

The person or governed role accountable for progressing the change through its lifecycle and maintaining the change record.

### Artifact Owner

The governed owner accountable for the affected artifact or canonical concept.

The Change Owner and Artifact Owner may be the same person but are not semantically identical roles.

### Change Type

The nature or context of a proposed change.

### Change Classification

The assessed significance and impact of a proposed change: Editorial, Minor, Major, or Strategic.

### Lifecycle State

The current governed position of a change within the change process.

### Governance Conflict

A condition in which proposed or active work contradicts an approved governance rule or authority relationship.

### Requirement Defect

A condition in which a requirement is incomplete, inconsistent, incorrect, ambiguous, untestable, or incompatible with applicable upstream authority.

### Governance Defect

A condition in which governance is incomplete, inconsistent, ambiguous, incorrect, or obstructs legitimate product clarity or governed execution.

### Exception

A bounded deviation from an approved rule without permanently changing that rule.

Exception Management is owned by GOV-001 §5.

### Emergency Change

An expedited modification required because the ordinary change timeline would create material operational, security, legal, integrity, or continuity risk.

### Emergency Exception

An emergency condition involving both an expedited change and a temporary deviation from an approved rule.

The change follows GOV-002; the deviation follows GOV-001 §5.

### Baseline

An identified set of approved artifacts, versions, decisions, validations, and recorded dispositions treated as a governed reference point.

---

## 5. Change Types

A change record shall identify the applicable change type or types.

Types may include:

- Governance change.
- Constitutional change.
- Canonical-concept change.
- Architecture change.
- Project change.
- Product-requirement change.
- Specification change.
- Standard change.
- Framework change.
- Playbook change.
- Runtime-instruction change.
- Repository-structure change.
- Implementation-conformance change.
- Documentation or training change.
- Validation correction.
- Baseline or release change.
- Emergency change.

Change type identifies what is changing. It does not determine impact classification, approval authority, or lifecycle state by itself.

Where multiple types apply, the change shall satisfy the controls required by every materially affected type.

---

## 6. Change Classifications

### 6.1 Editorial Change

An Editorial change corrects presentation without changing governed meaning or behavior.

Examples include:

- Spelling or grammar correction.
- Formatting normalization.
- Broken internal link repair where the intended target is unambiguous.
- Non-semantic wording correction.
- Metadata presentation correction that does not change status, authority, ownership, scope, or dependency meaning.

An Editorial classification shall not be used when reasonable reviewers could interpret the change as altering normative meaning.

### 6.2 Minor Change

A Minor change makes a limited governed correction or clarification without materially changing:

- Canonical ownership.
- Authority relationships.
- Architecture direction.
- Product or project scope.
- Baseline intent.
- Cross-artifact dependency direction.
- Requirement intent.
- Approved acceptance meaning.

Examples may include:

- Narrow clarification of an existing rule.
- Addition of a missing cross-reference.
- Local correction with limited downstream impact.
- Non-material extension of supporting guidance.
- Correction of a contained inconsistency whose intended resolution is already governed.

### 6.3 Major Change

A Major change materially affects one or more governed behaviors, requirements, dependencies, controls, or downstream consumers without redefining the foundational direction of Aegis IOS.

Examples may include:

- Addition or removal of a material requirement.
- Change to an artifact’s governed scope.
- Material change to validation or approval controls.
- Change affecting several downstream artifacts.
- Material repository restructuring.
- Change to a production capability or significant interface.
- Revision requiring migration, coordinated implementation, or broad revalidation.

### 6.4 Strategic Change

A Strategic change affects foundational or system-wide direction.

Examples include:

- Purpose, Vision, Mission, or Values.
- Canonical concept ownership.
- Authority levels or authority relationships.
- Governance model structure.
- Fundamental architecture direction.
- Product identity or foundational capability boundary.
- Replacement of a governed baseline with organization-wide consequences.

**Any change to CONST-001 shall be classified Strategic, consistent with CONST-001 §7.**

This is an unconditional classification rule. A CONST-001 change shall not be assigned a lower classification based on its apparent size, editing effort, or claimed locality.

### 6.5 Classification Rules

Classification shall be based on impact, not editing effort, document length, or implementation convenience.

When a change meets criteria from multiple classifications, the highest applicable classification governs.

Classification shall be raised when review or impact analysis reveals broader consequences.

Lowering a classification requires recorded rationale and approval by an authority competent to approve the higher classification.

Uncertainty between two classifications shall default to the higher classification until resolved.

---

## 7. Change Lifecycle and States

The canonical lifecycle is:

**Identified → Proposed → Classified → Impact Assessed → Reviewed → Approved → Implemented → Validated → Closed**

### 7.1 Identified

A potential need for change has been discovered.

At this state, the change may be incomplete and shall not be represented as an approved proposal.

### 7.2 Proposed

The change has an authoritative record containing sufficient purpose, scope, rationale, and ownership information to begin assessment.

### 7.3 Classified

The change type and initial impact classification have been recorded.

Classification may later be raised or formally revised.

### 7.4 Impact Assessed

Applicable impacts, dependencies, risks, affected owners, required reviews, validation needs, and recovery considerations have been assessed.

### 7.5 Reviewed

Required reviewers have examined the proposed change and its impact analysis.

Review findings and their dispositions are recorded.

### 7.6 Approved

The appropriate authority has authorized the defined change scope for implementation.

Approval does not mean the change is implemented, validated, or governing.

### 7.7 Implemented

The authorized change has been applied to the actual affected artifact or implementation.

Implementation does not mean validation has passed.

### 7.8 Validated

Validation has been executed against the implemented change, and the actual result has been recorded.

### 7.9 Closed

The change has a final disposition, required evidence, updated relationships, and no unresolved mandatory closure condition.

### 7.10 Additional Dispositions

A change may also become:

- **Rejected** — reviewed and not approved.
- **Withdrawn** — removed from consideration by the authorized requestor or owner before approval.
- **Superseded** — replaced by another identified change.
- **Reopened** — returned to an active state because new evidence, validation failure, drift, or incomplete implementation invalidated closure.
- **Emergency Implementation Pending Retrospective Review** — implemented under §16 but not yet retrospectively reviewed, validated, and closed.

### 7.11 State Integrity

State transitions shall be recorded.

States shall not be skipped merely to make a change appear complete.

A change may return to an earlier state when findings require renewed analysis, correction, or approval.

---

## 8. Roles and Accountability

### 8.1 Requestor

Identifies the need for change and provides the initial rationale and supporting evidence.

### 8.2 Change Owner

Maintains the authoritative change record and coordinates classification, analysis, review, implementation, validation, and closure.

### 8.3 Artifact or Concept Owner

Confirms ownership boundaries and determines whether the proposal is consistent with the affected artifact’s purpose and authority.

### 8.4 Impacted Owner

Reviews effects on an artifact, capability, process, or dependency for which that owner is accountable.

### 8.5 Reviewer

Evaluates correctness, consistency, impact, risks, architecture, traceability, or other assigned review concerns.

### 8.6 Approver

Exercises approval authority derived from GOV-001, canonical ownership, applicable ADRs, and approved delegation.

An Approver shall not approve beyond the authority delegated to that role.

### 8.7 Implementer

Applies the authorized change without expanding its scope silently.

### 8.8 Validator

Executes the approved validation against the implemented change and records the actual result.

For Major and Strategic changes, the Validator should be independent of the Implementer where practical.

If independence is not practical, the reason and compensating review shall be recorded.

### 8.9 Role Separation

One person may perform multiple roles when appropriate, but the change record shall preserve the distinction between:

- Request.
- Ownership.
- Review.
- Approval.
- Implementation.
- Validation.

Role consolidation shall not collapse these activities into a single unverified assertion.

---

## 9. Change Initiation and Record Requirements

A governed change enters the Proposed state only when its record contains:

- Stable change identifier.
- Title.
- Requestor.
- Change Owner.
- Date identified.
- Description of the current condition.
- Proposed change.
- Purpose and rationale.
- Initial affected artifacts or baselines.
- Initial change type.
- Initial classification or classification pending assessment.
- Known urgency.
- Known dependencies or conflicts.
- Supporting evidence or references.
- Initial validation considerations.

Missing information may be completed during classification and impact analysis, but the proposal shall not advance to approval while required decision information remains materially incomplete.

Section 9 defines the information required to open and begin governing a change.

Section 19 governs how evidence and traceability are accumulated and preserved throughout the lifecycle. Section 19 shall not create a second change-record model or redefine these initiation requirements.

---

## 10. Impact Analysis

### 10.1 Common Impact Areas

Impact analysis shall consider, where applicable:

- Affected artifacts and versions.
- Canonical concepts and owners.
- Authority implications.
- Upstream dependencies.
- Downstream consumers.
- Architecture implications.
- Requirements and acceptance implications.
- Identifier stability.
- Traceability relationships.
- Data or interface compatibility.
- Validation and regression scope.
- Documentation and training.
- Security and access control.
- Operational readiness.
- Migration and release implications.
- Exception requirements.
- Emergency conditions.
- Rollback, recovery, or replacement.
- Known risks.
- Deferred consequences.

### 10.2 Proportional Depth

Editorial changes require confirmation that meaning and governed behavior do not change.

Minor changes require focused impact analysis sufficient to prove that effects remain contained.

Major changes require documented cross-artifact, implementation, validation, operational, and migration analysis where applicable.

Strategic changes require system-wide analysis, affected-owner review, architecture consideration, and explicit treatment of foundational consequences.

### 10.3 No-Impact Statements

For Major and Strategic changes, materially relevant impact categories shall not be omitted silently.

When an applicable category has no impact, the record should state that conclusion and its rationale.

### 10.4 Scope Expansion

If impact analysis reveals that the proposed scope is materially incomplete, the change shall return to Proposed or Classified status as appropriate.

Affected owners and approval requirements shall be reassessed.

---

## 11. Review and Approval

### 11.1 Review Requirements

Review shall determine whether:

- The correct owner is changing the governed concept.
- The classification is sufficient.
- The impact analysis is credible.
- Dependencies and downstream effects are addressed.
- The change conflicts with approved authority or architecture.
- Validation is capable of proving the intended result.
- The change introduces duplication, drift, or hidden assumptions.
- Required GOV-001, GOV-003, or GOV-004 routing applies.

### 11.2 Approval Authority

Approval authority derives from:

- Artifact classification.
- Canonical ownership.
- Authority Level.
- The affected concept.
- Applicable ADRs.
- Change classification.
- Approved delegation.

GOV-002 does not create an independent authority hierarchy.

### 11.3 Approval Scope

Approval shall identify:

- The approved change.
- Its classification.
- Authorized implementation scope.
- Required conditions.
- Required validation.
- Any implementation or closure deadline.
- The approving authority.
- The approval date.

### 11.4 Conditional Approval

A conditional approval shall identify each condition and the state transition it controls.

A condition shall not be treated as satisfied until the required evidence exists.

### 11.5 Reapproval

A change requires renewed review or approval when implementation would:

- Materially exceed approved scope.
- Change classification.
- Affect a previously unidentified owner.
- Introduce a material architectural consequence.
- Alter required validation.
- Contradict an approval condition.

---

## 12. Implementation Controls

Implementation shall:

- Use the approved change scope.
- Preserve stable identifiers unless renaming or renumbering was explicitly approved.
- Modify the artifact owning the affected rule or concept.
- Use references instead of creating duplicate ownership.
- Preserve unrelated approved content.
- Record affected versions and implementation evidence.
- Update authorized dependencies and references.
- Avoid bundling unrelated changes.
- Preserve recovery or rollback capability where applicable.

If implementation exposes a new governance, architecture, requirement, or scope defect, the Implementer shall record and route it rather than silently resolving it outside the approved change.

Before validation, the implemented result shall be compared with the approved scope to detect unauthorized drift.

---

## 13. Validation and Closure

### 13.1 Validation Definition

Before implementation is treated as complete, the change record shall identify:

- What must be validated.
- The artifact or implementation against which validation will run.
- Required evidence.
- Expected result.
- Validator.
- Applicable regression or drift checks.

Expected results define the test. They are not validation outcomes.

### 13.2 Validation Execution

Validation shall be performed against the actual implemented artifact or system.

Validation shall verify:

- The authorized correction or change was applied.
- Applicable requirements and approval conditions are satisfied.
- Required relationships and identifiers remain valid.
- Unrelated approved content did not drift.
- Applicable downstream effects were addressed.
- Recovery, migration, security, or operational conditions were met where required.

### 13.3 Validation Result

The result shall be recorded as an actual outcome, such as:

- Passed.
- Passed with approved limitations.
- Failed.
- Inconclusive.
- Superseded before completion.

A failed or inconclusive result shall not be converted into Passed by revising the expected result.

### 13.4 Closure Criteria

A change may close only when:

- The final scope and classification are recorded.
- Required approval exists.
- Implementation evidence exists.
- Required validation was executed.
- The actual validation result is recorded.
- Mandatory findings are resolved or governed.
- Related artifacts and references are updated.
- Exceptions, RFCs, or ADRs are linked where applicable.
- Deferred items have owners or governed dispositions.
- The closure authority and date are recorded.

### 13.5 Reopening

A closed change shall be reopened or followed by a new linked change when later evidence shows:

- The implementation was incomplete.
- Validation was incorrect.
- Unrelated content drifted.
- A material impact was omitted.
- The change introduced a defect.
- Closure evidence was inaccurate.

---

## 14. Governance Baseline Exit Criteria

Section 13 governs closure of an individual change.

This section governs closure of a baseline or phase composed of multiple artifacts, changes, validations, decisions, and deferred items. Both operate within the same closure architecture.

### 14.1 Exit-Criteria Definition

Exit criteria shall be defined before the baseline or phase is declared complete.

Each criterion shall be classified as:

- **Mandatory** — must be satisfied before closure unless an authorized governance mechanism explicitly permits another disposition.
- **Optional** — improves readiness but does not prevent closure unless formally promoted to Mandatory.

### 14.2 Mandatory Criteria

Mandatory criteria shall:

- Have an identifiable owner.
- Be objectively assessable.
- Identify required evidence.
- Be executed against the actual baseline.
- Record the actual result.

An expected result or planned correction does not satisfy a Mandatory criterion.

### 14.3 Optional Criteria

Optional criteria shall have an explicit disposition at closure, such as:

- Completed.
- Deferred.
- Not applicable.
- Rejected.
- Promoted to Mandatory through an approved change.

Optional criteria shall not silently become mandatory during validation.

### 14.4 Baseline Closure Record

Baseline closure shall identify:

- Baseline name and version.
- Included artifacts and versions.
- Applicable decisions.
- Mandatory criteria and results.
- Optional criteria and dispositions.
- Validation evidence.
- Known limitations.
- Active exceptions.
- Deferred work and owners.
- Unresolved risks.
- Closure authority.
- Closure date.

### 14.5 Historical Baseline Integrity

Closing a baseline records the repository state and evidence at that time.

Later changes shall not silently alter the historical closure result. They shall create a successor state through the GOV-002 lifecycle.

Any change required to satisfy or revise a baseline remains governed by GOV-002.

---

## 15. Applying Governance During Product Development

Governance friction discovered during product work shall be classified before it is resolved.

### 15.1 Issue Classification

| Situation | Issue classification | Required response |
|---|---|---|
| Product work conflicts with an approved governance rule | Governance conflict | Pause affected work and resolve through the applicable authority model |
| A requirement is defective, incomplete, or internally inconsistent | Requirement defect | Classify the correction and change the requirement-owning artifact |
| Governance is defective, ambiguous, incomplete, or obstructs legitimate product clarity | Governance defect | Classify the correction and change the governance-owning artifact |
| Friction does not affect correctness, authority, ownership, traceability, or validation | Non-blocking friction | Record when useful and continue within approved boundaries |
| Friction could cause drift, conflicting authority, false validation, or duplicate ownership | Blocking friction | Pause only affected work until resolved or explicitly governed |

### 15.2 Relationship to Change Classification

Issue classification identifies the nature of the problem.

Change classification identifies the significance of the proposed correction.

Blocking status determines whether affected work may continue.

Requirement-defect and governance-defect labels do not determine blocking status by themselves. Blocking status is determined through conflict evaluation, impact analysis, and change classification.

### 15.3 Development Response

| Change classification | Default response |
|---|---|
| Editorial | Record and process the correction; continue unaffected product work |
| Minor | Record and process the correction; continue unless the defect makes affected work invalid |
| Major | Pause the affected portion of product work and initiate the governed change |
| Strategic | Pause work materially dependent on the affected decision or baseline and initiate governed change and architecture review |

A governance conflict is blocking for affected work because work shall not knowingly proceed in violation of an approved rule.

The required response may be strengthened when authority conflict, architectural-integrity risk, false-validation risk, or duplicate ownership exists. It shall not be weakened merely by assigning a lower change tier.

### 15.4 Product-Clarity Boundary

Traceability exists to support product clarity, correctness, and auditability.

Traceability completeness shall not be pursued by manufacturing artificial relationships or weakening accurate product definitions.

GOV-002 governs the change needed to correct traceability defects. It does not redefine the canonical traceability chain owned by CHARTER-001 and PRD-001.

---

## 16. Emergency Change Management

### 16.1 Emergency Qualification

A change may use emergency handling only when delay through the ordinary timeline would create material:

- Security risk.
- Operational or continuity risk.
- Legal or regulatory exposure.
- Data or record-integrity risk.
- Safety risk.
- Irreversible architectural or repository damage.
- Material inability to operate or recover.

Convenience, schedule pressure, or late planning does not by itself qualify a change as an emergency.

### 16.2 Minimum Emergency Record

Before implementation where practical, or immediately afterward when circumstances prevent prior recording, the emergency record shall contain:

- Stable change identifier.
- Emergency condition.
- Accountable authority.
- Scope.
- Rationale for expedited action.
- Known risks.
- Affected artifacts or implementation.
- Recovery or rollback approach.
- Any required exception reference.

### 16.3 Expedited Authority

Emergency implementation requires authorization from a role competent to accept the immediate risk.

Emergency authority does not permanently expand that role’s ordinary approval authority.

### 16.4 Retrospective Requirements

An emergency change shall subsequently complete:

- Full classification.
- Proportionate impact analysis.
- Required owner review.
- Retrospective approval or rejection.
- Validation.
- Drift assessment.
- Exception linkage where applicable.
- Permanent adoption, correction, rollback, or replacement.
- Closure.

Until these requirements are complete, its state shall remain:

**Emergency Implementation Pending Retrospective Review**

### 16.5 Emergency Boundaries

Emergency handling shall not permit:

- Silent change.
- Missing accountability.
- Permanent bypass of governance.
- Omission of validation.
- False representation of completion.
- Unrecorded permanent deviation from an approved rule.

---

## 17. Relationship to Exception Management

Exception Management remains owned by GOV-001 §5.

The boundary is:

- **Exception:** temporary, bounded deviation without permanently changing the rule.
- **Emergency change:** expedited modification to governed content or implementation.
- **Emergency exception:** an expedited condition involving both a change and temporary deviation.

An exception record and change record may reference each other, but they remain distinct records with distinct owners and purposes.

An exception does not permanently modify governance.

If a temporary deviation should become permanent, the proposed permanent change shall follow GOV-002.

GOV-002 does not redefine GOV-001’s exception principles, required fields, review cadence, expiry, or revocation rules.

---

## 18. Relationship to Document and Architecture Governance

### 18.1 GOV-003 — Document Standards

GOV-002 owns the semantic information required to govern a change.

GOV-003 may define:

- Document structure.
- Metadata representation.
- Status notation.
- Revision-history format.
- File naming.
- Templates.
- Formatting and validation standards.

GOV-003 shall not redefine the GOV-002 lifecycle or change semantics.

### 18.2 GOV-004 — Architecture Governance

GOV-004 owns:

- RFC mechanics.
- Architecture-review mechanics.
- ADR creation and approval.
- Architecture-specific authority.
- Architectural supersession rules.

GOV-002 identifies and routes changes requiring architecture governance. It does not reproduce the RFC or ADR process.

### 18.3 Interim Architecture Review

Until GOV-004 is approved, architecture changes shall follow the precedent-based review discipline demonstrated during the development and approval of ADR-002 and ADR-003.

This is an informal precedent, not a named or separately approved repository process.

It shall not be cited as though a formal interim architecture-governance artifact exists.

GOV-004 shall replace this precedent-based arrangement when approved.

---

## 19. Evidence, Traceability, and Auditability

Section 9 defines the minimum information required to open and begin governing a change.

This section governs evidence accumulated and preserved throughout the lifecycle.

The authoritative change record shall contain or link to:

- Initial proposal.
- Classification history.
- Impact analysis.
- Affected owners.
- Review findings.
- Finding dispositions.
- Approval evidence.
- Approval conditions.
- Implementation evidence.
- Validation definition.
- Validation execution evidence.
- Actual validation result.
- Drift or regression findings.
- Related exception records.
- Related RFCs or ADRs.
- Updated artifact versions.
- Closure decision.
- Reopening or supersession history.

Evidence shall be sufficient to explain:

- What changed.
- Why it changed.
- Who authorized it.
- What was affected.
- How it was implemented.
- How it was validated.
- What result was observed.
- What remains deferred or limited.

GOV-002 change traceability shall not redefine:

**Requirement Acceptance Criteria → Product Goal → Project Objective → Project Success Criteria**

That canonical product and project traceability chain remains owned by PRD-001 and CHARTER-001.

---

## 20. Non-Ownership Boundaries

GOV-002 does not independently define or redefine:

- Purpose, Vision, Mission, or Values.
- Governance Principles.
- Canonical concept ownership.
- Authority Levels or authority relationships.
- Exception Management.
- Quality Attributes.
- Project Objectives.
- Project Scope.
- Project Success Criteria.
- Product Goals.
- Product Capability Scope.
- Requirement Acceptance Criteria.
- Architecture decisions.
- RFC or ADR mechanics.
- Document formatting or naming standards.
- Release-management procedures beyond their interaction with governed changes.

When a change affects one of these concepts, GOV-002 governs the change process while the canonical owner retains authority over the concept.

---

## 21. Validation Checklist

Before GOV-002 is approved or revised, verify that:

- [ ] One canonical change lifecycle is defined.
- [ ] Change type, impact classification, blocking status, and lifecycle state remain distinct.
- [ ] Editorial, Minor, Major, and Strategic classifications have meaningful boundaries.
- [ ] Classification is based on impact rather than effort or document size.
- [ ] Approval authority derives from GOV-001 and canonical ownership.
- [ ] Implementation and validation remain separate states.
- [ ] Expected results are not recorded as completed validation.
- [ ] Closure requires actual validation evidence.
- [ ] Unrelated approved content is checked for drift.
- [ ] Emergency handling remains governed and retrospective.
- [ ] Emergency authority does not permanently expand ordinary authority.
- [ ] Exception Management remains owned by GOV-001.
- [ ] Governance Baseline Exit Criteria distinguish Mandatory and Optional criteria.
- [ ] Individual change closure remains distinct from baseline closure.
- [ ] Requirement defects, governance defects, governance conflicts, and blocking friction are distinguishable.
- [ ] Defect labels do not automatically determine blocking status.
- [ ] Product clarity is not weakened to manufacture traceability.
- [ ] GOV-003 document-standard ownership is preserved.
- [ ] GOV-004 RFC/ADR ownership is preserved.
- [ ] Interim architecture review is described truthfully as precedent-based.
- [ ] Section 19 does not create a second change-record model.
- [ ] Change-process traceability does not redefine product traceability.
- [ ] Historical closure records cannot be silently rewritten.
- [ ] GOV-002 explicitly governs changes to itself.
- [ ] No ungoverned path exists for permanently modifying a governed artifact or baseline.
- [ ] Dependencies and references remain valid.

---

## 22. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0.0 | 2026-08-07 | Phase C3.1 validation draft. Establishes the governed lifecycle, classifications, authority boundaries, evidence requirements, emergency-change controls, product-development friction model, and baseline exit criteria for changes to Aegis IOS artifacts and baselines. | Chief Architect / Product Owner |

---

**Phase C3.1 Status:** **Approved — Complete**
