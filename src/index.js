// @ts-check
const { add, subtract, multiply, divide } = require('./Calculator');

/**
 * @file index.js is the root file for this example app
 * @author Josh West
 * @see <a href="https://www.example.com">Josh West</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Josh West';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 92.6, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 2,
    text: 'Hello'
};

/**
 * Caluclate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
};
// console.log(calculateTax(100, 0.1));

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
};

/**
 * Class to create a person object
 */
class Person {
    /**
     *
     * @param {Object} personInfo - Information about person
     */
    constructor(personInfo) {
        /**
         * @property {string} name - Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {string} age - Persons age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {Function} greet - A greeting with name and age
     * @returns {any}
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

/**
 * Person instance
 * See {@link Person}
 */
const person1 = new Person({
    name: 'jdub',
    age: 41
});
console.log(person1.greet());

console.log(add(2, 3));
console.log(subtract(100, 50));
console.log(multiply(25, 20));
console.log(divide(10000, 2));
