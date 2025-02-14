// Base Prototype Object
const animal = {
  makeSound() {
    console.log(`${this.name} makes a sound`);
  },
};

// Creating an Object that Inherits from 'animal'
const dog = Object.create(animal);
dog.name = "Buddy";
dog.makeSound(); // Buddy makes a sound

// Adding a New Method to the Prototype
animal.eat = function () {
  console.log(`${this.name} is eating`);
};

dog.eat(); // Buddy is eating

// Constructor Function with Prototype Inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Person("Alice");
student.greet(); // Hello, my name is Alice

// 5️⃣ Checking Prototype Chain
console.log(dog.__proto__ === animal); // true
console.log(student.__proto__ === Person.prototype); // true
