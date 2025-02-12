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

/* 
The below code prints 6 6 6 6 6 instead of 1 2 3 4 5 as expected. 
This is because setTimeout delays the program execution and given
that var is function scoped, the variable i at that point contains the latest value of i*/
for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/*
To prevent this, we can use let variable as it is block scoped, 
therefore a new space in memory is allocated for each iteration 
of i, thus the closure gets the value of i for that particular iteration */

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
