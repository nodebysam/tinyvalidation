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
 * Validates whether the value is an URL web address.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if an URL, false if not an URL.
 */
module.exports = (value) => {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}(:\d+)?(\/[^\s]*)?$/;
    return urlRegex.test(value);
};