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
const isEqual = require('../../rules/is-equal');

test('isEqual › should return true for identical primitive values', t => {
    const result = isEqual(42, 42);
    t.true(result);
});

test('isEqual › should return false for different primitive values', t => {
    const result = isEqual(42, 43);
    t.false(result);
});

test('isEqual › should return true for identical objects with same properties', t => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const result = isEqual(obj1, obj2);
    t.true(result);
});

test('isEqual › should return false for objects with different properties', t => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    const result = isEqual(obj1, obj2);
    t.false(result);
});

test('isEqual › should return false for objects with different keys', t => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    const result = isEqual(obj1, obj2);
    t.false(result);
});

test('isEqual › should return true for deep equality of nested objects', t => {
    const obj1 = { a: { b: 2, c: 3 } };
    const obj2 = { a: { b: 2, c: 3 } };
    const result = isEqual(obj1, obj2);
    t.true(result);
});

test('isEqual › should return false for nested objects with different values', t => {
    const obj1 = { a: { b: 2, c: 3 } };
    const obj2 = { a: { b: 2, c: 4 } };
    const result = isEqual(obj1, obj2);
    t.false(result);
});

test('isEqual › should return false for comparing objects with arrays', t => {
    const obj1 = { a: [1, 2, 3] };
    const obj2 = { a: [1, 2, 4] };
    const result = isEqual(obj1, obj2);
    t.false(result);
});

test('isEqual › should return false for null and undefined', t => {
    const result1 = isEqual(null, undefined);
    const result2 = isEqual(undefined, null);
    t.false(result1);
    t.false(result2);
});

test('isEqual › should return true for empty objects', t => {
    const result = isEqual({}, {});
    t.true(result);
});