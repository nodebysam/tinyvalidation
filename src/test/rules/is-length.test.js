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
const isLength = require('../../rules/is-length');

// Positive Test Cases
test('isLength › should return true for a string with the correct length', t => {
    const result = isLength('hello', 5);
    t.true(result);
});

test('isLength › should return true for an empty string with length 0', t => {
    const result = isLength('', 0);
    t.true(result);
});

test('isLength › should return true for an array with the correct length', t => {
    const result = isLength([1, 2, 3], 3);
    t.true(result);
});

test('isLength › should return true for an empty array with length 0', t => {
    const result = isLength([], 0);
    t.true(result);
});

test('isLength › should return true for an object with a length property matching the expected value', t => {
    const result = isLength({ length: 4 }, 4);
    t.true(result);
});

// Negative Test Cases
test('isLength › should return false for a string with a different length', t => {
    const result = isLength('hello', 3);
    t.false(result);
});

test('isLength › should return false for an array with a different length', t => {
    const result = isLength([1, 2, 3, 4], 3);
    t.false(result);
});

test('isLength › should return false for an object with a length property not matching the expected value', t => {
    const result = isLength({ length: 2 }, 4);
    t.false(result);
});

test('isLength › should return false for null', t => {
    const result = isLength(null, 0);
    t.false(result);
});

test('isLength › should return false for undefined', t => {
    const result = isLength(undefined, 0);
    t.false(result);
});

test('isLength › should return false for a number', t => {
    const result = isLength(42, 2);
    t.false(result);
});

test('isLength › should return false for a boolean', t => {
    const result = isLength(true, 4);
    t.false(result);
});

test('isLength › should return false for an object without a length property', t => {
    const result = isLength({ value: 'test' }, 4);
    t.false(result);
});

// Edge Cases
test('isLength › should return false for a string with extra whitespace', t => {
    const result = isLength('   ', 1);
    t.false(result);
});

test('isLength › should return true for an object with a numeric length property', t => {
    const result = isLength({ length: 0 }, 0);
    t.true(result);
});

test('isLength › should return false for an object with a non-numeric length property', t => {
    const result = isLength({ length: 'four' }, 4);
    t.false(result);
});

test('isLength › should return true for a function with a specified length', t => {
    const result = isLength(function(a, b) {}, 2); // Function with 2 parameters
    t.true(result);
});

test('isLength › should return false for a function with a different length', t => {
    const result = isLength(function(a) {}, 2); // Function with 1 parameter
    t.false(result);
});