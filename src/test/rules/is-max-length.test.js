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
const isMaxLength = require('../../rules/is-max-length');

test('isMaxLength › should return true when value length is equal to or less than the maximum length', t => {
    t.true(isMaxLength('hello', 5));  // Equal length (5 characters)
    t.true(isMaxLength('world', 6));  // Less than maximum length (5 characters)
    t.true(isMaxLength('', 0));       // Empty string meets the 0 length
    t.true(isMaxLength([], 0));       // Empty array meets the 0 length
  });
  
  test('isMaxLength › should return false when value length exceeds the maximum length', t => {
    t.false(isMaxLength('hello', 4));  // Length 5, exceeds the max length of 4
    t.false(isMaxLength('world', 3));  // Length 5, exceeds the max length of 3
  });
  
  test('isMaxLength › should return false for non-iterable values', t => {
    t.false(isMaxLength(123, 3));   // Number does not have length
    t.false(isMaxLength(true, 2));  // Boolean is not iterable
    t.false(isMaxLength({}, 2));    // Object is not iterable
  });
  
  test('isMaxLength › should throw error if maxLength is not specified', t => {
    const error = t.throws(() => {
      isMaxLength('hello');
    });
    t.is(error.message, 'max (maximum) value parameter must be specified.');
  });
  
  test('isMaxLength › should return false for null or undefined value', t => {
    t.false(isMaxLength(null, 2));     // null value has no length
    t.false(isMaxLength(undefined, 2)); // undefined value has no length
  });