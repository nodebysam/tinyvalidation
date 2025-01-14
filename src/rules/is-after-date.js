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
 * Validates whether the value is after the comparison date.
 * 
 * @param {any} value - The value to validate.
 * @param {Date} comparisonDate - The comparison Date object.
 * @returns {boolean} True if after the comparison date, false otherwise.
 */
module.exports = (value, comparisonDate) => value instanceof Date && comparisonDate instanceof Date && value > comparisonDate;