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
 * Validates whether a value is a valid number.
 * 
 * @param {any} value - The value to validate.
 * @param {boolean} [allowString=false] - True to allow numeric strings (e.g., "123"), false to only allow numeric type.
 * @returns {boolean} True if a valid number, false if not. 
 */
module.exports = (value, allowString = false) => {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    }

    if (value instanceof Number) {
        return false;
    }

    if (allowString && typeof value === 'string') {
        return !isNaN(Number(value));
    }

    if (value && typeof value.valueOf === 'function') {
        const number = value.valueOf();
        return typeof number === 'number' && !isNaN(number);
    }

    return false;
};