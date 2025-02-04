console.log("SCOPING DEMO");

function a() {
  b();
  function b() {
    console.log(x);
    c();
    function c() {
      x = 10000;
      console.log(x);
      d();
      function d() {
        x = 200;
        var y = 500;
        console.log(x);
      }
    }
  }
}
let x = 10;
console.log(x);
a();
//console.log(y); //ReferenceError
console.log("Finally x =", x);

//OUTPUTS
// SCOPING DEMO
// scope.js:21    10
// scope.js:6     10
// scope.js:10    10000
// scope.js:15    200
// scope.js:24    Finally x = 200
