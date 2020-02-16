exports.gather = function gather(aFunction) {
  return function gatheredArgs(...args) {
    return aFunction(args);
  };
};
