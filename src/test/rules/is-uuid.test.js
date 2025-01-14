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
const isUUID = require('../../rules/is-uuid');

test('isUUID › should return true for a valid UUID v4', t => {
    const result = isUUID('123e4567-e89b-12d3-a456-426614174000');
    t.true(result);
});

test('isUUID › should return true for a valid UUID v1', t => {
    const result = isUUID('550e8400-e29b-41d4-a716-446655440000');
    t.true(result);
});

test('isUUID › should return true for a valid UUID with uppercase letters', t => {
    const result = isUUID('123E4567-E89B-12D3-A456-426614174000');
    t.true(result);
});

test('isUUID › should return false for an invalid UUID with incorrect length', t => {
    const result = isUUID('123e4567-e89b-12d3-a456-42661417');
    t.false(result);
});

test('isUUID › should return false for a UUID with invalid characters', t => {
    const result = isUUID('123e4567-e89b-12d3-a456-4266141740xx');
    t.false(result);
});

test('isUUID › should return false for a non-UUID string', t => {
    const result = isUUID('not-a-uuid');
    t.false(result);
});

test('isUUID › should return false for a number', t => {
    const result = isUUID(123456);
    t.false(result);
});

test('isUUID › should return false for a string with spaces', t => {
    const result = isUUID('123e4567-e89b-12d3-a 456-426614174000');
    t.false(result);
});

test('isUUID › should return false for an empty string', t => {
    const result = isUUID('');
    t.false(result);
});

test('isUUID › should return false for null', t => {
    const result = isUUID(null);
    t.false(result);
});

test('isUUID › should return false for undefined', t => {
    const result = isUUID(undefined);
    t.false(result);
});