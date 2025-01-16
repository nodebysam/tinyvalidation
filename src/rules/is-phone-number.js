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
 * Validate whether the value is a phone number.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a phone number, false if not.
 */
const isPhoneNumber = (value) => {
    if (typeof value !== 'string') return false;

    // Regex for validating phone numbers with a leading plus sign and a minimum of 4 digits
    const phoneRegex = /^\+([1-9]{1}[0-9]{4,14})$/;
    return phoneRegex.test(value);
};

module.exports = isPhoneNumber;