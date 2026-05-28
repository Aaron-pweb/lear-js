// PHASE: 1

// 1.1 Variables: let , const , var

// These are the wasy by which we declare a new variable in javascript
// 1. Var:
//    - Global Scope (if not defined within a function or block): It is globally accessible and
//       can be re-declared in the same scope without error. It uses the principle of Function 
//       Hoisting.
            var firstName;
            firstName = "Jhon";
            console.log(firstName)
            firstName = "Deo";
            function accessingVar () {
                console.log(firstName)
            }
            accessingVar();
            var firstName = "Pitter"; //re-declared in the same scope without error

//    - Local Scope (within a function or block): It can be accessed throughout the entire function 
//       or block but does not follow block scoping (i.e., a variable declared with `var` inside a 
//      loop is accessible even after the loop).
        for (var i = 0; i < 3; i++) {
            var currentNumber = 45 + i;
            console.log(currentNumber);
        }
        console.log(currentNumber);
//    - Initialization: If no initial value is provided, it will default to `undefined`.
        var noInialVar; // This Does Not Create Error. 
// 2. Let:
//    - Block Scope: It can only be accessed within the block or function in which it was defined.
        function accessingLet () {
                let lastName = "Joe"
                console.log(lastName) 
            }
            accessingLet()
            // console.log(lastName) // This Create Error. Uncaught ReferenceError: lastName is not defined.

//    - Cannot be re-declared inside the same scope without error.'
        let lastName = "Teklu"  
        console.log(lastName)
        // let lastName = "Asmerom" // This Creates Error.
//    - Initialization: If no initial value is provided, it will also default to `undefined`.
        let noInialLet; // This Also Does Not Create Error. 

// 3. Const:
//    - Block Scope: Similar to let, it can only be accessed within the block or function in which 
//      it was defined and cannot be re-declared inside the same scope without error.
        const PI = 3.14;

//    - Initialization: It must be initialized at the time of declaration, and the value cannot
//      be changed throughout the entire scope. However, if an attempt is made to change the value, 
//      it will result in a runtime error (TypeError).
     
//      const Po; // This Create Error: Uncaught SyntaxError: Missing initializer in const declaration

// 1.2 Data-types
    // 1. Primitive Data Types: 
    // These are atomic values that cannot be broken down into smaller parts. There are six primitive 
    // data types in JavaScript:
        // - String: A sequence of characters, denoted by single quotes ('') or 
        //   double quotes (""), such as `"Hello"` or `'World'`.
         
        // - Number: This includes integer and floating-point numbers, like `5`, 
        //   `10.25`, or `NaN` (Not-a-Number).

        // - Boolean: It has two values – `true` and `false`.

        // - Null: Represents an empty object with no properties or value, denoted 
        //   by the keyword `null`.

        //  - Undefined: Used to represent a variable that has been declared but 
        //    not assigned any value yet. It can be checked using the `typeof` operator, 
        //    which returns `"undefined"`.

        // - Symbol: A newly added data type in ES6. Symbols are unique and immutable objects. They
        //   are useful for creating one-of-a-kind property keys on JavaScript objects.

    // 2. Non-primitive Data Types: 
    // These are compound types that can be broken down into smaller parts, like objects, arrays, or 
    // functions. Some examples include:
        // - Array: A collection of values enclosed in square brackets `[ ]`. Arrays can contain 
        // a mix of primitive and non-primitive data types.
        
        // - Objects: A collection of key-value pairs enclosed in curly braces `{ }`.
        
        // - Function: An executable piece of code that performs specific operations, like functions 
        // you define or built-in methods.

// Type coercion
// Equality: == vs ===
// Functions (declarations, expressions, arrow functions)
// Scope and lexical scope
// Closures
// Hoisting
// Execution context
// Call stack
// The this keyword





// # PRACTICE PROJECTS
// Rebuild simple Python utilities in JavaScript 
// CLI-style calculator (Node.js)
// Basic task manager without frameworks