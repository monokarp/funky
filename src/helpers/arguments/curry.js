const { partial } = require('./partial');

function curry(fn, arity = fn.length) {
  return function curried(...args) {
    return (args.length < arity)
      ? partial(curried, ...args)
      : fn(...args);
  };
}

exports.curry = curry;
