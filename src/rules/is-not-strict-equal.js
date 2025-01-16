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
 * Validates whether the values are NOT strictly equal.
 * 
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if both values are not stricly equal, false if they are.
 */
const isNotStrictEqual = (value1, value2) => {
    return value1 !== value2;
};

module.exports = isNotStrictEqual;