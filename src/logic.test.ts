import { expect, test } from 'vitest';

import { add } from './logic';

test('logic', () => {
	expect(add(1, 2)).toBe(3);
});
