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
const isNotIn = require('../../rules/is-not-in');

test('isNotIn › should return true when value is not in the list', t => {
    t.true(isNotIn(5, [1, 2, 3, 4]));
    t.true(isNotIn('apple', ['banana', 'orange', 'pear']));
    t.true(isNotIn('grape', ['apple', 'banana', 'orange']));
    t.true(isNotIn(100, [200, 300, 400]));
});

test('isNotIn › should return false when value is in the list', t => {
    t.false(isNotIn(3, [1, 2, 3, 4]));
    t.false(isNotIn('apple', ['apple', 'banana', 'orange']));
    t.false(isNotIn('banana', ['apple', 'banana', 'orange']));
    t.false(isNotIn(200, [100, 200, 300]));
});

test('isNotIn › should throw an error if the second argument is not an array', t => {
    const error1 = t.throws(() => {
        isNotIn(5, null);
    });
    t.is(error1.message, 'The second argument must be an array or list.');

    const error2 = t.throws(() => {
        isNotIn('apple', undefined);
    });
    t.is(error2.message, 'The second argument must be an array or list.');

    const error3 = t.throws(() => {
        isNotIn(5, {});
    });
    t.is(error3.message, 'The second argument must be an array or list.');
});

test('isNotIn › should handle empty lists correctly', t => {
    t.true(isNotIn(5, [])); // Any value is not in an empty list
    t.true(isNotIn('apple', [])); // Any value is not in an empty list
});

test('isNotIn › should return true when the list is a list of different types', t => {
    t.true(isNotIn(5, ['apple', 'banana', true, null, {}]));
    t.true(isNotIn('apple', [1, 2, 3, 4, 5, true, false, null]));
});

test('isNotIn › should return false when value is the same as one in a list of mixed types', t => {
    t.false(isNotIn(5, ['apple', 'banana', 5, {}])); // 5 is in the list
    t.false(isNotIn('apple', [1, 2, 3, 'apple', {}])); // 'apple' is in the list
});

test('isNotIn › should return true for non-strict type matching', t => {
    t.true(isNotIn(1, ['1']));  // 1 (number) is not equal to '1' (string)
    t.true(isNotIn('2', [2]));  // '2' (string) is not equal to 2 (number)
});

test('isNotIn › should handle mixed value types properly', t => {
    t.true(isNotIn('apple', [1, 2, 3, 4]));  // String is not in number list
    t.false(isNotIn('banana', ['banana', 'orange', 'apple']));  // String is in the list
});