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
 * Validates whether the value is of certain length.
 * 
 * @param {any} value - The value to validate.
 * @param {number} expectedLength - The expected length.
 * @returns {boolean} True if length is the given length, false if not.
 */
const isLength = (value, expectedLength) => {
    if (value == null) {
        return false;
    }

    if (typeof value.length !== 'number') {
        return false;
    }

    return value.length === expectedLength;
};

module.exports = isLength;