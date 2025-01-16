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
  * Validates whether the value meets or is less than the specified maximum length.
  * 
  * @param {any} value - The value to validate.
  * @param {number} max - The maximum length of the value.
  * @returns {boolean} True if the value meets or is less than the specified maximum length, false otherwise.
  */
const isMaxLength = (value, max) => {
    if (max === undefined || max === null) {
        throw new Error('max (maximum) value parameter must be specified.');
    }

    if (value === null || value === undefined || typeof value !== 'string' && !Array.isArray(value)) {
    return false;
    }

    return value.length <= max;
 };

 module.exports = isMaxLength;