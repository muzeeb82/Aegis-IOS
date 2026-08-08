# GOV-001 — Governance Model

**Document ID:** GOV-001
**Title:** Governance Model
**Version:** 1.0.0
**Status:** Approved
**Owner:** Chief Architect / Product Owner
**Classification:** Normative
**Authority Level:** Level 1
**Governed By:** CONST-001
**Depends On:** CONST-001, ADR-002, ADR-003
**Referenced By:** ADR-004, ADR-005, ARCH-MANIFEST-001, AR-GOV-004-001, AR-SYS-001, CHARTER-001, CHG-010, GOV-002, GOV-003, GOV-004, PI-001, PRD-001, RB-GOV-004-001, RRC-001, SPEC-001, TRN-001
**Last Updated:** 2026-08-08
**Date:** 2026-08-07

## 1. Purpose

GOV-001 defines the governance model for Aegis IOS: repository authority, concept ownership, conflict resolution, exception management, quality attribute ownership, and artifact classification. It is the single authoritative source for governance. Purpose, Vision, Mission, Core Values, and Long-Term Philosophy are owned exclusively by CONST-001.

## 2. Governance Principles

### GP-001 — Single Source of Truth

Every cross-cutting concept shall have one canonical owner. Dependent artifacts shall reference the owner rather than restating the concept.

### GP-002 — One Rule → One Owner

Each governance rule shall be owned by exactly one governed artifact. Supporting artifacts may reference a rule but shall not redefine it.

### GP-003 — Architecture Before Implementation

Architectural decisions shall be established before implementation artifacts are produced. Implementation shall faithfully realize approved architecture rather than invent or extend it.

### GP-004 — Evidence Before Opinion

Governance decisions shall be supported by documented rationale, traceability, and recorded review outcomes. When evidence conflicts with opinion, evidence prevails.

### GP-005 — Explainability First

Governance shall remain understandable by future maintainers. Significant decisions shall be explainable through repository artifacts rather than conversational history.

### GP-006 — Documentation Is Part of the Product

Governance documentation is a production artifact and shall be versioned, reviewed, and maintained with the same discipline as implementation artifacts.

### GP-007 — AI Independence

Governance shall remain independent of any AI provider, model, vendor, or implementation technology. Repository knowledge must outlive implementation technologies.

### GP-008 — Long-Term Maintainability

Governance decisions shall optimize long-term maintainability over short-term convenience. Temporary implementation shortcuts shall not become permanent governance.

### GP-009 — Continuous Learning

Lessons from implementation, validation, and operations shall be evaluated through the governance change process; learning improves governance through controlled evolution rather than ad hoc modification.

### GP-010 — Auditability

Governance decisions, changes, approvals, exceptions, and architectural decisions shall be recorded to enable independent review and traceability. This principle applies to governance records and processes; it is distinct from QA-006, which defines product capability for auditing system behavior, data, and decisions.

## 3. Authority Model

Repository numbering is reading order only. Authority is defined exclusively by this model.

| Authority Level | Artifact |
|---:|---|
| 0 | Constitution (CONST-001) |
| 1 | Governance (GOV-001 and related governance artifacts) |
| 2 | Project Charter |
| 3 | Architecture |
| 4 | Product Requirements (PRD) |
| 5 | Specifications |
| 6 | Frameworks |
| 7 | Standards |
| 8 | Playbooks |
| 9 | Examples |
| 10 | Training |

Each level conforms to higher authority within its scope. The Charter owns Project Objectives, Project Scope, and Project Success Criteria. Architecture owns system structure, component relationships, patterns, and constraints. The PRD owns Product Goals, Product Capability Scope, Functional Requirements, and product-specific Non-Functional Requirements; its NFRs reference the canonical Quality Attribute Catalog. Specifications realize approved Product Requirements without redefining Architecture or Product Requirements.

If guidance conflicts: (1) higher authority prevails; (2) at equal authority, the Concept Registry owner prevails; (3) unresolved ambiguity follows Section 4.

## 4. Conflict Resolution

Resolve conflicts in this order:

1. Verify authority level.
2. Verify canonical concept ownership in the Concept Registry.
3. Classify the issue as an implementation defect, documentation inconsistency, architectural ambiguity, or new architectural requirement.
4. Correct defects or documentation; pause and resolve ambiguities through an ADR; evaluate new requirements through governance change management before implementation.
5. Record the outcome in the appropriate governed artifact.

## 5. Exception Management

An exception is a temporary, controlled deviation from approved governance. It shall document justification, affected artifacts, scope, approving authority, an expiration or review condition, and traceability. An exception does not permanently modify governance; permanent changes follow the governance change process and, where applicable, the ADR process.

## 6. Concept Registry

No governed artifact shall introduce a cross-cutting concept without first establishing its ownership in this registry.

| Concept | Canonical Owner | Referenced By | Notes |
|---|---|---|---|
| Project Objectives | Project Charter | PRD | Product Goals trace to one or more Project Objectives. |
| Product Goals | PRD | Specifications | Realize approved Project Objectives. |
| Project Scope | Project Charter | PRD | Distinct from Product Capability Scope. |
| Product Capability Scope | PRD | Specifications | Distinct from Project Scope. |
| Project Success Criteria | Project Charter | PRD | Measures overall project success. |
| Requirement Acceptance Criteria | PRD | Specifications | Owned by the PRD; elaborated by Specifications. |
| Quality Attributes | GOV-001 | PRD, Specifications, Standards | Product-specific NFRs reference this catalog. |

The canonical relationships are: Project Objectives ↔ Product Goals; Project Scope ↔ Product Capability Scope; Project Success Criteria ↔ Requirement Acceptance Criteria; and Quality Attributes ↔ Product-specific Non-Functional Requirements. Candidate concepts require governance change before inclusion.

## 7. Quality Attribute Catalog

Quality Attributes are owned exclusively by GOV-001. Product Requirements reference them when defining product-specific NFRs; Specifications elaborate those requirements without redefining quality concepts.

| ID | Quality Attribute | Description |
|---|---|---|
| QA-001 | Correctness | Results are consistent with approved specifications and evidence. |
| QA-002 | Consistency | Comparable situations use the same governed rules and decision logic. |
| QA-003 | Maintainability | The repository and implementation remain understandable and economical to evolve. |
| QA-004 | Scalability | The system remains effective as users, portfolios, and data volume grow. |
| QA-005 | Explainability | Decisions, recommendations, and outputs can be understood and traced. |
| QA-006 | Auditability | The product can record, inspect, and reconstruct operational behavior, data lineage, and decision history; distinct from GP-010. |
| QA-007 | Reliability | Expected functions operate correctly and predictably under normal conditions. |
| QA-008 | Security | Assets, data, and operations are protected from unauthorized access or misuse. |
| QA-009 | Performance | The system meets agreed responsiveness and throughput objectives. |
| QA-010 | Extensibility | Capabilities can be added without degrading architecture or governance. |
| QA-011 | Usability | Users can efficiently, effectively, and consistently accomplish intended tasks with minimal cognitive effort. |
| QA-012 | AI Independence | The system remains portable across AI providers and implementation technologies. |

## 8. Artifact Classification

| Classification | Meaning |
|---|---|
| Normative | Defines governed decisions, rules, constraints, or canonical ownership. |
| Informational | Explains, illustrates, or reports without establishing authority. |
| Runtime | Configures operational AI behavior and must reference rather than restate Normative governance. |

Normative artifacts prevail over Informational and Runtime artifacts. Runtime artifacts are outside the Authority Model hierarchy and may not override governed repository decisions.

## Revision History

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0.0 | 2026-08-07 | Approved | Initial approved governance baseline. |
| 1.0.0 | 2026-08-08 | Approved | Added verified direct-consumer traceability metadata under CHG-010; no governance rule or authority change. |
