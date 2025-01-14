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
 * Validates whether the value is equal to the other.
 * 
 * @param {any} value - The value to validate.
 * @param {any} comparison - The value to compare to.
 * @returns {Boolean} True if equal, false if not.
 */
function isEqual(value, comparison) {
    // If both values are strictly equal, return true
    if (value === comparison) {
        return true;
    }

    // If either value is null or undefined, return false
    if (value == null || comparison == null) {
        return false;
    }

    // If the types of value and comparison are different, return false
    if (typeof value !== typeof comparison) {
        return false;
    }

    // Handle comparison for objects (including arrays)
    if (typeof value === 'object' && typeof comparison === 'object') {
        // If one is an array and the other is not, return false
        if (Array.isArray(value) !== Array.isArray(comparison)) {
            return false;
        }

        // If both are arrays, check their lengths and contents
        if (Array.isArray(value)) {
            if (value.length !== comparison.length) {
                return false;
            }

            for (let i = 0; i < value.length; i++) {
                if (!isEqual(value[i], comparison[i])) {
                    return false;
                }
            }
        } else {
            // If both are objects, check their keys and values
            const keys = Object.keys(value);
            const compKeys = Object.keys(comparison);

            if (keys.length !== compKeys.length) {
                return false;
            }

            for (let key of keys) {
                if (!comparison.hasOwnProperty(key) || !isEqual(value[key], comparison[key])) {
                    return false;
                }
            }
        }

        return true; // Return true if all checks pass for objects/arrays
    }

    // If none of the conditions were met, return false
    return false;
};

module.exports = isEqual;