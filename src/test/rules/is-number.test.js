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
const isNumber = require('../../rules/is-number');

test('isNumber › should return true for a small simple number', t => {
    const number = 123;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return false for a string', t => {
    const string = 'not a number';
    const result = isNumber(string);
    t.false(result);
});

test('isNumber › should return false for a numeric string', t => {
    const numericString = '123';
    const result = isNumber(numericString);
    t.false(result);
});

test('isNumber › should return true for numeric string when allowString is set to true', t => {
    const numericString = '123';
    const result = isNumber(numericString, true);
    t.true(result);
});

test('isNumber › should return false for null', t => {
    const invalidNumber = null;
    const result = isNumber(invalidNumber);
    t.false(result);
});

test('isNumber › should return false for undefined', t => {
    const invalidNumber = undefined;
    const result = isNumber(invalidNumber);
    t.false(result);
});

test('isNumber › should return false for null when allowString is set to true', t => {
    const invalidNumber = null;
    const result = isNumber(invalidNumber, true);
    t.false(result);
});

test('isNumber › should return false for undefined when allowString is set to true', t => {
    const invalidNumber = undefined;
    const result = isNumber(invalidNumber, true);
    t.false(result);
});

test('isNumber › should return false for NaN', t => {
    const invalidNumber = NaN;
    const result = isNumber(invalidNumber);
    t.false(result);
});

test('isNumber › should return true for Infinity', t => {
    const number = Infinity;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return true for -Infinite', t => {
    const number = -Infinity;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return false for a Number object', t => {
    const invalidNumber = new Number(123);
    const result = isNumber(invalidNumber);
    t.false(result);
});

test('isNumber › should return true for zero', t => {
    const number = 0;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return false for an object with numeric properties', t => {
    const invalidNumber = { num: 123 };
    const result = isNumber(invalidNumber);
    t.false(result);
});

test('isNumber › should return true for a negative number', t => {
    const number = -123;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return true for +0', t => {
    const number = +0;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return true for -0', t => {
    const number = -0;
    const result = isNumber(number);
    t.true(result);
});

test('isNumber › should return true for a very large number', t => {
    const largeNumber = 1e+100; // 10^100
    const result = isNumber(largeNumber);
    t.true(result);
});

test('isNumber › should return true for an object with valueOf() returning a number', t => {
    const customNumber = {
        valueOf() {
            return 123;
        }
    };

    const result = isNumber(customNumber);
    t.true(result);
});