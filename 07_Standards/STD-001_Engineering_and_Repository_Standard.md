# STD-001 — Engineering and Repository Standard

```text
Document ID: STD-001
Title: Engineering and Repository Standard
Version: 0.1.0
Status: Draft (Pending Internal Review)
Owner: Chief Architect
Classification: Normative
Authority Level: Level 6
Depends On: GOV-002, GOV-003, GOV-004, ADR-004, SPEC-001, SPEC-008
Referenced By: IMP-001 (proposed)
Last Updated: 2026-08-08
Change ID: Not assigned — unapproved Draft
```

## 1. Rules

- Approved requirements and architecture precede production code.
- Each module owns its domain logic and data; cross-module access uses public contracts.
- Domain code does not depend on provider SDKs or deployment frameworks.
- Changes are small, traceable, reviewed, tested, and recoverable.
- Secrets, credentials, personal data, and production data are prohibited from source control.
- Dependencies are pinned, inventoried, scanned, licensed, and replaceable where architecturally required.
- Errors are explicit; silent corruption, swallowed failures, and ambiguous success are prohibited.
- Public contracts and schemas are versioned and compatibility-tested.
- Material actions emit audit and operational evidence with correlation.
- Documentation, examples, training, migrations, operations, and validation are part of completion.

## 2. Quality Gates

Formatting, linting, type/schema checks, unit tests, contract tests, integration tests, security checks, dependency-boundary tests, traceability checks, and documentation checks shall pass before merge. Production release additionally requires system, recovery, performance, and release-readiness evidence.

## 3. Branch and Review

Unapproved design and implementation work remains on a Draft/feature branch. `master` receives only explicitly approved scope. Staging is selective; unrelated changes are excluded. Review checks actual diff and evidence before approval. Commit and push do not themselves establish governance approval.

## 4. Validation Checklist

- [ ] Code and data ownership matches approved architecture.
- [ ] Tests trace to specifications.
- [ ] No secret or generated local state is tracked.
- [ ] Compatibility and migration impacts are recorded.
- [ ] Operational and recovery behavior is testable.
- [ ] Documentation and training change with behavior.

## 5. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial engineering and repository standard Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
