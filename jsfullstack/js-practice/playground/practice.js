// 1. What will be the output of the following code?
// function outer() {
//   let a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// const closureFn = outer();
// closureFn();

//OUTPUT: 1

// 2. What will be the output of the following code?
// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a);
//   }
//   setTimeout(bar, 5000);
// }
// foo();

//OUtPUT: 2 after 5 second delay

// 3. What will be the output of the following code?
// const testClosure = (function () {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// })();
// testClosure();
// testClosure();

//OUTPUT: 1 2

// 4. What will be the output of the following code?
// let x = 10;
// function example() {
//     console.log(x);
//     let x = 5;
// }
// example();

//OUTPUT: ReferenceError: cannot access x before initialization

// 5. What will be the output of the following code?
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     a = 20;
//     return inner;
// }
// const closure = outer();
// closure();

//OUTPUT: 20

// 6. What will be the output of the following code?
// function greet(name) {
//   setTimeout(() => {
//     console.log("Hello, " + name);
//   }, 1000);
// }
// greet("John");

//OUTPUT: Hello, John AFTER 1 sec

// 7. What will be the output of the following code?
// function outer() {
//     var x = 1;
//     return function inner() {
//         x++;
//         console.log(x);
//     }
// }
// const func1 = outer();
// func1();
// func1();

//OUTPUT: 2 3

// 8. What will be the output of the following code?
// const callbackExample = (callback) => {
//     const value = 42;
//     callback(value);
// }
// callbackExample((x) => { console.log(x); });

//OUTPUT: 42

// 9. What will be the output of the following code?
// function foo() {
//     return function() {
//         return 1;
//     };
// }
// console.log(foo()());

//OUTPUT: 1

// 10. What will be the output of the following code?
// const outer = () => {
//     let x = 100;
//     return (function() {
//         console.log(x);
//     })();
// }
// outer();

//OUTPUT: 100

// 11. What will be the output of the following code?
// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }
// const count1 = counter();
// console.log(count1());
// console.log(count1());

//OUTPUT: 1 2

// 12. What will be the output of the following code?
// function foo() {
//     let name = 'Jane';
//     setTimeout(function() {
//         console.log(name);
//     }, 1000);
//     name = 'John';
// }
// foo();

//OUTPUT: John

// 13. What will be the output of the following code?
// function outer() {
//     let a = 10;
//     return function inner() {
//         a++;
//         console.log(a);
//     }
// }
// const fn1 = outer();
// const fn2 = outer();
// fn1();
// fn2();

//OUTPUT: 11 11

// 14. What will be the output of the following code?
// function outer() {
//     var x = 1;
//     function inner() {
//         var y = 2;
//         console.log(x + y);
//     }
//     return inner;
// }
// const closure = outer();
// closure();

//OUTPUT: 3

// 15. What will be the output of the following code?
// function outer() {
//     let x = 1;
//     return function inner() {
//         x++;
//         return x;
//     }
// }
// const closureFn = outer();
// console.log(closureFn());
// console.log(closureFn());

//OUTPUT: 2 3

// 16. What will be the output of the following code?
// function outer() {
//     let a = 1;
//     setTimeout(function() {
//         console.log(a);
//     }, 500);
//     a = 2;
// }
// outer();

//OUTPUT: 2

// 17. What will be the output of the following code?
// function foo() {
//     let a = 10;
//     function bar() {
//         a++;
//         console.log(a);
//     }
//     return bar;
// }
// const fn = foo();
// fn();

//OUTPUT: 11

// 18. What will be the output of the following code?
// function example() {
//     let a = 5;
//     setTimeout(() => {
//         console.log(a);
//     }, 1000);
//     a = 10;
// }
// example();

//OUTPUT: 10

// 19. What will be the output of the following code?
// function outer() {
//     let name = 'Alice';
//     return function inner() {
//         name = 'Bob';
//         console.log(name);
//     }
// }
// const closure1 = outer();
// closure1();

//OUTPUT: Bob

// 20. What will be the output of the following code?
// const asyncExample = (callback) => {
//   console.log("Start");
//   setTimeout(() => {
//     callback("Done!");
//   }, 0);
//   console.log("End");
// };
// asyncExample((result) => {
//   console.log(result);
// });

//OUTPUT: Start End Done!
