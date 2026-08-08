# I1 Identity, Authorization, Audit, and Record Foundation

## Scope

This implementation is governed by CHG-044. It provides provider-neutral identity interfaces, deny-by-default authorization evaluation, tamper-evident audit records, and the initial PostgreSQL storage structure for the SPEC-002 Identity-domain aggregates.

It does not provide a user-facing login, a configured identity provider, product workflows, production data, or production deployment.

## Local Validation

Run the repository quality checks before using the migration harness. For a disposable local database, start the PostgreSQL service from `docker-compose.yml`, set `DATABASE_URL` from the local configuration template, then run migration status or apply commands.

The I1 migration is additive. Recovery is performed by restoring a pre-migration local database snapshot; no destructive rollback is supplied or required for this additive initial schema. Reconcile the migration ledger with:

```sql
SELECT id, checksum, applied_at
FROM aegis_schema_migrations
ORDER BY id;
```

## Security Boundary

Authorization denies requests without an active scope-matching role and an exact matching policy. Separation-of-duty conflicts deny the request. The implementation emits provider-neutral audit records for the I1 events defined by CHG-044; it does not grant system or investment approval authority.
