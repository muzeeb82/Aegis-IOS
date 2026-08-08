# CHG-018 — Decide Extension-Package Specification Ownership

```text
Document ID: CHG-018
Title: Decide Extension-Package Specification Ownership
Version: 0.1.0
Status: Draft (Decision Pending)
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, ADR-003, PRD-001, AR-SYS-001, AR-PKG-001, SPEC-001, SPEC-006
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Proposed
```

## 1. Change Record

```text
Change ID: CHG-018
Change Lifecycle State: Proposed
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Product Owner
Artifact Owner: Chief Architect / Product Owner
Date Identified: 2026-08-08
Change Type: Specification-boundary and requirement-coverage correction
Change Classification: Major
Urgency: Normal
```

## 2. Current Condition

SPEC-001 §17 and INV-010 require an extension-package contract: stable identity, compatibility, capabilities, permissions, configuration, lifecycle, validation, data ownership, and migration behavior. FR-015 / AC-015 and NFR-010 trace extensibility as a system obligation.

No downstream specification currently owns that contract. SPEC-006 owns external connector lifecycle and integration contracts, but does not claim or define the broader extension-package concept. The gap leaves a normative system requirement without an accountable detailed specification owner.

This is finding M-J in AR-PKG-001 §9.3.

## 3. Proposed Change

Subject to Major-change review and an explicit ownership decision:

1. Determine the single normative specification owner for the extension-package contract required by SPEC-001 §17, INV-010, FR-015 / AC-015, and NFR-010.
2. After that decision, prepare a bounded implementation scope that assigns the contract to the selected artifact and updates only the relationships and traceability made necessary by that decision.
3. Require the selected design to distinguish extension packages from the connector lifecycle already owned by SPEC-006, preserving one concept owner and avoiding duplicate contracts.

No target-artifact modification is authorized by this Draft record.

## 4. Scope and Boundaries

Initial decision artifacts are SPEC-001, SPEC-006, this change record, and any one additional specification artifact only if review selects that option. The eventual implementation scope is deliberately unapproved until the ownership decision, affected-owner review, and impact analysis are complete.

This proposal does not alter product goals, Product Requirements, or acceptance intent; approve architecture; create a new specification; expand SPEC-006; remove SPEC-001 §17; authorize implementation; execute RRC-001; close Phase C4; or create a release tag. Any option requiring a new SPEC identifier or a materially new architecture boundary requires renewed scope, identifier, dependency, and approval review before implementation.

## 5. Classification and Impact Assessment

Change Type: Specification-boundary and requirement-coverage correction.

Initial Change Classification: Major. Assigning a missing owner for a system-wide extensibility contract materially affects a Normative specification boundary, requirement elaboration, dependency relationships, downstream validation, and potentially the specification set itself. The record intentionally defaults to the higher classification while the decision remains unresolved.

Impact analysis shall determine the affected requirement and validation traceability, direct consumers, relation to AR-SYS-001 and any future ADR-004 decision, data and migration responsibility, security/permission implications, compatibility and release impact, and whether one of the alternatives would require a separate architecture or new-artifact decision.

## 6. Alternatives Requiring Decision

### Alternative A — Extend SPEC-006

Assign extension-package lifecycle ownership to SPEC-006, with an explicit boundary separating generalized extension packages from connector-specific contracts. This may minimize artifact count but risks overloading the connector specification and blurring the distinction identified by the review.

### Alternative B — Create a dedicated extension-package specification

Create a new specification artifact to own the full extension-package contract. This may provide the clearest single owner, but requires a new identifier, dependency map, lifecycle, validation plan, and review of whether the new boundary is architecture-significant.

### Alternative C — Assign the contract to an existing non-connector specification

Assign ownership to another existing specification only if impact analysis identifies a direct, coherent owner and demonstrates that it will not duplicate SPEC-006 or create split ownership. No candidate is selected by this record.

### Alternative D — Re-scope or remove the SPEC-001 obligation

Change SPEC-001 §17 and its linked invariant/traceability. This would alter an existing system-level requirement elaboration and cannot be assumed to be a local specification correction; it requires separate upstream authority and impact analysis.

### Decision Status

**Pending.** No alternative is recommended, approved, or implemented by CHG-018. Review must select or reject alternatives based on accountable ownership, architecture fit, traceability, and downstream impact before this record can advance to approval.

## 7. Validation Considerations

Before any implementation is proposed, validation criteria shall be completed to prove that:

- Exactly one normative artifact owns the extension-package contract.
- The selected owner addresses every contract element in SPEC-001 §17 and preserves links to INV-010, FR-015 / AC-015, and NFR-010.
- Connector-specific ownership in SPEC-006 remains explicit and non-duplicative.
- Dependencies, `Referenced By` values, and validation responsibilities are truthful after the decision.
- No unapproved architecture, requirement, lifecycle, implementation, RRC-001, Phase C4, or release claim is introduced.

## 8. Current Disposition

Draft (Decision Pending). CHG-018 is intentionally not ready for approval because the required ownership decision has not been made. It does not authorize a target-artifact edit, implementation, validation, or closure.

## 9. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial Major-change proposal to resolve the unowned extension-package requirement while preserving the ownership decision for review. | Chief Architect / Product Owner | CHG-018 |
| 0.1.0 | 2026-08-08 | Added PRD-001 and AR-SYS-001 as direct dependencies because the proposed ownership decision consumes the extensibility requirement and architecture context. | Chief Architect / Product Owner | CHG-018 |
