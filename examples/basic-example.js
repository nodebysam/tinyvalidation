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
 * This is a basic example of how Tiny Validation works.
 * For a more advanced example, please see advanced-example.js
 */

// Require the library in your code.
// If your code, it should look like this:
// const TinyValidation = require('@nodebysam/tiny-validation');

// For this example, I just point to the main index.
const TinyValidation = require('../src/index');

// Example: validate an username:
const username = 'JohnDoe123';
const validator= new TinyValidation.Validator(username);

validator
    .use(TinyValidation.rules.isNotEmpty)       // Validate that the username is not empty
    .use(TinyValidation.rules.isAlphanumeric);  // Validate that the username is alphanumeric (contains letters and numbers)

// Check if the username is valid
if (validator.isValid()) {
    console.log('Username is valid!');
} else {
    console.error('Validation errors:', validator.getErrors());
}