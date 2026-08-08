CREATE TABLE i1_principal_references (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'PrincipalReference',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
  lifecycle_state text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  effective_at timestamptz,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb,
  principal_kind text NOT NULL CHECK (principal_kind IN ('human', 'workload')),
  subject_reference text NOT NULL UNIQUE
);

CREATE TABLE i1_role_bindings (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'RoleBinding',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
  lifecycle_state text NOT NULL,
  principal_id text NOT NULL REFERENCES i1_principal_references(id),
  role_name text NOT NULL,
  scope text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  effective_at timestamptz,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE i1_policy_references (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'PolicyReference',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
  lifecycle_state text NOT NULL,
  role_name text NOT NULL,
  action_name text NOT NULL,
  resource_name text NOT NULL,
  scope text NOT NULL,
  target_sensitivity text NOT NULL,
  target_lifecycle_state text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  effective_at timestamptz,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE i1_authorization_evidence (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'AuthorizationEvidence',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
  lifecycle_state text NOT NULL,
  principal_id text NOT NULL REFERENCES i1_principal_references(id),
  action_name text NOT NULL,
  resource_name text NOT NULL,
  scope text NOT NULL,
  permitted boolean NOT NULL,
  reason text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  effective_at timestamptz,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE i1_audit_events (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'AuditEvent',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  revision integer NOT NULL DEFAULT 1 CHECK (revision > 0),
  lifecycle_state text NOT NULL,
  event_type text NOT NULL CHECK (
    event_type IN (
      'authentication',
      'authorization-change',
      'denied-privileged-action',
      'policy-change'
    )
  ),
  principal_id text NOT NULL REFERENCES i1_principal_references(id),
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  effective_at timestamptz,
  correlation_id text NOT NULL,
  event_detail text NOT NULL,
  previous_integrity_token text,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb
);
