# SPEC-004 — Security, Privacy, and Access-Control Specification

```text
Document ID: SPEC-004
Title: Security, Privacy, and Access-Control Specification
Version: 1.0.0
Status: Approved
Owner: Chief Architect / Product Owner
Classification: Normative
Authority Level: Level 5
Depends On: PRD-001, ADR-004, SPEC-001, SPEC-002, SPEC-003, AR-SYS-001
Referenced By: CHG-016, SPEC-005, SPEC-006, SPEC-007, SPEC-008, SPEC-009, AR-PKG-001, RRC-001
Last Updated: 2026-08-08
Change ID: CHG-032
```

## 1. Security Objectives

Protect confidentiality, integrity, availability, privacy, and accountable use of investment, identity, credential, integration, and governance-related information. Security controls do not grant investment or governance authority.

## 2. Trust Boundaries

Trust boundaries exist at user/API entry, administrative entry, background processing, persistence, object storage, AI providers, external connectors, identity provider, observability export, and deployment administration. Every crossing authenticates the caller or workload, authorizes the action, validates content, minimizes data, encrypts transport, and records material evidence.

## 3. Identity and Authorization

- Federated human identity and workload identity use replaceable adapters.
- Sessions are short-lived, revocable, and bound to approved assurance.
- Authorization is deny-by-default and evaluates principal, role, action, resource, scope, sensitivity, lifecycle, and separation-of-duty policy.
- Privileged access is time-bounded where practical and fully audited.
- Approval authority is distinct from system administration permission.

## 4. Data Protection

Data is classified as Public, Internal, Confidential, or Restricted. Encryption applies in transit and at rest; key access is separated and rotated. Secrets remain in an approved secret facility. Exports, backups, logs, test fixtures, and AI requests apply the same classification and minimization rules as primary storage.

## 5. Privacy and Retention

Personal data shall have documented purpose, lawful basis where applicable, minimization, access, retention, correction, and disposition behavior. Jurisdictions and schedules remain open until formally established. Production data shall not be copied into development or training without approved sanitization.

## 6. Threat Controls

The design shall address identity spoofing, privilege escalation, injection, insecure direct object reference, supply-chain compromise, data exfiltration, prompt injection, tool abuse, connector impersonation, replay, tampering, repudiation, denial of service, malicious files, and audit destruction.

AI and connector content is untrusted input. Tool permissions are allowlisted. Retrieved content cannot override governing instructions or authorization.

## 7. Security Evidence and Response

Authentication, authorization changes, denied privileged actions, secret use, protected exports, policy changes, connector changes, AI tool use, integrity failures, and incident actions generate tamper-evident events. Response procedures preserve evidence, contain impact, recover safely, notify required owners, and record lessons.

## 8. Security Release Gates

- [ ] Threat model reviewed.
- [ ] Access-control matrix approved and tested.
- [ ] Secret and key handling tested.
- [ ] Dependency and artifact integrity checks pass.
- [ ] Vulnerability scanning and relevant penetration testing pass.
- [ ] Backup confidentiality and recovery integrity pass.
- [ ] Logging is useful without exposing protected content.
- [ ] AI and connector abuse cases pass.
- [ ] Residual risks are explicitly accepted by competent authority.

## 9. Revision History

| Version | Date | Change | Author | Change ID |
|---|---|---|---|---|
| 0.1.0 | 2026-08-08 | Initial security, privacy, and access-control Draft. | Chief Architect / Product Owner | Not assigned — unapproved Draft |
| 0.1.0 | 2026-08-08 | Corrected `Referenced By` to the verified direct-consumer inventory established by CHG-015 §3.1 (added CHG-016, AR-PKG-001, RRC-001). | Chief Architect / Product Owner | CHG-015 |
| 0.1.0 | 2026-08-08 | Corrected the undefined Draft-status qualifier from `Threat Review` to the established `Architecture Approval` wording; preserved the §8 threat-model release gate unchanged. | Chief Architect / Product Owner | CHG-016 |
| 0.1.0 | 2026-08-08 | Added SPEC-009 as a verified direct consumer for extension-package permission controls. | Chief Architect / Product Owner | CHG-018 |
| 1.0.0 | 2026-08-08 | Under CHG-032: approved the existing security, privacy, and access-control contract; added ADR-004 as a direct dependency and retained all security release gates as future execution evidence. | Chief Architect / Product Owner | CHG-032 |
