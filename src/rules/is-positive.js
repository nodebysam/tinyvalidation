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
 * Validates whether the value is positive.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if positive, false if negative.
 */
module.exports = (value) => typeof value === 'number' && isFinite(value) && value > 0;