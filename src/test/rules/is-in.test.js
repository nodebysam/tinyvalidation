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
const isIn = require('../../rules/is-in');

test('isIn › should return true if value is in the list', t => {
    t.true(isIn(5, [1, 2, 3, 4, 5]));  // Value exists in list
    t.true(isIn('apple', ['banana', 'apple', 'cherry']));  // String value exists
    t.true(isIn(0, [0, 1, 2, 3]));  // Zero value exists in list
    t.true(isIn('test', ['test']));  // Single value list
    t.true(isIn(true, [true, false]));  // Boolean value exists
});

test('isIn › should return false if value is not in the list', t => {
    t.false(isIn(6, [1, 2, 3, 4, 5]));  // Value doesn't exist in list
    t.false(isIn('orange', ['banana', 'apple', 'cherry']));  // String not found
    t.false(isIn(7, [1, 2, 3, 4, 5]));  // Number not found
    t.false(isIn(false, [true, 1, 2]));  // Boolean value not found
});

test('isIn › should return false for empty list', t => {
    t.false(isIn(5, []));  // Any value against empty list should return false
    t.false(isIn('apple', []));  // Empty list should return false regardless of value
});

test('isIn › should throw an error for null or undefined list', t => {
    const error1 = t.throws(() => {
        isIn(5, null);  // Null list should throw an error
    });
    t.is(error1.message, 'The second argument must be an array or list.');

    const error2 = t.throws(() => {
        isIn('apple', undefined);  // Undefined list should throw an error
    });
    t.is(error2.message, 'The second argument must be an array or list.');
});

test('isIn › should throw an error if the second argument is not an array', t => {
    const error = t.throws(() => {
        isIn(5, 'not an array');
    });
    t.is(error.message, 'The second argument must be an array or list.');

    const error2 = t.throws(() => {
        isIn('apple', 123);
    });
    t.is(error2.message, 'The second argument must be an array or list.');

    const error3 = t.throws(() => {
        isIn(3, { key: 'value' });
    });
    t.is(error3.message, 'The second argument must be an array or list.');
});

test('isIn › should work for different data types in the list', t => {
    t.true(isIn('hello', ['hello', 1, true, null]));  // String value in mixed list
    t.true(isIn(1, ['hello', 1, true, null]));  // Number value in mixed list
    t.true(isIn(true, ['hello', 1, true, null]));  // Boolean value in mixed list
    t.true(isIn(null, ['hello', 1, true, null]));  // Null value in mixed list
    t.false(isIn(undefined, ['hello', 1, true, null]));  // Undefined not in mixed list
});

test('isIn › should handle NaN comparison correctly', t => {
    t.true(isIn(NaN, [NaN]));  // NaN compared with NaN
    t.false(isIn(NaN, [1, 2, 3]));  // NaN not in number list
});