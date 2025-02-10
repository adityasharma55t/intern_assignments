// 1. String Interpolation
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 25 years old.

// 2. Multiline String
let multilineString = `
This is line 1.
This is line 2.
This is line 3.
`;
console.log(multilineString);
// Output:
// This is line 1.
// This is line 2.
// This is line 3.

// 3. Expressions Inside Template Literals
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

// 4. Tagged Template
function tag(strings, ...values) {
  console.log(strings); // Array of strings
  console.log(values); // Array of values
  return strings[0] + values[0] + strings[1];
}

let taggedString = tag`Name: ${name}, Age: ${age}`;
console.log(taggedString); // Output: Name: John, Age: 25

// 5. Nesting Template Literals
let user = {
  firstName: "John",
  lastName: "Doe",
};

let fullName = `${user.firstName} ${user.lastName}`;
let message = `Hello, ${fullName}! Welcome to the site.`;
console.log(message); // Output: Hello, John Doe! Welcome to the site.
