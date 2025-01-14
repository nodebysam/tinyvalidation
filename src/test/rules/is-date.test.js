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
const isDate = require('../../rules/is-date');

test('isDate › should return true for a valid Date object', t => {
    const date = new Date();
    const result = isDate(date);
    t.true(result);
});

test('isDate › should return true for a valid Date object with a specific time', t => {
    const specificDate = new Date('2023-01-01T12:00:00Z');
    const result = isDate(specificDate);
    t.true(result);
});

test('isDate › should return true for a valid Date object created with a timestamp', t => {
    const timestampDate = new Date(1672531200000); // Equivalent to '2023-01-01T00:00:00Z'
    const result = isDate(timestampDate);
    t.true(result);
});

test('isDate › should return true for a Date object with a negative timestamp', t => {
    const negativeTimestampDate = new Date(-1672531200000); // Before Unix epoch
    const result = isDate(negativeTimestampDate);
    t.true(result);
});

test('isDate › should return false for null', t => {
    const result = isDate(null);
    t.false(result);
});

test('isDate › should return false for undefined', t => {
    const result = isDate(undefined);
    t.false(result);
});

test('isDate › should return false for a number', t => {
    const number = 123456789;
    const result = isDate(number);
    t.false(result);
});

test('isDate › should return false for a string representing a date', t => {
    const dateString = '2023-01-01';
    const result = isDate(dateString);
    t.false(result);
});

test('isDate › should return false for an invalid Date object', t => {
    const invalidDate = new Date('invalid date');
    const result = isDate(invalidDate);
    t.false(result);
});

test('isDate › should return false for an array', t => {
    const array = [new Date()];
    const result = isDate(array);
    t.false(result);
});

test('isDate › should return false for an object with a Date property', t => {
    const objectWithDate = { date: new Date() };
    const result = isDate(objectWithDate);
    t.false(result);
});

test('isDate › should return false for a plain object', t => {
    const plainObject = { year: 2023, month: 1, day: 1 };
    const result = isDate(plainObject);
    t.false(result);
});

test('isDate › should return false for a function', t => {
    const func = () => new Date();
    const result = isDate(func);
    t.false(result);
});

test('isDate › should return false for an empty object', t => {
    const emptyObject = {};
    const result = isDate(emptyObject);
    t.false(result);
});

test('isDate › should return false for a RegExp object', t => {
    const regExp = /2023-01-01/;
    const result = isDate(regExp);
    t.false(result);
});

test('isDate › should return false for a boolean value', t => {
    const booleanValue = true;
    const result = isDate(booleanValue);
    t.false(result);
});

test('isDate › should return true for a Date object representing the Unix epoch', t => {
    const unixEpoch = new Date(0);
    const result = isDate(unixEpoch);
    t.true(result);
});

test('isDate › should return true for a Date object representing the maximum timestamp', t => {
    const maxDate = new Date(8640000000000000); // Max valid Date timestamp
    const result = isDate(maxDate);
    t.true(result);
});

test('isDate › should return true for a Date object representing the minimum timestamp', t => {
    const minDate = new Date(-8640000000000000); // Min valid Date timestamp
    const result = isDate(minDate);
    t.true(result);
});

test('isDate › should return false for a string with invalid date format', t => {
    const invalidDateString = 'not-a-date';
    const result = isDate(invalidDateString);
    t.false(result);
});

test('isDate › should return false for an ISO date string', t => {
    const isoDateString = '2023-01-01T12:00:00Z';
    const result = isDate(isoDateString);
    t.false(result);
});

test('isDate › should return false for a Symbol', t => {
    const symbol = Symbol('2023-01-01');
    const result = isDate(symbol);
    t.false(result);
});