export type TraceabilityType =
  | 'requirement-elaborates'
  | 'requirement-validates'
  | 'evidence-supports'
  | 'evidence-contradicts'
  | 'evidence-contextualizes'
  | 'decision-uses'
  | 'decision-supersedes'
  | 'record-derives-from';

export interface TypedRelationship {
  readonly id: string;
  readonly fromId: string;
  readonly toId: string;
  readonly type: TraceabilityType;
  readonly createdAt: string;
  readonly createdBy: string;
}

export function createTypedRelationship(
  relationship: TypedRelationship,
): TypedRelationship {
  for (const [value, field] of [
    [relationship.id, 'id'],
    [relationship.fromId, 'fromId'],
    [relationship.toId, 'toId'],
    [relationship.createdAt, 'createdAt'],
    [relationship.createdBy, 'createdBy'],
  ] as const) {
    if (value.trim().length === 0) {
      throw new Error(`${field} must not be empty.`);
    }
  }
  if (relationship.fromId === relationship.toId) {
    throw new Error('Typed relationships must not form a self-loop.');
  }
  return Object.freeze({ ...relationship });
}

export function traverseFrom(
  startId: string,
  relationships: readonly TypedRelationship[],
): readonly TypedRelationship[] {
  const visited = new Set<string>([startId]);
  const result: TypedRelationship[] = [];
  const queue = [startId];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const relationship of relationships.filter(
      (item) => item.fromId === current,
    )) {
      result.push(relationship);
      if (!visited.has(relationship.toId)) {
        visited.add(relationship.toId);
        queue.push(relationship.toId);
      }
    }
  }
  return Object.freeze(result);
}
