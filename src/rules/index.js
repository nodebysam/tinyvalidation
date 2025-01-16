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
const isFibonacci = require('./is-fibonacci');
const isLucky = require('./is-lucky');
const isAddress = require('./is-address');
const isFloat = require('./is-float');
const isError = require('./is-error');
const isIn = require('./is-in');
const isNotIn = require('./is-not-in');
const isMinLength = require('./is-min-length');
const isMaxLength = require('./is-max-length');
const isInstanceOf = require('./is-instance-of');
const isStrictEqual = require('./is-strict-equal');
const isNotEqual = require('./is-not-equal');
const isNotStrictEqual = require('./is-not-strict-equal');
const isFilePath = require('./is-file-path');
const isIpAddress = require('./is-ip-address');
const isDomainName = require('./is-domain-name');
const isCurrency = require('./is-currency');
const isStrongPassword = require('./is-strong-password');
const isMediaUrl = require('./is-media-url');
const hasNumber = require('./has-number');
const hasSpecialCharacter = require('./has-special-character');

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
    isFibonacci,
    isLucky,
    isAddress,
    isFloat,
    isError,
    isIn,
    isNotIn,
    isMinLength,
    isMaxLength,
    isInstanceOf,
    isStrictEqual,
    isNotEqual,
    isNotStrictEqual,
    isFilePath,
    isIpAddress,
    isDomainName,
    isCurrency,
    isStrongPassword,
    isMediaUrl,
    hasNumber,
    hasSpecialCharacter,
};