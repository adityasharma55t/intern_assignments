// 1. **Object Literals & Properties**
// An object literal is a simple way of defining an object using curly braces `{}` and key-value pairs.
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};
console.log(person.name); // Outputs: John Doe
console.log(person["age"]); // Outputs: 30

// Properties can be accessed using dot notation or bracket notation.

// 2. **Object Methods**
// JavaScript provides built-in methods to interact with objects, such as Object.keys(), Object.values(), and Object.entries().

// **Object.keys()**: Returns an array of the object's own property names (keys).
const keys = Object.keys(person);
console.log(keys); // Outputs: [ 'name', 'age', 'occupation' ]

// **Object.values()**: Returns an array of the object's own property values.
const values = Object.values(person);
console.log(values); // Outputs: [ 'John Doe', 30, 'Software Developer' ]

// **Object.entries()**: Returns an array of the object's own key-value pairs.
const entries = Object.entries(person);
console.log(entries); // Outputs: [ ['name', 'John Doe'], ['age', 30], ['occupation', 'Software Developer'] ]

// 3. **Object Destructuring**
// Destructuring is a shorthand for extracting properties from an object and assigning them to variables.

// Destructuring with object properties
const { name, age, occupation } = person;
console.log(name); // Outputs: John Doe
console.log(age); // Outputs: 30
console.log(occupation); // Outputs: Software Developer

// Destructuring with renamed variables
const { name: fullName, age: yearsOld } = person;
console.log(fullName); // Outputs: John Doe
console.log(yearsOld); // Outputs: 30

// Destructuring with default values (if the property does not exist in the object)
const { salary = 5000 } = person;
console.log(salary); // Outputs: 5000 (default value, because 'salary' is not in the person object)

// Destructuring nested objects
const company = {
  name: "Tech Corp",
  address: {
    city: "New York",
    zip: "10001",
  },
};

const {
  address: { city, zip },
} = company;
console.log(city); // Outputs: New York
console.log(zip); // Outputs: 10001
