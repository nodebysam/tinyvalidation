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
 * Validates whether the value is a valid domain name.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if the value is a valid domain name, false if not.
 */
const isDomainName = (value) => {
    if (!value || typeof value !== 'string') {
        return false;
    }

    const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/;

    if (value.length > 253) {
        return false;
    }

    return domainRegex.test(value);
};

module.exports = isDomainName;