function plucker(field) {
  return function (obj) {
    return obj && obj[field];
  };
}

function finder(valueFun, bestFun, coll) {
  return coll.reduce((best, current) => {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    return bestValue === bestFun(bestValue, currentValue) ? best : current;
  });
}

const identity = n => n;
// const additiveIdentity = n => n + 0;
// const multiplicativeIdenity = n => n * 1;
// const orIdenity = n => n || false;
// const andIdentity = n => n && true;
// const functionalIdentity = n => n;  => f(identity(a)) = f(a)

// console.log(finder(identity, Math.max, [1, 2, 3, 4, 5]));

const people = [
  { name: 'Fred', age: 65 },
  { name: 'Lucy', age: 36 }
];

// console.log(finder(plucker('age'), Math.max, people));

// console.log(finder(plucker('name'), (x, y) => (x === 'Fred' ? x : y), people));

const best = (test, collection) =>
  collection.reduce((x, y) => (test(x, y) ? x : y));
console.log(best((x, y) => x > y, [1, 5, 3, 4, 2]));
