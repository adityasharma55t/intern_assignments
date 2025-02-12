// 1. Basic IIFE (Creating a private scope)
(function () {
  let privateVar = "I am private!";
  console.log(privateVar); // Outputs: I am private!
})();
console.log(privateVar); // ReferenceError: privateVar is not defined

// 2. IIFE to avoid global scope pollution
(function () {
  var localVar = "I am scoped to IIFE";
  console.log(localVar); // Outputs: I am scoped to IIFE
})();
console.log(localVar); // ReferenceError: localVar is not defined

// 3. IIFE implementing a Module Pattern
const counterModule = (function () {
  let counter = 0;
  return {
    increment: function () {
      counter++;
      console.log(counter);
    },
    decrement: function () {
      counter--;
      console.log(counter);
    },
    getCount: function () {
      return counter;
    },
  };
})();
counterModule.increment(); // Outputs: 1
counterModule.increment(); // Outputs: 2
counterModule.decrement(); // Outputs: 1
console.log(counterModule.getCount()); // Outputs: 1

// 4. IIFE used to handle closures in loops
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // Outputs: 0, 1, 2 (corrected closure)
    }, 1000);
  })(i);
}

// 5. IIFE for immediate setup or configuration
(function () {
  const config = { apiEndpoint: "https://api.example.com", apiKey: "12345" };
  console.log("API Endpoint:", config.apiEndpoint);
  console.log("API Key:", config.apiKey);
})();

// 6. Passing arguments to an IIFE
(function (a, b) {
  console.log(a + b); // Outputs: 10
})(5, 5);

// 7. IIFE for asynchronous operations to create a separate scope
setTimeout(function () {
  (function () {
    let asyncVar = "I am an async scoped variable!";
    console.log(asyncVar); // Outputs: I am an async scoped variable!
  })();
}, 1000);
