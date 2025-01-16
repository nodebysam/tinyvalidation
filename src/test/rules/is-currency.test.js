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
const isCurrency = require('../../rules/is-currency');

test('isCurrency › should return true for valid currency formats with common symbols', t => {
    t.true(isCurrency('$123.45'));           // Dollar
    t.true(isCurrency('£1,234.56'));         // Pound
    t.true(isCurrency('€100'));              // Euro
    t.true(isCurrency('¥2000'));             // Yen
    t.true(isCurrency('₹10.50'));            // Indian Rupee
    t.true(isCurrency('₩1,000'));            // Korean Won
    t.true(isCurrency('₦5,000'));            // Nigerian Naira
    t.true(isCurrency('₱7.25'));             // Philippine Peso
    t.true(isCurrency('-€1,000.00'));        // Negative Euro
});

test('isCurrency › should return true for valid currency formats without symbols', t => {
    t.true(isCurrency('123.45'));            // No symbol, decimals
    t.true(isCurrency('1,234.56'));          // Commas and decimals
    t.true(isCurrency('1000'));              // Whole number, no commas
    t.true(isCurrency('-500'));              // Negative number, no symbol
});

test('isCurrency › should return false for invalid currency formats', t => {
    t.false(isCurrency('$123.456'));         // Too many decimal places
    t.false(isCurrency('123.4'));            // Only one decimal place
    t.false(isCurrency('12,34.56'));         // Invalid comma placement
    t.false(isCurrency('$-123.45'));         // Incorrect negative sign placement
    t.false(isCurrency('abc'));              // Non-numeric characters
    t.false(isCurrency('$'));                // Only symbol
    t.false(isCurrency('123.'));             // Trailing decimal
});

test('isCurrency › should return false for invalid input types', t => {
    t.false(isCurrency(null));               // Null input
    t.false(isCurrency(undefined));          // Undefined input
    t.false(isCurrency(12345));              // Numeric input
    t.false(isCurrency([]));                 // Array input
    t.false(isCurrency({}));                 // Object input
});

test('isCurrency › should support custom currency symbols', t => {
    t.true(isCurrency('C$123.45', ['C$']));  // Canadian Dollar
    t.true(isCurrency('₴1000', ['₴']));      // Ukrainian Hryvnia
    t.false(isCurrency('$1000', ['₴']));     // Mismatched symbol
});