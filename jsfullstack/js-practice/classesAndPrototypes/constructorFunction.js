// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding Methods to the Prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating Instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice and I am 25 years old.
person2.greet(); // Hello, my name is Bob and I am 30 years old.

// Constructor Function with Inheritance
function Student(name, age, grade) {
  Person.call(this, name, age); // Call parent constructor
  this.grade = grade;
}

// Inheriting Prototype Methods
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Adding New Method to Student
Student.prototype.study = function () {
  console.log(`${this.name} is studying in grade ${this.grade}.`);
};

// Creating Student Instance
const student1 = new Student("Charlie", 20, "10th");
student1.greet(); // Hello, my name is Charlie and I am 20 years old.
student1.study(); // Charlie is studying in grade 10th.
