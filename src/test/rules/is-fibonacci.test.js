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
const isFibonacci = require('../../rules/is-fibonacci');

test('isFibonacci › should return true for 0 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(0));
});

test('isFibonacci › should return true for 1 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(1));
});

test('isFibonacci › should return true for 2 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(2));
});

test('isFibonacci › should return true for 3 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(3));
});

test('isFibonacci › should return true for 5 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(5));
});

test('isFibonacci › should return true for 8 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(8));
});

test('isFibonacci › should return true for 13 (a Fibonacci number)', (t) => {
    t.true(isFibonacci(13));
});

test('isFibonacci › should return false for 4 (not a Fibonacci number)', (t) => {
    t.false(isFibonacci(4));
});

test('isFibonacci › should return false for 6 (not a Fibonacci number)', (t) => {
    t.false(isFibonacci(6));
});

test('isFibonacci › should return false for 7 (not a Fibonacci number)', (t) => {
    t.false(isFibonacci(7));
});

test('isFibonacci › should return false for 10 (not a Fibonacci number)', (t) => {
    t.false(isFibonacci(10));
});

test('isFibonacci › should return false for 20 (not a Fibonacci number)', (t) => {
    t.false(isFibonacci(20));
});

test('isFibonacci › should return false for -1 (negative number)', (t) => {
    t.false(isFibonacci(-1));
});

test('isFibonacci › should return false for a string representation of a Fibonacci number', (t) => {
    t.false(isFibonacci('5'));
});

test('isFibonacci › should return false for null', (t) => {
    t.false(isFibonacci(null));
});

test('isFibonacci › should return false for undefined', (t) => {
    t.false(isFibonacci(undefined));
});

test('isFibonacci › should return false for a boolean true', (t) => {
    t.false(isFibonacci(true));
});

test('isFibonacci › should return false for a boolean false', (t) => {
    t.false(isFibonacci(false));
});

test('isFibonacci › should return false for an object', (t) => {
    t.false(isFibonacci({}));
});

test('isFibonacci › should return false for an array', (t) => {
    t.false(isFibonacci([]));
});

test('isFibonacci › should return true for large Fibonacci number (144)', (t) => {
    t.true(isFibonacci(144));
});

test('isFibonacci › should return true for very large Fibonacci number (6765)', (t) => {
    t.true(isFibonacci(6765));
});

test('isFibonacci › should return false for a very large non-Fibonacci number (100000)', (t) => {
    t.false(isFibonacci(100000));
});

test('isFibonacci › should handle edge case of 1 being a Fibonacci number', (t) => {
    t.true(isFibonacci(1));
});

test('isFibonacci › should return false for fractional numbers (e.g., 3.5)', (t) => {
    t.false(isFibonacci(3.5));
});