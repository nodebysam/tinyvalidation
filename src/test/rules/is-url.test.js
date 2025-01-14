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
const isURL = require('../../rules/is-url');

test('isURL › should return true for a valid URL with "http"', t => {
    const result = isURL('http://example.com');
    t.true(result);
});

test('isURL › should return true for a valid URL with "https"', t => {
    const result = isURL('https://example.com');
    t.true(result);
});

test('isURL › should return true for a valid URL without "http" or "https"', t => {
    const result = isURL('example.com');
    t.true(result);
});

test('isURL › should return true for a valid URL with subdomain', t => {
    const result = isURL('https://sub.example.com');
    t.true(result);
});

test('isURL › should return true for a valid URL with port number', t => {
    const result = isURL('https://example.com:8080');
    t.true(result);
});

test('isURL › should return true for a valid URL with path', t => {
    const result = isURL('https://example.com/path/to/resource');
    t.true(result);
});

test('isURL › should return false for invalid URL with spaces', t => {
    const result = isURL('https://example .com');
    t.false(result);
});

test('isURL › should return false for invalid URL with missing domain', t => {
    const result = isURL('https://');
    t.false(result);
});

test('isURL › should return false for non-URL string', t => {
    const result = isURL('not-a-url');
    t.false(result);
});

test('isURL › should return false for invalid URL with special characters in domain', t => {
    const result = isURL('https://ex!ample.com');
    t.false(result);
});

test('isURL › should return false for URL with spaces in the path', t => {
    const result = isURL('https://example.com/some path');
    t.false(result);
});