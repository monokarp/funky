exports.spread = function spread(aFunction) {
  return function spreadArgs(args) {
    return aFunction(...args);
  };
};
