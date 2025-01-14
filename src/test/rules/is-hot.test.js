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
const isHot = require('../../rules/is-hot');

// Basic validations
test('isHot › should throw an error when value is missing', t => {
    const error = t.throws(() => {
        isHot();
    }, { instanceOf: Error });
    t.is(error.message, 'Missing value to validate.');
});

// Single threshold, meet condition
test('isHot › should return true when value meets a single threshold', t => {
    const result = isHot(50, { map: [50], meet: true });
    t.true(result);
});

test('isHot › should return false when value does not meet a single threshold', t => {
    const result = isHot(49, { map: [50], meet: true });
    t.false(result);
});

// Single threshold, exceed condition
test('isHot › should return true when value exceeds a single threshold', t => {
    const result = isHot(51, { map: [50], exceed: true });
    t.true(result);
});

test('isHot › should return false when value does not exceed a single threshold', t => {
    const result = isHot(50, { map: [50], exceed: true });
    t.false(result);
});

// Multiple thresholds, meet any condition
test('isHot › should return true when value meets at least one threshold', t => {
    const result = isHot(50, { map: [40, 50, 60], meet: true });
    t.true(result);
});

test('isHot › should return false when value meets no thresholds', t => {
    const result = isHot(35, { map: [40, 50, 60], meet: true });
    t.false(result);
});

// Multiple thresholds, exceed any condition
test('isHot › should return true when value exceeds at least one threshold', t => {
    const result = isHot(55, { map: [40, 50, 60], exceed: true });
    t.true(result);
});

test('isHot › should return false when value exceeds no thresholds', t => {
    const result = isHot(30, { map: [40, 50, 60], exceed: true });
    t.false(result);
});

// Meet all thresholds
test('isHot › should return true when value meets all thresholds with meetEach = true', t => {
    const result = isHot(50, { map: [50, 50, 50], meet: true, meetEach: true });
    t.true(result);
});

test('isHot › should return false when value meets only some thresholds with meetEach = true', t => {
    const result = isHot(50, { map: [50, 60], meet: true, meetEach: true });
    t.false(result);
});

// Exceed all thresholds
test('isHot › should return true when value exceeds all thresholds with exceedEach = true', t => {
    const result = isHot(100, { map: [50, 75, 90], exceed: true, exceedEach: true });
    t.true(result);
});

test('isHot › should return false when value exceeds only some thresholds with exceedEach = true', t => {
    const result = isHot(60, { map: [50, 75, 90], exceed: true, exceedEach: true });
    t.false(result);
});

// Combined conditions
test('isHot › should return true when meet and exceed are both satisfied', t => {
    const result = isHot(100, { map: [50, 100], meet: true, exceed: true });
    t.true(result);
});

test('isHot › should return false when neither meet nor exceed is satisfied', t => {
    const result = isHot(30, { map: [50, 100], meet: true, exceed: true });
    t.false(result);
});