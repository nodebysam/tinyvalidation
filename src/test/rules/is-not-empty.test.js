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
const isNotEmpty = require('../../rules/is-not-empty');

test('isNotEmpty › should return true for an object with data', t => {
    const objectWithData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const result = isNotEmpty(objectWithData);
    t.true(result);
});

test('isNotEmpty › should return false for an object with no data', t => {
    const objectWithNoData = {};
    const result = isNotEmpty(objectWithNoData);
    t.false(result);
});

test('isNotEmpty › should return true for an array with data', t => {
    const arrayWithData = [1, 2, 3];
    const result = isNotEmpty(arrayWithData);
    t.true(result);
});

test('isNotEmpty › should return false for an array with no data', t => {
    const arrayWithNoData = [];
    const result = isNotEmpty(arrayWithNoData);
    t.false(result);
});

test('isNotEmpty › should return true for a string with characters', t => {
    const stringWithChars = 'I am a string';
    const result = isNotEmpty(stringWithChars);
    t.true(result);
});

test('isNotEmpty › should return false for a string with no characters', t => {
    const stringWithNoChars = '';
    const result = isNotEmpty(stringWithNoChars);
    t.false(result);
});

test('isNotEmpty › should return true for a string with a space', t => {
    const stringWithSpace = ' ';
    const result = isNotEmpty(stringWithSpace);
    t.true(result);
});

test('isNotEmpty › should return false for null', t => {
    const forNull = null;
    const result = isNotEmpty(forNull);
    t.false(result);
});

test('isNotEmpty › should return false for undefined', t => {
    const forUndefined = undefined;
    const result = isNotEmpty(forUndefined);
    t.false(result);
});

test('isNotEmpty › should return true for zero', t => {
    const zero = 0;
    const result = isNotEmpty(zero);
    t.true(result);
});

test('isNotEmpty › should return false for zero when treatZeroAsEmpty is set to true', t => {
    const zero = 0;
    const result = isNotEmpty(zero, true);
    t.false(result);
});

test('isNotEmpty › should return true for a Date object', t => {
    const date = new Date();
    const result = isNotEmpty(date);
    t.true(result);
});

test('isNotEmpty › should return true for RegExp object', t => {
    const regExp = /abc/;
    const result = isNotEmpty(regExp);
    t.true(result);
});

test('isNotEmpty › should return true for a non-empty Buffer', t => {
    const buffer = Buffer.from('hello');
    const result = isNotEmpty(buffer)
    t.true(result);
});

test('isNotEmpty › should return false for an empty Buffer', t => {
    const emptyBuffer = Buffer.alloc(0);
    const result = isNotEmpty(emptyBuffer);
    t.false(result);
});

test('isNotEmpty › should return true for a positive number', t => {
    const positiveNumber = 42;
    const result = isNotEmpty(positiveNumber);
    t.true(result);
});

test('isNotEmpty › should return true for a negative number', t => {
    const negativeNumber = -42;
    const result = isNotEmpty(negativeNumber);
    t.true(result);
});

test('isNotEmpty › should return true for a string with multiple spaces', t => {
    const stringWithSpaces = '    ';
    const result = isNotEmpty(stringWithSpaces);
    t.true(result);
});

test('isNotEmpty › should return true for an object with valueOf() returning a number', t => {
    function CustomNumber() {
        this.valueOf = () => 100;
    }

    const customNumber = new CustomNumber();
    const result = isNotEmpty(customNumber);
    t.true(result);
});