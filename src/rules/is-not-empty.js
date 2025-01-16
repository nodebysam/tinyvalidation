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
 * Validates whether a value is not empty.
 * 
 * @param {any} value - The value to validate.
 * @param {boolean} [treatZeroAsEmpty=false] - True to treat '0' as empty, false to not treat '0' as empty.
 * @returns {boolean} True if the value is not empty, false if empty.
 */
const isNotEmpty = (value, treatZeroAsEmpty = false) => {
    if (value === null || value === undefined) {
        return false;
    }

    if (treatZeroAsEmpty && value === 0) {
        return false;
    }

    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length > 0;
    }

    if (value instanceof Date || value instanceof RegExp) {
        return true;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return true;
};

module.exports = isNotEmpty;