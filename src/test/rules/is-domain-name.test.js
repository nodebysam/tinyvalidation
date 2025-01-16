/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

const test = require('ava');
const isDomainName = require('../../rules/is-domain-name');

test('isDomainName › should return true for valid domain names', t => {
    t.true(isDomainName('example.com'));           // Standard domain
    t.true(isDomainName('sub.example.co.uk'));     // Subdomain with multi-level TLD
    t.true(isDomainName('example123.io'));         // Domain with numbers
    t.true(isDomainName('a-b-c.example.net'));     // Domain with hyphens
    t.true(isDomainName('verylongdomainnamewith63charactersxxxxxxxxxxxxxxxxxxxxxxxx.com')); // Max length label
});

test('isDomainName › should return false for invalid domain names', t => {
    t.false(isDomainName('-example.com'));         // Starts with hyphen
    t.false(isDomainName('example-.com'));         // Ends with hyphen
    t.false(isDomainName('exa_mple.com'));         // Contains invalid character
    t.false(isDomainName('example..com'));         // Double dots
    t.false(isDomainName('example.c'));            // TLD too short
    t.false(isDomainName('example.123'));          // Numeric-only TLD
});

test('isDomainName › should return false for invalid input types', t => {
    t.false(isDomainName(''));                     // Empty string
    t.false(isDomainName(null));                   // Null input
    t.false(isDomainName(undefined));              // Undefined input
    t.false(isDomainName(12345));                  // Numeric input
    t.false(isDomainName(['example.com']));        // Array input
});