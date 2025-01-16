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
 * Validates whether the value is a valid file path.
 * This does NOT validate whether the file exists - just validates that
 * the string represents the correct file path pattern.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a valid file path, false if not.
 */
const isFilePath = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    // First we need to check if we are dealing with the '/' root path
    if (value === '/') {
        return true;
    }

    if (value.includes('./') || value.includes('../') || value.includes('..\\') || value.includes('..')) {
        return false;
    }

    const regex = /^(\/[\w.-]+(?:\/[\w.-]+)*)(\.[a-zA-Z0-9]+)?$/;
    return regex.test(value);
};

module.exports = isFilePath;