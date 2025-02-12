// ===========================
// 1. Creating Strings
// ===========================

const str1 = "Hello, World!"; // Double quotes
const str2 = "JavaScript is awesome"; // Single quotes
const str3 = `Template literals allow ${str2}`; // Backticks (Template Literals)

console.log(str3); // "Template literals allow JavaScript is awesome"

// ===========================
// 2. String Properties
// ===========================
console.log(str1.length); // 13

// ===========================
// 3. String Methods
// ===========================

// 3.1 charAt(index) – Get Character at Position
console.log(str1.charAt(0)); // "H"

// 3.2 charCodeAt(index) – Get Unicode of Character
console.log(str1.charCodeAt(0)); // 72 (ASCII of 'H')

// 3.3 at(index) – Get Character at Position (Supports Negative Index)
console.log(str1.at(-1)); // "!"

// 3.4 toUpperCase() – Convert to Uppercase
console.log(str1.toUpperCase()); // "HELLO, WORLD!"

// 3.5 toLowerCase() – Convert to Lowercase
console.log(str1.toLowerCase()); // "hello, world!"

// 3.6 trim() – Remove Whitespace from Start & End
const strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // "Hello, World!"

// 3.7 trimStart() – Remove Leading Whitespace
console.log(strWithSpaces.trimStart()); // "Hello, World!   "

// 3.8 trimEnd() – Remove Trailing Whitespace
console.log(strWithSpaces.trimEnd()); // "   Hello, World!"

// 3.9 slice(start, end) – Extract Substring
console.log(str1.slice(0, 5)); // "Hello"
console.log(str1.slice(-6, -1)); // "World"

// 3.10 substring(start, end) – Extract Substring (No Negative Index)
console.log(str1.substring(0, 5)); // "Hello"

// 3.11 substr(start, length) – Extract Substring (Deprecated)
console.log(str1.substr(7, 5)); // "World"

// 3.12 replace(search, newValue) – Replace First Match
console.log(str1.replace("World", "JavaScript")); // "Hello, JavaScript!"

// 3.13 replaceAll(search, newValue) – Replace All Matches
const text = "apple apple apple";
console.log(text.replaceAll("apple", "orange")); // "orange orange orange"

// 3.14 includes(substring) – Check If String Contains Substring
console.log(str1.includes("World")); // true
console.log(str1.includes("Python")); // false

// 3.15 startsWith(substring) – Check If String Starts With Substring
console.log(str1.startsWith("Hello")); // true

// 3.16 endsWith(substring) – Check If String Ends With Substring
console.log(str1.endsWith("!")); // true

// 3.17 indexOf(substring) – Get First Occurrence Index
console.log(str1.indexOf("World"));
