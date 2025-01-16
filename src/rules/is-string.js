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
 * Validates whether the value is a string.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a valid string, false if not a valid string.
 */
const isString = (value) => typeof value === 'string';

module.exports = isString;