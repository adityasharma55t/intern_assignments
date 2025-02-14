// 🔹 Spread Operator (...) – Expands elements of an array/object

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // Expanding elements
console.log(newNumbers); // [1, 2, 3, 4, 5]

const person = { name: "Aditya", age: 22 };
const clonedPerson = { ...person, city: "Pilani" }; // Copy & add new property
console.log(clonedPerson); // { name: "Aditya", age: 22, city: "Pilani" }

// 🔹 Rest Operator (...) – Gathers remaining elements into an array

function sum(first, second, ...rest) {
  console.log(first, second); // First two values
  console.log(rest); // Remaining values as an array
}
sum(10, 20, 30, 40, 50); // 10, 20, [30, 40, 50]

const { name, ...otherDetails } = clonedPerson; // Extract name, rest in otherDetails
console.log(otherDetails); // { age: 22, city: "Pilani" }
