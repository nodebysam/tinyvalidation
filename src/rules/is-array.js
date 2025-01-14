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
 * Validates whether the value is an array.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if value is an array, false if it is not.
 */
module.exports = (value) => Array.isArray(value);