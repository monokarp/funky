function when(predicate, fn) {
  return function predicated(...args) {
    return predicate(...args)
      ? fn(...args)
      : undefined;
  };
};

exports.when = when;