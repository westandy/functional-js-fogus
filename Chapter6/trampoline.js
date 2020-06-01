const trampoline = (fun, ...args) => {
  let result = fun.apply(fun, args);

  while (typeof result === 'function') {
    result = result();
  }

  return result;
};

module.exports = trampoline;
