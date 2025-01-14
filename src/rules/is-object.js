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
 * Validates whether a value is an object.
 * 
 * @param {any} value - The value to validate.
 * @param {boolean} [allowSpecialObjects=false] - True to allow special objects (e.g., Date, RegEx, etc), false for only simple objects.
 * @returns {boolean} True if a valid object, false otherwise.
 */
module.exports = (value, allowSpecialObjects = false) => {
    if (value === null || value === undefined || Array.isArray(value) || typeof value !== 'object') {
        return false;
    }

    if (allowSpecialObjects) {
        if (Object.getPrototypeOf(value) !== null) {
            return true;
        }
    }

    return Object.getPrototypeOf(value) === null || Object.getPrototypeOf(value) === Object.prototype;
};