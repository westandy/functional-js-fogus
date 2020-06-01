const construct = require('../Chapter2/construct');
const nexts = (graph, node) => {
  // _.isEmpty(graph)
  if (!graph || graph.length == 0) {
    return [];
  }

  // _.first(graph) == pair
  // _.first(pair) == from
  // second(pair) == to
  // _.rest(graph) == more
  const [pair, ...more] = graph;
  const [from, to] = pair;
  if (node == from) {
    return construct(to, nexts(more, node));
  } else {
    return nexts(more, node);
  }
};

const influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript']
];
// console.log(nexts(influences, 'Lisp'));
module.exports = { nexts };
