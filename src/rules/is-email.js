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
 * Validates whether a value is a valid email address (RFC 6531 compliant).
 * 
 * @param {any} value - The value to validate.
 * @returns {boolean} True if a valid email address, false otherwise.
 */
const isEmail = (value) => {
    const emailRegex = /^(?<localPart>(?<dotString>[0-9a-z!#$%&'*+\-/=?^_`{|}~\u{80}-\u{10FFFF}]+(\.[0-9a-z!#$%&'*+\-/=?^_`{|}~\u{80}-\u{10FFFF}]+)*)|(?<quotedString>"([\x20-\x21\x23-\x5B\x5D-\x7E\u{80}-\u{10FFFF}]|\\[\x20-\x7E])*"))(?<!.{64,})@(?<domain>([a-z0-9\u{80}-\u{10FFFF}]([a-z0-9\-\u{80}-\u{10FFFF}]*[a-z0-9\u{80}-\u{10FFFF}])?)\.)+(?<tld>[a-z0-9\-]{2,})$/iu;
    return emailRegex.test(value);
};

module.exports = isEmail;