function reverse(fn) {
  return function external(...args) {
    return fn(...args.reverse());
  };
}

exports.reverse = reverse;
