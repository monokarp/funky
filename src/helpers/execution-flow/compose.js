function compose(...functions) {
  return function composition(...args) {
    return functions.reduceRight((lastValue, nextFunction) => (Array.isArray(lastValue)
      ? nextFunction(...lastValue)
      : nextFunction(lastValue)), args);
  };
}

exports.compose = compose;
