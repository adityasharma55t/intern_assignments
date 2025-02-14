// Mutability in JavaScript

// 1️⃣ Mutating Primitive Types (Not Possible)
let num = 10;
num = 15; // Reassigning, but original value is lost
console.log(num); // 15

// 2️⃣ Mutable Objects
const obj = { name: "Alice", age: 25 };
obj.age = 26; // Modifying the existing object
console.log(obj); // { name: "Alice", age: 26 }

// 3️⃣ Mutable Arrays
const arr = [1, 2, 3];
arr.push(4); // Directly modifying the array
console.log(arr); // [1, 2, 3, 4]

arr[1] = 99; // Changing a specific index
console.log(arr); // [1, 99, 3, 4]

// 4️⃣ Mutating Objects via References
const newObj = obj;
newObj.name = "Bob"; // Changes original object too (same reference)
console.log(obj, newObj); // { name: "Bob", age: 26 }, { name: "Bob", age: 26 }

// 5️⃣ Mutating Arrays with Methods
arr.pop(); // Removes the last element
console.log(arr); // [1, 99, 3]

arr.splice(1, 1, 50); // Removes element at index 1 and adds 50
console.log(arr); // [1, 50, 3]

// 6️⃣ Avoiding Mutability using Object.freeze()
const frozenObj = Object.freeze({ name: "Charlie", age: 40 });
frozenObj.age = 45; // No effect, object is frozen
console.log(frozenObj.age); // 40
