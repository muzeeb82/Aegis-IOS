# CHG-018 — Decide Extension-Package Specification Ownership

```text
Document ID: CHG-018
Title: Decide Extension-Package Specification Ownership
Version: 0.2.0
Status: Closed
Owner: Chief Architect / Product Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, ADR-003, PRD-001, AR-SYS-001, AR-PKG-001, SPEC-001, SPEC-006
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Closed
```

## 1. Change Record

```text
Change ID: CHG-018
Change Lifecycle State: Closed
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

CHG-018 selects **Alternative B — Create a dedicated extension-package specification**. SPEC-009 will be the single normative owner of the detailed extension-package contract required by SPEC-001 §17, INV-010, FR-015 / AC-015, and NFR-010.

The implementation is limited to:

1. Create `SPEC-009 — Extension Package Specification` as a Draft normative artifact.
2. Define the package identity, compatibility, capability, permission, configuration, lifecycle, validation, data-ownership, and migration rules enumerated by SPEC-001 §17.
3. State that SPEC-009 owns the detailed package contract, while SPEC-006 continues to own connector-specific integration and connector-lifecycle contracts.
4. Update SPEC-001 to identify SPEC-009 as a required downstream elaboration before implementation readiness.
5. Correct direct `Referenced By` metadata in each artifact whose header becomes a direct input to SPEC-009: PRD-001, AR-SYS-001, and SPEC-001 through SPEC-004, SPEC-006, and SPEC-008.

No Product Requirement, acceptance criterion, architecture approval, connector protocol, implementation, RRC-001, Phase C4, or release claim is changed or authorized.

## 4. Scope and Boundaries

Affected artifacts are CHG-018, PRD-001, AR-SYS-001, SPEC-001 through SPEC-004, SPEC-006, SPEC-008, and the new SPEC-009. The scope contains no modification to the substantive requirements or acceptance criteria of PRD-001, no modification to connector behavior in SPEC-006, and no change to the existing system-level obligation in SPEC-001 §17.

This change does not alter product goals, Product Requirements, acceptance intent, architecture approval, connector behavior, SPEC-001 §17, RRC-001 execution, Phase C4 closure, or release tagging. It creates a Draft specification only; no new artifact is represented as approved or implementation-ready.

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

### Decision

**Alternative B is approved.** A dedicated specification is required because the contract spans extension types beyond connectors and must independently govern compatibility, activation, validation, permission, data ownership, and migration. Assigning this to SPEC-006 would make the connector specification an owner of non-connector package behavior. No existing non-connector specification has a coherent responsibility for all of those concerns.

## 7. Validation Considerations

Before any implementation is proposed, validation criteria shall be completed to prove that:

- Exactly one normative artifact owns the extension-package contract.
- The selected owner addresses every contract element in SPEC-001 §17 and preserves links to INV-010, FR-015 / AC-015, and NFR-010.
- Connector-specific ownership in SPEC-006 remains explicit and non-duplicative.
- Dependencies, `Referenced By` values, and validation responsibilities are truthful after the decision.
- No unapproved architecture, requirement, lifecycle, implementation, RRC-001, Phase C4, or release claim is introduced.

## 8. Impact Assessment and Current Disposition

Classification remains Major. The change creates a new normative specification boundary and affects system-level extensibility elaboration, downstream traceability, validation, and security/data interfaces. It does not alter the upstream PRD requirement or architecture direction.

The affected requirements remain FR-015 / AC-015 and NFR-010; SPEC-001 §17 and INV-010 remain their system-level elaboration. SPEC-009 gives the detailed contract a single owner. SPEC-006 retains its connector-specific contract and does not inherit package responsibilities. SPEC-002, SPEC-003, SPEC-004, and SPEC-008 are direct inputs for data/migration, interface compatibility, permission controls, and conformance respectively; no substantive rule in those artifacts changes.

## 9. Review Activity

**Result: Passed.** Review confirmed that a dedicated normative owner is necessary, no existing specification can own the complete contract without overlap, and the implementation scope preserves both PRD ownership and SPEC-006's connector boundary.

## 10. Approval Activity

**Approved.** Approval authorizes only the scope defined in §3 on 2026-08-08. It does not approve SPEC-009 itself, architecture, implementation, or release activity.

## 11. Implementation Activity

Implemented the authorized scope: created SPEC-009 as a Draft, added the detailed contract, updated SPEC-001's downstream-specification inventory, and corrected direct-consumer metadata only where SPEC-009's header establishes a direct dependency.

## 12. Validation Activity

**Passed.** Validation confirmed that SPEC-009 addresses each element enumerated in SPEC-001 §17; that it traces to INV-010, FR-015 / AC-015, and NFR-010 without redefining them; that its connector boundary defers to SPEC-006; and that direct `Referenced By` metadata reflects the new header relationships. The Implementer and Validator are the same role because no separate validator is designated; compensating validation consisted of a separate post-implementation review against the approved scope and the named upstream contract elements.

## 13. Closure Activity

**Closed.** The ownership gap is resolved at the Draft-design level. SPEC-009 remains a Draft pending its own internal review and architecture approval; this closure does not assert that the system or the new specification is approved or ready for implementation.

## 14. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial Major-change proposal to resolve the unowned extension-package requirement while preserving the ownership decision for review. | Chief Architect / Product Owner | CHG-018 |
| 0.1.0 | 2026-08-08 | Added PRD-001 and AR-SYS-001 as direct dependencies because the proposed ownership decision consumes the extensibility requirement and architecture context. | Chief Architect / Product Owner | CHG-018 |
| 0.2.0 | 2026-08-08 | Selected and implemented the dedicated SPEC-009 owner, with bounded relationship and traceability updates; recorded review, approval, validation, and closure evidence. | Chief Architect / Product Owner | CHG-018 |
