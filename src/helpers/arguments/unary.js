function unary(fn) {
  return function singleArg(arg) {
    return fn(arg);
  };
}

exports.unary = unary;
