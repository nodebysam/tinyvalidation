# Tiny Validation

A minimalistic Node.js data validation library that provides a collection of rules for validating different types of values. This library allows developers to easily chain multiple validation rules, ensuring that the input data is valid according to your custom needs.

## Features

- **Chaining Validation**: Apply multiple rules to a single value.
- **Comprehensive Rules**: Includes rules for validating emails, phone numbers, dates, URLs, and more.
- **Easy Error Handling**: Gather validation errors and handle them as needed.
- **Flexible Custom Rules**: Add custom validation rules to suit your specific needs.
- **Lightweight**: Simple, focused, and easy to use.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Validation Rules](#available-validation-rules)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Tiny Validation in your project, run the following command:

```bash
npm install tinyvalidation
```

Alternatively, if you are using Yarn:

```bash
yarn add tinyvalidation
```

## Usage
Here's how you can get started using Tiny Validation.

### Example
```javascript
const TinyValidation = require('tinyvalidation');
const Validator = TinyValidation.Validator;

const userInput = {
    email: 'test@example.com',
    password: 'Pass1234',
    phoneNumber: '123-456-7890'
};

// Email validation
const emailValidator = new Validator(userInput.email);
emailValidator.use(TinyValidation.rules.isEmail);

// Password validation
const passwordValidator = new Validator(userInput.password);
passwordValidator
    .use(TinyValidation.rules.isMinLength, 8)
    .use(TinyValidation.rules.isStrongPassword);

// Phone number validation
const phoneValidator = new Validator(userInput.phoneNumber);
phoneValidator.use(TinyValidation.rules.isPhoneNumber);

if (emailValidator.isValid() && passwordValidator.isValid() && phoneValidator.isValid()) {
    console.log('All inputs are valid!');
} else {
    console.error('Validation failed!');
    console.log('Errors:', {
        emailErrors: emailValidator.getErrors(),
        passwordErrors: passwordValidator.getErrors(),
        phoneErrors: phoneValidator.getErrors()
    });
}
```
### Example Validation Rules
* __isEmail:__ Validate that the value is a valid email.
* __isNotEmpty:__ Check if the value is not empty.
* __isStrongPassword:__ Ensure the password is strong.
* __isPhoneNumber:__ Check if the value is a valid phone number.
* __isInRange:__ Check if a number is within a specified range.

You can chain these validation rules using the __.use()__ method, passing the value you want to validate and any neccessary parameters.

### Available Validation Rules
Here are the available validation rules in Tiny Validation (more rules to come soon):

* __isEmail__: Validates whether the value is a valid email address.
* __isNotEmpty__: Checks if the value is not empty.
* __isNumber__: Validates whether the value is a number.
* __isObject__: Validates whether the value is an object.
* __isString__: Validates whether the value is a string.
* __isBoolean__: Validates whether the value is a boolean.
* __isArray__: Validates whether the value is an array.
* __isDate__: Validates whether the value is a date.
* __isInteger__: Validates whether the value is an integer.
* __isPositive__: Validates whether the number is positive.
* __isNegative__: Validates whether the number is negative.
* __isLength__: Validates the length of the value.
* __isEqual__: Checks if the value is equal to a specified value.
* __isHot__: Checks if the value is considered "hot" (for specific rules or ranges).
* __isInRange__: Checks if the value is within a given range.
* __isURL__: Validates whether the value is a valid URL.
* __isUUID__: Validates whether the value is a valid UUID.
* __isAlpha__: Validates if the value is alphabetic.
* __isAlphanumeric__: Validates if the value is alphanumeric.
* __isPhoneNumber__: Validates if the value is a valid phone number.
* __isAfterDate__: Checks if the date is after a specified date.
* __isBeforeDate__: Checks if the date is before a specified date.
* __isValidJSON__: Checks if the value is valid JSON.
* __isFibonacci__: Checks if the value is part of the Fibonacci sequence.
* __isLucky__: Checks if the value meets the criteria for being "lucky."
* __isAddress__: Validates if the value is a valid address.
* __isFloat__: Validates if the value is a valid floating*point number.
* __isError__: Checks if the value is an error.
* __isIn__: Validates whether the value is in a specified list.
* __isNotIn__: Validates whether the value is not in a specified list.
* __isMinLength__: Validates if the value's length is greater than or equal to a specified minimum length.
* __isMaxLength__: Validates if the value's length is less than or equal to a specified maximum length.
* __isInstanceOf__: Checks if the value is an instance of a specific class.
* __isStrictEqual__: Checks if the value strictly equals a specified value.
* __isNotEqual__: Checks if the value does not equal a specified value.
* __isNotStrictEqual__: Checks if the value is not strictly equal to a specified value.
* __isFilePath__: Checks if the value is a valid file path.
* __isIpAddress__: Validates if the value is a valid IP address.
* __isDomainName__: Validates if the value is a valid domain name.
* __isCurrency__: Checks if the value is a valid currency.
* __isStrongPassword__: Ensures the password meets strength criteria (e.g., includes upper case, numbers, symbols).
* __isMediaUrl__: Validates if the value is a URL to a media platform like YouTube, TikTok, etc.
* __hasNumber__: Validates whether the value contains a number.
* __hasSpecialCharacter__: Validates whether the value contains special characters.

## Running Tests
Tiny Validation includes unit tests to ensure that everything works as expected. To run the tests, follow these steps:
1. Install the dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```
This will run the unit tests using Ava. If everything is set up correctly, you should see the test results printed in the console.

## Contributing
We welcome contributions to Tiny Validation! Here's how you can help:
1. __Fork the repository__ to your GitHub account.
2. __Create a new branch__ for your feature or bug fix.
3. __Make your changes__ and write tests if neccessary.
4. __Commit your changes__ and push them to your fork.
5. __Open a Pull Request__ describing your changes.

We will review your pull request, and if everything looks good, we'll merge it!

If you find a bug or have an idea for a new feature, feel free to open an issue on GitHub.

## License
Tiny Validation is released under the [GNU v3.0 License](LICENSE).