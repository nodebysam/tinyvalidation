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
const isPositive = require('../../rules/is-positive');

// Positive test cases (should return true)
test('isPositive › should return true for a positive integer', t => {
    const result = isPositive(123);
    t.true(result);
});

test('isPositive › should return true for a small positive float', t => {
    const result = isPositive(0.0001);
    t.true(result);
});

test('isPositive › should return true for a large positive number', t => {
    const result = isPositive(9876543210);
    t.true(result);
});

test('isPositive › should return true for a positive float', t => {
    const result = isPositive(456.789);
    t.true(result);
});

// Negative test cases (should return false)
test('isPositive › should return false for zero', t => {
    const result = isPositive(0);
    t.false(result);
});

test('isPositive › should return false for a negative integer', t => {
    const result = isPositive(-123);
    t.false(result);
});

test('isPositive › should return false for a negative float', t => {
    const result = isPositive(-456.789);
    t.false(result);
});

test('isPositive › should return false for NaN', t => {
    const result = isPositive(NaN);
    t.false(result);
});

test('isPositive › should return false for Infinity', t => {
    const result = isPositive(Infinity);
    t.false(result);
});

test('isPositive › should return false for -Infinity', t => {
    const result = isPositive(-Infinity);
    t.false(result);
});

test('isPositive › should return false for a string representing a positive number', t => {
    const result = isPositive('123');
    t.false(result);
});

test('isPositive › should return false for an empty string', t => {
    const result = isPositive('');
    t.false(result);
});

test('isPositive › should return false for null', t => {
    const result = isPositive(null);
    t.false(result);
});

test('isPositive › should return false for undefined', t => {
    const result = isPositive(undefined);
    t.false(result);
});

test('isPositive › should return false for an array with positive numbers', t => {
    const result = isPositive([1, 2, 3]);
    t.false(result);
});

test('isPositive › should return false for an object', t => {
    const result = isPositive({ value: 123 });
    t.false(result);
});

test('isPositive › should return false for a boolean true', t => {
    const result = isPositive(true);
    t.false(result);
});

test('isPositive › should return false for a boolean false', t => {
    const result = isPositive(false);
    t.false(result);
});

test('isPositive › should return false for a function', t => {
    const func = () => 123;
    const result = isPositive(func);
    t.false(result);
});

// Edge cases
test('isPositive › should return true for a very small positive float', t => {
    const result = isPositive(1e-10);
    t.true(result);
});

test('isPositive › should return false for a negative float very close to zero', t => {
    const result = isPositive(-1e-10);
    t.false(result);
});

test('isPositive › should return true for the maximum safe positive integer', t => {
    const result = isPositive(Number.MAX_SAFE_INTEGER);
    t.true(result);
});

test('isPositive › should return false for the minimum safe negative integer', t => {
    const result = isPositive(Number.MIN_SAFE_INTEGER);
    t.false(result);
});

test('isPositive › should return false for a string with a positive float value', t => {
    const result = isPositive('456.789');
    t.false(result);
});

test('isPositive › should return false for a Symbol', t => {
    const symbol = Symbol(123);
    const result = isPositive(symbol);
    t.false(result);
});

test('isPositive › should return false for a BigInt', t => {
    const bigInt = BigInt(123);
    const result = isPositive(bigInt);
    t.false(result);
});