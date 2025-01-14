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
const isAlpha = require('../../rules/is-alpha');

test('isAlpha › should return true for alphabetic string', t => {
    const result = isAlpha('hello');
    t.true(result); // 'hello' is alphabetic
});

test('isAlpha › should return false for string with spaces', t => {
    const result = isAlpha('hello world');
    t.false(result); // 'hello world' contains spaces, so not alphabetic
});

test('isAlpha › should return false for string with numbers', t => {
    const result = isAlpha('hello123');
    t.false(result); // 'hello123' contains numbers, so not alphabetic
});

test('isAlpha › should return false for string with special characters', t => {
    const result = isAlpha('hello@world');
    t.false(result); // 'hello@world' contains a special character, so not alphabetic
});

test('isAlpha › should return false for empty string', t => {
    const result = isAlpha('');
    t.false(result); // Empty string is not considered alphabetic
});

test('isAlpha › should return true for uppercase alphabetic string', t => {
    const result = isAlpha('HELLO');
    t.true(result); // 'HELLO' is alphabetic
});

test('isAlpha › should return true for mixed-case alphabetic string', t => {
    const result = isAlpha('Hello');
    t.true(result); // 'Hello' is alphabetic
});

test('isAlpha › should return false for non-string value', t => {
    const result = isAlpha(123);
    t.false(result); // Non-string value should return false
});

test('isAlpha › should return false for string with punctuation', t => {
    const result = isAlpha('hello!');
    t.false(result); // 'hello!' contains punctuation, so not alphabetic
});