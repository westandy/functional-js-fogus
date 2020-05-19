function Point2D(x, y) {
  this._x = x;
  this._y = y;
}
console.log(new Point2D(1, 2));

/**
 * Using the Function.prototype.call method, we can pass any particular `this` or environment to the function.
 * This concept is also called "binding."  We are "binding" `this` to the function call.
 * This is very useful when the the `this` or environment is known and you want to restrict the function call
 * to this particular `this` or environment
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
function Point3D(x, y, z) {
  Point2D.call(this, x, y);
  this._z = z;
}
console.log(new Point3D(1, 2, 3));

// Anti-pattern
Array.prototype.toString = () => {
  /* something crazy*/
};

class MyClass {
  static someStaticMethod = () => {};
  somePropertyMethod = () => {};
}
MyClass.prototype.someStaticMethod = () => {};

const thing1 = new MyClass(); // this
const thing2 = new MyClass(); // another this

thing1.someStaticMethod === thing2.someStaticMethod; // true
thing1.somePropertyMethod === thing2.somePropertyMethod; // false // Different 'this' between instances
