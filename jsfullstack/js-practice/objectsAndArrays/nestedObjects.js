// ===========================
// 1. Creating a Nested Object
// ===========================
const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  contacts: {
    email: "john@example.com",
    phone: {
      home: "123-456-7890",
      work: "987-654-3210",
    },
  },
  hobbies: ["Reading", "Cycling", "Hiking"],
  isActive: true,
};

// ===========================
// 2. Accessing Nested Properties
// ===========================
console.log(person.name); // "John Doe"
console.log(person.address.city); // "New York"
console.log(person.contacts.phone.work); // "987-654-3210"
console.log(person.hobbies[1]); // "Cycling"

// Using Optional Chaining (Avoids Errors if Property is Undefined)
console.log(person.contacts?.phone?.mobile); // undefined (No Error)

// ===========================
// 3. Modifying Nested Properties
// ===========================
person.address.city = "Los Angeles";
console.log(person.address.city); // "Los Angeles"

person.contacts.phone.mobile = "555-555-5555"; // Adding a new property
console.log(person.contacts.phone.mobile); // "555-555-5555"

person.hobbies.push("Gaming"); // Adding to nested array
console.log(person.hobbies); // ["Reading", "Cycling", "Hiking", "Gaming"]

// ===========================
// 4. Deleting Nested Properties
// ===========================
delete person.contacts.phone.work;
console.log(person.contacts.phone); // { home: "123-456-7890", mobile: "555-555-5555" }

// ===========================
// 5. Looping Through Nested Objects
// ===========================

// Using for...in Loop
for (let key in person.address) {
  console.log(`${key}: ${person.address[key]}`);
}

// Using Object.keys() to Get Keys
Object.keys(person.contacts).forEach((key) => {
  console.log(`${key}: ${person.contacts[key]}`);
});

// Using Object.entries() to Get Key-Value Pairs
Object.entries(person.address).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// ===========================
// 6. Checking If a Property Exists
// ===========================
console.log("city" in person.address); // true
console.log(person.contacts.hasOwnProperty("email")); // true

// ===========================
// 7. Cloning a Nested Object (Shallow & Deep Copy)
// ===========================

// Shallow Copy (Only Copies Top-Level Properties)
const shallowCopy = { ...person };
shallowCopy.address.city = "Miami";
console.log(person.address.city); // "Miami" (Changes Original)

// Deep Copy (Using JSON)
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "Chicago";
console.log(person.address.city); // "Miami" (Original Unaffected)

// Deep Copy (Using StructuredClone)
const deepClone = structuredClone(person);
deepClone.address.city = "San Francisco";
console.log(person.address.city); // "Miami"

// ===========================
// 8. Nested Objects with Functions (Methods)
// ===========================
const car = {
  brand: "Tesla",
  model: "Model S",
  engine: {
    type: "Electric",
    horsepower: 670,
    start: function () {
      console.log(`${this.type} engine started!`);
    },
  },
};

car.engine.start(); // "Electric engine started!"

// ===========================
// 9. Converting Nested Object to JSON
// ===========================
const jsonString = JSON.stringify(person, null, 2);
console.log(jsonString); // Pretty-printed JSON string

const jsonString2 = JSON.stringify(
  person,
  function contactReplacer(key, value) {
    if (
      key === "" ||
      key === "contacts" ||
      key === "email" ||
      key === "phone"
    ) {
      return value; // Keep contacts and its nested properties
    }
    if (typeof value === "object" && value !== null && "home" in value) {
      return value; // Keep nested phone object
    }
    return undefined; // Exclude everything else
  },
  1
);
console.log(jsonString2); // Pretty-printed JSON string

// ===========================
// 10. Parsing JSON Back to Object
// ===========================
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);

// ===========================
// 11. Merging Nested Objects
// ===========================
const extraInfo = {
  job: "Software Engineer",
  company: {
    name: "Tech Corp",
    location: "Silicon Valley",
  },
};

const updatedPerson = { ...person, ...extraInfo };
console.log(updatedPerson);

// ===========================
// 12. Accessing Deeply Nested Properties Safely
// ===========================
const country = person?.address?.country ?? "Not Available";
console.log(country); // "USA"

const mobile = person?.contacts?.phone?.mobile ?? "No mobile number";
console.log(mobile); // "555-555-5555"

// ===========================
// 13. Converting Object Values to Array
// ===========================
console.log(Object.values(person.address)); // ["123 Main St", "Los Angeles", "USA"]
console.log(Object.values(person.contacts.phone)); // ["123-456-7890", "555-555-5555"]
