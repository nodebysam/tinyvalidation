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
 * Validate whether the value if a Fibonacci number.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if the value of a Fibonacci number, false if not.
 */
const isFibonacci = (value) => {
    if (typeof value !== 'number' || value < 0) {
        return false;
    }

    const isPerfectSquare = (n) => Math.sqrt(n) % 1 === 0;

    const n1 = 5 * value * value + 4;
    const n2 = 5 * value * value - 4;

    return isPerfectSquare(n1) || isPerfectSquare(n2);
};

module.exports = isFibonacci;