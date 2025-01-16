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
const hasNumber = require('../../rules/has-number');

/**
 * Basic validation tests
 */
test('hasNumber › should return true for a string containing numbers', t => {
    t.true(hasNumber('abc123'));
    t.true(hasNumber('1a2b3c'));
});

test('hasNumber › should return false for a string without numbers', t => {
    t.false(hasNumber('abcdef'));
    t.false(hasNumber('hello world'));
});

test('hasNumber › should return true for a number input', t => {
    t.true(hasNumber(123));
    t.true(hasNumber(0));
    t.true(hasNumber(-5));
});

test('hasNumber › should return false for non-numeric inputs', t => {
    t.false(hasNumber(''));
    t.false(hasNumber([]));
    t.false(hasNumber({}));
    t.false(hasNumber(null));
    t.false(hasNumber(undefined));
});

/**
 * Array validation tests
 */
test('hasNumber › should return true for an array containing numbers', t => {
    t.true(hasNumber([1, 'a', 2]));
    t.true(hasNumber(['a', 'b', 3, 4]));
});

test('hasNumber › should return false for an array without numbers', t => {
    t.false(hasNumber(['a', 'b', 'c']));
    t.false(hasNumber([true, false, null]));
});

/**
 * Object validation tests
 */
test('hasNumber › should return true for an object containing numbers', t => {
    t.true(hasNumber({ a: 1, b: 'c', c: 2 }));
    t.true(hasNumber({ key1: 'value1', key2: 3 }));
});

test('hasNumber › should return false for an object without numbers', t => {
    t.false(hasNumber({ a: 'b', c: 'd' }));
    t.false(hasNumber({}));
});

/**
 * Validation with minimum and maximum occurrences
 */
test('hasNumber › should return true when valid numbers meet the minimum occurrences', t => {
    t.true(hasNumber('112233', { miniumOccurences: 3 }));
    t.true(hasNumber([1, 1, 1, 2], { miniumOccurences: 3 }));
});

test('hasNumber › should return false when valid numbers do not meet the minimum occurrences', t => {
    t.false(hasNumber('112233', { miniumOccurences: 7 }));
    t.false(hasNumber([1, 2, 3], { miniumOccurences: 4 }));
});

test('hasNumber › should return true when valid numbers are within the maximum occurrences', t => {
    t.true(hasNumber('112233', { maximumOccurences: 6 }));
    t.true(hasNumber([1, 2, 3, 1, 2], { maximumOccurences: 5 }));
});

test('hasNumber › should return false when valid numbers exceed the maximum occurrences', t => {
    t.false(hasNumber('112233', { maximumOccurences: 2 }));
    t.false(hasNumber([1, 2, 3, 1, 2, 3], { maximumOccurences: 4 }));
});

/**
 * Validation with numbersList
 */
test('hasNumber › should return true when specific numbers from numbersList are found', t => {
    t.true(hasNumber('12345', { numbersList: [1, 3, 5] }));
    t.true(hasNumber([4, 5, 6], { numbersList: [5, 6] }));
});

test('hasNumber › should return false when specific numbers from numbersList are not found', t => {
    t.false(hasNumber('abc123', { numbersList: [4, 5, 6] }));
    t.false(hasNumber([7, 8, 9], { numbersList: [1, 2, 3] }));
});

test('hasNumber › should return true when numbersList conditions and minimum occurrences are met', t => {
    t.true(hasNumber('112233', { miniumOccurences: 2, numbersList: [1, 2] }));
    t.true(hasNumber([1, 1, 2, 3], { miniumOccurences: 2, numbersList: [1] }));
});

test('hasNumber › should return false when numbersList conditions or minimum occurrences are not met', t => {
    t.false(hasNumber('112233', { miniumOccurences: 3, numbersList: [1, 2] }));
    t.false(hasNumber([1, 2, 3], { miniumOccurences: 2, numbersList: [4] }));
});

test('hasNumber › should return false when numbersList conditions or maximum occurrences are exceeded', t => {
    t.false(hasNumber('111222', { maximumOccurences: 2, numbersList: [1] }));
    t.false(hasNumber([1, 2, 3, 1, 1], { maximumOccurences: 2, numbersList: [1] }));
});

/**
 * Edge cases
 */
test('hasNumber › should handle edge cases correctly', t => {
    t.false(hasNumber(false));
    t.false(hasNumber(true));
    t.false(hasNumber(Symbol('123')));
    t.false(hasNumber(() => {}));
    t.true(hasNumber('0001'));
});