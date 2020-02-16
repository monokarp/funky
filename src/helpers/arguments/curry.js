const { partial } = require('./partial');

exports.curry = function curry(aFunction, arity = aFunction.length) {
  return function curried(...args) {
    return (args.length < arity)
      ? partial(curried, ...args)
      : aFunction(...args);
  };
};
