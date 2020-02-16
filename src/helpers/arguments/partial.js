function partial(fn, ...args) {
  return function external(...rest) {
    return fn(...args, ...rest);
  };
}

exports.partial = partial;
