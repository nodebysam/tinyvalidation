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
const isLucky = require('../../rules/is-lucky');

test('should return true for numbers containing the digit 7 (default rule)', t => {
    t.true(isLucky(7)); // Contains 7
    t.false(isLucky(12)); // Does not contain 7
    t.false(isLucky(28)); // Divisible by 7 but does not contain 7
});

test('should return true for prime numbers (default rule)', t => {
    t.true(isLucky(2)); // Prime number
    t.true(isLucky(3)); // Prime number
    t.true(isLucky(5)); // Prime number
    t.false(isLucky(4)); // Not a prime number
});

test('should return true when custom rule is provided and matches', t => {
    const customRule = (num) => num % 5 === 0;
    t.true(isLucky(50, { customRule })); // Matches custom rule
    t.false(isLucky(3, { customRule })); // Does not match custom rule
});

test('should return false when custom rule is provided and does not match', t => {
    const customRule = (num) => num % 5 === 0;
    t.true(isLucky(50, { customRule })); // Custom rule matches
    t.false(isLucky(101, { customRule })); // Does not match custom rule
    t.true(isLucky(150, { customRule })); // Matches custom rule
});

test('should return true for numbers matching both default and custom rules', t => {
    const customRule = (num) => num % 5 === 0;
    t.true(isLucky(35, { customRule })); 
    t.true(isLucky(70, { customRule }));
    t.true(isLucky(10, { customRule }));
});