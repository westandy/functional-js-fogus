const trampoline = (fun, ...args) => {
  const result = fun.apply(fun, args);

  while (typeof result === 'function') {
    result = result();
  }

  return result;
};

module.exports = trampoline;
