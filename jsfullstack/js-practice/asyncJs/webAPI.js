//setTimeout Example: Executes once after delay
console.log("Waiting for timeout...");

setTimeout(() => {
  console.log("setTimeout executed after 2 seconds");
}, 2000);

//setInterval Example: Executes repeatedly
let count = 1;
const intervalID = setInterval(() => {
  console.log(`setInterval executed ${count} times`);
  count++;

  if (count > 5) {
    clearInterval(intervalID); // Stop after 5 times
    console.log("setInterval stopped!");
  }
}, 1000);

console.log("Script execution continues...");
