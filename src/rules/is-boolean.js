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
 * Validates whether the value is boolean.
 * 
 * @param {any} value - The value to validate.
 * @param {boolean} [allowString=false] - True to allow booleans as a string (e.g., "true", "false"), false not to.
 * @returns {boolean} True if a valid boolean value, false if not.
 */
module.exports = (value, allowString = false) => {
    if (typeof value === 'boolean') {
        return true;
    }

    if (allowString && typeof value === 'string' && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false' || value === '1' || value === '0')) {
        return true;
    }

    return false;
};