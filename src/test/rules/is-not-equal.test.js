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
const isNotEqual = require('../../rules/is-not-equal');

test('isNotEqual › should return true for non-equal values', t => {
    t.true(isNotEqual(1, 2));                // Different numbers
    t.true(isNotEqual('hello', 'world'));    // Different strings
    t.true(isNotEqual([], {}));               // Different types (array vs object)
    t.true(isNotEqual(false, true));         // Different booleans
    t.false(isNotEqual(0, false));           // 0 is equal to false (loose comparison)
    t.false(isNotEqual('123', 123));         // '123' (string) and 123 (number) are equal due to coercion
    t.false(isNotEqual('0', 0));             // '0' (string) and 0 (number) are equal due to coercion
});

test('isNotEqual › should return false for equal values', t => {
    t.false(isNotEqual(1, 1));              // Same numbers
    t.false(isNotEqual('hello', 'hello'));   // Same strings
    t.false(isNotEqual(true, true));         // Same booleans
    t.false(isNotEqual(0, 0));               // Same number
    t.false(isNotEqual(undefined, undefined)); // Same undefined
});

test('isNotEqual › should handle reference check for objects/arrays', t => {
    t.true(isNotEqual([1, 2], [1, 2]));     // Different references (even with same contents)
    t.true(isNotEqual({}, {}));             // Different references (even with same contents)
});

test('isNotEqual › should handle type coercion cases', t => {
    t.false(isNotEqual('0', 0));             // '0' (string) and 0 (number) are equal due to coercion
});

test('isNotEqual › should work with edge cases', t => {
    t.true(isNotEqual([], {}));              // Different types (array vs object)
    t.false(isNotEqual('123', 123));         // '123' (string) and 123 (number) are equal due to coercion
});