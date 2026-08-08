# GOV-003 — Document Standards

**Phase C3.2 Validation Draft**

```text
Document ID: GOV-003
Title: Document Standards
Version: 1.1.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 1
Depends On: CONST-001, GOV-001, GOV-002, ADR-002, ADR-003
Referenced By: ADR-004, ADR-005, ARCH-MANIFEST-001, AR-GOV-004-001, AR-PKG-001, AR-SYS-001, CHG-001, CHG-002, CHG-003, CHG-004, CHG-005, CHG-006, CHG-007, CHG-008, CHG-009, CHG-010, CHG-011, CHG-012, GOV-004, RB-GOV-004-001, RFC-001, RRC-001, SPEC-001, STD-001
Last Updated: 2026-08-08
Change ID: CHG-002
```

---

## 1. Purpose

GOV-003 establishes the standards for identifying, structuring, naming, formatting, versioning, referencing, validating, and maintaining governed Aegis IOS artifacts.

Its purpose is to ensure that repository artifacts remain:

- Identifiable.
- Consistent.
- Reviewable.
- Explainable.
- Auditable.
- Accessible.
- Machine-discoverable.
- Durable across tools and implementation environments.
- Maintainable over the long term.

GOV-003 governs how governed information is represented in artifacts.

The canonical owner of the information governs what that information means.

---

## 2. Scope

GOV-003 applies to governed repository artifacts, including:

- Constitutional artifacts.
- Governance artifacts.
- Architecture Decision Records.
- Project artifacts.
- Product artifacts.
- Specifications.
- Architecture artifacts.
- Standards.
- Frameworks.
- Playbooks.
- Runtime artifacts.
- Informational requirements baselines and architecture reviews.
- Templates.
- Reserved placeholders.
- Validation and baseline records where document representation is required.
- Archived or superseded governed artifacts.

GOV-003 applies to Markdown artifacts as the current primary repository format.

Its semantic standards may also be consumed by future machine-readable representations, rendered documents, documentation systems, and automated validators.

---

## 3. Governing Principles

### 3.1 Representation Does Not Establish Meaning

GOV-003 standardizes representation.

It does not acquire ownership of every concept represented through its standards.

### 3.2 Stable Identity

A governed artifact shall remain identifiable across title, filename, path, version, and status changes.

### 3.3 One Authoritative Representation

Each governed artifact shall have one canonical repository instance.

Derived copies shall not become parallel sources of truth.

### 3.4 Truthful Metadata

Metadata shall represent the artifact’s actual identity, status, authority, ownership, dependencies, and maintenance state.

### 3.5 Truthful Traceability

References shall represent relationships that actually exist.

Traceability shall not be manufactured through false, inflated, or transitive-as-direct relationships.

### 3.6 Human and Machine Usability

Document standards shall support human comprehension and machine validation without allowing automation to replace governed judgment.

### 3.7 Proportional Structure

Artifacts shall contain the structure required by their responsibility and profile.

Uniformity shall not be pursued at the expense of clarity or accurate ownership.

### 3.8 Historical Integrity

Revision, supersession, correction, and archival representations shall preserve historical truth.

### 3.9 Governed Evolution

Changes to GOV-003 and changes required to conform approved artifacts to GOV-003 shall follow GOV-002.

---

## 4. Definitions

### Artifact

A governed repository item with a defined purpose, responsibility, status, and canonical location.

### Document ID

The stable governed identifier assigned to an artifact.

### Title

The human-readable name of an artifact.

### Filename

The repository filename representing an artifact.

### Canonical Location

The approved authoritative repository path for an artifact.

### Metadata

Structured information describing an artifact’s identity, version, status, ownership, classification, authority, dependencies, references, and maintenance state.

### Artifact Profile

A defined set of structural and metadata requirements applicable to an artifact family.

### Normative Content

Content that establishes mandatory governed rules, requirements, decisions, or constraints within the authority of its owning artifact.

### Informational Content

Content that explains, reviews, illustrates, records, or supports governed work without independently establishing normative authority.

### Derived Copy

A rendered, published, exported, distributed, or generated copy whose authoritative source remains the canonical repository artifact.

### Placeholder

A reserved artifact location or identifier that does not yet contain approved substantive content.

### Consumer Class

A described category of non-artifact runtime, tool, system, or execution environment that consumes a governed artifact.

---

## 5. Artifact Families and Profiles

GOV-003 defines a common document core and permits governed variation through artifact-family profiles.

### 5.1 Common Core

An identified governed artifact shall provide, where applicable:

- Stable identity.
- Title.
- Version.
- Status.
- Owner.
- Classification.
- Authority Level or explicit non-applicability.
- Dependencies.
- Downstream references or consumers.
- Last-updated date.
- Purpose.
- Scope or explicit scope boundary.
- Validation requirements.
- Revision history.

### 5.2 Initial Artifact Profiles

The repository recognizes the following initial document profiles:

1. Constitutional artifact.
2. Normative governance artifact.
3. Architecture Decision Record.
4. Project or product artifact.
5. Specification.
6. Architecture artifact.
7. Runtime artifact.
8. Informational baseline or review.
9. Template.
10. Reserved placeholder.

An artifact may require a new profile when no existing profile accurately represents its responsibility.

A new profile shall be introduced through GOV-002 and shall not create a new GOV-001 artifact classification implicitly.

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



---

## 6. Stable Identifiers

### 6.1 Identifier Requirement

Governed artifacts requiring durable repository identity shall have a unique Document ID.

### 6.2 Identifier Format

The default format is:

```text
<PREFIX>-<NUMBER>
```

Examples:

```text
CONST-001
GOV-003
ADR-002
CHARTER-001
PRD-001
PI-001
```

Numeric portions shall use at least three digits unless an approved artifact-family standard defines otherwise.

### 6.3 Prefixes

A prefix shall identify the governed artifact family or registry category.

A new prefix shall not be created when an existing governed prefix accurately covers the artifact.

### 6.4 Stability

Document IDs shall not be silently:

- Renumbered.
- Reassigned.
- Reused.
- Repurposed for a materially different artifact.
- Changed solely because a title, filename, or path changes.

### 6.5 Reservation

A reserved identifier shall be visibly marked Reserved and shall not imply approval of substantive content.

### 6.6 Superseded Identifiers

A superseded identifier remains part of repository history.

It shall not be reassigned to the replacement artifact unless the approved change explicitly preserves the same artifact identity.

---

## 7. Titles, Filenames, and Repository Paths

### 7.1 Identity Relationships

```text
Document ID = stable governed identity
Title       = human-readable artifact name
Filename    = repository representation
Path        = canonical repository location
```

These elements are related but not interchangeable.

### 7.2 Preferred Filename Convention

The preferred convention for new descriptive artifacts is:

```text
<ID>_<Descriptive_Title>.md
```

Example:

```text
GOV-003_Document_Standards.md
```

Words in the descriptive portion should be separated by underscores.

### 7.3 Artifact-Family Exception

An approved profile may use an identifier-only filename:

```text
<ID>.md
```

ADR-002 and ADR-003 are established examples of this pattern.

Their use here concerns repository identity and representation only. GOV-003 does not depend on or restate their architectural decisions.

### 7.4 Existing Approved Filenames

Approval of GOV-003 does not automatically rename existing artifacts.

Filename normalization requires a GOV-002 change when it affects an approved artifact.

The impact analysis shall consider:

- Existing links.
- References.
- Automation.
- Repository navigation.
- Publication.
- Historical records.
- Migration requirements.

### 7.5 Canonical Path

Each governed artifact shall have one canonical repository path consistent with the approved repository structure.

Moving an approved artifact shall follow GOV-002.

Repository numbering represents navigation or reading order unless an approved governing artifact explicitly states otherwise. It does not independently establish authority.

---

## 8. Common Metadata Model

### 8.1 Required Metadata

The following fields are required for identified governed artifacts unless an approved profile states otherwise:

```text
Document ID:
Title:
Version:
Status:
Owner:
Classification:
Authority Level:
Depends On:
Referenced By:
Last Updated:
```

### 8.2 Conditional Metadata

The following fields are conditional:

```text
Change ID:
Consumed By:
Supersedes:
Superseded By:
```

Additional conditional fields may be defined by an approved artifact profile.

### 8.3 Field Semantics

| Field | Meaning |
|---|---|
| Document ID | Stable governed identity |
| Title | Human-readable artifact name |
| Version | Artifact version |
| Status | Artifact maturity and, where explicitly qualified, pending review condition |
| Owner | Accountable artifact owner |
| Classification | GOV-001 artifact classification |
| Authority Level | GOV-001 Authority Level or explicit non-applicability |
| Depends On | Direct operative dependencies |
| Referenced By | Known direct downstream governed-artifact consumers |
| Consumed By | Non-artifact consumer class |
| Last Updated | Date of the represented artifact state |
| Change ID | Related authoritative GOV-002 change record |
| Supersedes | Earlier artifact or version replaced by this artifact |
| Superseded By | Later artifact or version replacing this artifact |

### 8.4 Empty or Inapplicable Values

A required field with no applicable value shall state that explicitly.

Permitted representations include:

```text
Depends On: None
Referenced By: None identified
Authority Level: Not Applicable — <reason>
```

A required field shall not be omitted merely because its value is empty.

### 8.5 Human-Readable Representation

The initial normative representation remains a human-readable metadata block near the beginning of the Markdown artifact.

The exact syntax shall remain consistent within an artifact.

### 8.6 Machine-Readable Representation

Future front matter, registries, indexes, or schemas shall implement the same semantic model.

They shall not create conflicting values.

A conflict between representations is a governed defect under GOV-002.

### 8.7 Retrospective Applicability

Approval of GOV-003 does not automatically require existing approved artifacts to add newly introduced conditional fields.

Retrofitting `Change ID`, `Consumed By`, `Supersedes`, `Superseded By`, or other later metadata fields onto an approved artifact requires GOV-002 assessment and approval.

An existing artifact does not become invalid solely because it predates a conditional metadata field.

---

## 9. Status Representation

### 9.1 Artifact Maturity

Permitted artifact-maturity values are:

- Reserved.
- Draft.
- Approved.
- Superseded.
- Deprecated.
- Withdrawn.
- Archived.

### 9.2 Qualified Draft Status

A Draft may identify the next pending review condition:

```text
Status: Draft (Pending Validation)
Status: Draft (Pending Approval)
Status: Corrected Draft (Pending Validation)
```

The qualifier shall represent the actual state and shall not imply that the pending activity has occurred.

### 9.3 Validation Results

Validation results are distinct from artifact status:

- Not Executed.
- Passed.
- Passed with Approved Limitations.
- Failed.
- Inconclusive.
- Superseded Before Completion.

An artifact may be Approved only when the applicable approval and validation requirements have been satisfied.

### 9.4 Baseline or Phase Status

Baseline or phase status is distinct from artifact maturity:

- Not Started.
- In Progress.
- Complete.
- Reopened.
- Superseded.

### 9.5 Placeholder Status

A placeholder shall use Reserved, not Draft or Approved, unless substantive drafting has actually begun.

Example:

```text
Status: Reserved — Substantive content not yet approved
```

### 9.6 Change-Record Lifecycle State

GOV-002 owns and authoritatively represents change-record lifecycle states:

```text
Identified → Proposed → Classified → Impact Assessed → Reviewed
→ Approved → Implemented → Validated → Closed
```

These states shall not be duplicated as artifact statuses.

An artifact may link to the authoritative record:

```text
Status: Draft (Pending Validation)
Change ID: CHG-XXX
```

The GOV-002 change record remains the source of its lifecycle state.

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

---

## 10. Versioning

### 10.1 Version Format

The default artifact-version format is:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.0.0
```

### 10.2 Version Components

- **MAJOR** indicates a materially incompatible or foundational revision.
- **MINOR** indicates a material but compatible extension or revision.
- **PATCH** indicates a contained correction that preserves approved intent and compatibility.

### 10.3 Relationship to GOV-002

The default relationship is:

| GOV-002 classification | Default version consideration |
|---|---|
| Editorial | PATCH |
| Minor | PATCH or MINOR |
| Major | MINOR or MAJOR |
| Strategic | MAJOR |

This table guides judgment. It does not automatically determine the version.

### 10.4 Initial Approval

The first approved production version of an artifact should normally be:

```text
1.0.0
```

### 10.5 Pre-Approval Drafts

A pre-approval draft may use the intended approval version while its Status remains Draft.

Corrections made during validation may retain that intended version until approval, provided:

- Status remains truthful.
- Correction provenance is preserved.
- The corrected artifact is validated.
- No prior approved artifact exists under the same version with different content.

### 10.6 Git and Version Identity

A Git commit identifies repository history.

It does not replace:

- Artifact version.
- Artifact status.
- Revision history.
- GOV-002 approval.
- Validation evidence.

A date likewise does not replace a version.

---

## 11. Required Document Structure

### 11.1 Structural Responsibilities

A governed artifact shall include, where applicable:

- Purpose.
- Scope.
- Owner.
- Inputs.
- Outputs.
- Dependencies.
- Authority and ownership boundaries.
- Normative rules, requirements, decisions, or informational findings.
- Validation requirements.
- Revision history.
- Version and status.

### 11.2 Profile-Based Structure

An artifact profile may define how these responsibilities are represented.

For example:

- An ADR may organize content around Context, Decision, Consequences, and Status.
- A specification may organize content around requirements, interfaces, behavior, and validation.
- A Runtime artifact may emphasize governing references and behavioral instructions.
- An informational review may emphasize objective, findings, disposition, and checklist.

### 11.3 Omission

A structural responsibility may be omitted only when:

- It is inapplicable under the approved profile; or
- The required information is represented elsewhere without ambiguity or duplication.

### 11.4 One Artifact, One Responsibility

An artifact shall not absorb unrelated responsibilities merely to reduce document count.

A section shall not duplicate content canonically owned by another artifact.

---

## 12. Heading and Section Hierarchy

### 12.1 Document Title

A Markdown artifact shall have one document-title heading.

The preferred representation is:

```markdown
# <Document ID> — <Title>
```

### 12.2 Top-Level Sections

Top-level body sections shall use a consistent heading depth.

The preferred representation is:

```markdown
## 1. Purpose
## 2. Scope
```

### 12.3 Subsections

Subsections shall nest consistently:

```markdown
### 2.1 In Scope
#### 2.1.1 Conditional Detail
```

### 12.4 Structural Equality

Sections performing equivalent structural roles shall use equivalent heading levels.

Heading depth shall express hierarchy, not visual styling.

### 12.5 Skipped Levels

Heading levels shall not be skipped where doing so obscures structure, machine parsing, navigation, or accessibility.

### 12.6 Metadata and Subtitles

Metadata blocks and descriptive subtitles shall not be presented as body sections unless they perform a true structural role.

### 12.7 Normalization

Heading normalization shall not change governed meaning.

A structural correction to an approved artifact shall follow GOV-002.

---

## 13. Canonical Ownership Statements

### 13.1 Required Distinctions

Where applicable, an artifact shall distinguish:

- Artifact owner.
- Canonical concept owner.
- Referencing artifact.
- Downstream consumer.
- Elaborating artifact.
- Runtime deferral.
- Supporting or informational content.

### 13.2 Artifact Owner

The metadata `Owner` field identifies accountability for the artifact.

It does not imply that the artifact owns every concept mentioned in its body.

### 13.3 Ownership Language

Permitted ownership statements include:

```text
GOV-001 owns the Artifact Classification model.
This artifact references that classification and does not redefine it.
```

```text
PRD-001 owns Requirement Acceptance Criteria.
Specifications elaborate them without replacing PRD ownership.
```

### 13.4 Ambiguity

When a shared term could imply duplicate ownership, the artifact shall state whether it:

- Owns.
- References.
- Consumes.
- Defers to.
- Elaborates.
- Does not govern.

### 13.5 Representation Boundary

GOV-003 standardizes ownership statements.

GOV-001 and the applicable canonical registry remain authoritative for the ownership itself.

---

## 14. Authority and Classification Representation

### 14.1 Classification

The `Classification` field shall use an approved GOV-001 classification.

GOV-003 shall not introduce an additional classification through templates, profiles, filenames, folder labels, or metadata qualifiers.

A Classification may be qualified with a brief explanatory suffix where the base classification alone would be ambiguous about the artifact’s role.

Example:

```text
Classification: Informational — Pre-draft design artifact
```

The qualifier shall:

- Preserve an approved GOV-001 base classification.
- Explain the artifact’s role or context.
- Not create a new artifact classification.
- Not alter or expand the authority associated with the base classification.
- Not contradict the artifact’s Status, Authority Level, or governed purpose.

A qualifier shall not be used when it would cause a reader or automated validator to interpret the complete value as a new classification.

This confirms that requirements baselines and architecture reviews classified as `Informational — Pre-draft design artifact` or `Informational — Architecture Review` remain within the GOV-001 Informational classification.

### 14.2 Authority Level

Normative artifacts shall identify their GOV-001 Authority Level.

Runtime and Informational artifacts shall not be assigned normative authority.

They shall use an explicit non-applicability statement where the field is required.

Example:

```text
Authority Level: Not Applicable — Runtime artifacts are outside the normative authority hierarchy
```

### 14.3 Repository Placement

Repository numbering or path shall not be treated as authority metadata.

### 14.4 Conflict

When metadata authority conflicts with GOV-001 or an applicable approved ADR, the governing authority model controls and the artifact shall be corrected through GOV-002.

---

## 15. Dependencies and Reference Relationships

### 15.1 Depends On

`Depends On` identifies direct operative reliance.

A direct dependency shall not be omitted when the artifact’s operative text materially relies on the source.

### 15.2 Referenced By

`Referenced By` identifies known direct downstream governed-artifact consumers.

A transitive relationship shall not be represented as direct.

### 15.3 Consumed By

`Consumed By` identifies a non-artifact consumer class.

Example:

```text
Consumed By: AI runtime environments
```

A fabricated artifact identifier shall not be created for a consumer that is not a governed artifact.

### 15.4 Existing PI-001 Representation

PI-001’s approved metadata states:

```text
Referenced By: AI runtime environments consuming Aegis IOS Project Instructions
```

This remains valid as an approved Consumer Class Reference using the previously established field.

Approval of GOV-003 does not automatically require PI-001 to migrate that value to `Consumed By`.

Any migration shall follow GOV-002.

### 15.5 Informational Reference

An Informational Reference provides context without establishing operative dependency.

### 15.6 Runtime Deferral

Runtime Deferral indicates that a Runtime artifact reads and obeys a normative artifact without acquiring authority over it.

### 15.7 Transitive Relationship

A Transitive Relationship is mediated through another artifact.

It shall not be recorded as a direct dependency or direct referencer merely to expand apparent traceability.

### 15.8 Precedent Reference

A Precedent Reference identifies historical practice used as evidence.

It shall be labeled as precedent and shall not be described as formal policy unless a governing artifact establishes it as such.

### 15.9 External Citation

An External Citation points to evidence outside the governed repository.

It shall not be represented as internal normative authority.

---

## 16. Cross-References and Citations

### 16.1 Internal References

Internal references should identify:

- Document ID.
- Title where useful.
- Section identifier where precision is required.

Example:

```text
GOV-002 — Change Management §13
```

### 16.2 Stable Meaning

A repository link may supplement a stable artifact reference.

A link alone shall not be the only expression of the referenced source’s meaning or identity.

### 16.3 Truthful Provenance

An artifact shall not cite:

- A process that does not exist.
- A decision that was not recorded.
- An artifact as Approved when it remained Draft.
- A validation result that was not executed.
- A section that does not support the claim.
- An informal precedent as formal policy.
- A transitive relationship as direct.

### 16.4 External Sources

External evidence shall be distinguishable from governed repository authority.

Where the source is material to validation, it should be sufficiently identifiable and retrievable.

### 16.5 Broken or Changed References

A broken, superseded, or materially changed reference shall be assessed through GOV-002 when it affects governed meaning.

---

## 17. Normative Language

### 17.1 Primary Vocabulary

Aegis IOS artifacts shall use:

- **Shall** — mandatory requirement.
- **Shall not** — mandatory prohibition.
- **Should** — recommended practice with permitted, explainable deviation.
- **May** — permitted option.
- **Can** — statement of capability or possibility, not permission.
- **Will** — forecast or declared future occurrence, not a normative requirement.

### 17.2 Requirements and Recommendations

Mandatory requirements shall not be written as recommendations.

Recommendations shall not be represented as approval conditions unless the governing artifact explicitly promotes them.

### 17.3 Examples

Examples illustrate application.

They shall not silently introduce normative rules.

### 17.4 Explanatory Text

Explanatory text may clarify rationale and boundaries.

Where explanatory language is required to interpret a rule correctly, it shall remain consistent with the normative statement.

### 17.5 Validation Language

The following shall remain distinct:

- What must be checked.
- How checking is executed.
- What result was observed.
- What result was expected.

---

## 18. Tables, Lists, Diagrams, and Code Blocks

### 18.1 Tables

Tables should be used for:

- Exact mappings.
- Comparisons.
- Field definitions.
- State transitions.
- Traceability relationships.
- Classification criteria.

A table shall not contradict the governing prose.

### 18.2 Lists

Lists should be used for:

- Requirements.
- Criteria.
- Fields.
- Scope boundaries.
- Ordered procedures.
- Validation checks.

Ordered lists shall be used when sequence is material.

### 18.3 Diagrams

Diagrams should be used when hierarchy, dependency, lifecycle, sequence, or interaction is materially clearer visually.

A material diagram shall have sufficient textual explanation to preserve meaning when visual rendering is unavailable.

A diagram shall state when it represents:

- Authority.
- Dependency.
- Workflow.
- Reading order.
- Responsibility.

A diagram’s shape shall not imply an authority hierarchy when none exists.

### 18.4 Code Blocks

Code blocks shall be used for literal:

- Metadata.
- Schemas.
- Commands.
- Examples.
- Machine-readable values.
- Filename or path patterns.

Illustrative code shall be labeled or contextually distinguishable from governed production content.

### 18.5 Normative Structured Content

When a table, diagram, list, or code block is itself normative, the artifact shall state that explicitly or make its normative function unambiguous.

### 18.6 Accessibility

Structured content shall not rely on color alone.

Complex tables and diagrams should be accompanied by concise explanations.

---

## 19. Validation Checklists and Validation Representation

### 19.1 Three States

Validation shall preserve:

```text
Definition → Execution → Result
```

### 19.2 Embedded Checklist

An embedded checklist defines or supports what must be checked.

Unchecked boxes do not indicate failure; they indicate that execution is not represented by that checklist.

### 19.3 Checked Boxes

A checked box may be used only when the artifact or associated validation record truthfully represents completed execution.

### 19.4 Expected Results

Expected results define intended outcomes.

They do not constitute Passed validation.

### 19.5 Validation Record

The authoritative validation record should identify:

- Artifact and version validated.
- Checklist or criteria applied.
- Validator.
- Execution date.
- Evidence.
- Findings.
- Corrections.
- Actual result.
- Approval or closure disposition.

GOV-002 governs the change and validation lifecycle.

---

## 20. Revision History

### 20.1 Purpose

Revision history provides a concise artifact-level account of material evolution.

It does not replace the GOV-002 change record.

### 20.2 Required Fields

The standard revision-history table is:

| Version | Date | Change | Author |
|---|---|---|---|

An approved profile may add:

- Change ID.
- Approval reference.
- Supersession reference.

### 20.3 Change Summary

The Change field shall summarize what changed and why it matters.

It shall not claim that a proposed correction was applied before the corrected artifact exists.

### 20.4 Pre-Approval Corrections

Material pre-approval corrections affecting the approved text shall be preserved sufficiently to explain the artifact’s approved provenance.

They may be:

- Included in the version’s consolidated revision entry.
- Recorded in additional draft-history entries.
- Linked through a GOV-002 change or validation record.

The chosen representation shall remain truthful and proportionate.

### 20.5 Historical Entries

Prior revision entries shall not be silently rewritten.

A correction to revision history shall itself be governed through GOV-002.

---

## 21. Templates and Reserved Placeholders

### 21.1 Templates

A template shall:

- Be identified as a template.
- Distinguish instructions from governed content.
- Preserve required metadata and structural responsibilities.
- Avoid appearing Approved by default.
- Reference GOV-003 rather than duplicating its normative rules unnecessarily.

### 21.2 Template Authority

A template does not establish document policy.

If a template conflicts with GOV-003, GOV-003 governs.

### 21.3 Placeholders

A reserved placeholder shall state:

- Reserved Document ID.
- Intended title or purpose.
- Status.
- Owner where known.
- Classification where known.
- Dependencies where known.
- That substantive content is not approved.

### 21.4 Placeholder Prohibition

A placeholder shall not be cited as though its future substantive content exists.

---

## 22. Supersession, Deprecation, and Archival Representation

### 22.1 Superseded

Superseded means a later artifact or version has replaced the artifact’s governing effect.

The replacement shall be identifiable.

### 22.2 Deprecated

Deprecated means the artifact remains available but is scheduled or recommended for retirement or replacement.

Deprecation does not automatically remove governing effect unless the applicable authority states so.

### 22.3 Withdrawn

Withdrawn means the artifact or draft was removed from consideration or use through an authorized disposition.

### 22.4 Archived

Archived means the artifact is retained for historical reference outside active governing use.

### 22.5 Required Relationships

Where applicable, metadata shall identify:

```text
Supersedes:
Superseded By:
```

Existing approved artifacts are not required to receive these fields automatically.

### 22.6 Historical Preservation

Supersession, deprecation, withdrawal, or archival shall not:

- Delete historical identity.
- Erase prior decisions.
- Permit silent identifier reuse.
- Make a derived copy authoritative.

---

## 23. Accessibility and Long-Term Readability

Governed artifacts shall support durable human use.

They shall favor:

- Portable text formats.
- Clear headings.
- Descriptive links.
- Consistent terminology.
- Defined abbreviations.
- Reasonable paragraph length.
- Textual explanation of important visuals.
- Tables understandable without color alone.
- Stable identifiers.
- Provider-independent rendering where practical.
- Meaning preserved when advanced rendering is unavailable.
- Human readability alongside machine validation.

Accessibility and readability are production-document qualities, not optional cosmetic improvements.

---

## 24. Machine Readability and Automated Validation

### 24.1 Automation Scope

Automation may validate:

- Identifier syntax.
- Duplicate identifiers.
- Required metadata.
- Permitted status values.
- Version format.
- Required sections.
- Heading hierarchy.
- Broken internal references.
- Missing revision history.
- Placeholder status.
- Canonical path consistency.
- Duplicate authoritative copies.

### 24.2 Subordination

Automation shall implement approved GOV-003 rules.

Scripts, schemas, CI workflows, templates, and validators shall not independently establish document policy.

### 24.3 False Confidence

A successful automated check proves only the conditions actually checked.

It shall not be represented as complete semantic, architectural, or governance validation.

### 24.4 Discrepancy

When automation and the approved artifact disagree, the discrepancy shall be assessed through GOV-002.

The approved normative rule governs until changed.

---

## 25. Repository Placement and Canonical Copies

### 25.1 Canonical Instance

Each governed artifact shall have one authoritative repository instance.

### 25.2 Derived Copies

Published, rendered, exported, training, distribution, or generated copies shall identify their canonical source or non-authoritative status.

### 25.3 Duplicate Prohibition

Two repository files shall not independently claim to be the authoritative current version of the same Document ID.

### 25.4 Placement

Artifacts shall be placed according to:

- Approved repository structure.
- Artifact family.
- Responsibility.
- Canonical ownership.
- Applicable profile.

### 25.5 Movement

Moving, duplicating, or renaming an approved artifact shall follow GOV-002 when governed references or repository behavior may be affected.

### 25.6 Archive

Archived artifacts shall remain identifiable and shall not be confused with active governing versions.

---

## 26. Relationship to Adjacent Governance

### 26.1 GOV-001

GOV-001 owns:

- Governance authority.
- Artifact classifications.
- Authority Levels.
- Canonical concepts and owners.
- Conflict resolution.
- Exception Management.
- Quality Attributes.

GOV-003 standardizes how applicable values are represented.

### 26.2 GOV-002

GOV-002 owns:

- Change types and classifications.
- Change lifecycle.
- Approval routing.
- Implementation controls.
- Validation evidence.
- Closure.
- Emergency Change Management.
- Baseline exit criteria.

GOV-003 standardizes the artifact and metadata representations used by those processes.

### 26.3 GOV-004

GOV-004 will own:

- Architecture review.
- RFC mechanics.
- ADR mechanics.
- Architecture-specific governance.
- Architectural supersession.

GOV-003 may define ADR and RFC document profiles without defining their decision processes.

---

## 27. Non-Ownership Boundaries

GOV-003 does not independently define or redefine:

- Purpose, Vision, Mission, or Values.
- Governance Principles owned by GOV-001.
- Canonical concept ownership.
- Artifact classifications.
- Authority Levels.
- Exception Management.
- Change types or classifications.
- Change lifecycle states.
- Approval authority.
- Architecture-review mechanics.
- RFC or ADR processes.
- Project or product traceability.
- Product requirements.
- Specification content.
- Architecture decisions.
- Repository architecture.

GOV-003 owns the representation standards for these concepts where they appear in governed artifacts.

---

## 28. Validation Checklist

Before GOV-003 is approved or revised, verify that:

- [ ] Representation ownership remains distinct from semantic ownership.
- [ ] The common metadata model is internally consistent.
- [ ] Artifact-family profiles reuse the common model.
- [ ] Stable identity is distinct from title, filename, and path.
- [ ] Document IDs cannot be silently renumbered or reused.
- [ ] Existing approved artifacts are not renamed automatically.
- [ ] Required and conditional metadata fields are distinguishable.
- [ ] New conditional fields do not trigger uncontrolled retrofits.
- [ ] Artifact maturity is distinct from validation result and baseline status.
- [ ] GOV-002 remains authoritative for change-record lifecycle state.
- [ ] Versioning does not replace change approval or validation.
- [ ] Required structure permits justified profile variation.
- [ ] Heading hierarchy represents actual structure.
- [ ] Canonical ownership statements do not redefine ownership.
- [ ] Authority and classification remain owned by GOV-001.
- [ ] Direct, transitive, informational, runtime, precedent, external, and consumer-class relationships are distinguishable.
- [ ] PI-001’s approved Consumer Class Reference remains valid.
- [ ] Citations cannot claim nonexistent provenance or approval.
- [ ] Normative language distinguishes mandates, recommendations, permissions, capabilities, and forecasts.
- [ ] Structured content cannot silently introduce unsupported rules.
- [ ] Validation definition, execution, and result remain distinct.
- [ ] Revision history remains distinct from the GOV-002 change record.
- [ ] Pre-approval correction provenance can be preserved.
- [ ] Templates remain subordinate to GOV-003.
- [ ] Placeholders cannot be mistaken for approved artifacts.
- [ ] Supersession and archival preserve historical identity.
- [ ] Accessibility and long-term readability are required.
- [ ] Automation validates approved standards rather than creating policy.
- [ ] One canonical repository instance is preserved.
- [ ] GOV-001, GOV-002, and GOV-004 ownership boundaries remain intact.
- [ ] GOV-003 governs changes to itself through GOV-002.
- [ ] Artifact-family-specific status extensions are expressly authorized.
- [ ] Each extended status has a defined meaning and semantic owner.
- [ ] Extended statuses remain distinct from GOV-002 lifecycle states.
- [ ] Permitted transitions are defined where material.
- [ ] Downstream artifacts cannot create local status vocabularies without an authorized profile.
- [ ] `Referenced By` identifies actual known direct governed-artifact consumers or states `None identified`.
- [ ] General applicability is represented in Scope rather than misrepresented as an existing downstream reference.
- [ ] Classification qualifiers preserve an approved GOV-001 base classification.
- [ ] Classification qualifiers explain role or context without creating new classifications or authority.
- [ ] Dependencies and references remain truthful and valid.

---

## 29. Revision History of GOV-003

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 1.0.0 | 2026-08-07 | Initial approved GOV-003 — Document Standards. | Chief Architect / Product Owner | Not applicable — initial approval preceded CHG-002 |
| 1.1.0 | 2026-08-07 | Adds governed artifact-family-specific status profiles while preserving the common maturity vocabulary and GOV-002 ownership of Change Record lifecycle states. | Chief Architect / Product Owner | CHG-002 |
| 1.1.0 | 2026-08-08 | Added verified direct-consumer traceability metadata under CHG-010; no document-standard rule or authority change. | Chief Architect / Product Owner | CHG-010 |

---

**Phase C3.2 Status:** **Approved — Complete**
