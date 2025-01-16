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
 * Validates whether the value is in a given array or list.
 * 
 * @param {any} value - The value to validate.
 * @param {Array} list - The list or array to check against.
 * @returns {boolean} True if the value is in the list/array, false if not.
 */
const isIn = (value, list) => {
if (!Array.isArray(list)) {
    throw new Error('The second argument must be an array or list.');
}

return list.includes(value);
};

module.exports = isIn;