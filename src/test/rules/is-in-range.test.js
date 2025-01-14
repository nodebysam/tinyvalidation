/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

const test = require('ava');
const isInRange = require('../../rules/is-in-range');

test('isInRange › should return true if no range is specified', t => {
    const result = isInRange(10);
    t.true(result); // No min/max, so it should return false
});

test('isInRange › should return true if range is open-ended (no min, no max)', t => {
    const result = isInRange(10, undefined, undefined);
    t.true(result); // No min/max, so it should return true (open-ended range)
});

test('isInRange › should return true if value equals the open-ended min', t => {
    const result = isInRange(10, 10, undefined);
    t.true(result); // Value equals the open-ended min
});

test('isInRange › should return true if value equals the open-ended max', t => {
    const result = isInRange(10, undefined, 10);
    t.true(result); // Value equals the open-ended max
});

test('isInRange › should return false if value is less than the min', t => {
    const result = isInRange(5, 10, undefined);
    t.false(result); // Value is less than the min
});

test('isInRange › should return false if value is greater than the max', t => {
    const result = isInRange(15, undefined, 10);
    t.false(result); // Value is greater than the max
});

test('isInRange › should return true if value is between min and max', t => {
    const result = isInRange(10, 5, 15);
    t.true(result); // Value is between min and max
});

test('isInRange › should return false if value is not between min and max', t => {
    const result = isInRange(20, 5, 15);
    t.false(result); // Value is not between min and max
});