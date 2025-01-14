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
const isAlphanumeric = require('../../rules/is-alphanumeric');

test('isAlphanumeric › should return true for alphanumeric string', t => {
    const result = isAlphanumeric('hello123');
    t.true(result); // 'hello123' contains only letters and numbers, so it's alphanumeric
});

test('isAlphanumeric › should return false for string with spaces', t => {
    const result = isAlphanumeric('hello world');
    t.false(result); // 'hello world' contains a space, so not alphanumeric
});

test('isAlphanumeric › should return false for string with special characters', t => {
    const result = isAlphanumeric('hello@world');
    t.false(result); // 'hello@world' contains a special character '@', so it's not alphanumeric
});

test('isAlphanumeric › should return false for string with punctuation', t => {
    const result = isAlphanumeric('hello!');
    t.false(result); // 'hello!' contains punctuation, so not alphanumeric
});

test('isAlphanumeric › should return false for empty string', t => {
    const result = isAlphanumeric('');
    t.false(result); // Empty string is not considered alphanumeric
});

test('isAlphanumeric › should return true for uppercase alphanumeric string', t => {
    const result = isAlphanumeric('HELLO123');
    t.true(result); // 'HELLO123' contains only uppercase letters and numbers, so it's alphanumeric
});

test('isAlphanumeric › should return true for mixed-case alphanumeric string', t => {
    const result = isAlphanumeric('Hello123');
    t.true(result); // 'Hello123' contains only letters and numbers, so it's alphanumeric
});

test('isAlphanumeric › should return false for non-string value', t => {
    const result = isAlphanumeric(123);
    t.false(result); // Non-string value should return false
});

test('isAlphanumeric › should return false for string with numbers and special characters', t => {
    const result = isAlphanumeric('hello@123');
    t.false(result); // 'hello@123' contains a special character '@', so it's not alphanumeric
});