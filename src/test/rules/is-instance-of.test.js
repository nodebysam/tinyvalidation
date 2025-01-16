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
const isInstanceOf = require('../../rules/is-instance-of');

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Animal {
    constructor(species) {
      this.species = species;
    }
  }
  
  test('isInstanceOf › should return true if value is an instance of the constructor', t => {
    const person = new Person('John');
    const animal = new Animal('Dog');
  
    t.true(isInstanceOf(person, Person));  // person is an instance of Person
    t.true(isInstanceOf(animal, Animal));  // animal is an instance of Animal
  });
  
  test('isInstanceOf › should return false if value is not an instance of the constructor', t => {
    const person = new Person('John');
    const animal = new Animal('Dog');
  
    t.false(isInstanceOf(person, Animal));  // person is not an instance of Animal
    t.false(isInstanceOf(animal, Person));  // animal is not an instance of Person
  });
  
  test('isInstanceOf › should throw an error if the second argument is not a function', t => {
    const error = t.throws(() => {
      isInstanceOf({}, 'NotAFunction');  // 'NotAFunction' is not a function
    });
    t.is(error.message, 'The second argument must be a constructor function.');
  });
  
  test('isInstanceOf › should return false for non-instance values', t => {
    t.false(isInstanceOf({}, Array));         // Object is not an instance of Array
    t.false(isInstanceOf([], Object));        // Array is an instance of Object, but not the other way around
    t.false(isInstanceOf(null, Object));      // null is not an instance of Object
    t.false(isInstanceOf(undefined, Object)); // undefined is not an instance of Object
    t.false(isInstanceOf(123, Object));       // Number is not an instance of Object
    t.false(isInstanceOf(true, Object));      // Boolean is not an instance of Object
  });
  
  test('isInstanceOf › should return true for an instance of subclass', t => {
    class Student extends Person {}
  
    const student = new Student('Alice');
    t.true(isInstanceOf(student, Person));  // student is an instance of Person (due to inheritance)
    t.true(isInstanceOf(student, Student)); // student is an instance of Student
  });
  
  test('isInstanceOf › should return false for non-matching subclasses', t => {
    class Student extends Person {}
  
    const person = new Person('John');
    t.false(isInstanceOf(person, Student));  // person is not an instance of Student
  });

  test('isInstanceOf › should return true for instances', t => {
    t.true(isInstanceOf([], Array));          // Array is an instance of Array
    t.true(isInstanceOf({}, Object));         // Object is an instance of Object
  });