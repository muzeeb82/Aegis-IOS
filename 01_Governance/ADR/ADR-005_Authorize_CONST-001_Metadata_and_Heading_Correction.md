# ADR-005 — Authorize CONST-001 Metadata Completion and Heading Clarity Correction

**Document ID:** ADR-005
**Title:** Authorize CONST-001 Metadata Completion and Heading Clarity Correction
**Version:** 0.1.0
**Status:** Approved
**Owner:** Chief Architect / Product Owner
**Classification:** Normative
**Authority Level:** Level 1 (Governance) — see §2.1
**Depends On:** CONST-001, GOV-001, GOV-002, GOV-003
**Referenced By:** CHG-009
**Last Updated:** 2026-08-08
**Date:** 2026-08-08

## 1. Status

Approved. The Decision in §3 authorizes only CHG-009's bounded CONST-001 correction. It does not itself implement that correction.

## 2. Context

CONST-001 §8 states: "This Constitution may change only through the approved governance change process and an Architecture Decision Record." The requirement is unconditional; §8 does not carve out an exception for metadata-only, presentational, or otherwise bounded corrections.

CHG-009 proposes a narrow, non-substantive correction to CONST-001:

1. Completing the `Depends On` and `Referenced By` metadata fields required by GOV-003 §8.1, which CONST-001 currently omits entirely.
2. Disambiguating two top-level sections both titled `Purpose` (§1 and §2) into distinct headings, without changing either section's existing wording or responsibility.

CHG-009 went through the governance change process (Proposed → Reviewed → Approved) and was implemented once. That implementation was reverted, because no ADR existed to satisfy §8's second prerequisite — the change-record process alone is not sufficient under CONST-001's own text. This ADR supplies that missing prerequisite prospectively, before any reimplementation is attempted.

### 2.1 Authority Level Basis

This ADR is assigned Authority Level 1 (Governance) under GOV-001 §3's Authority Model, which places "Governance (GOV-001 and related governance artifacts)" at Level 1. ADR-005 decides a governance/change-management question — whether and how CONST-001 §8's ADR prerequisite is satisfied for CHG-009's specific scope — rather than deciding Constitution content, architecture, product requirements, or specification content directly. Unlike ADR-004, which itself functions as the governing architecture decision within the Architecture family (Level 3), ADR-005 does not become an ongoing rule other artifacts build on; §5 records that it sets no precedent beyond authorizing this one bounded change. It is Normative because, once Approved, it has binding authorizing effect on CHG-009's reimplementation — it is not merely descriptive or informational.

## 3. Decision

Authorize CHG-009's Approved scope — and only that scope — as a qualifying CONST-001 change under §8:

1. Add truthful `Depends On` and `Referenced By` metadata fields to CONST-001.
2. Rename CONST-001's two top-level `Purpose` headings to distinct titles without altering their existing text.
3. Update CONST-001's version, maintenance metadata, and revision history to record the correction.

No other CONST-001 text, including Purpose, Vision, Mission, Core Values, Long-Term Philosophy, Governance Boundary, or Change Control, is authorized to change under this ADR.

### 3.1 Scope Boundary

This Decision authorizes this specific, bounded correction only. It does not establish that metadata or heading corrections in general are exempt from §8, and it does not authorize any future CONST-001 change. Each future CONST-001 change requires its own ADR, regardless of size.

## 4. Rationale

CONST-001 §8 exists to ensure Constitutional change is deliberate and durably recorded, not merely to add procedural friction. Requiring an explicit ADR for even a narrow, non-substantive correction preserves that discipline consistently — the alternative, reading an implicit "minor change" exception into §8, would itself change what §8 means, and GOV-002 §6.4 already establishes that no CONST-001 change is small enough to bypass Strategic-level rigor. Providing the missing ADR is more consistent with CONST-001's own authority than working around the requirement.

## 5. Consequences

- CHG-009 may proceed to reimplementation and revalidation, referencing this ADR as its §8 authorization, once this ADR is Approved.
- CONST-001 §8's ADR requirement remains unconditional and undiluted for all future Constitutional changes.
- The precedent this ADR sets is narrow: an ADR is required per change, not per change type or size class.

## 6. Alternatives Considered

### Alternative A — Treat metadata and heading corrections as exempt from §8

Rejected. CONST-001 §8's text contains no size, type, or materiality qualifier. Reading in an exception would itself be a change to what §8 means, which under §8's own terms would require a governance change and an ADR to establish — it cannot be adopted by informal interpretation.

### Alternative B — Retroactively attach an ADR to the reverted v1.0.1 implementation

Rejected. An ADR approved after the fact can authorize a future correction; it cannot make a past, already-implemented change compliant. CONST-001 was reverted to v1.0.0 rather than retroactively legitimized.

### Alternative C — Leave CONST-001 without the required metadata indefinitely

Rejected. CONST-001 is the only artifact in the repository not conforming to GOV-003 §8.1's required-metadata rule at the root of the authority hierarchy. Leaving it uncorrected is a known, recorded defect rather than a resolution.

## 7. References

- CONST-001 — Aegis IOS Constitution, §8 Change Control
- CHG-009 — Correct CONST-001 Metadata and Heading Clarity
- GOV-002 — Change Management, §6.4
- GOV-003 — Document Standards, §8.1

## 8. Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial Draft, created to supply CHG-009's missing §8 ADR prerequisite following reversal of its first implementation. | Chief Architect / Product Owner |
| 0.1.0 | 2026-08-08 | Revision per Review: added Title, Classification, Authority Level (with basis in new §2.1), Referenced By, and Last Updated; consolidated the former non-standard `Related Artifacts` field into `Referenced By`. No change to §3 Decision, §4 Rationale, §5 Consequences, or §6 Alternatives. | Chief Architect / Product Owner |
| 0.1.0 | 2026-08-08 | Revision per Re-Review: added GOV-001 to `Depends On`, since §2.1's Authority Level basis directly relies on GOV-001 §3's Authority Model. No other field or content changed. | Chief Architect / Product Owner |

## 9. Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Review confirmed that ADR-005 correctly treats CONST-001 §8 as an unconditional ADR prerequisite, preserves the reverted implementation as historical evidence, and rejects a general exception for metadata or heading corrections.

The Draft does not yet conform to GOV-003 §8.1 because it omits required metadata fields: `Title`, `Classification`, `Authority Level`, `Referenced By`, and `Last Updated`. Before Review can pass, the Draft shall add those fields with values consistent with the approved GOV-001 authority model and verified direct relationships. The Review does not infer an Authority Level for this ADR.

This Review does not approve, implement, validate, or close ADR-005 or CHG-009.

## 10. Re-Review Activity

```text
Review State: Revision Required
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Revision Required Before Approval
```

The Re-Review confirmed that the previously missing required metadata fields were added and that the Level 1 Governance rationale in §2.1 is consistent with GOV-001's placement of related governance artifacts.

The Draft still omits GOV-001 from `Depends On`, despite §2.1 directly relying on GOV-001 §3's Authority Model to establish the ADR's Authority Level. Before Review can pass, add GOV-001 to the `Depends On` field. No other decision, rationale, consequence, or alternative finding remains.

This Re-Review does not approve, implement, validate, or close ADR-005 or CHG-009.

## 11. Final Re-Review Activity

```text
Review State: Reviewed — Pending Strategic Approval
Reviewer: Chief Architect / Product Owner
Review Date: 2026-08-08
Review Result: Passed — Ready for Strategic Approval
```

The Final Re-Review confirmed that GOV-001 is now declared as a direct operative dependency, completing the required metadata and supporting the Level 1 rationale in §2.1. The Decision remains limited to CHG-009's existing approved scope, preserves the prospective-only authorization boundary, and creates no general exception to CONST-001 §8.

This Review does not approve, implement, validate, or close ADR-005 or CHG-009.

## 12. Approval Activity

```text
Approval State: Approved
Approver: Chief Architect / Product Owner
Approval Date: 2026-08-08
Authority Basis: CONST-001 §8; GOV-001 authority model; GOV-002 Strategic-change controls
Approved Scope: The Decision in §3 only
Approval Result: Approved with Conditions
```

### 12.1 Approval Conditions

- CHG-009 may be reimplemented only within its existing approved scope and shall cite ADR-005 as its CONST-001 §8 authorization.
- CHG-009 shall re-execute its full validation plan; superseded implementation and validation evidence shall not substitute for new evidence.
- No other CONST-001 change or general exception to §8 is authorized.

This approval does not implement, validate, or close ADR-005 or CHG-009.
