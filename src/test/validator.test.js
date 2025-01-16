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
const Validator = require('../../src/validator');
const rules = require('../../src/rules');

test('Validator › should initialize correctly', t => {
    const validator = new Validator('test');
    t.deepEqual(validator.value, 'test');
    t.deepEqual(validator.errors, []);
});

test('Validator › should validate a value with a single rule', t => {
    const validator = new Validator('hello').use(rules.isNotEmpty);
    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should fail validation for a single rule', t => {
    const validator = new Validator('').use(rules.isNotEmpty);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), ['isNotEmpty validation failed.']);
});

test('Validator › should validate a value with multiple rules', t => {
    const validator = new Validator('test@example.com')
        .use(rules.isNotEmpty)
        .use(rules.isEmail);
    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should fail validation for multiple rules', t => {
    const validator = new Validator('')
        .use(rules.isNotEmpty)
        .use(rules.isEmail);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), [
        'isNotEmpty validation failed.',
        'isEmail validation failed.',
    ]);
});

test('Validator › should support custom validation rules with arguments', t => {
    const validator = new Validator('test')
        .use(rules.isNotEmpty)
        .use(rules.isMinLength, 5);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), ['isMinLength validation failed.']);
});

test('Validator › should handle numerical validations', t => {
    const isGreaterThan = (value, min) => typeof value === 'number' && value > min;
    const isLessThan = (value, max) => typeof value === 'number' && value < max;

    const validator = new Validator(10)
        .use(rules.isNumber)
        .use(isGreaterThan, 5)
        .use(isLessThan, 15);

    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should fail numerical validations', t => {
    const isGreaterThan = (value, min) => typeof value === 'number' && value > min;
    const isLessThan = (value, max) => typeof value === 'number' && value < max;

    const validator = new Validator(20)
        .use(rules.isNumber)
        .use(isGreaterThan, 25)
        .use(isLessThan, 15);

    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), [
        'isGreaterThan validation failed.',
        'isLessThan validation failed.',
    ]);
});

test('Validator › should allow chaining of validations', t => {
    const isGreaterThan = (value, min) => typeof value === 'number' && value > min;
    const validator = new Validator(10)
        .use(rules.isNumber)
        .use(isGreaterThan, 5);

    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should handle mixed data types', t => {
    const validator = new Validator('123')
        .use(rules.isNotEmpty)
        .use(rules.isNumber);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), ['isNumber validation failed.']);
});

test('Validator › should return no errors for valid data', t => {
    const validator = new Validator(42).use(rules.isNumber);
    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should handle empty input gracefully', t => {
    const validator = new Validator('').use(rules.isNotEmpty);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), ['isNotEmpty validation failed.']);
});

test('Validator › should handle invalid rule gracefully', t => {
    const invalidRule = (value) => value.toString().includes('test');
    const validator = new Validator(42).use(invalidRule);
    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), ['invalidRule validation failed.']);
});

test('Validator › should handle a good amount of chaining', t => {
    const validator = new Validator(13)
        .use(rules.isNumber)
        .use(rules.isPositive)
        .use(rules.isEqual, 13)
        .use(rules.isFibonacci)
        .use(rules.isLucky);
    t.true(validator.isValid());
    t.deepEqual(validator.getErrors(), []);
});

test('Validator › should handle a good amount of errors', t => {
    const validator = new Validator(-20)
        .use(rules.isAddress)
        .use(rules.isPositive)
        .use(rules.isAfterDate)
        .use(rules.isArray)
        .use(rules.isBoolean)
        .use(rules.isDate)
        .use(rules.isEmail)
        .use(rules.isEqual, 2)
        .use(rules.isError)
        .use(rules.isFilePath)
        .use(rules.isIpAddress);

    t.false(validator.isValid());
    t.deepEqual(validator.getErrors(), [
        'isIpAddress validation failed.',
        'isPositive validation failed.',
        'isAfterDate validation failed.',
        'isArray validation failed.',
        'isBoolean validation failed.',
        'isDate validation failed.',
        'isEmail validation failed.',
        'isEqual validation failed.',
        'isError validation failed.',
        'isFilePath validation failed.',
        'isIpAddress validation failed.',
    ]);
});

test('Validator › should handle chaining all in one', t => {
    t.true(new Validator(7)
        .use(rules.isNumber)
        .use(rules.isLucky)
        .use(rules.isPositive)
        .isValid());
});