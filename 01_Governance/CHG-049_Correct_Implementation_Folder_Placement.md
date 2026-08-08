# CHG-049 — Correct Manifest-Owned Implementation Folder Placement

```text
Document ID: CHG-049
Title: Correct Manifest-Owned Implementation Folder Placement
Version: 0.2.0
Status: Draft
Owner: Chief Architect / Engineering Owner
Classification: Informational — Change Record
Authority Level: Not Applicable — Change Record outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ARCH-MANIFEST-001, CHG-036
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

ARCH-MANIFEST-001 §3 assigns `12_Implementation/` responsibility for source, connectors, scripts, infrastructure, and tests. Its current internal structure already reserves the canonical directories `Source/`, `Connectors/`, `Scripts/`, `Infrastructure/`, and `Tests/`.

Subject to approval, this record authorizes only the following Manifest-owned relocations and the path-reference updates required to preserve identical behavior:

| Current path | Existing canonical destination | Basis |
|---|---|---|
| `src/` | `12_Implementation/Source/` | ARCH-MANIFEST-001 §3: Source |
| `scripts/` | `12_Implementation/Scripts/` | ARCH-MANIFEST-001 §3: Scripts |
| `tests/` | `12_Implementation/Tests/` | ARCH-MANIFEST-001 §3: Tests |

No new lowercase parallel directory is authorized. `12_Implementation/Connectors/` and `12_Implementation/Infrastructure/` remain reserved and unchanged because no current root-level connector or infrastructure directory is in scope.

Root-level repository entry-point and tool-configuration files remain at root: `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`, `docker-compose.yml`, `redocly.yaml`, `.env.example`, `.gitignore`, `.dockerignore`, `README.md`, `LICENSE`, `repository.yaml`, and `Architecture_Manifest.md`.

## 3. Disputed Surface Assessment — No Relocation Authorized

The following areas are not explicitly assigned to `12_Implementation/` by ARCH-MANIFEST-001 and therefore remain at their current paths in this change. Their canonical placement requires independent ownership evidence or an approved Manifest clarification.

| Surface | Current role and question | Provisional owner / rationale | CHG-049 disposition |
|---|---|---|---|
| `db/` | Database migrations may be implementation infrastructure or canonical data-migration history. | Requires assessment against SPEC-002 data ownership and migration governance. | Remain at root; not moved. |
| `openapi/` | OpenAPI may be an implementation contract or a governed interface specification. | Requires assessment against SPEC-003 and the canonical interface-contract owner. | Remain at root; not moved. |
| `schemas/` | JSON schemas may be implementation validation assets or governed contracts. | Requires assessment against SPEC-002, SPEC-003, and SPEC-008. | Remain at root; not moved. |
| `evidence/` | Validation evidence may be implementation output, a validation record, or governed audit evidence. | Requires assessment against SPEC-008 and evidence-record ownership. | Remain at root; not moved. |

This record neither decides those classifications nor treats a future relocation as simple Manifest conformance.

## 4. Architecture Qualification and Boundaries

**GOV-002 classification:** Major, because repository paths, build tooling, validation, automation, and active developer workflows are materially affected.

**GOV-004 architecture significance:** Focused Architecture Review required before CHG-049 approval. The effect is contained to three Manifest-owned areas under one owner; no system interface, data contract, security model, runtime behavior, or new architectural mechanism changes; and the move is reversible. CI and developer tooling are affected only as path consumers. The required review must confirm that the three authorized moves implement ARCH-MANIFEST-001 rather than change repository architecture, and must identify whether any Manifest clarification is needed for the disputed surfaces in §3.

This record does not create the Focused Architecture Review, alter the Architecture Manifest, select a new repository architecture, or authorize an ADR. If the review determines that a Manifest clarification is required, that clarification is a separate governed change before any disputed surface moves.

## 5. Explicit Boundaries

This correction changes paths and references only. It does not alter I0, I1, I2, or I3 behavior; database schema meaning; API contracts; authorization semantics; evidence content; test assertions; CI policy; approved governance; or any artifact status.

It does not merge, close, amend, or otherwise affect Draft PR #10, including CHG-048, RFC-002, AR-I1-001, the consultation schedule, or the lifecycle-dependent AC-005/006 blocks. It does not authorize I1 lifecycle implementation or I3 completion.

## 6. Impact Analysis

| Category | Assessment |
|---|---|
| Architecture Manifest conformance | Material. `src/`, `scripts/`, and `tests/` must use the Manifest-owned implementation directories without creating duplicate responsibilities. |
| Source and tests | Material. TypeScript includes, imports, test discovery, formatting, linting, and coverage paths require synchronized updates. |
| CI and repository automation | Material. GitHub Actions, repository-validation scripts, package scripts, ignores, and documentation links must use the new paths. |
| Database, API, schemas, and evidence | No relocation in this change. Their current paths and semantics remain unchanged; validation confirms they still resolve from root. |
| Compatibility and branch coordination | Material. Current feature branches may carry root-path assumptions. Implementation requires a clean, current `master`, coordination with active worktrees, and no concurrent path-changing merge. |
| Deep links and historical references | Material. Live project-owned Markdown, CI, and tooling links must be updated. Historical evidence must retain pinned subject commits and stable IDs; unsupported external deep links are inventoried and recorded rather than silently claimed preserved. |
| Security and operations | No semantic impact intended. Secret scanning, dependency checks, Docker local development, migration, recovery, and reconciliation checks must remain enabled and pass. |
| Recovery and rollback | Material. A failed relocation must be reversible as a single dedicated commit or revert, with no mixed feature behavior. |
| Deferred consequences | This record does not define a new repository area, classification, or authority relationship. The four disputed surfaces require separate governance before any placement decision. |

## 7. Required Evidence Before Closure

- Focused Architecture Review evidence confirming the §2 moves implement existing ARCH-MANIFEST-001 responsibility and do not require an architectural decision.
- A before/after tracked-file inventory proving each authorized path moved once, with no unexpected deletion or duplicate canonical copy.
- Updated path references verified across package scripts, TypeScript, ESLint, Prettier, GitHub Actions, repository-validation scripts, imports, and Markdown links.
- Passing formatting, lint, typecheck, unit tests, contract checks, migration status, persistence, recovery, reconciliation, evidence-schema, dependency, secret, and repository-hygiene checks.
- A Docker local-service verification demonstrating migrations and database-backed validations remain functional while `db/`, `openapi/`, `schemas/`, and `evidence/` stay at root.
- A link inventory showing every live project-owned reference updated, each known external deep link disposition, and stable-ID or commit-based preservation for historical evidence.
- A rollback rehearsal showing that reverting the dedicated relocation commit restores the prior root paths and passing validation without data or evidence-content loss.
- Review confirming PR #10 and all lifecycle-dependent gates retain their prior states and references.

## 8. Implementation Constraints

Implementation must occur on a dedicated branch based on a clean, current `master` after active worktrees are coordinated. It must use version-control-aware moves and preserve history where Git can detect it. A path-changing branch may not merge concurrently with unrelated I3 path changes.

The implementation must retain a complete old-to-new path map in its validation evidence. It must update live repository-controlled links before removal of root paths; preserve historical resolvability through document IDs and pinned commits; and record rather than conceal any external link that cannot be redirected by GitHub.

No compatibility shim or duplicate root-level implementation tree may remain after validation, unless a separately approved exception documents its purpose, owner, and removal date.

## 9. Review Activity

Review Result: Revision Required.

The initial Draft overstated ARCH-MANIFEST-001 by treating `db/`, `openapi/`, `schemas/`, and `evidence/` as automatically implementation-owned and proposed lowercase paths that duplicated the established `12_Implementation/` directory responsibilities. This revision narrows the Manifest-backed scope, records a Focused Architecture Review requirement, and leaves disputed surfaces unmoved pending separate governance.

## 10. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft repository-structure correction. | Chief Architect / Engineering Owner | CHG-049 |
| 0.2.0 | 2026-08-09 | Revision Required addressed: narrowed relocation scope to Manifest-owned Source, Scripts, and Tests; adopted established directory names; added GOV-004 qualification, disputed-surface assessment, rollback, link-preservation, and branch-coordination controls. | Chief Architect / Engineering Owner | CHG-049 |
