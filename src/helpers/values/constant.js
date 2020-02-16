exports.constant = function constant(aValue) {
  return function value() {
    return aValue;
  };
};
