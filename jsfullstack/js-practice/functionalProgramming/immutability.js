// Immutability in JavaScript

// Immutable Primitive Types (Numbers, Strings, Booleans)
let num = 10;
let newNum = num + 5; // New value, original num is unchanged
console.log(num, newNum); // 10, 15

let str = "Hello";
let newStr = str.toUpperCase(); // New string created, original remains
console.log(str, newStr); // Hello, HELLO

// Mutable vs Immutable Objects
const obj = { name: "Alice", age: 25 };
const newObj = { ...obj, age: 26 }; // Spread operator creates a new object
console.log(obj, newObj); // { name: "Alice", age: 25 }, { name: "Alice", age: 26 }

// Immutable Arrays
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Spread operator creates a new array
console.log(arr, newArr); // [1, 2, 3], [1, 2, 3, 4]

// Using Map & Filter Instead of Mutating
const doubledArr = arr.map((num) => num * 2);
console.log(arr, doubledArr); // [1, 2, 3], [2, 4, 6]

const filteredArr = arr.filter((num) => num > 1);
console.log(arr, filteredArr); // [1, 2, 3], [2, 3]

// Preventing Mutation Using Object.freeze()
const frozenObj = Object.freeze({ name: "Bob", age: 30 });
frozenObj.age = 31; // No effect, object is frozen
console.log(frozenObj.age); // 30

// Using Functional Programming for Immutability
const updateAge = (person, newAge) => ({ ...person, age: newAge });
const updatedPerson = updateAge(obj, 30);
console.log(obj, updatedPerson); // { name: "Alice", age: 25 }, { name: "Alice", age: 30 }
