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
 * Validates whether the value is an address.
 * This method only supports addresses in the United States at this moment.
 * I am working on supporting more addresses globally, its quite the task to acheive.
 * Keep an eye out for updated versions of this library.
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a valid address US address, false if not.
 */
const isIpAddress = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const validStates = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
        'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI',
        'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
        'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
        'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
    ];

    const regex = /^(\d+\s[\w\s]+),\s([\w\s]+),\s([A-Z]{2})\s(\d{5}(?:-\d{4})?)$/;

    const match = value.match(regex);

    if (!match) {
        return false;
    }

    const [, street, city, state, zip] = match;

    // Validate state
    return validStates.includes(state);
};

module.exports = isIpAddress;