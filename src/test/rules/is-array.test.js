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
const isArray = require('../../rules/is-array');

test('isArray › should return true for a simple array', t => {
    const simpleArray = [1, 2, 3];
    const result = isArray(simpleArray);
    t.true(result);
});

test('isArray › should return true for an empty array', t => {
    const emptyArray = [];
    const result = isArray(emptyArray);
    t.true(result);
});

test('isArray › should return true for an array with one element', t => {
    const oneElementArray = [1];
    const result = isArray(oneElementArray);
    t.true(result);
});

test('isArray › should return true with an array that contains a boolean', t => {
    const booleanArray = [1, true, false , 2];
    const result = isArray(booleanArray);
    t.true(result);
});

test('isArray › should return false for null', t => {
    const nullValue = null;
    const result = isArray(nullValue);
    t.false(result);
});

test('isArray › should return false for undefined', t => {
    const undefinedValue = undefined;
    const result = isArray(undefinedValue);
    t.false(result);
});

test('isArray › should return false for a number', t => {
    const number = 123;
    const result = isArray(number);
    t.false(result);
});

test('isArray › should return false for a boolean', t => {
    const booleanValue = true;
    const result = isArray(booleanValue);
    t.false(result);
});

test('isArray › should return false for a string', t => {
    const string = 'I am a string';
    const result = isArray(string);
    t.false(result);
});

test('isArray › should return false for a float', t => {
    const floatValue = 2.5;
    const result = isArray(floatValue);
    t.false(result);
});

test('isArray › should return false for a function', t => {
    const aFunction = () => {};
    const result = isArray(aFunction);
    t.false(result);
});

test('isArray › should return false for an object', t => {
    const object = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const result = isArray(object);
    t.false(result);
});

test('isArray › should return false for a Date object', t => {
    const date = new Date();
    const result = isArray(date);
    t.false(result);
});

test('isArray › should return false for a RegExp object', t => {
    const regExp = /abc/;
    const result = isArray(regExp);
    t.false(result);
});

test('isArray › should return true for an array within an array', t => {
    const arrInArr = [
        [
            '-- Inside the Array --'
        ]
    ];

    const result = isArray(arrInArr);
    t.true(result);
});

test('isArray › should return true for an array within an array 500 times over (WITHOUT data inside it)', t => {
    const nestedArr =  generatedNestedArray();
    const result = isArray(nestedArr);
    t.true(result);
});

test('isArray › should return true for an array within an array 500 times over (WITH data inside it)', t => {
    const nestedArrayWithData = generatedNestedArray({ data: 'Just simple test data here...' });
    const result = isArray(nestedArrayWithData);
    t.true(result);
});

test('isArray › should return true for an array with null as an element', t => {
    const arrayWithNull = [null];
    const result = isArray(arrayWithNull);
    t.true(result);
});

test('isArray › should return true for an array with undefined as an element', t => {
    const arrayWithUndefined = [undefined];
    const result = isArray(arrayWithUndefined);
    t.true(result);
});

test('isArray › should return true for a sparse array', t => {
    const sparseArr = [1, , 3];
    const result = isArray(sparseArr);
    t.true(result);
});

test('isArray › should return true for an array with mixed data types', t => {
    const mixedArr = [1, 'string', null, undefined, {}, [], () => {}];
    const result = isArray(mixedArr);
    t.true(result);
});

test('isArray › should return true for an array containing multiple arrays', t => {
    const arrayOfArr = [[1, 2], [3, 4], []];
    const result = isArray(arrayOfArr);
    t.true(result);
});

test('isArray › should return true for a large array', t => {
    const largeArr = new Array(10 ** 6).fill(0);
    const result = isArray(largeArr);
    t.true(result);
});

test('isArray › should return true for deeply nested empty array', t => {
    const deeplyNestedEmptyArr = Array.from({ length: 10 }, () => {});
    const result = isArray(deeplyNestedEmptyArr);
    t.true(result);
});

test('isArray › should return false for an array-like object', t => {
    const arrLike = { 0: 'a', 1: 'b', length: 2 };
    const result = isArray(arrLike);
    t.false(result);
});

test('isArray › should return false for an object with Array prototype', t => {
    const objWithArrProto = Object.create(Array.prototype);
    const result = isArray(objWithArrProto);
    t.false(result);
});

test('isArray › should return true for an array with nested arrays coontaining mixed data', t => {
    const nestedWithMixedData = [[1, 'string'], [null, undefined], [{}, []]];
    const result = isArray(nestedWithMixedData);
    t.true(result);
});

test('isArray › should handle excessively large depths gracefully in nested arrays', t => {
    const nestedArr = generatedNestedArray({ depth: 10 ** 6 });
    const result = isArray(nestedArr);
    t.true(result);
});

/**
 * Helper to generate nested arrays.
 * 
 * @param {Object} [options={}] - Options for generating nested arrays.
 * @param {number} [options.depth=500] - The depth in which to nest the array. (default is 599).
 * @param {string|null} [options.data=null] - The data to include inside each array (default is null [empty]).
 * @returns {Array} The resulting nested array.
 */
function generatedNestedArray(options = {}) {
    const { depth = 500, data = null } = options;
    let result = [];

    for (let i = 0; i < depth; i++) {
        result = data ? [...data, ...result] : [result];
    }

    return result;
}