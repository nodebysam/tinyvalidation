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
 * Validates whether the value is a valid Float.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [options={}] - Options for checking whether value is a Float.
 * @param {number} [options.min] - The minimum value (optional).
 * @param {number} [options.max] - The maximum value (optional).
 * @param {number} [options.precision] - The precision value (optional).
 * @returns {boolean} True if a valid Float value, false if not.
 */
const isFloat = (value, options = {}) => {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }

    const floatValue = parseFloat(value);

    if (isNaN(floatValue) || !/^-?\d+(\.\d+)?$/.test(value.toString())) {
        return false;
    }

    const { min, max, precision } = options;

    // Check the range constraints
    if (min !== undefined && floatValue < min) {
        return false;
    }

    if (max !== undefined && floatValue > max) {
        return false;
    }

    // Check the precision
    if (precision !== undefined) {
        const decimalPart = value.toString().split('.')[1];

        if (decimalPart && decimalPart.length > precision) {
            return false;
        }
    }

    // If we got here, definitely a valid Float value :-)
    return true;
};

module.exports = isFloat;