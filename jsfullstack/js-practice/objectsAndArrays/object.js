// ===========================
// 1. Creating Objects
// ===========================

// Object Literal
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

// Object Constructor
const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
car.year = 2023;

// Object Using a Constructor Function
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
const dog = new Animal("Buddy", "Dog");

// ===========================
// 2. Accessing Object Properties
// ===========================

console.log(person.name); // "John"
console.log(person["city"]); // "New York"

// ===========================
// 3. Modifying Objects
// ===========================

person.age = 31; // Update property
person.country = "USA"; // Add new property
delete person.city; // Remove property

// ===========================
// 4. Object Methods
// ===========================

// 4.1 Object.keys(obj) – Get All Keys
console.log(Object.keys(person)); // ["name", "age", "greet", "country"]

// 4.2 Object.values(obj) – Get All Values
console.log(Object.values(person)); // ["John", 31, function, "USA"]

// 4.3 Object.entries(obj) – Get Key-Value Pairs
console.log(Object.entries(person));
// [["name", "John"], ["age", 31], ["greet", function], ["country", "USA"]]

// 4.4 Object.assign(target, source) – Copy Properties
const target = { a: 1 };
const source = { b: 2, c: 3 };
const merged = Object.assign(target, source);
console.log(merged); // { a: 1, b: 2, c: 3 }
//Here, the merge and target variables point to the same location

// 4.5 Object.freeze(obj) – Prevent Modifications
Object.freeze(person);
person.age = 40; // ❌ No effect, as object is frozen
console.log(person.age); // 31

// 4.6 Object.seal(obj) – Allow Modifications But No New Additions
const user = { name: "Alice", role: "Admin" };
Object.seal(user);
user.role = "User"; // ✅ Allowed
user.email = "alice@example.com"; // ❌ Not allowed
console.log(user); // { name: "Alice", role: "User" }

// 4.7 Object.hasOwnProperty(key) – Check Property Existence
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("salary")); // false

// 4.8 Object.fromEntries(array) – Convert Key-Value Array to Object
const entries = [
  ["brand", "Tesla"],
  ["model", "Model 3"],
];
const carObject = Object.fromEntries(entries);
console.log(carObject); // { brand: "Tesla", model: "Model 3" }

// ===========================
// 5. Looping Through Objects
// ===========================

// 5.1 Using for...in Loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 5.2 Using Object.keys()
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// ===========================
// 6. Checking if an Object is Empty
// ===========================
const emptyObj = {};
console.log(Object.keys(emptyObj).length === 0); // true

// ===========================
// 7. Merging Objects
// ===========================
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// ===========================
// 8. Object Destructuring
// ===========================
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 31

// ===========================
// 9. Object Methods (Shorthand)
// ===========================
const userInfo = {
  firstName: "Alice",
  lastName: "Doe",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(userInfo.fullName()); // "Alice Doe"

// ===========================
// 10. Converting Object to JSON & Back
// ===========================
const jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","age":31,"greet":function,"country":"USA"}'

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // { name: "John", age: 31, country: "USA" }
