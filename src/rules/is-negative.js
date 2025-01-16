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
 * Validates whether the value is negative.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if negative, false if positive (hmm, adds to the "false positive"...LOL!).
 */
const isNegative = (value) => typeof value === 'number' && value < 0;

module.exports = isNegative;