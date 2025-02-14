class Person {
  // Public Field
  name;

  // Private Field
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  // Public Method
  introduce() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  // Private Method
  #getAge() {
    return this.#age;
  }

  // Public Method Accessing Private Field
  showAge() {
    console.log(`${this.name} is ${this.#getAge()} years old.`);
  }
}

const person1 = new Person("Alice", 25);
person1.introduce(); // Hello, my name is Alice.
person1.showAge(); // Alice is 25 years old.

console.log(person1.name); // Alice (Public field is accessible)
console.log(person1.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class
console.log(person1.#getAge()); // SyntaxError: Private method '#getAge' is not accessible outside the class
