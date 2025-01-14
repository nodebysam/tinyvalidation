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
const isValidJSON = require('../../rules/is-valid-json');

test('isValidJSON - should return true for valid JSON string', t => {
    const validJSON = '{"name":"John", "age":30, "city":"New York"}';
    const result = isValidJSON(validJSON);
    t.true(result, 'Valid JSON string should return true');
});

test('isValidJSON - should return false for invalid JSON string', t => {
    const invalidJSON = '{"name":"John", "age":30, "city": New York}';
    const result = isValidJSON(invalidJSON);
    t.false(result, 'Invalid JSON string should return false');
});

test('isValidJSON - should return false for non-string value', t => {
    const nonStringValue = 12345;
    const result = isValidJSON(nonStringValue);
    t.false(result, 'Non-string value should return false');
});

test('isValidJSON - should return false for empty string', t => {
    const emptyString = '';
    const result = isValidJSON(emptyString);
    t.false(result, 'Empty string should return false');
});

test('isValidJSON - should return true for valid empty JSON object "{}"', t => {
    const emptyObjectJSON = '{}';
    const result = isValidJSON(emptyObjectJSON);
    t.true(result, 'Valid empty JSON object should return true');
});

test('isValidJSON - should return true for valid JSON array "[]"', t => {
    const emptyArrayJSON = '[]';
    const result = isValidJSON(emptyArrayJSON);
    t.true(result, 'Valid empty JSON array should return true');
});

test('isValidJSON - should return false for JSON with trailing comma', t => {
    const invalidJSON = '{"name":"John", "age":30,}';
    const result = isValidJSON(invalidJSON);
    t.false(result, 'JSON with trailing comma should return false');
});