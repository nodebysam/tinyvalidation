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
 * Validates whether the value contains a special character or if it contains a
 * set amount of occurences.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [options={}] - Options for checking if the value contains special characters.
 * @param {number} [options.minimumOccurences=1] - The minimum occurences of a special character (or each character if using options.charactersList) (default is 1).
 * @param {number} [options.maximumOccurences=Infinity] - The maximum occurences of a special character (or each character if using options.charactersList) (default is Infitity).
 * @param {string[]} [options.charactersList=null] - An array of special characters to check for (default is null).
 * @returns {boolean} True if value contains the occurences of either a special character or a list of characters, false is not.
 */
const hasSpecialCharacter = (value, options = {}) => {
    const { minimumOccurences = 1, maximumOccurences = Infinity, charactersList = null } = options;

    let normalizedValue;

    if (!value || typeof value === 'number') {
        return false;
    }

    if (typeof value === 'string') {
        normalizedValue = value.split('');
    } else if (Array.isArray(value)) {
        normalizedValue = value.filter(char => typeof char === 'string');
    } else if (typeof value === 'object' && value !== null) {
        normalizedValue = Object.values(value).filter(char => typeof char === 'string');
    } else {
        return false;
    }

    const specialCharRegex = /[^a-zA-Z0-9\s]/;

    if (charactersList && Array.isArray(charactersList)) {
        const map = {};

        charactersList.forEach(char => {
            map[char] = 0;
        });

        normalizedValue.forEach(char => {
            if (map[char] !== undefined) {
                map[char]++;
            }
        });

        return Object.entries(map).every(([key, count]) => count >= minimumOccurences && count <= maximumOccurences);
    }

    const specialCharCount = normalizedValue.filter(char => specialCharRegex.test(char)).length;

    return specialCharCount >= minimumOccurences && specialCharCount <= maximumOccurences;
};

module.exports = hasSpecialCharacter;