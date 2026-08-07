# CHG-002 — Extend GOV-003 for Artifact-Family Status Profiles

```text
Document ID: CHG-002
Title: Extend GOV-003 for Artifact-Family Status Profiles
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Informational change record outside the normative authority hierarchy
Depends On: GOV-002, GOV-003
Referenced By: AR-GOV-004-001
Last Updated: 2026-08-07
```

## 1. Change Record

```text
Change ID: CHG-002
Change Lifecycle State: Impact Assessed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-07
Change Type: Governance document standard extension
Change Classification: Minor
Urgency: Normal
Target Artifact: GOV-003
Current Approved Version: 1.0.0
Proposed Version: 1.1.0
```

## 2. Current Condition

GOV-003 §9.1 defines the common artifact-maturity vocabulary:

- Reserved.
- Draft.
- Approved.
- Superseded.
- Deprecated.
- Withdrawn.
- Archived.

GOV-003 §5.3 permits artifact-profile variation but does not explicitly include artifact-family-specific status vocabulary as a permitted variation.

GOV-004 requires architecture-specific proposal and decision states for RFCs and ADRs that the common maturity vocabulary cannot represent precisely.

Without a GOV-003 amendment, GOV-004 would either:

- Use insufficiently precise statuses; or
- Introduce local status values without authority from the owning document standard.

## 3. Proposed Change

Amend GOV-003 to:

1. Add artifact-family-specific status vocabulary to permitted profile variations in §5.3.
2. Add §9.7 governing Artifact-Family-Specific Status Profiles.
3. Add corresponding validation checks.
4. Increment GOV-003 from v1.0.0 to v1.1.0.
5. Add `Change ID: CHG-002` to the v1.1.0 metadata.

## 4. Rationale

The amendment allows downstream governed artifact families to represent legitimate proposal, review, and decision states while preserving:

- GOV-003 ownership of status representation.
- GOV-002 ownership of Change Record lifecycle state.
- The common artifact-maturity vocabulary.
- Explicit semantic ownership.
- Controlled status transitions.
- Prohibition on unapproved local vocabularies.

## 5. Proposed §5.3 Amendment

### 5.3 Profile Variation

Profiles may vary in:

- Required sections.
- Authority representation.
- Decision-record structure.
- Validation structure.
- Inputs and outputs.
- Runtime-consumer metadata.
- Artifact-family-specific status vocabulary.
- Supersession mechanics.
- Template instructions.

An artifact-family-specific status vocabulary is permitted only when the common artifact-maturity vocabulary is insufficient to represent the governed role or decision state of that artifact family.

The profile or governing artifact defining the extension shall:

- Define each additional value.
- Identify its semantic owner.
- Distinguish it from GOV-002 change-record lifecycle state.
- Define its relationship to the common artifact-maturity vocabulary.
- Prevent two values from representing the same state ambiguously.
- Define permitted transitions where transition semantics are material.
- Preserve `Draft`, `Approved`, `Superseded`, `Deprecated`, `Withdrawn`, and `Archived` where those common values remain applicable.

Profiles shall reuse the common semantic model rather than redefine common metadata fields.

## 6. Proposed §9.7 Addition

### 9.7 Artifact-Family-Specific Status Profiles

An approved artifact profile or the normative governance artifact owning that artifact family’s process may define additional status values when the common artifact-maturity vocabulary cannot represent the artifact’s governed role accurately.

Examples may include:

- A proposal under structured review.
- A proposal requiring revision.
- A proposal ready for decision but not yet approved.
- A rejected decision proposal.
- A deferred proposal.

These values represent artifact-family-specific proposal, review, or decision states. They do not replace or duplicate GOV-002 Change Record lifecycle states.

The governing profile shall state whether each value is:

- An artifact-maturity status.
- A proposal or review status.
- A decision outcome.
- A terminal or non-terminal status.
- Compatible with later transition to Approved, Superseded, Withdrawn, or Archived.

A downstream artifact shall not introduce an additional status merely through local usage. The extension must be authorized by GOV-003 or by an artifact-family profile or governing process expressly permitted by GOV-003.

## 7. Proposed Validation Checklist Additions

Add to GOV-003 §28:

- [ ] Artifact-family-specific status extensions are expressly authorized.
- [ ] Each extended status has a defined meaning and semantic owner.
- [ ] Extended statuses remain distinct from GOV-002 lifecycle states.
- [ ] Permitted transitions are defined where material.
- [ ] Downstream artifacts cannot create local status vocabularies without an authorized profile.

## 8. Impact Analysis

### Authority

No change to GOV-001 authority, classification, or ownership.

### GOV-002

No change to Change Record lifecycle states or semantics.

### GOV-003

GOV-003 retains ownership of status representation and expressly controls downstream extensions.

### GOV-004

GOV-004 may define RFC and ADR profile statuses only after GOV-003 v1.1.0 becomes Approved.

### Existing artifacts

No existing artifact is automatically required to adopt a new status.

### Existing statuses

The common vocabulary remains valid.

### Templates and automation

Future validators may need to accept status values authorized by an applicable artifact-family profile.

No validator shall accept arbitrary ungoverned values.

### Migration

No automatic metadata migration.

### Risk

The principal risk is uncontrolled proliferation of status vocabularies. The amendment mitigates it through explicit authorization and semantic requirements.

### Recovery

If the amendment is rejected, GOV-004 must use only existing GOV-003 statuses or propose a different governed representation.

## 9. Required Review and Approval

Review shall confirm:

- The extension is necessary.
- The common vocabulary remains authoritative.
- GOV-002 lifecycle states are not duplicated.
- Downstream processes cannot create arbitrary local statuses.
- Existing approved artifacts remain valid.
- Version `1.1.0` is proportionate to the Minor classification.
- The amendment introduces no unrelated GOV-003 changes.

Approval authority: Chief Architect / Product Owner under GOV-001 and GOV-002.

## 10. Implementation Plan

After approval:

1. Update GOV-003 metadata to Version `1.1.0`.
2. Keep GOV-003 Status at Draft until corrected text is validated.
3. Add `Change ID: CHG-002`.
4. Apply the authorized §5.3 amendment.
5. Add §9.7.
6. Add the five §28 validation checks.
7. Add a distinct v1.1.0 revision-history row.
8. Validate the actual corrected artifact.
9. Mark GOV-003 v1.1.0 Approved only after validation passes.
10. Close CHG-002 only after implementation and validation evidence exist.

## 11. Target Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 1.0.0 | 2026-08-07 | Initial approved GOV-003 — Document Standards. | Chief Architect / Product Owner | Not applicable — initial approval preceded CHG-002 |
| 1.1.0 | 2026-08-07 | Adds governed artifact-family-specific status profiles while preserving the common maturity vocabulary and GOV-002 ownership of Change Record lifecycle states. | Chief Architect / Product Owner | CHG-002 |

The v1.1.0 entry shall not be represented as completed until implementation occurs.

## 12. Validation Plan

Validation shall verify against the implemented GOV-003 v1.1.0 artifact that:

- Version is `1.1.0`.
- `Change ID` is `CHG-002`.
- Only the authorized §5.3, §9.7, §28, metadata, and revision-history changes occurred.
- Existing common statuses remain intact.
- GOV-002 lifecycle ownership remains intact.
- Profile extensions require explicit authorization.
- Existing artifacts are not retrofitted automatically.
- No unrelated approved GOV-003 content drifted.

## 13. Disposition at Proposal Completion

**CHG-002 remains at Impact Assessed — Pending Review.**

GOV-003 v1.0.0 remains the approved governing version. GOV-003 v1.1.0 has not been approved, implemented, validated, or made effective.



---

# CHG-002 — Review Result

```text
Change ID: CHG-002
Review Activity: Completed
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-07
Lifecycle State Entered: Reviewed
Review Result: Passed
```

## Review Evidence

The review confirmed that:

- GOV-003 v1.0.0 does not expressly permit artifact-family-specific status vocabularies.
- GOV-004 requires additional RFC and ADR proposal or decision states that the common maturity vocabulary cannot represent precisely.
- GOV-004 may not create those extensions unilaterally.
- The proposed amendment preserves GOV-003 ownership of status representation.
- The proposed amendment preserves GOV-002 ownership of Change Record lifecycle state.
- The common GOV-003 maturity vocabulary remains valid.
- Downstream status extensions require express authorization and definitions.
- Existing approved artifacts are not automatically retrofitted.
- Version `1.1.0` is proportionate to the Minor extension.
- The implementation and validation plans are sufficient.
- No unrelated GOV-003 content needs to change.

## Review Findings

No blocking or corrective findings.

The future GOV-004 RFC and ADR vocabularies remain provisional until CHG-002 is implemented and validated.

# CHG-002 — Approval Record

```text
Change ID: CHG-002
Decision: Approved
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-07
Authority Basis: GOV-003 artifact ownership and Minor change authority under GOV-001 and GOV-002
Approved Classification: Minor
Lifecycle State Entered: Approved
```

## Authorized Scope

CHG-002 authorizes only:

1. Incrementing GOV-003 from v1.0.0 to v1.1.0.
2. Adding `Change ID: CHG-002`.
3. Applying the approved §5.3 amendment.
4. Adding §9.7.
5. Adding the five authorized validation checks to §28.
6. Adding a separate v1.1.0 revision-history row.
7. Performing validation against the actual corrected artifact.

## Approval Conditions

- GOV-003 shall remain Draft while the correction is implemented.
- No existing common status value may be removed or redefined.
- GOV-002 Change Record lifecycle ownership shall remain unchanged.
- Existing artifacts shall not be retrofitted automatically.
- No unrelated GOV-003 section may drift.
- GOV-003 v1.1.0 shall not become Approved until validation executes and passes.
- GOV-004 shall not rely normatively on the extended statuses until GOV-003 v1.1.0 becomes effective.

**CHG-002 Lifecycle State:** **Approved — Pending Implementation**

---

# CHG-002 — Implementation

```text
Change ID: CHG-002
Implementer: Chief Architect / Product Owner
Implementation Date: 2026-08-07
Lifecycle State Entered: Implemented
Implementation Result: Completed
```

## Implemented GOV-003 metadata

```text
Document ID: GOV-003
Title: Document Standards
Version: 1.1.0
Status: Draft (Pending Validation)
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 1
Depends On: CONST-001, GOV-001, GOV-002, ADR-002, ADR-003
Referenced By: None identified
Last Updated: 2026-08-07
Change ID: CHG-002
```

## Implemented GOV-003 §5.3

### 5.3 Profile Variation

Profiles may vary in:

- Required sections.
- Authority representation.
- Decision-record structure.
- Validation structure.
- Inputs and outputs.
- Runtime-consumer metadata.
- Artifact-family-specific status vocabulary.
- Supersession mechanics.
- Template instructions.

An artifact-family-specific status vocabulary is permitted only when the common artifact-maturity vocabulary is insufficient to represent the governed role or decision state of that artifact family.

The profile or governing artifact defining the extension shall:

- Define each additional value.
- Identify its semantic owner.
- Distinguish it from GOV-002 change-record lifecycle state.
- Define its relationship to the common artifact-maturity vocabulary.
- Prevent two values from representing the same state ambiguously.
- Define permitted transitions where transition semantics are material.
- Preserve `Draft`, `Approved`, `Superseded`, `Deprecated`, `Withdrawn`, and `Archived` where those common values remain applicable.

Profiles shall reuse the common semantic model rather than redefine common metadata fields.

## Implemented GOV-003 §9.7

### 9.7 Artifact-Family-Specific Status Profiles

An approved artifact profile or the normative governance artifact owning that artifact family’s process may define additional status values when the common artifact-maturity vocabulary cannot represent the artifact’s governed role accurately.

Examples may include:

- A proposal under structured review.
- A proposal requiring revision.
- A proposal ready for decision but not yet approved.
- A rejected decision proposal.
- A deferred proposal.

These values represent artifact-family-specific proposal, review, or decision states. They do not replace or duplicate GOV-002 Change Record lifecycle states.

The governing profile shall state whether each value is:

- An artifact-maturity status.
- A proposal or review status.
- A decision outcome.
- A terminal or non-terminal status.
- Compatible with later transition to Approved, Superseded, Withdrawn, or Archived.

A downstream artifact shall not introduce an additional status merely through local usage. The extension must be authorized by GOV-003 or by an artifact-family profile or governing process expressly permitted by GOV-003.

## Implemented GOV-003 §28 additions

- [ ] Artifact-family-specific status extensions are expressly authorized.
- [ ] Each extended status has a defined meaning and semantic owner.
- [ ] Extended statuses remain distinct from GOV-002 lifecycle states.
- [ ] Permitted transitions are defined where material.
- [ ] Downstream artifacts cannot create local status vocabularies without an authorized profile.

## Implemented GOV-003 revision history

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 1.0.0 | 2026-08-07 | Initial approved GOV-003 — Document Standards. | Chief Architect / Product Owner | Not applicable — initial approval preceded CHG-002 |
| 1.1.0 | 2026-08-07 | Adds governed artifact-family-specific status profiles while preserving the common maturity vocabulary and GOV-002 ownership of Change Record lifecycle states. | Chief Architect / Product Owner | CHG-002 |

No other GOV-003 section changed.

# CHG-002 — Validation Execution

```text
Validator: Chief Architect / Product Owner
Validation Date: 2026-08-07
Lifecycle State Entered: Validated
Actual Result: Passed
```

Validation against CHG-002 §12 confirmed:

- [x] GOV-003 Version is `1.1.0`.
- [x] `Change ID` is `CHG-002`.
- [x] Only metadata, §5.3, §9.7, §28, and revision history changed.
- [x] All existing common status values remain intact.
- [x] GOV-002 retains Change Record lifecycle ownership.
- [x] Profile extensions require express authorization.
- [x] Extended values require definitions and semantic ownership.
- [x] Transitions must be defined where material.
- [x] Downstream artifacts cannot create arbitrary local statuses.
- [x] Existing artifacts are not retrofitted automatically.
- [x] No unrelated approved GOV-003 content drifted.

Because CHG-002 is Minor, independent validation was not required by GOV-002 §8.8. The implementation and validation activities remain separately recorded.

## CHG-002 Closure

```text
Closure Decision: Closed
Closure Authority: Chief Architect / Product Owner
Closure Date: 2026-08-07
Final Lifecycle State: Closed
```

Following successful validation, GOV-003 metadata was finalized as:

```text
Version: 1.1.0
Status: Approved
Change ID: CHG-002
```

**GOV-003 v1.1.0 — Approved and governing.**
