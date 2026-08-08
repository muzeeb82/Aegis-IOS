# CHG-017 — Remove SPEC-005 PI-001 Spurious Dependency

```text
Document ID: CHG-017
Title: Remove SPEC-005 PI-001 Spurious Dependency
Version: 0.1.0
Status: Draft — Reviewed (Pending Minor Approval)
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, AR-PKG-001, PI-001, SPEC-005
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Reviewed
```

## 1. Change Record

```text
Change ID: CHG-017
Change Lifecycle State: Reviewed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Specification traceability correction
Change Classification: Minor
Urgency: Normal
```

## 2. Current Condition

SPEC-005 lists PI-001 in `Depends On`. PI-001 is a Runtime-classified instruction artifact for AI systems assisting Aegis IOS development; it expressly defers to normative artifacts and does not govern the product's AI-orchestration subsystem. A direct review of SPEC-005 §§1–8 found no operative rule, constraint, or citation that relies on PI-001. PI-001's `Referenced By` field likewise does not identify SPEC-005 as a consumer.

The relationship appears to result from topical name similarity rather than a direct dependency. Retaining it makes SPEC-005's traceability direction inaccurate and risks implying that runtime assistant instructions govern product design.

This is finding M-I in AR-PKG-001 §9.3.

## 3. Proposed Change

Subject to Minor-change review and approval:

1. Remove `PI-001` from SPEC-005's `Depends On` field.
2. Add one revision-history row in SPEC-005 recording the dependency correction and citing CHG-017.

## 4. Scope and Boundaries

Initial affected artifacts are SPEC-005 and this change record. Implementation, if approved, is limited to removing `PI-001` from SPEC-005's `Depends On` value and adding one revision-history row.

This proposal does not modify PI-001; change SPEC-005's purpose, provider-port behavior, security controls, architecture, or other dependencies; redefine the Runtime classification; approve SPEC-005; or authorize implementation. PI-001's current `Referenced By` field does not make a false SPEC-005 assertion and is therefore outside this record's scope. If review finds a real operative PI-001 dependency, this proposal shall be withdrawn or revised rather than preserving an unsupported relationship.

## 5. Classification and Impact Assessment

Change Type: Specification traceability correction.

Initial Change Classification: Minor. The proposal removes a single unsupported metadata dependency. It does not alter dependency direction among normative product or architecture artifacts, change requirement intent, or modify system behavior. It clarifies that Runtime instructions are not a source of authority for the product specification.

Impact analysis shall confirm that SPEC-005 contains no operative PI-001 reliance, that no other artifact relies on this declared relationship, that remaining dependencies adequately support SPEC-005's content, and that removal does not conceal a required dependency on a different canonical owner.

## 6. Validation Plan

- Confirm SPEC-005's `Depends On` field no longer contains `PI-001` and preserves all other existing dependencies unchanged.
- Confirm a direct review of SPEC-005 finds no operative PI-001 rule, citation, or constraint.
- Confirm PI-001 contains no direct `Referenced By` assertion that SPEC-005 consumes it.
- Confirm the SPEC-005 diff is confined to the `Depends On` field and one revision-history row.
- Confirm `git diff --check` passes and no approval, implementation, RRC-001 execution, Phase C4 closure, or release claim is introduced.

## 7. Current Disposition

Draft (Pending Review). This record proposes a traceability correction only. It does not approve, implement, validate, or close the change.

Superseded by §9 following Review. Preserved here for historical accuracy rather than edited in place. As of §9, CHG-017 is **Reviewed — Pending Minor Approval**; it still authorizes no implementation, validation, or closure.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial proposal to remove the unsupported PI-001 dependency from SPEC-005. | Chief Architect / Product Owner | CHG-017 |

## 9. Review Activity

```text
Review State: Reviewed — Pending Minor Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Minor Approval
```

### 9.1 Evidence Reviewed

- SPEC-005's live `Depends On` field, confirmed to read `PI-001, PRD-001, SPEC-001, SPEC-002, SPEC-003, SPEC-004, AR-SYS-001`.
- A full-file search of SPEC-005 for `PI-001`: the only match is the `Depends On` field itself — no occurrence anywhere in §§1–8's operative text.
- PI-001's live `Referenced By` field, confirmed to read `AI runtime environments consuming Aegis IOS Project Instructions` — a generic class description that does not name SPEC-005 or any other specification as a direct consumer.

### 9.2 Findings

- §2's factual claim is accurate: SPEC-005 has no operative reliance on PI-001, and PI-001 does not reciprocally claim SPEC-005 as a consumer.
- §4's scope is correctly bounded to removing one entry from `Depends On` plus one revision-history row; it does not touch PI-001, SPEC-005's remaining six dependencies, or any substantive content.
- The record correctly treats this as a one-directional correction and does not attempt to also edit PI-001's `Referenced By` (which already does not assert the false relationship).
- No unresolved Review finding remains.

This Review does not approve, implement, validate, or close CHG-017.
