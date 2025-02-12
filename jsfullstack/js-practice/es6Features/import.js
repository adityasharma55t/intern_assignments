import { add, subtract, PI, testFunc } from "./export.js";
import * as utils from "./export.js";

console.log(utils.add(1, 2));
console.log(add(1, 2));

utils.testFunc();
testFunc();

console.log(PI === utils.PI);
