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
 * Validates whether the value meets the minimum length specified.
 * 
 * @param {any} value - The value to validate.
 * @param {number} min - The minium length the value must be.
 * @returns {boolean} True if the value meets the minimum length, false if not. 
 */
const isMinLength = (value, min) => {
    if (min === undefined || min === null) {
        throw new Error('Minimum length must be specified.');
    }

    if (value === null || value === undefined || typeof value !== 'string' && !Array.isArray(value)) {
        return false;
      }

    return value.length >= min;
};

module.exports = isMinLength;