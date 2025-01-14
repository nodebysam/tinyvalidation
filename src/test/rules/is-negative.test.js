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
const isNegative = require('../../rules/is-negative');

// Positive Test Cases
test('isNegative › should return true for a negative integer', t => {
    const result = isNegative(-42);
    t.true(result);
});

test('isNegative › should return true for a negative float', t => {
    const result = isNegative(-42.5);
    t.true(result);
});

test('isNegative › should return true for a very small negative number', t => {
    const result = isNegative(-0.00001);
    t.true(result);
});

test('isNegative › should return true for -Infinity', t => {
    const result = isNegative(-Infinity);
    t.true(result);
});

// Negative Test Cases
test('isNegative › should return false for a positive integer', t => {
    const result = isNegative(42);
    t.false(result);
});

test('isNegative › should return false for a positive float', t => {
    const result = isNegative(42.5);
    t.false(result);
});

test('isNegative › should return false for zero', t => {
    const result = isNegative(0);
    t.false(result);
});

test('isNegative › should return false for Infinity', t => {
    const result = isNegative(Infinity);
    t.false(result);
});

test('isNegative › should return false for NaN', t => {
    const result = isNegative(NaN);
    t.false(result);
});

test('isNegative › should return false for a string', t => {
    const result = isNegative('-42');
    t.false(result);
});

test('isNegative › should return false for an array', t => {
    const result = isNegative([-42]);
    t.false(result);
});

test('isNegative › should return false for an object', t => {
    const result = isNegative({ value: -42 });
    t.false(result);
});

test('isNegative › should return false for null', t => {
    const result = isNegative(null);
    t.false(result);
});

test('isNegative › should return false for undefined', t => {
    const result = isNegative(undefined);
    t.false(result);
});

test('isNegative › should return false for a function', t => {
    const result = isNegative(() => -42);
    t.false(result);
});