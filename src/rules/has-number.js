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
 * Validates whether the value contains a number.
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [options=[]] - Options for checking if the value has a number.
 * @param {number} [options.miniumOccurences=1] - The minimum occurences of a number (or each number if using options.numbersList) (default is 1).
 * @param {number} [options.maximumOccurences=Infinity] - The maximum occurences of a number (or each number if using options.numbersList) (default is Infinity).
 * @param {number[]} [options.numbersList=null] - An array of numbers to check for (default is null).
 * @returns {boolean} True if the value contains a number, false if not. 
 */
const hasNumber = (value, options = {}) => {
    const { miniumOccurences = 1, maximumOccurences = Infinity, numbersList = null } = options;

    let normalizedValue;

    if (typeof value === 'number') {
        normalizedValue = [value];
    } else if (typeof value === 'string') {
        normalizedValue = value.split('').map(char => (!isNaN(char) && char.trim() !== '' ? Number(char) : null)).filter(char => char !== null);
    } else if (Array.isArray(value)) {
        normalizedValue = value.filter(item => typeof item === 'number');
    } else if (typeof value === 'object' && value !== null) {
        normalizedValue = Object.values(value).filter(item => typeof item === 'number');
    } else {
        return false;
    }

    const validNumbers = normalizedValue.filter(item => typeof item === 'number');

    if (numbersList && Array.isArray(numbersList)) {
        const map = {};
        const uniqueNumbersList = [...new Set(numbersList)];

        uniqueNumbersList.forEach(num => (map[num] = 0));

        validNumbers.forEach(num => {
            if (map[num] !== undefined) {
                map[num]++;
            }
        });

        return Object.entries(map).every(([key, count]) => count >= miniumOccurences && count <= maximumOccurences);
    }

    return validNumbers.length >= miniumOccurences && validNumbers.length <= maximumOccurences;
};

module.exports = hasNumber;