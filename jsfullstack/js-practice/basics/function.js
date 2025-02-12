// Regular Function (Function Declaration)
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Aditya")); // "Hello, Aditya!"

// Function Expression (Anonymous Function assigned to a variable)
const square = function (num) {
  return num * num;
};
console.log(square(4)); // 16

// Arrow Function (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(3, 5)); // 15

// Higher-Order Function (Takes a function as an argument)
function operate(a, b, operation) {
  return operation(a, b);
}
const add = (x, y) => x + y;
console.log(operate(10, 5, add)); // 15

// Higher-Order Function Returning a Function
function createGreeting(language) {
  return (name) => (language === "en" ? `Hello, ${name}!` : `Hola, ${name}!`);
}
const englishGreeting = createGreeting("en");
console.log(englishGreeting("Aditya")); // "Hello, Aditya!"

// Callback Function (Passed as an argument)
function processUserInput(name, callback) {
  console.log(callback(name));
}
processUserInput("Aditya", greet); // "Hello, Aditya!"
