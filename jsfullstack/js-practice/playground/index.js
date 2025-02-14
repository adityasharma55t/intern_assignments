async function fetchData() {
  console.log("1️⃣ Fetching user...");
  await new Promise((resolve) => {
    console.log("Fetching User Under Process");
    console.log("55");

    setTimeout(() => console.log("ABC"), 3000);
    resolve(console.log("1st Resolved"));
  }); // Simulating API call

  console.log("2️⃣ User fetched ✅");

  console.log("3️⃣ Fetching orders...");
  await new Promise((resolve) => setTimeout(resolve, 4000)); // Another API call
  console.log("4️⃣ Orders fetched ✅");
}

fetchData();
console.log("5️⃣ End of script");

// function createCounter() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     reset: () => (count = 0),
//   };
// }
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.increment());

// // 1
// // 2
// // 3
// // 0
// // 1

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// // 3 3 3

// function countdown(n) {
//   return function () {
//     if (n > 0) {
//       console.log(n);
//       n--;
//       countdown(n)();
//     }
//   };
// }

// const startCountdown = countdown(5);
// startCountdown();

// function secretMessage() {
//   let message = "I am a secret!";
//   return {
//     getMessage: function () {
//       return message;
//     },
//     setMessage: function (newMsg) {
//       message = newMsg;
//     },
//   };
// }

// const secret = secretMessage();
// console.log(secret.getMessage());
// secret.setMessage("New Secret!");
// console.log(secret.getMessage());
