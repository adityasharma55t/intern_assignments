// 1. Number: Represents both integer and floating-point numbers.
console.log("1. Number:");
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
console.log(num1); // 42
console.log(num2); // 3.14
console.log(typeof num1); // number
console.log(typeof num2); // number

//SUBTYPES OF NUMBERS

// 1. Integer Numbers
let num11 = 42; // Positive integer
let num12 = -7; // Negative integer
let num13 = 0; // Zero (integer)
console.log(num11); // 42
console.log(num12); // -7
console.log(num13); // 0

// 2. Floating-Point Numbers
let float1 = 3.14; // Positive float
let float2 = -0.0001; // Negative float
let float3 = 1.23e4; // Scientific notation (1.23 * 10^4 = 12300)
let float4 = 4.56e-3; // Scientific notation (4.56 * 10^-3 = 0.00456)
console.log(float1); // 3.14
console.log(float2); // -0.0001
console.log(float3); // 12300
console.log(float4); // 0.00456

// 3. Special Numbers
let result = 0 / 0; // NaN (Not a Number)
console.log(result); // NaN
console.log(isNaN(result)); // true

let positiveInfinity = 1 / 0; // Positive infinity
let negativeInfinity = -1 / 0; // Negative infinity
console.log(positiveInfinity); // Infinity
console.log(negativeInfinity); // -Infinity

let zero = 0;
let negativeZero = -0;
console.log(zero === negativeZero); // true (but behaves differently in some cases)

// 4. BigInt (For Large Integers)
let bigNumber = 9007199254740991n; // Large integer using BigInt
let anotherBigNumber = 9007199254740992n; // Another BigInt
console.log(bigNumber); // 9007199254740991n
console.log(typeof bigNumber); // bigint

// 5. Binary, Octal, and Hexadecimal Numbers
let binary = 0b1010; // Binary representation of 10
let octal = 0o12; // Octal representation of 10
let hex = 0xa; // Hexadecimal representation of 10
console.log(binary); // 10
console.log(octal); // 10
console.log(hex); // 10

//SUBTYPES OF NUMBERS END
// 2. String: Represents a sequence of characters.
console.log("\n2. String:");
let str1 = "Hello, World!";
let str2 = "Single quotes string";
let str3 = `Template literal with ${num1}`;
console.log(str1); // Hello, World!
console.log(str2); // Single quotes string
console.log(str3); // Template literal with 42
console.log(typeof str1); // string
console.log(typeof str2); // string
console.log(typeof str3); // string

// 3. Boolean: Represents a logical entity, true or false.
console.log("\n3. Boolean:");
let bool1 = true;
let bool2 = false;
console.log(bool1); // true
console.log(bool2); // false
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean

// 4. Null: Represents the intentional absence of any object value.
console.log("\n4. Null:");
let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // object (this is a quirk in JavaScript)

// 5. Undefined: Represents an uninitialized variable.
console.log("\n5. Undefined:");
let undef;
console.log(undef); // undefined
console.log(typeof undef); // undefined

// 6. Symbol: Represents a unique and immutable primitive value (used primarily for object property keys).
console.log("\n6. Symbol:");
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (Symbols are always unique)
console.log(typeof sym1); // symbol

// 7. BigInt: Represents numbers larger than the `Number` type can safely represent.
console.log("\n7. BigInt:");
let bigInt1 = 1234567890123456789012345678901234567890n; // 'n' suffix denotes BigInt
console.log(bigInt1); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt1); // bigint

// 8. Object: Represents a collection of key-value pairs (reference type).
console.log("\n8. Object:");
let person = {
  name: "Alice",
  age: 30,
};
console.log(person); // { name: "Alice", age: 30 }
console.log(typeof person); // object

// 9. Array: Represents an ordered list of values (also a reference type).
console.log("\n9. Array:");
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(typeof arr); // object (arrays are objects in JavaScript)

// 10. Function: A block of code that is callable (also a reference type).
console.log("\n10. Function:");
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("John")); // Hello, John!
console.log(typeof greet); // function
