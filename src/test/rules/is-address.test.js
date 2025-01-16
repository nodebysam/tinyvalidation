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
const isAddress = require('../../rules/is-address');

test('isAddress › should return true for valid US addresses', t => {
    t.true(isAddress('123 Main St, Springfield, IL 62704'));
    t.true(isAddress('456 Elm Rd, Los Angeles, CA 90001'));
    t.true(isAddress('789 Broadway Ave, New York, NY 10001-1234'));
    t.true(isAddress('1600 Pennsylvania Ave NW, Washington, DC 20500'));
    t.true(isAddress('1 Infinite Loop, Cupertino, CA 95014'));
});

test('isAddress › should return false for missing street number', t => {
    t.false(isAddress('Main St, Springfield, IL 62704'));
    t.false(isAddress('Elm Rd, Los Angeles, CA 90001'));
});

test('isAddress › should return false for missing city', t => {
    t.false(isAddress('123 Main St, , IL 62704'));
    t.false(isAddress('456 Elm Rd, , CA 90001'));
});

test('isAddress › should return false for missing state', t => {
    t.false(isAddress('123 Main St, Springfield, , 62704'));
    t.false(isAddress('456 Elm Rd, Los Angeles, , 90001'));
});

test('isAddress › should return false for missing ZIP code', t => {
    t.false(isAddress('123 Main St, Springfield, IL'));
    t.false(isAddress('456 Elm Rd, Los Angeles, CA'));
});

test('isAddress › should return false for invalid state codes', t => {
    t.false(isAddress('123 Main St, Springfield, ZZ 62704'));
    t.false(isAddress('456 Elm Rd, Los Angeles, XX 90001'));
});

test('isAddress › should return false for invalid ZIP codes', t => {
    t.false(isAddress('123 Main St, Springfield, IL ABCDE'));
    t.false(isAddress('456 Elm Rd, Los Angeles, CA 9000'));
    t.false(isAddress('789 Broadway Ave, New York, NY 10001-12AB'));
});

test('isAddress › should return false for addresses missing commas', t => {
    t.false(isAddress('123 Main St Springfield IL 62704'));
    t.false(isAddress('456 Elm Rd Los Angeles CA 90001'));
});

test('isAddress › should return false for non-string values', t => {
    t.false(isAddress(null));
    t.false(isAddress(undefined));
    t.false(isAddress(12345));
    t.false(isAddress({ street: '123 Main St', city: 'Springfield', state: 'IL', zip: '62704' }));
    t.false(isAddress(['123 Main St', 'Springfield', 'IL', '62704']));
});

test('isAddress › should return false for empty or whitespace-only strings', t => {
    t.false(isAddress(''));
    t.false(isAddress('   '));
});