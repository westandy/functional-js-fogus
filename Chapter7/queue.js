function Queue(elems) {
  this._q = elems; // `elems` which just points to the original reference
}

Queue.prototype = {
  enqueue: function (thing) {
    return new Queue([...this._q, thing]);
  }
};

/**
 * Examples
 */
const seed = [1, 2, 3];
const q = new Queue(seed);
// console.log(q); // { _q: [ 1, 2, 3 ] }

const q2 = q.enqueue(108);
// console.log(q2); // { _q: [ 1, 2, 3, 108 ] }

// MUTATION!
seed.push(10000);
// console.log(q); // { _q: [ 1, 2, 3, 10000 ] }

/**
 * SaferQueue - this._q is now a deep clone of elems
 */
function SaferQueue(elems) {
  this._q = [...elems]; // Use `[...elems]` to create a deep copy
}

SaferQueue.prototype = {
  enqueue: function (thing) {
    return new SaferQueue([...this._q, thing]);
  }
};

/**
 * Test for deep copy
 */
const complicatedSeed = [
  { a: 1, b: 2 },
  { a: 5, b: 6 }
];
const cq = new SaferQueue(complicatedSeed);
// console.log('Complicated Queue:', cq);
// complicatedSeed.push(1000);
// console.log(complicatedSeed);
// console.log('Seed Changed:', cq);

const SuperSafeQueue = function (elems) {
  const queue = (function () {
    let _q = [...elems];
    return {
      enqueue: function (thing) {
        _q = [..._q, thing];
      },
      getQ: function () {
        return [..._q];
      }
    };
  })();
  return queue;
};

// const ssqSeed = [3, 2, 1];
// const ssq = SuperSafeQueue(ssqSeed);
// console.log('Original Seed', ssqSeed);
// console.log('Original Queue:', ssq.getQ());
// ssq.enqueue(10000);
// console.log('Enqueued:', ssq.getQ());
// console.log('Original Seed did not change', ssqSeed);

// let q1 = ssq.getQ();
// q1.push(9);
// console.log(
//   "Ran getQ, changed the value, and it did not change SuperSafeQueue's queue:",
//   ssq.getQ()
// );

const first = [{ changeMe: 'hello!' }, { dontChangeMe: 'bye!' }];
const second = [...first];
console.log(first === second);
console.log(first[0] === second[0]);
first[0].changeMe = 'different';
second[0].changeMe = 'changed again!';
console.log(first[0].changeMe);
console.log(first[0].changeMe === second[0].changeMe);
