// Pure function: Always produces the same output for the same input and has no side effects
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (Same input, same output)

// Pure function: Does not modify external state
function multiply(arr, factor) {
  return arr.map((num) => num * factor);
}

const numbers = [1, 2, 3];
console.log(multiply(numbers, 2)); // Output: [2, 4, 6]
console.log(numbers); // Output: [1, 2, 3] (Original array remains unchanged)

// Impure function: Modifies external state (side effect)
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5)); // Output: 5
console.log(addToTotal(5)); // Output: 10 (Different output for the same input)

// Pure function: Generates a new array instead of modifying the existing one
function addElement(arr, element) {
  return [...arr, element];
}

const originalArray = [1, 2, 3];
const newArray = addElement(originalArray, 4);
console.log(newArray); // Output: [1, 2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3] (Unchanged)
