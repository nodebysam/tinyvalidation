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
const isInteger = require('../../rules/is-integer');

// Positive test cases (should return true)
test('isInteger › should return true for a positive integer', t => {
    const result = isInteger(123);
    t.true(result);
});

test('isInteger › should return true for zero', t => {
    const result = isInteger(0);
    t.true(result);
});

test('isInteger › should return true for a negative integer', t => {
    const result = isInteger(-456);
    t.true(result);
});

test('isInteger › should return true for the maximum safe integer', t => {
    const result = isInteger(Number.MAX_SAFE_INTEGER);
    t.true(result);
});

test('isInteger › should return true for the minimum safe integer', t => {
    const result = isInteger(Number.MIN_SAFE_INTEGER);
    t.true(result);
});

// Negative test cases (should return false)
test('isInteger › should return false for a positive float', t => {
    const result = isInteger(123.456);
    t.false(result);
});

test('isInteger › should return false for a negative float', t => {
    const result = isInteger(-789.123);
    t.false(result);
});

test('isInteger › should return false for NaN', t => {
    const result = isInteger(NaN);
    t.false(result);
});

test('isInteger › should return false for Infinity', t => {
    const result = isInteger(Infinity);
    t.false(result);
});

test('isInteger › should return false for -Infinity', t => {
    const result = isInteger(-Infinity);
    t.false(result);
});

test('isInteger › should return false for a string representing an integer', t => {
    const result = isInteger('123');
    t.false(result);
});

test('isInteger › should return false for an empty string', t => {
    const result = isInteger('');
    t.false(result);
});

test('isInteger › should return false for null', t => {
    const result = isInteger(null);
    t.false(result);
});

test('isInteger › should return false for undefined', t => {
    const result = isInteger(undefined);
    t.false(result);
});

test('isInteger › should return false for an array with integers', t => {
    const result = isInteger([1, 2, 3]);
    t.false(result);
});

test('isInteger › should return false for an object', t => {
    const result = isInteger({ key: 123 });
    t.false(result);
});

test('isInteger › should return false for a boolean true', t => {
    const result = isInteger(true);
    t.false(result);
});

test('isInteger › should return false for a boolean false', t => {
    const result = isInteger(false);
    t.false(result);
});

test('isInteger › should return false for a function', t => {
    const func = () => 123;
    const result = isInteger(func);
    t.false(result);
});

// Edge cases
test('isInteger › should return true for a large positive integer', t => {
    const result = isInteger(9876543210);
    t.true(result);
});

test('isInteger › should return true for a large negative integer', t => {
    const result = isInteger(-9876543210);
    t.true(result);
});

test('isInteger › should return false for a float close to an integer', t => {
    const result = isInteger(123.0001);
    t.false(result);
});

test('isInteger › should return true for a float with no fractional part', t => {
    const result = isInteger(456.0); // This is considered an integer in JavaScript
    t.true(result);
});

test('isInteger › should return false for a string with a float value', t => {
    const result = isInteger('123.456');
    t.false(result);
});

test('isInteger › should return false for a string with a large integer value', t => {
    const result = isInteger('9876543210');
    t.false(result);
});

test('isInteger › should return false for a Symbol', t => {
    const symbol = Symbol(123);
    const result = isInteger(symbol);
    t.false(result);
});

test('isInteger › should return false for a BigInt', t => {
    const bigInt = BigInt(123);
    const result = isInteger(bigInt);
    t.false(result);
});