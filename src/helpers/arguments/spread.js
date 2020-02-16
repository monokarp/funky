function spread(fn) {
  return function spreadArgs(args) {
    return fn(...args);
  };
}

exports.spread = spread;
