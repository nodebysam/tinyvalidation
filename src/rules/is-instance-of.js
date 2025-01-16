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
 * Validaes whether the value if an instance of a specified class or constructor function.
 * 
 * @param {any} value - The value to validate.
 * @param {boolean} constructor True if the value is an instance of the constructor, false if not.
 */
const isInstance = (value, constructor) => {
    if (value === null || value === undefined) {
        return false;
    }

    if (typeof constructor !== 'function') {
        throw new Error('The second argument must be a constructor function.');
    }

    if (Array.isArray(value) && constructor === Object) {
        return false;
    }

    return value instanceof constructor;
};

module.exports = isInstance;