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
 * Validates whether the value is a valid currency format.
 * 
 * Supports the following currencies by default:
 * - Dollar
 * - Pound
 * - Euro
 * - Yen
 * - Indian Rupee
 * - South Korean Won
 * - Nigerian Naira
 * - Vietnamese Dong
 * - Philippine Peso
 * 
 * @param {any} value - The value to validate.
 * @param {string[]} [symbols=["$", "£", "€", "¥", "₹", "₩", "₦", "₫", "₱"]] - Array of valid currency symbols.
 * @returns {boolean} True if the value is a valid currency format, false if not.
 */
const isCurrency = (value, symbols = ["$", "£", "€", "¥", "₹", "₩", "₦", "₫", "₱"]) => {
    if (!value || typeof value !== 'string') {
        return false;
    }

    const escapedSymbols = symbols.map((s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|");

    const currencyRegex = new RegExp(
        `^(-?)(${escapedSymbols})?\\s?(\\d{1,3}(,\\d{3})*|\\d+)(\\.\\d{2})?$`
    );

    return currencyRegex.test(value);
};

module.exports = isCurrency;