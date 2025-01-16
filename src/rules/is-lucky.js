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
 * Validate whether the number is "lucky".
 * 
 * A number is "lucky" if it:
 * - Contains the digit 7 (default)
 * - Is divisible by 7 (default)
 * - Is a prime number (default)
 * - Meets user-defined "lucky" criteria (configurable)
 * 
 * @param {any} value - The value to validate.
 * @param {Object} [config={}] - Configuration object for custom rules.
 * @param {function} [config.customRule] - A function taking the number and returning true if it's "lucky".
 * @returns {boolean} True if the value is "lucky", false otherwise.
 */
const isLucky = (value, config = {}) => {
    if (typeof value !== 'number' || value < 0) {
        return false;
    }

    if (config && config.customRule && typeof config.customRule === 'function') {
        const defaultRuleResult = defaultRules(value);
        const customRuleResult = config.customRule(value);

        if (defaultRuleResult && !customRuleResult) {
            return false;
        }

        if (defaultRuleResult && customRuleResult) {
            return true;
        }

        if (!defaultRuleResult && customRuleResult) {
            return true;
        }

        return false;
    }

    if (defaultRules(value)) {
        return true;
    }

    return false;
};

/**
 * Helper that determines if the value is "lucky" according to default rules.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if "lucky", false if not.
 */
function defaultRules(value) {
    const divisibleBySeven = value % 7 === 0;
    const containsSeven = value.toString().includes('7');

    if (divisibleBySeven && !containsSeven) {
        return false;
    } else if (divisibleBySeven && containsSeven) {
        return true;
    }

    if (isPrime(value)) {
        return true;
    }

    return false;
}

/**
 * Helper that checks whether the given number is a "prime" number.
 * 
 * @param {number} num - The number to check.
 * @returns {boolean} True if a prime number, false if not.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = isLucky;