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
 * 
 * @param {string} password - The password to validate.
 * @param {Object} [options={}] - Options to override the default password strength settings.
 * @param {number} [options.minLength=8] - The minimum length for the password (default is 8).
 * @param {number} [options.minLowercase=1] - Minimum number of lowercase letters (default is 1).
 * @param {number} [options.minUppercase=1] - Minimum number of uppercase letters (default is 1).
 * @param {number} [options.minNumbers=1] - Minimum number of numeric characters (default is 1).
 * @param {number} [options.minSpecial=1] - Minimum number of special characters (default is 1).
 * @param {boolean} [options.allowSpaces=false] - Whether spaces are allowed in the password (default is false).
 * @returns {boolean} True if the password meets the strength criteria, false otherwise.
 */
const isStrongPassword = (password, options = {}) => {
    const {
        minLength = 8,
        minLowercase = 1,
        minUppercase = 1,
        minNumbers = 1,
        minSpecial = 1,
        allowSpaces = false
    } = options;

    if (password.length < minLength) {
        return false;
    }

    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const specialCharRegex = /[^a-zA-Z0-9\s]/g;
    const spaceRegex = /\s/g;

    // Check the number of lowercase characters
    const lowercaseCount = (password.match(lowercaseRegex) || []).length;

    if (lowercaseCount < minLowercase) {
        return false;
    }

    // Check the number of uppercase characters
    const uppercaseCount = (password.match(uppercaseRegex) || []).length;

    if (uppercaseCount < minUppercase) {
        return false;
    }

    // Check the number of numbers
    const numberCount = (password.match(numberRegex) || []).length;

    if (numberCount < minNumbers) {
        return false;
    }

    // Check the number of special characters
    const specialCount = (password.match(specialCharRegex) || []).length;
    
    if (specialCount < minSpecial) {
        return false;
    }

    // Check for spaces if not allowed
    if (!allowSpaces && spaceRegex.test(password)) {
        return false;
    }

    // If all checks passed, the password is strong
    return true;
};

module.exports = isStrongPassword;