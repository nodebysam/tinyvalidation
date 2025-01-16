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
const isStrictEqual = require('../../rules/is-strict-equal');

test('isStrictEqual › should return true for strictly equal values', t => {
    t.true(isStrictEqual(5, 5));             // Same number
    t.true(isStrictEqual('hello', 'hello'));  // Same string
    t.true(isStrictEqual(true, true));        // Same boolean
    t.false(isStrictEqual({}, {}));           // Different objects (even with same structure)
    t.true(isStrictEqual(null, null));        // Same null
    t.true(isStrictEqual(undefined, undefined)); // Same undefined
});

test('isStrictEqual › should return false for unequal values', t => {
    t.false(isStrictEqual(5, '5'));           // Different types (number vs string)
    t.false(isStrictEqual(5, 10));            // Different numbers
    t.false(isStrictEqual('hello', 'world')); // Different strings
    t.false(isStrictEqual(true, false));      // Different booleans
    t.false(isStrictEqual({}, {}));           // Different objects (by reference)
    t.false(isStrictEqual([], {}));           // Different types (array vs object)
    t.false(isStrictEqual(null, undefined));  // Different types (null vs undefined)
});

test('isStrictEqual › should return false when comparing object instances by reference', t => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    
    t.false(isStrictEqual(obj1, obj2)); // Different instances, even though the contents are the same
});

test('isStrictEqual › should return true when comparing primitive values of the same type', t => {
    t.true(isStrictEqual(10, 10));        // Both are the same number
    t.true(isStrictEqual('test', 'test')); // Both are the same string
    t.true(isStrictEqual(false, false));   // Both are the same boolean
});

test('isStrictEqual › should return false for NaN comparison', t => {
    t.false(isStrictEqual(NaN, NaN)); // NaN is not strictly equal to itself
});