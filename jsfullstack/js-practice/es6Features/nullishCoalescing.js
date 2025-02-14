// Nullish Coalescing (??) Examples

// 1. Basic Example
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

// 2. Difference Between || (OR) and ?? (Nullish Coalescing)
let count1 = 0 || 10; // || treats 0 as falsy
console.log(count1); // 10

let count2 = 0 ?? 10; // ?? treats 0 as valid
console.log(count2); // 0

// 3. Using ?? in Function Parameters
function greet(name) {
  name = name ?? "Stranger";
  console.log(`Hello, ${name}!`);
}

greet(null); // "Hello, Stranger!"
greet(undefined); // "Hello, Stranger!"
greet(""); // "Hello, !" (empty string is not replaced)
greet("Alice"); // "Hello, Alice!"

// 4. Chaining ?? Operators
let result = null ?? undefined ?? "Default" ?? "Another";
console.log(result); // "Default"

// 5. Using ?? with Optional Chaining (?.)
let user = {
  profile: {
    name: null,
  },
};

console.log(user.profile.name ?? "No Name"); // "No Name"
console.log(user.profile.age ?? 18); // 18

// 6. Proper Parentheses Usage with && or ||
let x = (null ?? false) || "Fallback";
console.log(x); // "Fallback"
