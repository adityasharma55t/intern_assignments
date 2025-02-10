const errorHandler = () => {
  try {
    var a;
    console.log(a);
    throw new SyntaxError("Deliberate Error");
  } catch (error) {
    console.log("Error Handled!", error);
  } finally {
    console.log("Executed");
  }
};

errorHandler();

const typeError = () => {
  try {
    const a = 10;
    a = 30;
    console.log(a);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Executed");
  }
};

typeError();

const refError = () => {
  try {
    b = 30;
    console.log(a);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Executed");
  }
};

refError();

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
