exports.partial = function (aFunction, ...args) {
    return function (...rest) {
        return aFunction(...args, ...rest)
    };
};
