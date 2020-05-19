const _ = require("underscore");
const { existy, truthy } = require("./functionalJSChapter1");

const cat = (...arguments) => {
  const head = _.first(arguments);
  return existy(head) ? head.concat.apply(head, _.rest(arguments)) : [];
};
// console.log(cat([1, 2, 3], [4, 5], [6, 7, 8]));
//=> [1, 2, 3, 4, 5, 6, 7, 8]

const construct = (head, tail) => cat([head], _.toArray(tail));
// console.log(construct(42, [1, 2, 3]));
//=> [42, 1, 2, 3]

const zombie = { name: "Bub", film: "Day of the Dead" };
// console.log(Object.keys(zombie));
// [ 'name', 'film' ]
// console.log(Object.values(zombie));
// [ 'Bub', 'Day of the Dead' ]

// ["Anthony", "Gardner", undefined]
// console.log(
//   _.pluck(
//     [
//       { title: "Chthon", author: "Anthony" },
//       { title: "Grendel", author: "Gardner" },
//       { title: "After Dark" },
//     ],
//     "author"
//   )
// );

//[ [ 'name', 'Bub' ], [ 'film', 'Day of the Dead' ] ]
// console.log(_.pairs(zombie));

//=> {"Bub": "name", "Day of the Dead": "film"}
// console.log(_.invert(zombie));

/**
 * Library for SQL Example
 */
const library = [
  { title: "SICP", isbn: "0262010771", ed: 1 },
  { title: "SICP", isbn: "0262510871", ed: 2 },
  { title: "Joy of Clojure", isbn: "1935182641", ed: 1 },
];

// console.log(_.findWhere(library, { title: "SICP", ed: 2 }));
//=> {title: "SICP", isbn: "0262510871", ed: 2}

// console.log(_.where(library, { title: "SICP" }));
//=> [{title: "SICP", isbn: "0262010771", ed: 1},
//    {title: "SICP", isbn: "0262510871", ed: 2}]

/**
 * SQL "Algebra"
 */
// console.log(_.pluck(library, "title"));

/**
 * Maintain the same structure
 * when a, b are in an Algebra and '+' is an operation on that Alegbra,
 * then a+b is also in that Algebra.
 * - 'project' operates on a table and creates another table of the same structure
 */

const project = (table, keys) =>
  _.map(table, obj => _.pick.apply(null, construct(obj, keys)));

const editionResults = project(library, ["title", "isbn"]);
// console.log(editionResults);
//=> [{isbn: "0262010771", title: "SICP"},
//    {isbn: "0262510871", title: "SICP"},
//    {isbn: "1935182641", title: "Joy of Clojure"}];

const isbnResults = project(editionResults, ["isbn"]);
// console.log(isbnResults);

// console.log(_.pluck(isbnResults, "isbn"));
//=> ["0262010771", "0262510871", "1935182641"]

const renameKeys = (obj, newNames) =>
  Object.keys(newNames).reduce((accum, oldKey) => {
    const newKey = newNames[oldKey];
    return truthy(obj[oldKey]) ? { ...accum, [newKey]: obj[oldKey] } : accum;
  }, _.omit.apply(null, construct(obj, Object.keys(newNames))));
// console.log(renameKeys({ a: 1, b: 2 }, { a: "AAA" }));
// { b: 2, AAA: 1 }

const as = (table, newNames) => table.map(row => renameKeys(row, newNames));
// console.log(as(library, { ed: "edition" }));

console.log(
  project(
    as(library, {
      title: "Book",
      isbn: "ISBN",
      ed: "edition",
    }),
    ["ISBN", "Book", "edition"]
  )
);
