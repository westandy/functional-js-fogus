function Point(x, y) {
  this._x = x;
  this._y = y;
}

Point.prototype = {
  withX: function (val) {
    return new Point(val, this._y);
  },
  withY: function (va) {
    return new Point(this._x, val);
  }
};

/**
 * Examples
 */
const p = new Point(0, 1);
const q = p.withX(1000);
console.log(p);
console.log(q);
