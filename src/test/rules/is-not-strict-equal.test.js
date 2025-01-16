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
const isNotStrictEqual = require('../../rules/is-not-strict-equal');

test('isNotStrictEqual › should return true for non-strictly equal values', t => {
    t.true(isNotStrictEqual(1, 2));               // Different numbers
    t.true(isNotStrictEqual('hello', 'world'));   // Different strings
    t.true(isNotStrictEqual(true, false));        // Different booleans
    t.true(isNotStrictEqual([], {}));              // Different types (array vs object)
    t.true(isNotStrictEqual('123', 123));          // String '123' is not strictly equal to number 123
    t.true(isNotStrictEqual('0', 0));              // '0' (string) and 0 (number) are not strictly equal
    t.true(isNotStrictEqual('false', false));      // 'false' (string) and false (boolean) are not strictly equal
    t.true(isNotStrictEqual({}, []));              // Different types (object vs array)
    t.true(isNotStrictEqual(null, undefined));     // null and undefined are not strictly equal
});

test('isNotStrictEqual › should return false for strictly equal values', t => {
    t.false(isNotStrictEqual(1, 1));              // Same numbers
    t.false(isNotStrictEqual('hello', 'hello'));   // Same strings
    t.false(isNotStrictEqual(true, true));         // Same booleans
    t.false(isNotStrictEqual(null, null));         // Same value
    t.false(isNotStrictEqual(undefined, undefined)); // Same value
});

test('isNotStrictEqual › should handle edge cases', t => {
    t.true(isNotStrictEqual(NaN, NaN));           // NaN is not strictly equal to itself in JavaScript
    t.false(isNotStrictEqual(0, -0));             // 0 and -0 are considered strictly equal
    t.true(isNotStrictEqual('0', false));         // String '0' is not strictly equal to boolean false
    t.true(isNotStrictEqual(0, false));           // Number 0 is not strictly equal to boolean false
    t.true(isNotStrictEqual(undefined, null));    // undefined is not strictly equal to null
});

test('isNotStrictEqual › should handle reference checks for objects/arrays', t => {
    t.true(isNotStrictEqual({}, {}));              // Different references (even with same contents)
    t.true(isNotStrictEqual([1, 2], [1, 2]));      // Different references (even with same contents)
    t.true(isNotStrictEqual({ a: 1 }, { a: 1 }));  // Different references (even with same contents)
});

test('isNotStrictEqual › should handle invalid types gracefully', t => {
    t.true(isNotStrictEqual(null, {}));            // null is not strictly equal to an object
    t.true(isNotStrictEqual([], {}));              // Array is not strictly equal to an object
    t.true(isNotStrictEqual(1, '1'));              // Number 1 is not strictly equal to string '1'
    t.true(isNotStrictEqual({}, 'object'));        // Object is not strictly equal to string 'object'
});