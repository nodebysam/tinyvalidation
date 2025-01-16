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
const isFloat = require('../../rules/is-float');

test('isFloat › should return false for invalid floats', t => {
    t.false(isFloat('abc'));
    t.false(isFloat('123a'));
    t.false(isFloat(null));
    t.false(isFloat(''));
    t.false(isFloat(' '));
});

test('isFloat › should respect min and max constraints', t => {
    t.true(isFloat(50.5, { min: 50, max: 100 }));
    t.false(isFloat(49.9, { min: 50, max: 100 }));
    t.false(isFloat(100.1, { min: 50, max: 100 }));
});

test('isFloat › should respect precision constraint', t => {
    t.true(isFloat(123.45, { precision: 2 }));
    t.false(isFloat(123.456, { precision: 2 }));
    t.true(isFloat('123.4', { precision: 1 }));
    t.false(isFloat('123.45', { precision: 1 }));
});