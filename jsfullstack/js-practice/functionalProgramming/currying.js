// Normal function taking multiple arguments
function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); // Output: 24

// Curried version
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(curriedMultiply(2)(3)(4)); // Output: 24

// Using arrow functions
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3)); // Output: 6

// Creating a curried function for logging
function log(level) {
  return function (message) {
    console.log(`[${level.toUpperCase()}]: ${message}`);
  };
}

const infoLogger = log("info");
const errorLogger = log("error");

infoLogger("Server started!"); // [INFO]: Server started!
errorLogger("Database connection failed!"); // [ERROR]: Database connection failed!

// Converting a normal function to a curried function using bind
function addNumbers(a, b) {
  return a + b;
}

const curriedAdd = addNumbers.bind(null, 5);
console.log(curriedAdd(10)); // Output: 15

// Partial application example
function partial(fn, a) {
  return function (b, c) {
    return fn(a, b, c);
  };
}

function multiplyNumbers(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = partial(multiplyNumbers, 2);
console.log(multiplyBy2(3, 4)); // Output: 24
