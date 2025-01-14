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
const isBoolean = require('../../rules/is-boolean');

test('isBoolean › should return true for a boolean value of true', t => {
    const booleanValue = true;
    const result = isBoolean(booleanValue);
    t.true(result);
});

test('isBoolean › should return true for a boolean value of false', t => {
    const booleanValue = false;
    const result = isBoolean(booleanValue);
    t.true(result);
});

test('isBoolean › should return false for a string value', t => {
    const stringValue = 'true';
    const result = isBoolean(stringValue);
    t.false(result);
});

test('isBoolean › should return false for a number value', t => {
    const numberValue = 123;
    const result = isBoolean(numberValue);
    t.false(result);
});

test('isBoolean › should return false for a float value', t => {
    const floatValue = 2.5;
    const result = isBoolean(floatValue);
    t.false(result);
});

test('isBoolean › should return false for an array', t => {
    const arr = [1, 2, 3];
    const result = isBoolean(arr);
    t.false(result);
});

test('isBoolean › should return false for an object', t => {
    const object = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const result = isBoolean(object);
    t.false(result);
});

test('isBoolean › should return false for a function', t => {
    const aFunction = () => {};
    const result = isBoolean(aFunction);
    t.false(result);
});

test('isBoolean › should return false for a string "true"', t => {
    const stringTrue = 'true';
    const result = isBoolean(stringTrue);
    t.false(result);
});

test('isBoolean › should return false for a string "false"', t => {
    const stringFalse = 'false';
    const result = isBoolean(stringFalse);
    t.false(result);
});

test('isBoolean › should return true for a string "true" when allowString is set to true', t => {
    const stringTrue = 'true';
    const result = isBoolean(stringTrue, true);
    t.true(result);
});

test('isBoolean › should return true for a string "false" when allowString is set to true', t => {
    const stringFalse = 'false';
    const result = isBoolean(stringFalse, true);
    t.true(result);
});

test('isBoolean › should return false for a string "1"', t => {
    const stringOne = '1';
    const result = isBoolean(stringOne);
    t.false(result);
});

test('isBoolean › should return false for a string "0"', t => {
    const stringZero = '0';
    const result = isBoolean(stringZero);
    t.false(result);
});

test('isBoolean › should return true for a string "1" when allowString is set to true', t => {
    const stringOne = '1';
    const result = isBoolean(stringOne, true);
    t.true(result);
});

test('isBoolean › should return false for a string "0" when allowString is set to true', t => {
    const stringZero = '0';
    const result = isBoolean(stringZero, true);
    t.true(result);
});

test('isBoolean › should return true for a boolean as an object', t => {
    const objWithBoolean = { isActive: true };
    const result = isBoolean(objWithBoolean.isActive);
    t.true(result);
});

test('isBoolean › should return true for a boolean in an array', t => {
    const arrWithBoolean = [true];
    const result = isBoolean(arrWithBoolean[0]);
    t.true(result);
});

test('isBoolean › should return false for null', t => {
    const nullValue = null;
    const result = isBoolean(nullValue);
    t.false(result);
});

test('isBoolean › should return false for undefined', t => {
    const undefinedValue = undefined;
    const result = isBoolean(undefinedValue);
    t.false(result);
});

test('isBoolean › should return false for a stringified object containing boolean', t => {
    const stringifiedObj = JSON.stringify({ isActive: true });
    const result = isBoolean(stringifiedObj);
    t.false(result);
});

test('isBoolean › should return false for a Symbol', t => {
    const symbol = Symbol('symbol');
    const result = isBoolean(symbol);
    t.false(result);
});

test('isBoolean › should return false for a BigInt', t => {
    const bigInt = BigInt(123);
    const result = isBoolean(bigInt);
    t.false(result);
});

test('isBoolean › should return false for an object with a boolean property', t => {
    const objWithBoolean = { isActive: false, name: 'John Doe' };
    const result = isBoolean(objWithBoolean);
    t.false(result);
});