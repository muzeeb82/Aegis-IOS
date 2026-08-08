import { describe, expect, it } from 'vitest';

import { implementationFoundation } from '../src/foundation.js';

describe('I0 implementation foundation', () => {
  it('does not enable product capabilities', () => {
    expect(implementationFoundation.productCapabilitiesEnabled).toBe(false);
  });
});
