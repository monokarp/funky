exports.partial = function partial(aFunction, ...args) {
  return function external(...rest) {
    return aFunction(...args, ...rest);
  };
};
