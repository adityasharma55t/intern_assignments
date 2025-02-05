console.log("***********SHADOWING DEMO*************");

/*
This works as let is block scoped and the inner let does not interfere with the functioning of the 
outer let, and just shadows it as a separate entity in the scope of hte block.
*/

let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);

/*
This shall result in error as var is function scoped and during hoisting, it detects that
another variable with the same variable exists in the same scope. 

var has global scope in which const declaration also lies.

const b = 30;               
{                    
  var b = 10;       
  console.log(b);  
}                   
console.log(b);
*/

/* 
The below code works as inside the block, the let declaration shadows the var declaration 
outside the block as the let's scope is limited to its containing block
*/
var c = 50;
{
  let c = 40;
  console.log(c);
}
console.log(c);
