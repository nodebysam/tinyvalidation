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
 * Validates whether the value is a Date object.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a Date object, false if not.
 */
module.exports = (value) => value instanceof Date && !isNaN(value);