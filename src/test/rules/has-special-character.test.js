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
const hasSpecialCharacter = require('../../rules/has-special-character');

test('hasSpecialCharacter › should return false for a string without special characters', t => {
    t.false(hasSpecialCharacter('Hello123'));
    t.false(hasSpecialCharacter('abcdefABC'));
});

test('hasSpecialCharacter › should return true for a string containing exactly one special character', t => {
    t.true(hasSpecialCharacter('Hello@World'));
    t.true(hasSpecialCharacter('abc!def'));
});

test('hasSpecialCharacter › should return true when the number of special characters is within the allowed range', t => {
    t.true(hasSpecialCharacter('Hello@World!$', { minimumOccurences: 1, maximumOccurences: 3 }));
    t.true(hasSpecialCharacter('abc@abc@abc!', { minimumOccurences: 2, maximumOccurences: 5 }));
});

test('hasSpecialCharacter › should return false when the number of special characters exceeds the maximum allowed occurrences', t => {
    t.false(hasSpecialCharacter('Hello@World!$@$', { minimumOccurences: 1, maximumOccurences: 3 }));
    t.false(hasSpecialCharacter('abc@abc@abc@!@!', { minimumOccurences: 2, maximumOccurences: 3 }));
});

test('hasSpecialCharacter › should return true when the number of special characters matches the required occurrences', t => {
    t.true(hasSpecialCharacter('Hello@World!$', { minimumOccurences: 1, maximumOccurences: 3 }));
    t.true(hasSpecialCharacter('abc@abc@abc!', { minimumOccurences: 2, maximumOccurences: 3 }));
});

test('hasSpecialCharacter › should return true for a string with non-alphanumeric characters', t => {
    t.true(hasSpecialCharacter('Hello@!World#'));
    t.true(hasSpecialCharacter('abc$def&*'));
});

test('hasSpecialCharacter › should return true for a string with spaces and special characters', t => {
    t.true(hasSpecialCharacter('Hello @ World!  '));
    t.true(hasSpecialCharacter('abc $ def & *  '));
});

test('hasSpecialCharacter › should return true for an array of strings with special characters', t => {
    t.true(hasSpecialCharacter(['abc@abc', 'hello#world'], { minimumOccurences: 1 }));
    t.false(hasSpecialCharacter(['abcdef', 'ghijkl'], { minimumOccurences: 1 }));
});

test('hasSpecialCharacter › should return false for an empty string', t => {
    t.false(hasSpecialCharacter(''));
});

test('hasSpecialCharacter › should return false for a number input', t => {
    t.false(hasSpecialCharacter(12345));
    t.false(hasSpecialCharacter(0));
});

test('hasSpecialCharacter › should return false for a null input', t => {
    t.false(hasSpecialCharacter(null));
});

test('hasSpecialCharacter › should return false for a boolean input', t => {
    t.false(hasSpecialCharacter(true));
    t.false(hasSpecialCharacter(false));
});

test('hasSpecialCharacter › should return true for a string with repeated characters from the charactersList', t => {
    t.true(hasSpecialCharacter('Hello@Hello!', { minimumOccurences: 1, maximumOccurences: 5, charactersList: ['@', '!'] }));
    t.true(hasSpecialCharacter('abc@abc@abc@!', { minimumOccurences: 1, maximumOccurences: 3, charactersList: ['@', '!'] }));
});

test('hasSpecialCharacter › should return false for a string with characters not in the charactersList', t => {
    t.false(hasSpecialCharacter('Hello$World', { minimumOccurences: 1, maximumOccurences: 2, charactersList: ['@', '#'] }));
});

test('hasSpecialCharacter › should return true for a string matching charactersList condition', t => {
    t.true(hasSpecialCharacter('Hello@World!', { minimumOccurences: 1, charactersList: ['@', '!'] }));
    t.false(hasSpecialCharacter('Hello$World', { minimumOccurences: 1, charactersList: ['@', '!'] }));
});