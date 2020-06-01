const construct = require('../Chapter2/construct');
const isEmpty = require('../Chapter2/isEmpty');
const { nexts } = require('./graphWalking');

const depthSearch = (graph, nodes, seen) => {
  if (isEmpty(nodes)) return seen.reverse();

  const [node, ...more] = nodes;
  return seen.includes(node)
    ? depthSearch(graph, more, seen)
    : depthSearch(
        graph,
        nexts(graph, node).concat(more),
        construct(node, seen)
      );
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
// console.log(depthSearch(influences, ['Lisp'], []));
//=>[ 'Lisp', 'Smalltalk', 'Self', 'Lua', 'JavaScript', 'Scheme' ]

// console.log(depthSearch(influences, ['Smalltalk', 'Self'], []));
//=> ["Smalltalk", "Self", "Lua", "JavaScript"]

// console.log(depthSearch(construct(['Lua', 'Io'], influences), ['Lisp'], []));
//=>[ 'Lisp', 'Smalltalk', 'Self', 'Lua', 'Io', 'JavaScript', 'Scheme' ]
