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
 * Strictly compares two values for equality.
 * Returns true if both values are of the same type and value, false otherwise.
 * 
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if both values are strictly equal, false if not.
 */
const isStrictEqual = (value1, value2) => {
    return value1 === value2;
};

module.exports = isStrictEqual;