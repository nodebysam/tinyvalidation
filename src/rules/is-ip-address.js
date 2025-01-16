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
 * Validates whether the value is a valid IP address.
 * 
 * @param {any} value - The value to validate.
 * @param {string} type - The type of IP address to check for ('ipv4', 'ipv6' or 'both).
 * @returns {boolean} True if the value is a valid IP address, false otherwise. 
 */
const isIpAddress = (value, type = 'both') => {
    // Ensure the value is a string and not empty
    if (!value || typeof value !== 'string') {
        return false;
    }

    // Define regular expressions for IPv4 and IPv6
    const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1|::)$/;

    // Validate based on type
    if (type === 'ipv4') {
        return ipv4Regex.test(value);
    }

    if (type === 'ipv6') {
        return ipv6Regex.test(value);
    }

    if (type === 'both') {
        return ipv4Regex.test(value) || ipv6Regex.test(value);
    }

    // If none of the above, return false
    return false;
};

module.exports = isIpAddress;