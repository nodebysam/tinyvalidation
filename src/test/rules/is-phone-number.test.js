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
const isPhoneNumber = require('../../rules/is-phone-number');

test('isPhoneNumber › should return true for valid phone number with leading plus sign', t => {
    const validPhoneNumber = '+123456789012';
    const result = isPhoneNumber(validPhoneNumber);
    t.true(result);  // Should return true for a valid phone number
});

test('isPhoneNumber › should return false for invalid phone number with letters', t => {
    const invalidPhoneNumber = '+1234abc567';
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for a phone number containing letters
});

test('isPhoneNumber › should return false for phone number without leading plus sign', t => {
    const invalidPhoneNumber = '123456789012';
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for a phone number without a leading plus sign
});

test('isPhoneNumber › should return false for phone number with too few digits', t => {
    const invalidPhoneNumber = '+1234';
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for a phone number with too few digits
});

test('isPhoneNumber › should return true for valid phone number with country code', t => {
    const validPhoneNumber = '+441234567890';
    const result = isPhoneNumber(validPhoneNumber);
    t.true(result);  // Should return true for a valid phone number with country code
});

test('isPhoneNumber › should return false for non-string value', t => {
    const invalidPhoneNumber = 123456789012;  // Passing a number instead of string
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for non-string value
});

test('isPhoneNumber › should return false for an empty string', t => {
    const invalidPhoneNumber = '';
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for an empty string
});

test('isPhoneNumber › should return false for phone number with spaces', t => {
    const invalidPhoneNumber = '+123 456 7890';
    const result = isPhoneNumber(invalidPhoneNumber);
    t.false(result);  // Should return false for a phone number with spaces
});