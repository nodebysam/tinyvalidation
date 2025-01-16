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
const isError = require('../../rules/is-error');

test('isError › should return true for valid Error type', t => {
    // Valid Error instance with the default errorType 'Error'
    t.true(isError(new Error(), { errorType: 'Error' }));

    // Valid TypeError instance with the specified errorType 'TypeError'
    t.true(isError(new TypeError(), { errorType: 'TypeError' }));

    // Valid SyntaxError instance with the specified errorType 'SyntaxError'
    t.true(isError(new SyntaxError(), { errorType: 'SyntaxError' }));
});

test('isError › should return false for invalid Error instance', t => {
    // Not an instance of Error (plain object)
    t.false(isError({}, { errorType: 'Error' }));

    // Not an instance of Error (null value)
    t.false(isError(null, { errorType: 'Error' }));

    // Not an instance of Error (undefined value)
    t.false(isError(undefined, { errorType: 'Error' }));

    // Not an instance of Error (string)
    t.false(isError("some string", { errorType: 'Error' }));
});

test('isError › should return false for mismatched error types', t => {
    // Error instance does not match the expected 'TypeError'
    t.false(isError(new Error(), { errorType: 'TypeError' }));

    // Error instance does not match the expected 'RangeError'
    t.false(isError(new Error(), { errorType: 'RangeError' }));

    // TypeError instance does not match the expected 'Error'
    t.false(isError(new TypeError(), { errorType: 'Error' }));
});

test('isError › should return false for invalid type check when errorType is null or undefined', t => {
    // Invalid type (null)
    t.false(isError(new Error(), { errorType: null }));

    // Invalid type (undefined)
    t.false(isError(new Error(), { errorType: undefined }));

    // Invalid type (empty string)
    t.false(isError(new Error(), { errorType: '' }));

    // Invalid type (whitespace string)
    t.false(isError(new Error(), { errorType: ' ' }));
});

test('isError › should return false for invalid errorType format', t => {
    // Invalid type (number)
    t.false(isError(new Error(), { errorType: 123 }));

    // Invalid type (object)
    t.false(isError(new Error(), { errorType: {} }));

    // Invalid type (array)
    t.false(isError(new Error(), { errorType: [] }));
});