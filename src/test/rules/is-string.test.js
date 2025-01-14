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
const isString = require('../../rules/is-string');

test('isString › should return true for a valid simple string', t => {
    const simpleString = 'I am a simple string';
    const result = isString(simpleString);
    t.true(result);
});

test('isString › should return true for an empty string', t => {
    const emptyString = '';
    const result = isString(emptyString);
    t.true(result);
});

test('isString › should return true for a string with a space', t => {
    const stringWithSpace = ' ';
    const result = isString(stringWithSpace);
    t.true(result);
});

test('isString › should return true for a string with multiple spaces', t => {
    const stringWithMultipleSpaces = '   ';
    const result = isString(stringWithMultipleSpaces);
    t.true(result);
});

test('isString › should return for a string of just numbers', t => {
    const stringWithNumbers = '123';
    const result = isString(stringWithNumbers);
    t.true(result);
});

test('isString › should return false for a number', t => {
    const number = 123;
    const result = isString(number);
    t.false(result);
});

test('isString › should return false for a float', t => {
    const float = 2.5;
    const result = isString(float);
    t.false(result);
});

test('isString › should return false for a boolean', t => {
    const boolean = true;
    const result = isString(boolean);
    t.false(result);
});

test('isString › should return false for a function', t => {
    const aFunction = () => {};
    const result = isString(aFunction);
    t.false(result);
});

test('isString › should return false for an object', t => {
    const object = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const result = isString(object);
    t.false(result);
});

test('isString › should return false for an array', t => {
    const arr = [1, 2, 3];
    const result = isString(arr);
    t.false(result);
});

test('isString › should return false for a Date object', t => {
    const date = new Date();
    const result = isString(date);
    t.false(result);
});

test('isString › should return false for a RegExp object', t => {
    const regExp = /abc/;
    const result = isString(regExp);
    t.false(result);
});

test('isString › should return true for a string with special characters', t => {
    const stringWithSpecialChars = '!@#$%^&*()';
    const result = isString(stringWithSpecialChars);
    t.true(result);
});

test('isString › should return true for a string with non-ASCII characters', t => {
    const stringWithNonASCII = 'Café 🌟';
    const result = isString(stringWithNonASCII);
    t.true(result);
});

test('isString › should return true for a string with letters and numbers', t => {
    const stringWithNumbers = 'abc123';
    const result = isString(stringWithNumbers);
    t.true(result);
});

test('isString › should return true for a string with leading/trailing spaces', t => {
    const stringWithSpaces = '  Hello, world!  ';
    const result = isString(stringWithSpaces);
    t.true(result);
});

test('isString › should return true for a string with escape sequences', t => {
    const stringWithEscapeSequences = 'Line1\nLine2\tTab';
    const result = isString(stringWithEscapeSequences);
    t.true(result);
});

test('isString › should return true for an empty string represented as ""', t => {
    const emptyString = "";
    const result = isString(emptyString);
    t.true(result);
});

test('isString › should return true for a string with only whitespace characters', t => {
    const stringWithWhitespace = '\t\n  ';
    const result = isString(stringWithWhitespace);
    t.true(result);
});

test('isString › should return true for a string wrapped in quotation marks', t => {
    const stringWithQuotes = '"Hello"';
    const result = isString(stringWithQuotes);
    t.true(result);
});

test('isString › should return false for undefined as a string', t => {
    const undefinedValue = undefined;
    const result = isString(undefinedValue);
    t.false(result);
});

test('isString › should return false for null as a string', t => {
    const nullValue = null;
    const result = isString(nullValue);
    t.false(result);
});