# CHG-049 — Correct Implementation Folder Placement

```text
Document ID: CHG-049
Title: Correct Implementation Folder Placement
Version: 0.1.0
Status: Draft — Pending Review
Owner: Chief Architect / Engineering Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, Architecture_Manifest.md, CHG-036
Referenced By: None identified
Last Updated: 2026-08-09
Change Lifecycle State: Draft
```

## 1. Change Record

```text
Change ID: CHG-049
Requestor: Chief Architect / Product Owner
Change Owner: Chief Architect / Engineering Owner
Artifact Owner: Chief Architect / Engineering Owner
Date Identified: 2026-08-09
Change Type: Repository-structure correction
Change Classification: Major
Urgency: Normal
```

## 2. Proposed Authorized Scope

The approved Architecture Manifest assigns source, database, contracts, scripts, infrastructure, tests, and implementation validation evidence to `12_Implementation/`. The current repository instead stores these active implementation surfaces at root level.

Subject to approval, this record authorizes only the following relocations and the path-reference updates required to preserve identical behavior:

| Current path | Proposed canonical path |
|---|---|
| `src/` | `12_Implementation/src/` |
| `tests/` | `12_Implementation/tests/` |
| `db/` | `12_Implementation/db/` |
| `openapi/` | `12_Implementation/openapi/` |
| `schemas/` | `12_Implementation/schemas/` |
| `scripts/` | `12_Implementation/scripts/` |
| `evidence/` | `12_Implementation/evidence/` |

Root-level repository entry-point and tool-configuration files remain at root: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`, `docker-compose.yml`, `redocly.yaml`, `.env.example`, `.gitignore`, `.dockerignore`, `README.md`, `LICENSE`, `repository.yaml`, and `Architecture_Manifest.md`.

## 3. Explicit Boundaries

This correction changes paths and references only. It does not alter I0, I1, I2, or I3 behavior; database schema meaning; API contracts; authorization semantics; evidence content; test assertions; CI policy; approved governance; or any artifact status.

It does not merge, close, amend, or otherwise affect Draft PR #10, including CHG-048, RFC-002, AR-I1-001, the consultation schedule, or the lifecycle-dependent AC-005/006 blocks. It does not authorize I1 lifecycle implementation or I3 completion.

## 4. Impact Analysis

| Category | Assessment |
|---|---|
| Architecture Manifest conformance | Material. The active tree must realize the approved `12_Implementation/` responsibility boundary. |
| Source and tests | Material. TypeScript includes, test discovery, imports, formatting, linting, and coverage paths require synchronized updates. |
| Database and migrations | Material. Migration runner paths, Docker mounts or commands, recovery, persistence, and reconciliation validation must continue to resolve the same migration artifacts. |
| API and schemas | Material. OpenAPI linting and evidence-schema validation paths must resolve unchanged artifacts at their new locations. |
| CI and repository automation | Material. GitHub Actions, repository-validation scripts, package scripts, ignores, and documentation links must use the new paths. |
| Evidence integrity | Material. Validation evidence files remain unchanged in content and retain stable IDs; only their repository location changes. |
| Compatibility | Material. Local developer instructions and existing branch references may break if implementation and merge overlap. Implementation must be coordinated from a clean baseline and validated before merge. |
| Security and operations | No semantic impact intended. Secret scanning, dependency checks, Docker local development, recovery, and reconciliation checks must remain enabled and pass after relocation. |
| Deferred consequences | The correction intentionally does not define a new repository area, classification, or authority relationship. Any future structural expansion remains governed by the Architecture Manifest and GOV-002. |

## 5. Required Evidence Before Closure

- A before/after tracked-file inventory proving every approved source path moved once, with no unexpected deletion or duplicate canonical copy.
- Updated path references verified across package scripts, TypeScript, ESLint, Prettier, Redocly, Docker, GitHub Actions, repository-validation scripts, imports, and Markdown links.
- Passing formatting, lint, typecheck, unit tests, contract checks, migration status, persistence, recovery, reconciliation, evidence-schema, dependency, secret, and repository-hygiene checks.
- A Docker local-service verification demonstrating migrations and database-backed validations resolve from `12_Implementation/`.
- Git history and diff review confirming no governed-document content, database semantics, API shape, authorization behavior, or test assertion changed incidentally.
- Review confirming PR #10 and all lifecycle-dependent gates retain their prior states and references.

## 6. Implementation Constraints

Implementation must occur on a dedicated branch based on a clean, current `master` after active worktrees are coordinated. The relocation must use version-control-aware moves, preserve history where Git can detect it, and avoid simultaneous unrelated I3 path changes.

No compatibility shim or duplicate root-level implementation tree may remain after validation, unless a separately approved migration exception documents its purpose, owner, and removal date.

## 7. Review Activity

Review Result: Pending.

Review must verify that the proposed paths faithfully implement Architecture Manifest §3 rather than redefine it; that all impact categories in §4 are assessed; and that this record does not create implementation authority before approval.

## 8. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft repository-structure correction scoped to align active implementation surfaces with Architecture Manifest §3. | Chief Architect / Engineering Owner | CHG-049 |
