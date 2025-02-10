// Type Conversion (Explicit Conversion)
let numFromString = Number("42"); // String to Number
let strFromNum = String(100); // Number to String
let boolFromString = Boolean(""); // String to Boolean (empty string is falsy)
let boolFromNum = Boolean(1); // Number to Boolean (non-zero number is truthy)

console.log(numFromString); // 42
console.log(strFromNum); // "100"
console.log(boolFromString); // false
console.log(boolFromNum); // true

// Type Coercion (Implicit Conversion)
let result1 = 5 + "5"; // Number 5 is coerced to string
let result2 = 5 - "3"; // String "3" is coerced to number
let logical1 = "Hello" && ""; // Non-empty string is truthy, empty string is falsy
let logical2 = "Hello" || ""; // Non-empty string is truthy, so it's returned

console.log(result1); // "55" (String concatenation)
console.log(result2); // 2 (Number subtraction)
console.log(logical1); // "" (Falsy value)
console.log(logical2); // "Hello" (Truthy value)
