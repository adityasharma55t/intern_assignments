// ===========================
// 1. Creating Arrays
// ===========================

// Array Literal (Recommended)
const fruits = ["Apple", "Banana", "Cherry"];

// Using new Array() Constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Empty Array
const emptyArr = [];

// ===========================
// 2. Accessing & Modifying Elements
// ===========================
console.log(fruits[0]); // "Apple"
fruits[1] = "Mango"; // Modify Element
console.log(fruits); // ["Apple", "Mango", "Cherry"]

// ===========================
// 3. Array Properties
// ===========================
console.log(fruits.length); // 3

// ===========================
// 4. Array Methods
// ===========================

// 4.1 push() – Add Element to End
fruits.push("Grapes");
console.log(fruits); // ["Apple", "Mango", "Cherry", "Grapes"]

// 4.2 pop() – Remove Last Element
fruits.pop();
console.log(fruits); // ["Apple", "Mango", "Cherry"]

// 4.3 unshift() – Add Element to Beginning
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Apple", "Mango", "Cherry"]

// 4.4 shift() – Remove First Element
fruits.shift();
console.log(fruits); // ["Apple", "Mango", "Cherry"]

// 4.5 concat() – Merge Arrays
const moreFruits = ["Pineapple", "Orange"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Mango", "Cherry", "Pineapple", "Orange"]

// 4.6 slice(start, end) – Extract Portion
const citrus = allFruits.slice(2, 4);
console.log(citrus); // ["Cherry", "Pineapple"]

// 4.7 splice(start, deleteCount, ...items) – Modify Array
allFruits.splice(1, 2, "Kiwi", "Watermelon");
console.log(allFruits); // ["Apple", "Kiwi", "Watermelon", "Pineapple", "Orange"]

// 4.8 indexOf() – Find Index of Element
console.log(allFruits.indexOf("Kiwi")); // 1
console.log(allFruits.indexOf("Banana")); // -1 (not found)

// 4.9 includes() – Check if Element Exists
console.log(allFruits.includes("Watermelon")); // true
console.log(allFruits.includes("Banana")); // false

// 4.10 reverse() – Reverse Array Order
console.log(allFruits.reverse()); // ["Orange", "Pineapple", "Watermelon", "Kiwi", "Apple"]

// 4.11 sort() – Sort Array (Alphabetically)
console.log(allFruits.sort()); // ["Apple", "Kiwi", "Orange", "Pineapple", "Watermelon"]

// 4.12 join() – Convert Array to String
console.log(allFruits.join(" - ")); // "Apple - Kiwi - Orange - Pineapple - Watermelon"

// 4.13 toString() – Convert Array to Comma-Separated String
console.log(allFruits.toString()); // "Apple,Kiwi,Orange,Pineapple,Watermelon"

// 4.14 fill(value, start, end) – Fill Array with Value
const filledArray = new Array(5).fill("X");
console.log(filledArray); // ["X", "X", "X", "X", "X"]

// 4.15 some() – Check If Any Element Meets Condition
const numbersArr = [10, 25, 5, 30];
console.log(numbersArr.some((num) => num > 20)); // true

// 4.16 every() – Check If All Elements Meet Condition
console.log(numbersArr.every((num) => num > 0)); // true

// 4.17 filter() – Filter Elements Based on Condition
const filteredNumbers = numbersArr.filter((num) => num > 10);
console.log(filteredNumbers); // [25, 30]

// 4.18 map() – Transform Each Element
const doubledNumbers = numbersArr.map((num) => num * 2);
console.log(doubledNumbers); // [20, 50, 10, 60]

// 4.19 reduce() – Reduce Array to Single Value
const sum = numbersArr.reduce((total, num) => total + num, 0);
console.log(sum); // 70

// 4.20 find() – Find First Matching Element
const foundNumber = numbersArr.find((num) => num > 20);
console.log(foundNumber); // 25

// 4.21 findIndex() – Find Index of First Matching Element
console.log(numbersArr.findIndex((num) => num > 20)); // 1

// 4.22 flat() – Flatten Nested Arrays
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// 4.23 flatMap() – Map & Flatten
const flatMapped = numbersArr.flatMap((num) => [num, num * 2]);
console.log(flatMapped); // [10, 20, 25, 50, 5, 10, 30, 60]

// 4.24 isArray() – Check if Variable is an Array
console.log(Array.isArray(numbersArr)); // true
console.log(Array.isArray("Hello")); // false

// ===========================
// 5. Looping Through Arrays
// ===========================

// 5.1 forEach() – Iterate Over Array
numbersArr.forEach((num) => console.log(num * 2));

// 5.2 for...of Loop
for (let fruit of allFruits) {
  console.log(fruit);
}

// ===========================
// 6. Destructuring Arrays
// ===========================
const [firstFruit, secondFruit] = allFruits;
console.log(firstFruit); // "Apple"
console.log(secondFruit); // "Kiwi"

// ===========================
// 7. Converting Arrays
// ===========================

// Convert String to Array (split)
const sentence = "JavaScript is awesome";
const words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

// Convert Set to Array
const set = new Set([1, 2, 3, 4, 5]);
console.log([...set]); // [1, 2, 3, 4, 5]

// Convert Object Values to Array
const person = { name: "John", age: 30, city: "New York" };
console.log(Object.values(person)); // ["John", 30, "New York"]

// ===========================
// 8. Emptying an Array
// ===========================
let arr = [1, 2, 3];
arr = []; // ✅ Recommended
console.log(arr); // []

// arr.length = 0;  // ✅ Clears array (alternative)
