// 1. **Function Declaration** (also called function statement)
function greet() {
  console.log("Hello, world!");
}
greet(); // Outputs: Hello, world!

// Function declaration is hoisted to the top, meaning you can call it before it's defined

// 2. **Function Expression**
// A function expression assigns a function to a variable. This is not hoisted.
const sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3)); // Outputs: 5

// 3. **Named Function Expression**
// Similar to a function expression, but with a name given to the function.
const multiply = function multiply(a, b) {
  return a * b;
};
console.log(multiply(2, 4)); // Outputs: 8

// Named function expressions are useful for recursion inside the function or for debugging.

// 4. **Anonymous Functions**
// An anonymous function has no name and is typically used in function expressions or as arguments to other functions.
setTimeout(function () {
  console.log("This is an anonymous function after 1 second");
}, 1000); // Outputs: This is an anonymous function after 1 second after 1 second

// Anonymous functions are commonly used in callbacks and event listeners.

// 5. **First-Class Functions (First-Class Citizens)**
// JavaScript treats functions as first-class citizens, meaning they can be:
// - Assigned to variables
// - Passed as arguments to other functions
// - Returned from other functions
const square = function (x) {
  return x * x;
};
const result = square(5);
console.log(result); // Outputs: 25

function func(callback) {
  console.log("Executing callback function...");
  callback();
}

func(() => console.log("Callback function executed!")); // Outputs: Executing callback function... \n Callback function executed!

// 6. **Arrow Functions**
// Arrow functions provide a shorter syntax and do not have their own `this` context.
// They are particularly useful for passing functions as arguments, especially when working with callbacks.

const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8

// Arrow functions are concise and commonly used in functional programming.
