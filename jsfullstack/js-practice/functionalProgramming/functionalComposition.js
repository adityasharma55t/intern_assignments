// Functional Composition Implementation
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

// Example Functions
const add = (x) => x + 2;
const multiply = (x) => x * 3;
const square = (x) => x * x;

// Composing Functions (Right to Left)
const composedFn = compose(square, multiply, add);
console.log(composedFn(5)); // ((5 + 2) * 3)^2 = 441

// Piping Functions (Left to Right)
const pipedFn = pipe(square, multiply, add);
console.log(pipedFn(5)); // (((5)^2) * 3)+2 = 77
