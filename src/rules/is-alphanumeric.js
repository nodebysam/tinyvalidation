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
 * Validates whether the value is alphanumeric.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True is alphanumeric, false if not alphanumeric.
 */
module.exports = (value) => {
    if (typeof value !== 'string') {
        return false;
    }
    
    return /^[A-Za-z0-9]+$/.test(value);
};