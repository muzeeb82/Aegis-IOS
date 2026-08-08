# AR-REP-001 — Manifest-Owned Implementation Folder Placement Review

```text
Document ID: AR-REP-001
Title: Manifest-Owned Implementation Folder Placement Focused Architecture Review
Version: 0.1.0
Status: Draft
Owner: Architecture Review Lead — Muzeeb ur Rahman Farooqi
Classification: Informational — Architecture Review
Authority Level: Not Applicable — Architecture Review outside normative authority hierarchy
Depends On: GOV-001, GOV-002, GOV-003, GOV-004, ARCH-MANIFEST-001, CHG-036, CHG-049
Referenced By: CHG-049
Related Change ID: CHG-049
Last Updated: 2026-08-09
```

## 1. Objective and Architecture Question

This Focused Architecture Review evaluates only whether relocating the current root `src/`, `scripts/`, and `tests/` directories to the existing `12_Implementation/Source/`, `12_Implementation/Scripts/`, and `12_Implementation/Tests/` directories implements ARCH-MANIFEST-001 §3 without changing repository architecture.

**Architecture question:** Do the three proposed moves faithfully realize the existing Manifest-owned implementation responsibilities, preserve one canonical path per responsibility and all current path consumers, and avoid requiring an ADR or an ARCH-MANIFEST-001 clarification?

## 2. Review Qualification

| Field | Assessment |
|---|---|
| GOV-002 change classification | Major — repository paths, build tooling, validation, automation, and active developer workflows are materially affected. |
| GOV-004 architecture significance | Focused — contained to three existing Manifest-owned responsibilities under one owner; no system interface, data contract, security model, runtime behavior, or new architectural mechanism is proposed; rollback is manageable. |
| Related Change ID | CHG-049 |
| Related architecture artifacts | ARCH-MANIFEST-001 §3; GOV-004 §6.2 and §13 |
| RFC required | Not presumed. Required only if review finds a material placement alternative or a broader architecture clarification. |
| ADR required | Not presumed. Required only if review finds that existing architecture does not constrain the placement sufficiently or a lasting architecture decision is needed. |
| Review state | Draft. No evaluation outcome, approval, or relocation is claimed. |

## 3. Scope, Exclusions, and Constraints

**In scope:** the three current root paths, their existing `12_Implementation/` destinations, path consumers, duplicate-ownership risk, branch coordination, links, rollback, operational validation, and whether a Manifest clarification is required.

**Out of scope:** relocation or canonical-placement decisions for `db/`, `openapi/`, `schemas/`, or `evidence/`; I1 authorization lifecycle work; I3 feature behavior; database or API semantics; evidence content; test assertions; CI policy; PR #10; and lifecycle-dependent AC-005/006 gates.

No file relocation, path-reference modification, status transition, ADR, or implementation authorization is created by this Draft review.

## 4. Current and Proposed Path Maps

| Responsibility | Current active path | Existing reserved destination | Manifest basis | Proposed action |
|---|---|---|---|---|
| Source | `src/` | `12_Implementation/Source/` | ARCH-MANIFEST-001 §3: Source | Move only if CHG-049 is approved after this review. |
| Scripts | `scripts/` | `12_Implementation/Scripts/` | ARCH-MANIFEST-001 §3: Scripts | Move only if CHG-049 is approved after this review. |
| Tests | `tests/` | `12_Implementation/Tests/` | ARCH-MANIFEST-001 §3: Tests | Move only if CHG-049 is approved after this review. |
| Connectors | No current root connector directory | `12_Implementation/Connectors/` | ARCH-MANIFEST-001 §3: Connectors | Reserved; no action. |
| Infrastructure | No current root infrastructure directory | `12_Implementation/Infrastructure/` | ARCH-MANIFEST-001 §3: Infrastructure | Reserved; no action. |

The existing uppercase destination directories are authoritative for this proposed correction. Creating lowercase `src/`, `scripts/`, or `tests/` under `12_Implementation/` would duplicate responsibility and is prohibited.

## 5. Evidence Basis and Existing-Directory Assessment

| Evidence input | Reference | Review use |
|---|---|---|
| Repository map | ARCH-MANIFEST-001 v1.0.0 at `master` commit `3b97170` | Establishes the five `12_Implementation/` responsibilities. |
| Change proposal | CHG-049 v0.2.0 at commit `5b745f360038fd19a1b75f643e705e7a6943b1be` | Defines the narrowed three-path proposal and exclusions. |
| Implementation foundation | CHG-036 and current repository baseline at `master` commit `3b97170` | Identifies active toolchain and validation consumers. |
| Existing destination tree | `12_Implementation/Source/`, `Scripts/`, `Tests/`, `Connectors/`, and `Infrastructure/` | Confirms established directory names and reserved responsibilities. |

The current evidence supports a preliminary hypothesis—not a final finding—that the three moves implement rather than amend ARCH-MANIFEST-001. The review must still test this hypothesis against all consumers, rollback constraints, and any affected-owner finding. The disputed root surfaces remain excluded because ARCH-MANIFEST-001 does not explicitly assign them.

## 6. Path-Consumer Inventory

The Draft inventory below records current direct consumers that must be checked at implementation. It is not a relocation instruction.

| Consumer | Current dependency | Required preservation check |
|---|---|---|
| `package.json` | Formatting, linting, typecheck, test, migration, OpenAPI, schema, and validation script paths include the root implementation areas. | Update only `src`, `scripts`, and `tests` references; retain all excluded-root-surface references. |
| `tsconfig.json` | Includes `src/**/*.ts` and `tests/**/*.ts`. | Resolve Source and Tests equivalents with unchanged compiler behavior. |
| `.github/workflows/repository-quality.yml` | Invokes the repository-validation script under `scripts/`. | Resolve the relocated script and preserve workflow behavior. |
| Test source files | I0–I2 tests import modules through root `src/` paths. | Update imports without changing assertions or test coverage. |
| `tests/migrations.test.ts` | Invokes the root migration script under `scripts/`. | Resolve the relocated script while leaving `db/` at root. |
| `CHG-036`, `CHG-045`, and CHG-049 | Historical and active documentation mention root implementation paths. | Preserve historical wording; update only live project-controlled links or instructions where required, with stable IDs and commit references retained. |

A repository-wide path-reference scan is required immediately before implementation against the then-current baseline; its evidence must include all live Markdown, YAML, JSON, TypeScript, shell, Docker, and CI references.

## 7. Impact, Compatibility, and Operational Considerations

| Category | Draft assessment |
|---|---|
| Canonical ownership | Moving the three paths to existing Manifest-owned destinations removes the root-versus-implementation ambiguity only if no duplicate tree remains. |
| Compatibility | Build, typecheck, tests, scripts, local developer commands, and CI can fail from stale paths; all must be verified from a clean checkout. |
| Branch coordination | Active feature branches may carry root-path assumptions. The relocation must start from current `master` and may not merge concurrently with unrelated path-changing work. |
| Links and history | Live repository-controlled links must be updated. Historical artifacts remain attributable through document IDs and subject commits; external GitHub deep links that cannot redirect must be inventoried and disclosed. |
| Rollback | The move must be a dedicated reversible commit. A revert rehearsal must restore the original paths and passing validations without content loss. |
| Operations | Docker, migrations, recovery, reconciliation, secret, dependency, and repository-quality checks must continue to run; excluded `db/`, `openapi/`, `schemas/`, and `evidence/` paths stay unchanged. |

## 8. Findings, Dissent, and Required Corrections

Findings: Pending review execution.

Dissent: None recorded. Any dissent or material finding must be preserved, attributed, and resolved through the review disposition; it may not be silently corrected in implementation.

Required corrections: Pending. A finding that ARCH-MANIFEST-001 is ambiguous, that a path consumer cannot be preserved, or that a disputed surface must move returns CHG-049 to Revision Required and may require a Manifest clarification, RFC, or ADR.

## 9. Decision Path and Disposition

This Draft review does not decide placement. After evidence review, the Architecture Review Lead may dispose one of the following:

- **Review Confirmed — direct CHG-049 approval path:** only if the three moves are confirmed as implementation of ARCH-MANIFEST-001, all path-consumer and rollback controls are feasible, and no Manifest clarification or lasting architecture decision is required.
- **Revision Required:** if the proposal, inventory, validation controls, or ownership assessment is incomplete.
- **RFC / ADR / Manifest clarification required:** if the review finds a material alternative, unresolved canonical-placement question, or necessary amendment to ARCH-MANIFEST-001.
- **Withdrawn:** if the move is not justified or a safer repository pattern is selected through later governance.

No disposition authorizes relocation. CHG-049 requires its own review, explicit approval, implementation, validation, and closure lifecycle after this review completes.

## 10. Validation Checklist

- [ ] Stable review identity and CHG-049 relationship are recorded.
- [ ] Focused-review qualification is supported by GOV-004 §6.2 criteria.
- [ ] Current and proposed maps use existing `12_Implementation/` directory names.
- [ ] Source, Scripts, and Tests are confirmed as Manifest-owned responsibilities.
- [ ] Connectors and Infrastructure duplicate-ownership risks are excluded and unchanged.
- [ ] Complete current-baseline path-consumer inventory is reviewed.
- [ ] Compatibility, branch, link, historical-reference, rollback, and operational impacts are evaluated.
- [ ] ARCH-MANIFEST-001 amendment need is explicitly decided.
- [ ] Findings, dissent, corrections, and decision path are recorded.
- [ ] No relocation, ADR, Manifest amendment, or implementation authority is implied by this Draft.

## 11. Revision History

| Version | Date | Change | Author | Related Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-09 | Initial Draft Focused Architecture Review for CHG-049’s Manifest-owned implementation-folder correction. | Architecture Review Lead — Muzeeb ur Rahman Farooqi | CHG-049 |
