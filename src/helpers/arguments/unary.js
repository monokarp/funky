exports.unary = function unary(aFunction) {
  return function singleArg(arg) {
    return aFunction(arg);
  };
};
