const makeAdder = CLOSED => FREE => FREE + CLOSED;

const add10 = makeAdder(10);

console.log(add10(10)); // 20
