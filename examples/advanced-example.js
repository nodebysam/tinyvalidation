/**
 * TINY VALIDATION
 * A minimalistic NodeJS data validation library
 * 
 * By Sam Wilcox <wilcox.sam@gmail.com>
 * 
 * This library is relased under the GNU v3.0 license.
 * For further details, see the LICENSE file.
 */

/**
 * This is an advanced example of how Tiny Validation works.
 * For a more basic example, please see basic-example.js
 */

// Require the library in your code.
// If your code, it should look like this:
// const TinyValidation = require('@nodebysam/tiny-validation');

// For this example, I just point to the main index.
const TinyValidation = require('../src/index');

// First Example: Username Validation
console.log('-'.repeat(38));
console.log('| FIRST EXAMPLE: Username Validation |');
console.log('-'.repeat(38));

const userInput = {
    username: 'JohnDoe123',
    email: 'johndoe@example.com',
    password: 'Pass1234',
};

const usernameValidator = new TinyValidation.Validator(userInput.username);

usernameValidator
    .use(TinyValidation.rules.isNotEmpty)
    .use(TinyValidation.rules.isAlphanumeric)
    .use(TinyValidation.rules.hasNumber);

const emailValidator = new TinyValidation.Validator(userInput.email);

emailValidator.use(TinyValidation.rules.isEmail);

const passwordValidator = new TinyValidation.Validator(userInput.password);

passwordValidator
    .use(TinyValidation.rules.isMinLength, 8)
    .use(TinyValidation.rules.isAlphanumeric)
    .use(TinyValidation.rules.hasNumber);

const errors = {
    username: usernameValidator.getErrors(),
    email: emailValidator.getErrors(),
    password: passwordValidator.getErrors(),
};

if (usernameValidator.isValid() && emailValidator.isValid() && passwordValidator.isValid()) {
    console.log('Registration successful!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', errors);
}

// Second Example: Phone Number Validation
console.log();
console.log('-'.repeat(43));
console.log('| SECOND EXAMPLE: Phone Number Validation |');
console.log('-'.repeat(43));

const phoneNumberValidator = new TinyValidation.Validator('+1-800-000-0000');

phoneNumberValidator
    .use(TinyValidation.rules.isPhoneNumber)
    .use(TinyValidation.rules.hasNumber, { minimumOccurences: 3 });

if (phoneNumberValidator.isValid()) {
    console.log('Phone number is valid!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', phoneNumberValidator.getErrors());
}

// Third Example: Strong Password Validation
console.log();
console.log('-'.repeat(45));
console.log('| THIRD EXAMPLE: Strong Password Validation |');
console.log('-'.repeat(45));

const weakPassword = 'pass123';
console.log(`Weak Password: ${weakPassword}`);
let strongPasswordValidator = new TinyValidation.Validator(weakPassword);

if (strongPasswordValidator.use(TinyValidation.rules.isStrongPassword).isValid()) {
    console.log('Password is strong!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', strongPasswordValidator.getErrors());
}

const strongPassword = '3x@mplE!P@ssw0rD2025';
console.log(`\nStrong Password: ${strongPassword}`);
strongPasswordValidator = new TinyValidation.Validator(strongPassword);

if (strongPasswordValidator.use(TinyValidation.rules.isStrongPassword).isValid()) {
    console.log('Password is strong!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', strongPasswordValidator.getErrors());
}

// Fourth Example: Custom Validation Rule
console.log();
console.log('-'.repeat(42));
console.log('| FOURTH EXAMPLE: Custom Validation Rule |');
console.log('-'.repeat(42));

const customValidator = new TinyValidation.Validator('My_Custom_Input');

customValidator.use((value) => {
    const isValid = /^[A-Za-z_]+$/.test(value); // Allow only letters and underscores
    return {
        isValid,
        message: isValid ? null : 'The input must contain only letters and underscores.',
    };
});

if (customValidator.isValid()) {
    console.log('Custom validation passed!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', customValidator.getErrors());
}

// Fifth Example: Media URL Validation
console.log();
console.log('-'.repeat(39));
console.log('| FIFTH EXAMPLE: Media URL Validation |');
console.log('-'.repeat(39));

const mediaUrlValidator = new TinyValidation.Validator('https://youtu.be/dQw4w9WgXcQ');

mediaUrlValidator.use(TinyValidation.rules.isMediaUrl);

if (mediaUrlValidator.isValid()) {
    console.log('Media URL is valid!');
} else {
    console.error('Validation failed.');
    console.error('Validation errors:', mediaUrlValidator.getErrors());
}