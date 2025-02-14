// ES6 Class with Static Method
class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Calling Static Methods
console.log(MathUtil.add(5, 3)); // 8
console.log(MathUtil.multiply(4, 2)); // 8

// Static methods cannot be called on instances
const mathInstance = new MathUtil();
// console.log(mathInstance.add(5, 3)); // TypeError: mathInstance.add is not a function
