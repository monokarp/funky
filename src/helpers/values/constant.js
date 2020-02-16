function constant(aValue) {
  return function value() {
    return aValue;
  };
}

exports.constant = constant;
