/**
 * ============================================
 * JAVASCRIPT FUNDAMENTALS - PHASE 1
 * ============================================
 * Learning resource covering core JavaScript concepts
 * Topics: Variables, Data Types, Functions, Scope, Closures, and more
 * Version: 1.0 - Polished Edition
 * 
 * This comprehensive guide demonstrates key JavaScript concepts
 * with clear examples and best practices for learning.
 */

// ============================================
// 1.1 VARIABLES: let, const, var
// ============================================
// Different ways to declare variables in JavaScript with their characteristics

/**
 * 1. VAR - Function-scoped variable (Legacy)
 * Characteristics:
 * - Function Scope: Accessible throughout the entire function
 * - Can be re-declared in the same scope
 * - Uses Function Hoisting
 * - Initializes to 'undefined' if not assigned
 * ⚠️ Best Practice: Avoid using 'var'. Use 'let' or 'const' instead.
 */

// Global scope example
var firstName;
firstName = "John";
console.log(firstName); // Output: "John"

firstName = "Deo";
function accessingVar() {
  console.log(firstName); // Output: "Deo"
}
accessingVar();

var firstName = "Peter"; // Re-declaration is allowed (⚠️ not recommended)

// Scope quirk: var in loops is not block-scoped
for (var i = 0; i < 3; i++) {
  var currentNumber = 45 + i;
}
console.log(currentNumber); // Output: 47 (accessible outside loop)

// Uninitialized var defaults to undefined
var noInitialVar;
console.log(noInitialVar); // Output: undefined

/**
 * 2. LET - Block-scoped variable (Modern, Recommended)
 * Characteristics:
 * - Block Scope: Only accessible within its block (function, if, loop, etc.)
 * - Cannot be re-declared in the same scope
 * - Does not hoist in the same way as 'var'
 * - Initializes to 'undefined' if not assigned
 * ✅ Best Practice: Use 'let' for variables that will change
 */

function accessingLet() {
  let lastName = "Joe";
  console.log(lastName); // Output: "Joe"
}
accessingLet();
// console.log(lastName); // ❌ Error: lastName is not defined (block-scoped)

let lastName = "Teklu";
console.log(lastName); // Output: "Teklu"
// let lastName = "Asmerom"; // ❌ Error: Identifier 'lastName' has already been declared

let noInitialLet; // Initializes to undefined
console.log(noInitialLet); // Output: undefined

/**
 * 3. CONST - Block-scoped constant (Modern, Recommended)
 * Characteristics:
 * - Block Scope: Only accessible within its block
 * - Cannot be re-declared or reassigned
 * - Must be initialized at declaration time
 * - Does not hoist in the same way as 'var'
 * ✅ Best Practice: Use 'const' by default, use 'let' when reassignment is needed
 */

const PI = 3.14159;
console.log(PI); // Output: 3.14159

// const PO; // ❌ Error: Missing initializer in const declaration

// const can be modified if it points to an object/array (not reassigned)
const person = { name: "Ahmed" };
person.name = "Ali"; // ✅ This is allowed (modifying object properties)
console.log(person.name); // Output: "Ali"
// person = {}; // ❌ Error: Assignment to constant variable (reassignment)

// ============================================
// 1.2 DATA TYPES
// ============================================

/**
 * PRIMITIVE DATA TYPES
 * Atomic values that cannot be broken down into smaller parts.
 * There are six primitive data types in JavaScript:
 */

// 1. String - A sequence of characters
const country = "WADI'A";
console.log(country); // Output: "WADI'A"

// 2. Number - Integers and floating-point numbers
const gravityAcceleration = 9.89;
const naN_example = NaN; // Not-a-Number
console.log(gravityAcceleration); // Output: 9.89

// 3. Boolean - Two values: true or false
const gameOn = true;
const gameOff = false;
console.log(`Game Status - On: ${gameOn}, Off: ${gameOff}`);

// 4. Null - Explicitly represents "no value"
const noValue = null;
console.log(noValue); // Output: null

// 5. Undefined - Variable declared but not assigned
let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

// 6. Symbol (ES6) - Unique and immutable identifiers
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: "symbol"

/**
 * NON-PRIMITIVE DATA TYPES
 * Compound types that can contain multiple values or complex structures
 */

// 1. Array - Collection of values in square brackets
const students = ["Aaron", "Ema", "Fili", "Samri", "Beti"];
console.log(students); // Output: Array of 5 students

// Arrays can contain mixed data types (including objects)
const mixedArray = [
  "String",
  42,
  true,
  null,
  { name: "John", age: 30 },
  undefined
];
console.log(mixedArray);

// 2. Objects - Collection of key-value pairs
const studentInfo = {
  name: "Ahmed",
  age: 20,
  city: "Asmara",
  isActive: true
};
console.log(studentInfo);

// 3. Functions - Executable code blocks (also non-primitive)
/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(12, 23)); // Output: 35

// ============================================
// 1.3 TYPE COERCION
// ============================================

/**
 * Type coercion: Automatic conversion of data types during operations
 * When operations involve values of different types, JavaScript automatically
 * converts them to a compatible type.
 */

// Converting number to string
const num = 45;
console.log(typeof num); // Output: "number"
const numAsString = String(num);
console.log(typeof numAsString); // Output: "string"

// Type coercion with null
const nullComparison = (null == "undefined");
console.log(nullComparison); // Output: false

/**
 * Equality Operators:
 * == (loose equality) - Converts types before comparing
 * === (strict equality) - Compares without type conversion
 */

// Loose equality (==) - Type coercion happens
console.log(5 == "5");      // Output: true (string "5" converted to number)
console.log(0 == false);    // Output: true (boolean converted to number)
console.log(null == undefined); // Output: true (special case)

// Strict equality (===) - No type coercion
console.log(5 === "5");     // Output: false (different types)
console.log(0 === false);   // Output: false (different types)
console.log(null === undefined); // Output: false (different types)

console.log("✅ Best Practice: Always use === (strict equality) to avoid unexpected behavior");

// ============================================
// 1.4 FUNCTIONS
// ============================================

/**
 * FUNCTION DECLARATION
 * Defined using the 'function' keyword
 * Characteristics:
 * - Hoisted to the top of their scope
 * - Can be called before they are defined in the code
 * - Named function for better readability
 */

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript learning.`;
}

console.log(greetUser("Ahmed")); // Output: "Hello, Ahmed! Welcome to JavaScript learning."

/**
 * FUNCTION EXPRESSION
 * Assigning an anonymous function to a variable
 * Characteristics:
 * - NOT hoisted (cannot be called before declaration)
 * - Can be stored in a variable
 * - Often used for callbacks and closures
 */

const calculateSum = function(a, b) {
  const sum = a + b;
  return sum;
};

console.log(calculateSum(10, 15)); // Output: 25

/**
 * ARROW FUNCTIONS (ES6+)
 * Modern syntax using the fat arrow '=>'
 * Characteristics:
 * - Concise syntax compared to regular functions
 * - Do not create their own 'this' (lexical this)
 * - Perfect for shorter functions and callbacks
 */

// With multiple parameters and statements
const multiply = (x, y) => {
  const result = x * y;
  return result;
};

console.log(multiply(4, 5)); // Output: 20

// With single parameter (parentheses optional)
const square = num => num * num;
console.log(square(7)); // Output: 49

// With implicit return (no braces, auto-return)
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // Output: 5

// No parameters
const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log(getRandomNumber()); // Output: Random number

// ============================================
// 1.5 SCOPE AND LEXICAL SCOPE
// ============================================

/**
 * SCOPE
 * Defines where a variable can be accessed within a program
 * Two main types: Global and Local
 */

// Global Scope - Accessible everywhere
const globalVariable = "I am global";

/**
 * Local Scope
 * Variables declared inside functions or blocks (using let/const)
 * are only accessible within that scope
 */

function demonstrateScope() {
  const localVariable = "I am local";
  console.log(localVariable); // ✅ Accessible inside function
  console.log(globalVariable); // ✅ Accessible (global)
}

demonstrateScope();
// console.log(localVariable); // ❌ Error: localVariable is not defined

/**
 * LEXICAL SCOPE
 * Variables are accessible based on where they are DECLARED, not where they are called
 * Inner functions can access outer function's variables (scope chain)
 */

let outerVariable = 100;

function outerFunc() {
  let middleVariable = 50;

  function innerFunc() {
    let innerVariable = 25;

    // Can access all variables in the scope chain
    console.log(innerVariable);    // Output: 25 (own scope)
    console.log(middleVariable);   // Output: 50 (outer function scope)
    console.log(outerVariable);    // Output: 100 (global scope)
  }

  innerFunc();
  // console.log(innerVariable); // ❌ Error: innerVariable is not defined
}

outerFunc();

// ============================================
// 1.6 CLOSURES
// ============================================

/**
 * CLOSURE
 * A function that has access to:
 * 1. Its own scope variables
 * 2. Outer function's scope variables
 * 3. Global scope variables
 *
 * Created when a function returns another function that uses outer variables
 * Useful for data privacy and maintaining state
 */

function createCounter(startValue) {
  let count = startValue;

  // This inner function has access to 'count' from the outer scope
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter(10);
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
console.log(counter()); // Output: 13

/**
 * Closure Example: Data Privacy
 * Variables in the outer function are protected and can only be accessed
 * through the returned function(s)
 */

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      return `Deposited $${amount}. New balance: $${balance}`;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}`;
      }
      return `Insufficient balance!`;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.deposit(500));    // Output: Deposited $500. New balance: $1500
console.log(myAccount.withdraw(300));   // Output: Withdrew $300. New balance: $1200
console.log(myAccount.getBalance());    // Output: 1200

// ============================================
// 1.7 HOISTING
// ============================================

/**
 * HOISTING
 * JavaScript's behavior of moving declarations to the top of their scope
 * before code execution begins.
 *
 * Variable hoisting:
 * - var: Hoisted and initialized to undefined
 * - let/const: Hoisted but NOT initialized (Temporal Dead Zone)
 *
 * Function hoisting:
 * - Function declarations: Hoisted completely (can be called before declaration)
 * - Function expressions: NOT hoisted (acts like variable hoisting)
 */

// var hoisting
console.log(hoistedVar); // Output: undefined (hoisted and initialized)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: "I am hoisted"

// Function declaration hoisting - can be called before definition
console.log(sayHi()); // Output: "Hello, JavaScript!"

function sayHi() {
  return "Hello, JavaScript!";
}

// let/const hoisting - Temporal Dead Zone
try {
  console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
  let hoistedLet = "I am hoisted but not initialized";
} catch (error) {
  console.log("Caught error:", error.message);
}

// ============================================
// 1.8 THIS KEYWORD
// ============================================

/**
 * THIS KEYWORD
 * Refers to the object that the function or method is a property of
 * The value of 'this' depends on HOW the function is called
 */

// Example 1: Object method - 'this' refers to the object
const car = {
  brand: "Toyota",
  year: 2024,
  getBrand: function() {
    return this.brand;
  },
  getInfo: function() {
    return `${this.brand} ${this.year}`;
  }
};

console.log(car.getBrand()); // Output: "Toyota"
console.log(car.getInfo()); // Output: "Toyota 2024"

// Example 2: Constructor function - 'this' refers to the new object
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.getInfo = function() {
    return `${this.brand} from ${this.year}`;
  };
}

const myCar = new Car("Honda", 2023);
console.log(myCar.brand);      // Output: "Honda"
console.log(myCar.getInfo());  // Output: "Honda from 2023"

// Example 3: Arrow functions - 'this' is inherited from parent scope
const person2 = {
  name: "Ali",
  greeting: function() {
    const arrowFunc = () => {
      return `Hello, I'm ${this.name}`;
    };
    return arrowFunc();
  }
};

console.log(person2.greeting()); // Output: "Hello, I'm Ali"

// ============================================
// 1.9 EXECUTION CONTEXT AND CALL STACK
// ============================================

/**
 * EXECUTION CONTEXT
 * A special object created each time a function is called
 * Contains information about variables, 'this', and scope chain
 *
 * CALL STACK
 * Data structure that stores information about active function calls
 * Last-In-First-Out (LIFO) order
 */

function first() {
  console.log("First function - Start");
  second();
  console.log("First function - End");
}

function second() {
  console.log("Second function - Start");
  third();
  console.log("Second function - End");
}

function third() {
  console.log("Third function - Called");
}

// Call stack will be: global -> first -> second -> third -> second -> first -> global
first();

// ============================================
// SUMMARY AND BEST PRACTICES
// ============================================

console.log(`
✅ JAVASCRIPT FUNDAMENTALS - KEY TAKEAWAYS:

1. VARIABLES:
   - Prefer 'const' by default
   - Use 'let' when reassignment is needed
   - Avoid 'var' in modern JavaScript

2. DATA TYPES:
   - Primitives: string, number, boolean, null, undefined, symbol
   - Non-primitives: objects, arrays, functions

3. FUNCTIONS:
   - Use arrow functions for conciseness and proper 'this' binding
   - Function declarations are hoisted
   - Function expressions are not hoisted

4. SCOPE:
   - Block scope (let/const) vs Function scope (var)
   - Lexical scope: Inner functions access outer variables
   - Closures preserve scope chain

5. BEST PRACTICES:
   - Use strict equality (===) always
   - Initialize variables close to their usage
   - Use meaningful variable names
   - Add comments for complex logic
   - Keep functions focused and small

6. COMMON PITFALLS TO AVOID:
   - Relying on var for scoping
   - Using loose equality (==)
   - Forgetting that arrays/objects are passed by reference
   - Confusing 'this' binding in different contexts

Keep practicing these fundamentals - they are the foundation of JavaScript mastery!
`);
