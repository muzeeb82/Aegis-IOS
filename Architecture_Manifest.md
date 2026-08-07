# ARCH-MANIFEST-001 — Architecture Manifest

**Document ID:** ARCH-MANIFEST-001
**Title:** Architecture Manifest
**Version:** 1.0.0
**Status:** Approved
**Owner:** Chief Architect / Product Owner
**Classification:** Informational
**Authority Level:** Not Applicable — Informational repository map outside the normative authority hierarchy
**Depends On:** CONST-001, GOV-001, GOV-002, GOV-003, GOV-004, ADR-002, ADR-003, CHARTER-001, PRD-001
**Referenced By:** None identified
**Last Updated:** 2026-08-08
**Change ID:** CHG-003

## 1. Purpose

This Manifest provides the navigational map, responsibility boundaries, reading order, and lifecycle context for the Aegis IOS repository.

It summarizes approved repository relationships without replacing the governing artifacts that define them.

## 2. Repository Principles

- The repository is part of the product and is governed as a durable source of truth.
- Canonical knowledge belongs in governed artifacts rather than conversations, model memory, or generated summaries.
- One concept has one canonical owner.
- References do not transfer ownership or authority.
- Repository numbering supports navigation and reading order; it does not independently establish authority.
- Changes to governed artifacts follow GOV-002.
- Document representation follows GOV-003.
- Architecture decisions follow GOV-004.

## 3. Repository Map

| Path | Primary responsibility |
|---|---|
| `00_Foundation/` | Constitutional foundation |
| `01_Governance/` | Governance policies, change records, reviews, RFCs, and ADRs |
| `02_Project/` | Project mandate, objectives, scope, and success criteria |
| `03_Architecture/` | Approved system and domain architecture artifacts |
| `04_Product/` | Product goals, capability scope, and requirements |
| `05_Specifications/` | Detailed specifications and validation contracts |
| `06_Frameworks/` | Governed investment and analytical frameworks |
| `07_Standards/` | Product, engineering, data, and operational standards |
| `08_Playbooks/` | Governed operational procedures |
| `09_Examples/` | Worked examples and reference usage |
| `10_Training/` | Academy, tutorials, exercises, and certification materials |
| `11_Runtime/` | AI runtime instructions, prompt assets, and execution templates |
| `12_Implementation/` | Source, connectors, scripts, infrastructure, and tests |
| `13_Assets/` | Diagrams, images, logos, and reusable assets |
| `docs/` | Supporting rendered or published documentation |
| `.github/` | Repository-hosting configuration and automation |
| `archive/` | Historical, superseded, or retired material |

## 4. Repository Reading Order

The recommended orientation order is:

1. CONST-001 — constitutional foundation.
2. GOV-001 — authority, ownership, classifications, and conflict resolution.
3. GOV-002 — change management.
4. GOV-003 — document standards.
5. GOV-004 — architecture governance.
6. CHARTER-001 — project mandate, objectives, scope, and success criteria.
7. Architecture decisions and constraints.
8. PRD-001 — product goals, capability scope, and requirements.
9. Specifications.
10. Frameworks, standards, playbooks, examples, and training.
11. Runtime and implementation artifacts.

Reading order does not override the authority model defined by GOV-001 and applicable ADRs.

## 5. Authority Relationships

The approved authority direction is governed by GOV-001 and applicable ADRs.

The principal delivery relationship is:

```text
Constitution and Governance
        ↓
Project Charter
        ↓
Architecture → Product Requirements → Specifications
        ↓
Implementation, Validation, Documentation, Training, and Release
```

This diagram summarizes responsibility and dependency flow. It does not create a second authority model.

## 6. Runtime Exception

Runtime artifacts are version-controlled repository components but remain outside the normative authority hierarchy.

PI-001 consumes and defers to approved normative artifacts. It does not redefine their governed content.

## 7. Supporting Repository Areas (`docs/`, `.github/`, `archive/`)

- `docs/` contains supporting documentation or generated publication material; canonical sources remain identifiable.
- `.github/` contains repository-hosting configuration and automation; automation implements approved rules rather than creating policy.
- `archive/` preserves historical material and shall not be confused with active governing artifacts.

## 8. Repository Lifecycle

```text
Requirements
    → Architecture
    → Specification
    → Implementation
    → Validation
    → Documentation and Training
    → Release
    → Governed Change and Continuous Improvement
```

GOV-002 governs changes and baseline closure. GOV-004 governs architecture qualification, reviews, RFCs, ADRs, conformance, and supersession.

## 9. Repository Conventions

- Markdown is the current primary governed document format.
- Stable Document IDs identify governed artifacts independently of filenames and paths.
- Filenames follow GOV-003 and approved artifact-family profiles.
- Each governed artifact has one canonical repository instance.
- Derived or rendered copies remain non-authoritative unless governance explicitly states otherwise.
- Placeholder artifacts shall remain visibly Reserved until substantive drafting begins.
- `.DS_Store`, local caches, secrets, build output, and editor state are excluded through `.gitignore`.

## 10. Future Expansion

New artifact families, repository areas, identifier prefixes, or structural changes shall be introduced through GOV-002 and, where architecturally material, GOV-004.

Repository growth shall preserve canonical ownership, stable identity, explicit dependencies, navigability, and long-term maintainability.

## 11. Validation Checklist

- [ ] Repository paths match the actual canonical structure.
- [ ] Responsibility descriptions do not redefine canonical ownership.
- [ ] Reading order is not presented as authority.
- [ ] Runtime remains outside the normative authority hierarchy.
- [ ] Supporting areas remain non-authoritative unless explicitly governed.
- [ ] Lifecycle flow matches approved governance.
- [ ] References remain valid.

## 12. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-07 | Reserved placeholder with the approved ten-section outline. | Chief Architect / Product Owner | Not applicable — predates GOV-002 change records |
| 1.0.0 | 2026-08-07 | Proposed Phase C4 repository manifest establishing the repository map, reading order, responsibility boundaries, lifecycle, and expansion rules. | Chief Architect / Product Owner | CHG-003 |
| 1.0.0 | 2026-08-08 | Corrected `Referenced By` to represent governed-artifact consumers truthfully; README.md and repository.yaml remain supporting links rather than governed-artifact consumers. | Chief Architect / Product Owner | CHG-005 |
| 1.0.0 | 2026-08-08 | Validated against the live repository structure and approved as the Informational repository map. | Chief Architect / Product Owner | CHG-006 |
