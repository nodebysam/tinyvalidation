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
const isObject = require('../../rules/is-object');

test('isObject › should return true for a valid simple object', t => {
    const object = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const result = isObject(object);
    t.true(result);
});

test('isObject › should return true for an empty object', t => {
    const object = {};
    const result = isObject(object);
    t.true(result);
});

test('isObject › should return false for a number', t => {
    const nonObject = 123;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for a string', t => {
    const nonObject = 'string';
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for a boolean', t => {
    const nonObject = true;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for a function', t => {
    const nonObject = () => {};
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for a float', t => {
    const nonObject = 12.5;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for an array', t => {
    const nonObject = [1, 2, 3];
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return true for a nested object', t => {
    const object = {
        name: 'John Doe',
        organization: {
            name: 'Software Testing',
            id: 123,
        }
    };

    const result = isObject(object);
    t.true(result);
});

test('isObject › should return false for null', t => {
    const nonObject = null;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for undefined', t => {
    const nonObject = undefined;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return false for a Date object', t => {
    const specialObject = new Date();
    const result = isObject(specialObject);
    t.false(result);
});

test('isObject › should return true for a Date object when allowSpecialObjects is set to true', t => {
    const specialObject = new Date();
    const result = isObject(specialObject, true);
    t.true(result);
});

test('isObject › should return true for Object.create(null)', t => {
    const object = Object.create(null);
    const result = isObject(object);
    t.true(result);
});

test('isObject › should return false for a RegExp object', t => {
    const object = /abc/;
    const result = isObject(object);
    t.false(result);
});

test('isObject › should return true for a RegExp object when allowSpecialObjects is set to true', t => {
    const object = /abc/;
    const result = isObject(object, true);
    t.true(result);
});

test('isObject › should return false for an object created via a constructor', t => {
    function Person(name) {
        this.name = name;
    }

    const person = new Person('John Doe');
    const result = isObject(person);
    t.false(result);
});

test('isObject › should return true for an object created via a constructor when allowSpecialObjects is set to true', t => {
    function Person(name) {
        this.name = name;
    }

    const person = new Person('John Doe');
    const result = isObject(person, true);
    t.true(result);
});

test('isObject › should return true for a Proxy object', t => {
    const handler = {};
    const proxy = new Proxy({}, handler);
    const result = isObject(proxy);
    t.true(result);
});

test('isObject › should return false for the Object constructor', t => {
    const nonObject = Object;
    const result = isObject(nonObject);
    t.false(result);
});

test('isObject › should return true for an object with a symbol property', t => {
    const symbol = Symbol('foo');
    const object = { [symbol]: 'bar' };
    const result = isObject(object);
    t.true(result);
});