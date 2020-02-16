exports.reverse = function reverse(aFunction) {
  return function external(...args) {
    return aFunction(...args.reverse());
  };
};
