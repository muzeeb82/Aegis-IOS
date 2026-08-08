CREATE TABLE i2_decisions (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'Decision',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  current_revision integer NOT NULL DEFAULT 1 CHECK (current_revision > 0),
  lifecycle_state text NOT NULL,
  decision_type text NOT NULL,
  subject text NOT NULL,
  scope text NOT NULL,
  portfolio_context text NOT NULL,
  required_authority text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  updated_at timestamptz NOT NULL,
  updated_by text NOT NULL,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL,
  sensitivity text NOT NULL,
  typed_references jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE i2_decision_revisions (
  id text PRIMARY KEY,
  decision_id text NOT NULL REFERENCES i2_decisions(id),
  revision integer NOT NULL CHECK (revision > 0),
  proposal text NOT NULL,
  alternatives jsonb NOT NULL DEFAULT '[]'::jsonb,
  reasoning text NOT NULL,
  assumptions jsonb NOT NULL DEFAULT '[]'::jsonb,
  constraints jsonb NOT NULL DEFAULT '[]'::jsonb,
  risks jsonb NOT NULL DEFAULT '[]'::jsonb,
  evidence_revision_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  framework_references jsonb NOT NULL DEFAULT '[]'::jsonb,
  governance_references jsonb NOT NULL DEFAULT '[]'::jsonb,
  required_participants jsonb NOT NULL DEFAULT '[]'::jsonb,
  correction_reason text,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  integrity_token text NOT NULL,
  UNIQUE (decision_id, revision)
);

CREATE TABLE i2_decision_transitions (
  id text PRIMARY KEY,
  decision_id text NOT NULL REFERENCES i2_decisions(id),
  decision_revision integer NOT NULL CHECK (decision_revision > 0),
  from_state text NOT NULL,
  to_state text NOT NULL,
  actor_id text NOT NULL,
  occurred_at timestamptz NOT NULL,
  evidence_id text NOT NULL,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL
);

CREATE TABLE i2_approvals (
  id text PRIMARY KEY,
  decision_id text NOT NULL REFERENCES i2_decisions(id),
  decision_revision integer NOT NULL CHECK (decision_revision > 0),
  authority_id text NOT NULL,
  evidence_id text NOT NULL,
  recorded_at timestamptz NOT NULL,
  integrity_token text NOT NULL
);

CREATE TABLE i2_provenance (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'Provenance',
  source_identity text NOT NULL,
  source_type text NOT NULL,
  source_timestamp timestamptz NOT NULL,
  acquired_at timestamptz NOT NULL,
  acquisition_method text NOT NULL,
  content_hash text NOT NULL,
  responsible_actor text NOT NULL,
  sensitivity text NOT NULL,
  integrity_token text NOT NULL
);

CREATE TABLE i2_evidence (
  id text PRIMARY KEY,
  record_type text NOT NULL DEFAULT 'Evidence',
  schema_version integer NOT NULL DEFAULT 1 CHECK (schema_version > 0),
  current_revision integer NOT NULL DEFAULT 1 CHECK (current_revision > 0),
  lifecycle_state text NOT NULL,
  subject text NOT NULL,
  source_type text NOT NULL,
  sensitivity text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  correlation_id text NOT NULL,
  integrity_token text NOT NULL
);

CREATE TABLE i2_evidence_revisions (
  id text PRIMARY KEY,
  evidence_id text NOT NULL REFERENCES i2_evidence(id),
  revision integer NOT NULL CHECK (revision > 0),
  ingested_at timestamptz NOT NULL,
  provenance_id text NOT NULL REFERENCES i2_provenance(id),
  transformation_ids jsonb NOT NULL DEFAULT '[]'::jsonb,
  content_hash text NOT NULL,
  correction_reason text,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  integrity_token text NOT NULL,
  UNIQUE (evidence_id, revision)
);

CREATE TABLE i2_transformations (
  id text PRIMARY KEY,
  input_revision_ids jsonb NOT NULL,
  output_revision_id text NOT NULL,
  method text NOT NULL,
  occurred_at timestamptz NOT NULL,
  actor_id text NOT NULL,
  integrity_token text NOT NULL
);

CREATE TABLE i2_typed_relationships (
  id text PRIMARY KEY,
  from_id text NOT NULL,
  to_id text NOT NULL,
  relationship_type text NOT NULL,
  created_at timestamptz NOT NULL,
  created_by text NOT NULL,
  integrity_token text NOT NULL,
  CHECK (from_id <> to_id)
);

CREATE INDEX i2_decision_transitions_decision_id_idx ON i2_decision_transitions (decision_id);
CREATE INDEX i2_approvals_decision_id_idx ON i2_approvals (decision_id);
CREATE INDEX i2_typed_relationships_from_id_idx ON i2_typed_relationships (from_id);
CREATE INDEX i2_typed_relationships_to_id_idx ON i2_typed_relationships (to_id);

CREATE FUNCTION prevent_i2_revision_mutation() RETURNS trigger AS $$
BEGIN
  RAISE EXCEPTION 'I2 revisions are immutable; create a successor revision instead.';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER i2_decision_revisions_immutable
  BEFORE UPDATE OR DELETE ON i2_decision_revisions
  FOR EACH ROW EXECUTE FUNCTION prevent_i2_revision_mutation();

CREATE TRIGGER i2_evidence_revisions_immutable
  BEFORE UPDATE OR DELETE ON i2_evidence_revisions
  FOR EACH ROW EXECUTE FUNCTION prevent_i2_revision_mutation();
