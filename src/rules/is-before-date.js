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
 * Validates whether the value is before the comparison Date.
 * 
 * @param {any} value - The value to validate.
 * @param {Date} comparisonDate - The comparison Date object.
 * @returns {boolean} True if value is before comparsion date, false if not.
 */
const isBeforeDate = (value, comparisonDate) => value instanceof Date && comparisonDate instanceof Date && value < comparisonDate;

module.exports = isBeforeDate;