function gather(fn) {
  return function gatheredArgs(...args) {
    return fn(args);
  };
}

exports.gather = gather;
