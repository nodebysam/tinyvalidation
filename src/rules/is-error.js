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
 * Validates whether the value is an Error type object.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [options={}] - Options for checking if is an error object.
 * @param {string} [options.errorType='Error'] - The error type (default is 'Error').
 * @returns {boolean} True if a valid Error type object, false if not.
 */
const isError = (value, options = {}) => {
    // Check if errorType is null or undefined explicitly
    const errorType = options.errorType;

    // If errorType is null or undefined, return false early
    if (errorType === null || errorType === undefined) {
        return false;
    }

    // Ensure value is an object and is an instance of Error
    if (typeof value !== 'object' || value === null || !(value instanceof Error)) {
        return false;
    }

    // Ensure errorType is a valid string and not empty
    if (typeof errorType !== 'string' || errorType.trim() === '') {
        return false;
    }

    // Compare the constructor name of the error with errorType
    return value.constructor.name === errorType;
};

module.exports = isError;