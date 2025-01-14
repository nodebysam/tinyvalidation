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
const isBeforeDate = require('../../rules/is-before-date');

test('isBeforeDate › should return true for a date before the comparison date', t => {
    const value = new Date('2024-12-30');
    const comparisonDate = new Date('2024-12-31');
    
    const result = isBeforeDate(value, comparisonDate);
    t.true(result);  // Should return true since 2024-12-30 is before 2024-12-31
});

test('isBeforeDate › should return false for a date after the comparison date', t => {
    const value = new Date('2025-01-01');
    const comparisonDate = new Date('2024-12-31');
    
    const result = isBeforeDate(value, comparisonDate);
    t.false(result);  // Should return false since 2025-01-01 is after 2024-12-31
});

test('isBeforeDate › should return false for the same date as the comparison date', t => {
    const value = new Date('2024-12-31');
    const comparisonDate = new Date('2024-12-31');
    
    const result = isBeforeDate(value, comparisonDate);
    t.false(result);  // Should return false since both dates are the same
});

test('isBeforeDate › should return false for non-Date value', t => {
    const value = '2024-12-31';  // Not a Date object
    const comparisonDate = new Date('2024-12-30');
    
    const result = isBeforeDate(value, comparisonDate);
    t.false(result);  // Should return false since value is not a Date object
});

test('isBeforeDate › should return false if comparison date is not a Date object', t => {
    const value = new Date('2024-12-31');
    const comparisonDate = '2024-12-30';  // Not a Date object
    
    const result = isBeforeDate(value, comparisonDate);
    t.false(result);  // Should return false since comparisonDate is not a Date object
});

test('isBeforeDate › should return false for invalid date values', t => {
    const value = new Date('invalid-date');  // Invalid Date
    const comparisonDate = new Date('2024-12-30');
    
    const result = isBeforeDate(value, comparisonDate);
    t.false(result);  // Should return false since value is invalid
});