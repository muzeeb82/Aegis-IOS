# CHG-044 — Authorize Increment I1 Identity, Authorization, Audit, and Record Foundation

```text
Document ID: CHG-044
Title: Authorize Increment I1 Identity, Authorization, Audit, and Record Foundation
Version: 1.0.0
Status: Approved — Pending Implementation
Owner: Chief Architect / Engineering Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ADR-004, ADR-006, SPEC-001, SPEC-002, SPEC-004, SPEC-008, STD-001, IMP-001, CHG-036
Referenced By: None identified
Last Updated: 2026-08-08
Change Lifecycle State: Approved — Pending Implementation
```

## 1. Change Record

```text
Change ID: CHG-044
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Engineering Owner
Artifact Owner: Chief Architect / Engineering Owner
Date Identified: 2026-08-08
Change Type: Bounded implementation increment
Change Classification: Major
Urgency: Normal
```

## 2. Proposed Authorized Scope

Increment I1 may implement the following foundations, and only these foundations:

- a canonical persistence representation for the SPEC-002 common envelope and the Identity-domain aggregates `PrincipalReference`, `RoleBinding`, `PolicyReference`, and `AuthorizationEvidence`;
- forward migration, rollback or recovery procedure, reconciliation query, and synthetic-data validation for that bounded schema;
- replaceable interfaces for federated human and workload identity, without selecting or connecting an identity provider;
- deny-by-default authorization evaluation over principal, role, action, resource, scope, sensitivity, lifecycle state, and separation-of-duty policy;
- tamper-evident audit-event capture for authentication, authorization changes, denied privileged actions, and policy changes;
- a bounded threat-model review for the I1 identity, authorization, audit, and persistence boundaries, without representing the full SPEC-004 production release gate as complete;
- unit, integration, authorization-negative-path, migration, and evidence-record tests that demonstrate the bounded controls.

## 3. Explicit Boundaries

I1 does not authorize a user-facing sign-in experience, a live identity provider, an external connector, an AI provider, a product decision workflow, portfolio behavior, production data, production infrastructure, a release, or any unapproved vendor selection. Decision, evidence, and traceability lifecycle behavior remains I2 scope. The implementation must use synthetic local and test data only.

## 4. Impact Analysis

| Category | Assessment |
|---|---|
| Affected artifacts and versions | Material implementation change bounded to new I1 source, tests, migrations, evidence, and documentation. Approved specifications are consumed, not rewritten. |
| Canonical ownership | SPEC-002 retains ownership of data aggregates; SPEC-004 retains ownership of security and authorization requirements. |
| Authority implications | No governance or investment authority is created. System-administration permission and approval authority remain distinct. |
| Upstream dependencies | ADR-006 supplies the selected replaceable stack; SPEC-002 and SPEC-004 define the consumed records and controls. |
| Downstream consumers | I2 and later increments may consume the resulting foundations only after their own authorization. |
| Architecture implications | Must preserve adapter replaceability and deny-by-default boundaries; no provider is selected. |
| Requirements and acceptance | I1 validates security and persistence conformance only; it does not claim I2 acceptance criteria. |
| Data, privacy, and security | Material. Only synthetic data is permitted; protected history, audit evidence, and least privilege must be preserved. |
| Compatibility and migration | Material. Every schema change requires forward migration, recovery or rollback procedure, reconciliation query, and executed evidence. |
| Operations and release | No production deployment or release is authorized. Local services remain disposable. |
| Validation and regression | Material. Tests must include denied access, separation-of-duty, audit capture, persistence, migration, and recovery behavior. |
| Documentation and training | Material. The implementation must document local configuration, adapter boundary, authorization semantics, migration/recovery procedure, and evidence location. |
| Known risks | Identity-provider and production-secret choices remain intentionally deferred; no placeholder may be treated as a live credential or provider integration. |

## 5. Required Evidence Before Closure

- Requirement and specification traceability for each implemented module and test.
- Executed unit and integration results for identity references, authorization denial, separation of duty, audit evidence, persistence, and migrations.
- Executed synthetic-data migration, recovery or rollback, and reconciliation evidence.
- A reviewed I1 threat model covering identity spoofing, privilege escalation, tampering, repudiation, injection, and audit destruction at the implemented boundaries.
- Evidence records conforming to the SPEC-008 §3 template.
- A review showing no live provider, product workflow, production data, or production deployment entered scope.
- Passing CI quality, secret-scanning, dependency-audit, and repository-hygiene checks.

## 6. Review Activity

Review Result: Passed.

Review cross-checked the proposed scope against ADR-004's modular-core, deny-by-default, immutable-record, and replaceable-adapter boundaries; ADR-006's TypeScript/Node and PostgreSQL stack decision; SPEC-002's common envelope and Identity-domain aggregates; SPEC-004's identity, authorization, audit-evidence, and threat-control requirements; SPEC-008's evidence requirements; and IMP-001's I1 delivery and exit-evidence definition. No product requirement, interface contract, provider, vendor, or production capability is introduced or redefined.

One finding was corrected before approval: the Draft required authorization and audit tests but did not explicitly require threat-model evidence for this security-sensitive increment. The scope and required-evidence sections now require a bounded I1 threat-model review while preserving the full SPEC-004 release gate as future work.

## 7. Approval Activity

Approval Result: Approved.

Decision Authority: Chief Architect / Product Owner. Approval Date: 2026-08-08. Authority Basis: GOV-001, GOV-002, ADR-004, ADR-006, SPEC-002, SPEC-004, SPEC-008, IMP-001, and completion of CHG-036.

Authorized scope is exactly §2, subject to the explicit boundaries in §3 and evidence in §5. Approval authorizes I1 foundation implementation only; it does not authorize any excluded product capability, live provider, production data, production infrastructure, release, or vendor decision. Validation must be executed and recorded before this change can close.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial Draft proposing a bounded I1 identity, authorization, audit, and record-foundation increment derived from the approved implementation plan and specifications. | Chief Architect / Engineering Owner | CHG-044 |
| 1.0.0 | 2026-08-08 | Review passed after direct cross-check against the approved architecture, stack, specification, validation, and implementation-plan boundaries. Added bounded I1 threat-model evidence as a required control; approved the exact scope for implementation. | Chief Architect / Product Owner | CHG-044 |
