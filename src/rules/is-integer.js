/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

/**
 * Validates whether the value is an Integer.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True is a valid Integer, false if not.
 */
const isInteger = (value) => Number.isInteger(value);

module.exports = isInteger;