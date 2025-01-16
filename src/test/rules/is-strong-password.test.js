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
const isStrongPassword = require('../../rules/is-strong-password');

test('isStrongPassword › should return true for a strong password with default settings', t => {
    t.true(isStrongPassword('StrongPassword123!'));
});

test('isStrongPassword › should return false for a password without uppercase letters', t => {
    t.false(isStrongPassword('weakpassword123!', {
        minUppercase: 1
    }));
});

test('isStrongPassword › should return false for a password without numbers', t => {
    t.false(isStrongPassword('StrongPassword!', {
        minNumbers: 1
    }));
});

test('isStrongPassword › should return false for a password without special characters', t => {
    t.false(isStrongPassword('StrongPassword123', {
        minSpecial: 1
    }));
});

test('isStrongPassword › should return false for a password too short', t => {
    t.false(isStrongPassword('Short1!', {
        minLength: 8
    }));
});

test('isStrongPassword › should return true for a password with spaces when allowed', t => {
    t.true(isStrongPassword('Strong Pass 123!', {
        allowSpaces: true
    }));
});

test('isStrongPassword › should return false for a password with spaces when not allowed', t => {
    t.false(isStrongPassword('Strong Pass 123!', {
        allowSpaces: false
    }));
});

test('isStrongPassword › should return false for a password that fails minimum occurrences in characters list', t => {
    t.false(isStrongPassword('Hello@Hello!', {
        minimumOccurences: 3,
        charactersList: ['@', '!']
    }));
});