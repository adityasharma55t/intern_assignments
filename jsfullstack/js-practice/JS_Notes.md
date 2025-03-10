This page is created to note down my current JS Learning, majorly from Akshay Saini’s Namaste JavaScript Playlist.

# Introduction

JavaScript is a **_synchronous, single-threaded_** language.

Everything in JS happens inside the “Execution Context”. It has two components:

![image.png](attachment:35189d19-13e7-48c8-b0bc-c1d788477635:image.png)

1. **Memory component or Variable Environment**

   All variables and functions are stored in this in key value pairs

2. **Code Component or Thread of Execution**

   Here the code is executed one line at a time - **single threaded**

   Code is executed in a specific order; the next line is reached when current line finishes execution - **synchronous**

# **Variables in JavaScript**

Variables are used to store data that can be referenced and manipulated in a program.

### **3 Ways to Declare Variables:**

1. **`var`**
   - Oldest way to declare variables in JavaScript.
   - Function-scoped (available within the function where it was declared).
   - Can be redeclared and updated.
   - **Example:**
     ```jsx
     var name = "Alice";
     var age = 25;
     ```
2. **`let`**
   - Introduced in ES6 (ECMAScript 2015).
   - Block-scoped (available within the block `{}` where it is declared).
   - Can be updated but **cannot** be redeclared in the same scope.
   - **Example:**
     ```jsx
     let name = "Bob";
     let age = 30;
     ```
3. **`const`**
   - Also introduced in ES6.
   - Block-scoped.
   - **Cannot** be updated or redeclared.
   - Must be initialized with a value at the time of declaration.
   - **Example:**
     ```jsx
     const pi = 3.14159;
     ```

### **Key Differences:**

- **Scope:**
  - **`let`** and **`const`** are **block-scoped**, meaning they are only accessible within the block `{}` where they are defined (e.g., inside loops or conditionals). They are not initialized in the Global Scope but in a separate memory space (can be seen as Script in browser sources).
  - **`var`** is **function-scoped**, meaning it is accessible throughout the entire function in which it is declared, even if declared inside a block.
  ### Example with Block Scope:
  ```jsx
  if (true) {
    var varVar = "I am var";
    let letVar = "I am let";
    const constVar = "I am const";
  }

  console.log(varVar); // Logs 'I am var' (accessible outside the block)
  console.log(letVar); // ReferenceError: letVar is not defined
  console.log(constVar); // ReferenceError: constVar is not defined
  ```
- **Re-declaration:**
  - `var` can be redeclared but `let` and `const` cannot (within the same scope).
- **Value Re-assignment:**
  - `let` allows reassignment.
  - `const` does not allow reassignment (but objects and arrays declared with `const` can still have their contents modified).

---

### **Data Types in JavaScript**

JavaScript has various data types that define the kind of value a variable can hold.

### **1. Primitive Data Types:**

- **String:** Represents a sequence of characters.
  ```jsx
  let name = "John";
  ```
- **Number:** Represents numeric values (integers or floats).
  ```jsx
  let age = 25;
  let price = 9.99;
  ```
- **Boolean:** Represents a true or false value.
  ```jsx
  let isActive = true;
  ```
- **Undefined:** A variable that is declared but not assigned a value has the value `undefined`. A variable should not be assigned undefined value explicitly. This is a bad practice. If a variable holds the value undefined even at the end of the program, it can be assumed that it has not been affected or utilized in the code at all.
  ```jsx
  let something;
  console.log(something); // undefined
  ```
- **Null:** Represents an intentional absence of any object value.
  ```jsx
  let user = null;
  ```
- **Symbol (ES6+):** Represents a unique and immutable value.
  ```jsx
  const symbol1 = Symbol("description");
  ```
- **BigInt (ES11+):** Represents large integers.
  ```jsx
  const bigNumber = 1234567890123456789012345678901234567890n;
  ```

### **2. Non-Primitive Data Types:**

- **Object:** A collection of key-value pairs.
  ```jsx
  const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
  };
  ```
- **Array:** A special type of object used to store ordered collections of values.
  ```jsx
  let fruits = ["apple", "banana", "cherry"];
  ```

---

### **Key Points:**

- Variables are used to store and manipulate data in JavaScript.
- The `let` and `const` keywords are generally recommended over `var` for better scoping and clarity.
- JavaScript's data types can be classified as primitive and non-primitive (objects and arrays).

---

These notes give a solid foundation for understanding variables and data types in JavaScript. Let me know if you need any clarifications or more details on any part!

# Code Execution

## Global Execution Context

When a JS Program is run, it creates a Global Execution Context for the program. This execution context is processed in two phases, namely, memory allocation phase and code execution phase, the details are as follows:

1. **Memory Allocation Phase**

   In this phase, the control runs through the program and all variables are loaded in the variable environment. Non-function variables are assigned **undefined** value and for functions, the entire function code is loaded into the memory. This is followed by the code execution phase.

2. **Code Execution Phase**

   Once all variables are loaded into the memory, this phase begins. The code is executed line by line. Variables are assigned values as defined in the code and expressions are processed serially. **If the control encounters a function, it skips the entirety of it and moves to the code after the function.**

   In this execution**, when a function call is encountered, a new execution context is created for it** and the same memory allocation and code execution phases are processed for this context. This context is nested inside the global execution context.

   When the control encounters the return statement inside this function, the control is passed back to the parent execution context and further expressions and lines are processed.

   There may be multiple functions nested in the code; JavaScript creates execution contexts for these functions. These nested contexts are beautifully managed by JavaScript using something called the Call Stack

## The Call Stack

**_“The Call Stack maintains the order of execution of the execution contexts”_**

At the base of the call stack is the Global Execution Context. All nested contexts are added to the top of the stack and are managed in the Last In First Out (LIFO) Order. The call stack is terminated when the Global Execution Context is completely executed, i.e., at the end of the program

![image.png](attachment:b6208e4c-13a0-4090-900a-3139fa36e80f:image.png)

# Hoisting

Hoisting is a concept in JavaScript that allows for variables to be available for use even before they are declared in the program. In simpler terms, hoisting can be understood as all variable declarations being moved to the top of the program _without their assignments._

Hoisting is made possible owing to the two phases in the process of execution of code in JavaScript. In the memory allocation phase, all variables are stored in the variable environment with undefined values and all functions declared using the function keyword are entirely stored in the variable environment. **All functions declared using arrow functions or variables are treated like variables and thus cannot be hoisted as they are treated like variables and are thus undefined.**

The **Temporal Dead Zone (TDZ)** in JavaScript refers to the time between when a variable is hoisted (declared) and when it is actually initialized with a value. During this period, the variable is in a "dead zone," meaning it exists in memory but is **not yet accessible**. If you try to access it before its initialization, JavaScript will throw a `ReferenceError`.

This behaviour only applies to variables declared with `let` and `const` (since both are block-scoped). It does not apply to `var`, which behaves differently because it is initialized with `undefined` when hoisted.

### **Why Does the Temporal Dead Zone Happen?**

- When a variable is declared using `let` or `const`, it is hoisted to the top of its block scope, but its initialization is delayed until the point in the code where the declaration is encountered.
- Before this point, the variable is in the "temporal dead zone," and trying to reference it before it’s initialized will result in a `ReferenceError`.

### **Example of Temporal Dead Zone:**

```jsx
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

In the example above:

- `x` is hoisted, but it is in the **temporal dead zone** until the `let x = 10` line is executed.
- Trying to access `x` before the initialization results in a `ReferenceError`.

### **Key Points About TDZ:**

1. **Applies only to `let` and `const`:** Variables declared with `var` are not affected by the TDZ; they are initialized with `undefined`.
2. **Block-scoped:** The TDZ occurs within the block in which the variable is declared.
3. **Accessing before initialization:** If you try to use a `let` or `const` variable before its declaration, it will throw a `ReferenceError`.

### **Example with `const` in TDZ:**

```jsx
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 5;
```

### **Correct Access (After Initialization):**

```jsx
let x = 10;
console.log(x); // 10
```

Thus, given that JavaScript hoists the variables, because of the TDZ Concept, utilization of hoisting properties is available on var variables and functions declared using function keyword only.

# Functions and Global Space

### **Execution Context and the Call Stack in JavaScript**

Whenever a **function** is called in JavaScript, a new **execution context** is created for that function. This context is then added to the **call stack**. The **execution context** contains everything necessary to execute the function, such as:

- The **function's local variables**.
- The **scope** or **lexical environment** (the surrounding context where the function was declared).
- The “**_this_” value**.
- The **arguments** passed to the function.

### **Function's Execution Context and the Call Stack**

When a function is executed, a new execution context is pushed onto the **call stack**. This context is where the function’s local variables and other details are stored.

Once the function finishes executing, its execution context is popped off the call stack, and the program continues with the next function in the stack (or the global execution context).

### Example:

```jsx
function greet() {
  let message = "Hello, World!";
  console.log(message);
}

greet(); // Creates an execution context for 'greet' and pushes it to the stack
```

In this example, when the `greet` function is called:

1. A new execution context for `greet` is created and added to the top of the call stack.
2. The variable `message` inside `greet` becomes part of that context.
3. Once `greet` finishes executing, its context is popped off the call stack.

---

### **Lexical Scope and Accessing Variables**

**Lexical scope** refers to the fact that in JavaScript, a function’s scope (the set of variables it has access to) is determined by where the function is defined, not where it is called. So, functions have access to variables from their **lexical environment**, which includes:

- The variables defined in their own execution context.
- The variables in the surrounding (outer) execution contexts.

### Example:

```jsx
let outerVar = "I am outside the function";

function outerFunction() {
  console.log(outerVar); // This can access 'outerVar' because it's in the lexical scope

  function innerFunction() {
    let innerVar = "I am inside the function";
    console.log(innerVar); // This can access 'innerVar' because it's inside its own scope
    console.log(outerVar); // It can also access 'outerVar' from the outer scope
  }

  innerFunction(); // Calling the inner function
}

outerFunction(); // Calling the outer function
```

**Explanation:**

- In this case, `outerFunction` has access to `outerVar` because `outerVar` is within its **lexical scope** (it's defined outside the function but still accessible inside).
- The `innerFunction` has access to both its own local variable `innerVar` and the variable `outerVar` from the surrounding `outerFunction` scope.

---

### **Independent Variables Inside a Function**

Variables declared inside a function are **local** to that function and cannot be accessed outside of it. This means they are **independent** of the variables declared outside.

### Example:

```jsx
let globalVar = "I'm outside the function";

function myFunction() {
  let localVar = "I'm inside the function";
  console.log(localVar); // Accessible inside the function
}

console.log(globalVar); // Accessible outside the function
console.log(localVar); // ReferenceError: localVar is not defined
```

**Explanation:**

- `localVar` is **only accessible** inside `myFunction`, as it's part of that function's execution context.
- `globalVar` is declared outside, so it's accessible in the global scope, but `localVar` is **not** accessible outside `myFunction`.

### **Global Execution Context and Global Space in JavaScript**

In JavaScript, **global space** refers to the **variables and code** that are not contained within any function. This space exists in the **Global Execution Context**, which is created when JavaScript code starts running.

The **Global Execution Context** is the outermost context in which the JavaScript code runs. It's where the code execution starts when no other execution context (like a function call) is active.

When JavaScript code is executed, it runs inside a **JavaScript Engine** that is provided by the runtime environment. This environment could be a browser, a server (via Node.js), or other JavaScript environments. Different environments have different global objects and behaviours, but in most cases, the **global object** is a central concept.

---

### **Global Execution Context and Global Object**

In the context of **browsers**, when JavaScript code runs, a **Global Execution Context** is created. Along with this context, a **global object** is created to represent the global environment.

In **browsers**, the **global object** is called the **`window` object**.

- The **Global Execution Context** refers to the environment in which the global code runs.
- The **Global Object** is an object that holds all global variables and functions.
- **`this`** points to the global object in the global execution context.

---

### **The `window` Object in Browsers**

In the browser, the global object is called the **`window`** object. This is where all global variables and functions are attached. For example:

```jsx
var globalVar = "I am a global variable";

function globalFunction() {
  console.log("I am a global function");
}

console.log(globalVar); // Output: I am a global variable
globalFunction(); // Output: I am a global function

console.log(window.globalVar); // Output: I am a global variable
window.globalFunction(); // Output: I am a global function
```

In this example:

- `globalVar` and `globalFunction` are declared in the **global space**, and they are automatically added to the **`window` object**.
- You can access these global variables and functions using `window.globalVar` and `window.globalFunction()`.

---

### **`this` in the Global Execution Context**

In the global execution context, the **`this`** keyword refers to the global object. In the browser, since the global object is the `window` object, **`this`** in the global context points to the `window` object.

```jsx
console.log(this); // In a browser, this will log the `window` object
```

When you call `this` outside of any function or object, it will refer to the global object, which is the `window` in browsers.

---

### **Global Execution Context in Different Environments**

The global execution context behaves differently in different runtime environments:

1. **In Browsers:**
   - The **global object** is the `window` object.
   - **`this`** points to the `window` object in the global context.
2. **In Node.js (Server-Side):**
   - The **global object** is the `global` object.
   - **`this`** in the global context refers to the `global` object, not the `window` object.

Example in Node.js:

```jsx
console.log(this); // In Node.js, this will log the `global` object
```

---

### **Scope Chaining in JavaScript**

**Scope chaining** refers to the process by which JavaScript looks for a variable in the current function's scope, and if it doesn’t find it there, it looks in the outer (enclosing) scopes, until it either finds the variable or reaches the global scope.

JavaScript uses **lexical scoping** to determine the scope chain, meaning that the scope is determined at the time of function creation, not at the time of execution.

### **Example:**

```jsx
let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(innerVar); // Logs 'I am inner' (found in local scope)
    console.log(outerVar); // Logs 'I am outer' (found in enclosing scope)
    console.log(globalVar); // Logs 'I am global' (found in global scope)
  }

  innerFunction();
}

outerFunction();
```

### **How Scope Chaining Works:**

1. **Function Local Scope**: When a variable is referenced inside a function, JavaScript first looks for the variable within the function’s **local scope**.
2. **Enclosing (Outer) Scope**: If the variable isn't found in the local scope, JavaScript looks in the **outer scope** (the scope where the function is defined).
3. **Global Scope**: If the variable isn’t found in the outer scopes, JavaScript looks in the **global scope** (e.g., the `window` object in browsers).
4. **Return `undefined`**: If the variable is not found in any scope, JavaScript returns `undefined`.

# Shadowing

**Shadowing** in JavaScript occurs when a variable declared in an inner scope (like a block or function) has the same name as a variable in the outer scope. The inner variable "shadows" or "overrides" the outer variable within its scope, meaning the inner variable takes precedence within that block or function.

Let's break down the examples in your code:

### 1. **Using `let` (Block-scoped variables)**

```jsx
let a = 10;
{
  let a = 20;
  console.log(a); // Outputs: 20
}
console.log(a); // Outputs: 10
```

- **Explanation**: In this case, the `let` variable inside the block shadows the `let` variable outside the block. Both variables are separate and exist in different scopes (the block scope and the outer scope). The `console.log` inside the block refers to the inner `a`, which is `20`, while the outer `a` remains `10` after the block.

### 2. **Using `var` (Function-scoped variables)**

```jsx
const b = 30;
{
  var b = 10;
  console.log(b);
}
console.log(b);
```

- **Explanation**: This code results in an error. The reason is that `var` is **function-scoped** (or globally scoped if declared outside a function). During **hoisting**, the `var b` declaration is moved to the top of the scope, and thus the second `b` (declared inside the block) interferes with the first one. This results in unexpected behavior or errors when you try to redeclare `var` in the same scope.

### 3. **Using `var` and `let` Together**

```jsx
var c = 50;
{
  let c = 40;
  console.log(c); // Outputs: 40
}
console.log(c); // Outputs: 50
```

- **Explanation**: Here, the `let` inside the block shadows the `var` outside the block. Since `let` is block-scoped, the inner `c` (with value `40`) is separate from the outer `c` (with value `50`). The `let` inside the block doesn't affect the `var` outside it, so the `console.log(c)` outside the block outputs `50`.

# Closures

A function bundled together with its surrounding state or along with its lexical scope is called a closure. Functions maintain their lexical scope. When a closure function is returned, it is returned along with its lexical scope.

The lexical scope is not limited only to the immediate parent, but the entire hierarchy of functions available in the lexical scope.

A **closure** is a function that "remembers" its lexical scope, even after the outer function has finished executing. In simpler terms, a closure is a function bundled with its surrounding state (variables, parameters) and the environment in which it was created. This allows the inner function to access variables from the outer function even when the outer function has finished executing.

### Key Points:

- **Lexical Scope**: The scope in which a function is declared. Functions in JavaScript retain access to variables from their lexical scope.
- **Closure**: When a function is returned from another function, it "captures" the lexical scope from where it was created and can still access those variables even after the outer function finishes executing.

The scope isn't limited to just the immediate parent function. It can access the entire hierarchy of functions available in the lexical scope, creating what is known as a **closure chain**.

### Example 1: Returning a Closure

In the first example, a function `x()` returns another function `y()`, which uses a variable from its lexical scope (`a`).

```jsx
function x() {
  let a = 1;
  console.log(33);
  return function y() {
    console.log(a); // 'a' is from the lexical scope of x
  };
}
x(); // Calls the function but doesn't capture the returned closure
let z = x(); // 'z' now stores the closure function 'y'
console.log(z); // Logs the closure function
z(); // Executes 'y()' and outputs the value of 'a'
```

### Output:

```
33  // From the first call to x()
33  // From the second call to x()
ƒ y() {
  console.log(a);
}  // This is the closure function
1  // Output from the closure function y(), which remembers 'a' from x()

```

- The **closure** here is the function `y()` returned by `x()`. It maintains access to the variable `a` from its lexical scope, even though `x()` has finished executing.

### Example 2: Assigning Functions to Variables

In this example, the function `p()` doesn't return anything, but we assign it to variable `r`. Since `p()` doesn't return a function, `r` simply references the entire function `p`.

```jsx
function p() {
  let c = 1;
  console.log(33);
  function q() {
    console.log(c);
  }
}
p(); // Calls p() and logs 33
let r = p; // Assigns function p to variable r
console.log(r); // Logs the function p
r(); // Executes r, which is function p(), but does not return a value
```

### Output:

```
33  // From calling p()
ƒ p() {    // Shows the entire function p()
  let c = 1;
  console.log(33);
  function q() {
    console.log(c);
  }
}
33  // Logs from calling p(), but no value is returned

```

- **Note**: Since `p()` does not return anything, `r` simply references the entire function `p`. If `p()` were to return a function (like `q()`), that returned function would form a closure.

### Example 3: Closure Without Dependency

If a variable from an outer function is not used in the inner function, it doesn't form a closure, because the inner function doesn't depend on the outer function's lexical scope.

```jsx
function outer() {
  let a = 1;
  console.log(a);
  return function inner() {
    return 54 + a; // Uses 'a' from the outer function's lexical scope
  };
}
let close = outer();
console.log(close); // Logs the returned function inner
console.log(close()); // Calls the closure function and accesses 'a' from outer
```

### Output:

```
1  // Output from the outer function, showing 'a'
ƒ inner() {   // Logs the closure function 'inner'
  return 54 + a;
}
55  // Output from calling inner(), which has access to 'a' from the outer function

```

- In this case, the inner function `inner()` **forms a closure** because it relies on the variable `a` from its outer lexical scope (from the `outer()` function).

### Conclusion:

- **Closures** allow inner functions to "remember" and access variables from their outer function’s lexical scope, even after the outer function finishes execution.
- A function **only forms a closure** if it depends on variables from its outer scope.
- **Lexical scope** isn't limited to just the immediate parent but includes the entire chain of scopes available when the function was created.
