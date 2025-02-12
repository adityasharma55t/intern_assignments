/*
In JavaScript, the var declaration is function-scoped, meaning 
it is accessible throughout the function in which it is declared, 
or globally if declared outside a function. During each iteration 
of a loop, the var variables stay on the same reference. 
This leads to potential issues with closures in loops.

On the other hand, let and const are block-scoped. This means 
that for each iteration of the loop, a new instance of the 
variable is created. The backend (underlying JavaScript engine) 
ensures that each iteration creates a new reference for let and const.  */

// 1. If-else Statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are an adult.

// 2. Switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday

// 3. For Loop
console.log("For Loop Output:");
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Output:
// 0
// 1
// 2

// 4. While Loop
let counter = 0;
console.log("While Loop Output:");
while (counter < 3) {
  console.log(counter);
  counter++;
}
// Output:
// 0
// 1
// 2

// 5. Do-While Loop
let j = 0;
console.log("Do-While Loop Output:");
do {
  console.log(j);
  j++;
} while (j < 3);
// Output:
// 0
// 1
// 2

// 6. For-in Loop (used for iterating over object properties)
let person = {
  name: "John",
  age: 25,
};
console.log("For-In Loop Output:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 25

// 7. For-of Loop (used for iterating over iterable objects like arrays)
let colors = ["red", "blue", "green"];
console.log("For-Of Loop Output:");
for (let color of colors) {
  console.log(color);
}
// Output:
// red
// blue
// green

function abc() {
  //array of 100 digits, check if num is divisible by 3, 5, 3 and 5

  const arr = [];
  for (var i = 1; i <= 100; i++) {
    arr.push(i);
  }
}
