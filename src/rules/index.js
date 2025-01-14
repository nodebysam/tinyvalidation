/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

const isEmail = require('./is-email');
const isNotEmpty = require('./is-not-empty');
const isNumber = require('./is-number');
const isObject = require('./is-object');
const isString = require('./is-string');
const isBoolean = require('./is-boolean');
const isArray = require('./is-array');
const isDate = require('./is-date');
const isInteger = require('./is-integer');
const isPositive = require('./is-positive');
const isNegative = require('./is-negative');
const isLength = require('./is-length');
const isEqual = require('./is-equal');
const isHot = require('./is-hot');
const isInRange = require('./is-in-range');
const isURL = require('./is-url');
const isUUID = require('./is-uuid');
const isAlpha = require('./is-alpha');
const isAlphanumeric = require('./is-alphanumeric');
const isPhoneNumber = require('./is-phone-number');
const isAfterDate = require('./is-after-date');
const isBeforeDate = require('./is-before-date');
const isValidJSON = require('./is-valid-json');

module.exports = {
    isEmail,
    isNotEmpty,
    isNumber,
    isObject,
    isString,
    isBoolean,
    isArray,
    isDate,
    isInteger,
    isPositive,
    isNegative,
    isLength,
    isEqual,
    isHot,
    isInRange,
    isURL,
    isUUID,
    isAlpha,
    isAlphanumeric,
    isPhoneNumber,
    isAfterDate,
    isBeforeDate,
    isValidJSON,
};