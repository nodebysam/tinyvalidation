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
 * Validates whether two values are not equal.
 * 
 * @param {any} value1 - The first value to compare.
 * @param {any} value2 - The second value to compare.
 * @returns {boolean} True if the values are not equal, false if they are.
 */
const isNotEqual = (value1, value2) => {
    if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
        return value1 !== value2;
    }

    if (value1 == value2) {
        return false;
    }

    return true;
};

module.exports = isNotEqual;