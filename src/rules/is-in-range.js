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
 * Validates whether the value is in the set range.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} range - The range options.
 * @param {number} [min=undefined] - The minimum number for the range.
 * @param {number} [max=undefined] - The maximum number for the range.
 * @returns {boolean} True if is in range, false if not in range.
 */
module.exports = (value, min = undefined, max = undefined) => {
    if (typeof value !== 'number') {
        return false;
    }
    
    // If neither min nor max is provided, return false (no range)
    if (min === undefined && max === undefined) {
        return true;
    }

    // If min or max is undefined, set it to -Infinity or Infinity
    min = min !== undefined ? min : -Infinity;
    max = max !== undefined ? max : Infinity;

    return value >= min && value <= max;
};