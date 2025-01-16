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
const isIpAddress = require('../../rules/is-ip-address');

// Test valid IPv4 and IPv6 addresses for "both"
test('isIpAddress › should return true for valid IPv4 and IPv6 pairs when type is "both"', t => {
    t.true(isIpAddress('192.168.1.1', 'both')); // Valid IPv4
    t.true(isIpAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'both')); // Valid IPv6
});

// Test valid IPv4 addresses
test('isIpAddress › should return true for valid IPv4 addresses', t => {
    t.true(isIpAddress('192.168.1.1', 'ipv4')); // Valid IPv4
    t.true(isIpAddress('10.0.0.1', 'ipv4'));    // Valid IPv4
    t.true(isIpAddress('255.255.255.255', 'ipv4')); // Valid IPv4
});

// Test valid IPv6 addresses
test('isIpAddress › should return true for valid IPv6 addresses', t => {
    t.true(isIpAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'ipv6')); // Valid IPv6
    t.true(isIpAddress('::1', 'ipv6')); // Loopback IPv6
    t.true(isIpAddress('0:0:0:0:0:0:0:1', 'ipv6')); // Another valid IPv6
});

// Test invalid IP addresses for "both"
test('isIpAddress › should return false for invalid IP addresses when type is "both"', t => {
    t.false(isIpAddress('256.256.256.256', 'both')); // Invalid IPv4
    t.false(isIpAddress('g1::a', 'both'));          // Invalid IPv6
});

// Test invalid input types
test('isIpAddress › should return false for invalid input types', t => {
    t.false(isIpAddress('Hello World', 'both'));    // Non-IP string
    t.false(isIpAddress(123456, 'both'));           // Numeric input
    t.false(isIpAddress({}, 'both'));               // Object input
});