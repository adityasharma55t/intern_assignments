// ES6 Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating an Instance
const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I am 25 years old.

// Extending a Class (Inheritance)
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the parent constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Creating a Student Instance
const student1 = new Student("Bob", 20, "10th");
student1.greet(); // Hello, my name is Bob and I am 20 years old.
student1.study(); // Bob is studying in grade 10th.
