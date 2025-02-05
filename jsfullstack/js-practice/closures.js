/*
In the below code, the variable z gets the return value from x()
If the assignment was changed to:
z = x INSTEAD OF x()
Then z would get assigned the entire function x() */

function x() {
  let a = 1;
  console.log(33);
  return function y() {
    console.log(a);
  };
}
x();
let z = x();
console.log(z);
z();

/* 
********OUTPUT*************
index.js:3      33
index.js:3      33
index.js:10     ƒ y() {
                        console.log(a);
                    }
index.js:5      1
*/

/* 
In the code below, as the function p() does not return any value or function,
r is assigned the entire function x, if it was assigned x(), then r would be
assigned undefined as p returns no value*/
function p() {
  let c = 1;
  console.log(33);
  function q() {
    console.log(c);
  }
}
p();
let r = p;
console.log(r);
r();

/* 
********OUTPUT*************
index.js:3      33
index.js:10     ƒ x() {
                        let a = 1;
                        console.log(33);
                        function y() {
                            console.log(a);
                        }
                    }
index.js:3      33
*/

/*
Inner the below code. if the value of a is not used in function inner,
it shall not form a closure as there is no dependency on the function's
lexical scope for the variable */

function outer() {
  let a = 1;
  console.log(a);
  return function inner() {
    return 54 + a;
  };
}
let close = outer();
console.log(close);
console.log(close());

// index.js:3  1
// index.js:9  ƒ y() {
//                  return 54 + a;
//              }
// index.js:10 55
