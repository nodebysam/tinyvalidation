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
 * Validator class for chaining validation rules and handling errors.
 */
class Validator {
    /**
     * Creates a Validator instance.
     * 
     * @param {any} value - The value to be validated.
     */
    constructor(value) {
        this.value = value;
        this.errors = [];
    }

    /**
     * Applies validation rule to the value.
     * 
     * @param {Function} rule - The validation rule to apply. Should return true for valid values, false otherwise.
     * @param  {...any} args - Additional arguments to pass to the rule function.
     * @returns {Validator} - Returns the current instance for method chaining. 
     */
    use(rule, ...args) {
        const isValid = rule(this.value, ...args);

        if (!isValid) {
            this.errors.push(`${rule.name} validation failed.`);
        }

        return this;
    }

    /**
     * Checks if all validations passed.
     * 
     * @returns {boolean} - True if there are no errors, false otherwise.
     */
    isValid() {
        return this.errors.length === 0;
    }

    /**
     * Retrieves the list of validation errors.
     * 
     * @returns {string[]} An array of error messages.
     */
    getErrors() {
        return [...this.errors];
    }
}

module.exports = Validator;