console.log("HOISTING DEMO");

test();
console.log("x =", x); // undefined
// arrowTest(); //ReferenceError
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

var x = 5;
let y = 10;
const z = 15;

function test() {
  //console.log(y); //Reference Error
  const y = 10;
  console.log("Test function");
}

const arrowTest = () => {
  console.log("Arrow Function");
};

arrowTest();

//OUTPUT
// index.js:1   HOISTING DEMO
// index.js:16  Test function
// index.js:5   x = undefined
// index.js:20  Arrow Function
