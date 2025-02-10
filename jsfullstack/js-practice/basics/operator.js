// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (remainder): 0
console.log(a ** b); // Exponentiation (10 raised to the power of 5): 100000

// 2. Assignment Operators
let x = 20;
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3

console.log("\nAssignment Operators:");
console.log(x); // Result of the various assignment operations

// 3. Comparison Operators
let c = 10;
let d = 15;

console.log("\nComparison Operators:");
console.log(c == d); // Equal to (false)
console.log(c === d); // Strict equal to (false)
console.log(c != d); // Not equal to (true)
console.log(c !== d); // Strict not equal to (true)
console.log(c > d); // Greater than (false)
console.log(c < d); // Less than (true)
console.log(c >= d); // Greater than or equal to (false)
console.log(c <= d); // Less than or equal to (true)

let result1 = 5 == "5"; // Coerces string "5" to number 5
console.log(result1); // true

let result2 = 5 === "5"; // Strict comparison (no type coercion)
console.log(result2); // false

// 4. Logical Operators
let e = true;
let f = false;

console.log("\nLogical Operators:");
console.log(e && f); // AND (false)
console.log(e || f); // OR (true)
console.log(!e); // NOT (false)

// 5. Increment/Decrement Operators
let g = 5;
console.log("\nIncrement/Decrement Operators:");
console.log(g++); // Post-increment (5)
console.log(++g); // Pre-increment (7)
console.log(g--); // Post-decrement (7)
console.log(--g); // Pre-decrement (5)

// 6. Ternary Operator
let result = a > b ? "a is greater" : "b is greater";
console.log("\nTernary Operator:");
console.log(result); // "a is greater"

// 7. Type Operators
let number = 42;
let text = "Hello";

console.log("\nType Operators:");
console.log(typeof number); // "number"
console.log(typeof text); // "string"
console.log(typeof a); // "number"
console.log(typeof null); // "object" (historical bug in JS)

// 8. Bitwise Operators
let i = 5; // 0101 in binary
let j = 3; // 0011 in binary

console.log("\nBitwise Operators:");
console.log(i & j); // AND (1)
console.log(i | j); // OR (7)
console.log(i ^ j); // XOR (6)
console.log(~i); // NOT (-6)
console.log(i << 1); // Left Shift (10)
console.log(i >> 1); // Right Shift (2)

// 9. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log("\nSpread Operator:");
console.log(arr2); // [1, 2, 3, 4, 5]

// 10. Destructuring Assignment
let [first, second] = [10, 20];
let { name, age } = { name: "John", age: 30 };

console.log("\nDestructuring Assignment:");
console.log(first); // 10
console.log(second); // 20
console.log(name); // John
console.log(age); // 30
