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
const isMinLength = require('../../rules/is-min-length');

test('isMinLength › should return true when value length is equal to or greater than the minimum length', t => {
    t.true(isMinLength('hello', 5));     // Exact match (5 characters)
    t.true(isMinLength('world', 4));     // Equal length (4 characters)
    t.true(isMinLength([1, 2, 3, 4, 5], 5));  // Array length is exactly 5
    t.true(isMinLength('123456', 5));    // String length (6) greater than minimum (5)
    t.true(isMinLength([1, 2, 3, 4], 4));  // Array with 4 elements, meets minimum
});

test('isMinLength › should return false when value length is less than the minimum length', t => {
    t.false(isMinLength('hi', 5));     // String length (2) less than minimum (5)
    t.false(isMinLength('no', 3));     // String length (2) less than minimum (3)
    t.false(isMinLength([1, 2], 3));   // Array length (2) less than minimum (3)
    t.false(isMinLength('1234', 5));   // String length (4) less than minimum (5)
});

test('isMinLength › should return false for non-string and non-array values', t => {
    t.false(isMinLength(123, 5));    // Number (123) can't have a length
    t.false(isMinLength(true, 3));   // Boolean (true) can't have a length
    t.false(isMinLength(null, 5));   // Null value can't have a length
    t.false(isMinLength(undefined, 5));  // Undefined value can't have a length
});

test('isMinLength › should throw error if min length is not specified', t => {
    const error = t.throws(() => {
        isMinLength('hello');
    });
    t.is(error.message, 'Minimum length must be specified.');
});

test('isMinLength › should throw error if min length is null or undefined', t => {
    const error1 = t.throws(() => {
        isMinLength('hello', undefined);
    });
    t.is(error1.message, 'Minimum length must be specified.');

    const error2 = t.throws(() => {
        isMinLength('hello', null);
    });
    t.is(error2.message, 'Minimum length must be specified.');
});

test('isMinLength › should handle empty strings and arrays', t => {
    t.false(isMinLength('', 1));         // Empty string is less than 1
    t.true(isMinLength('', 0));          // Empty string is equal to minimum 0
    t.true(isMinLength([], 0));          // Empty array is equal to minimum 0
});

test('isMinLength › should handle large values', t => {
    t.true(isMinLength('a'.repeat(1000), 999));  // Large string length (1000) meets minimum (999)
    t.false(isMinLength('a'.repeat(1000), 1001));  // Large string length (1000) less than minimum (1001)
});

test('isMinLength › should work for all primitive data types that are valid types for length', t => {
    t.true(isMinLength([1, 2, 3], 3));         // Array length of 3
    t.false(isMinLength([1, 2], 3));            // Array length of 2, less than 3
    t.true(isMinLength('1234', 4));             // String length of 4
    t.false(isMinLength('1234', 5));            // String length of 4, less than 5
    t.true(isMinLength([1, 2, 3, 4], 4));       // Array with 4 elements
});

test('isMinLength › should work with numeric strings', t => {
    t.true(isMinLength('12345', 5));    // Numeric string length matches the minimum
    t.false(isMinLength('1234', 5));    // Numeric string length less than the minimum
});

test('isMinLength › should return false for non-iterable values', t => {
    t.false(isMinLength({ key: 'value' }, 1));    // Object is not iterable
    t.false(isMinLength(123, 3));                  // Number does not have length
    t.false(isMinLength(true, 2));                 // Boolean is not iterable
});