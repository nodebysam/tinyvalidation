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
 * Validate whether the value is valid JSON.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if valid JSON, false if invalid JSON.
 */
module.exports = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
};