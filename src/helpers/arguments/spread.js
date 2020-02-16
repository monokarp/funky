exports.spread = function (aFunction) {
    return function spreadArgs(args) {
        return aFunction(...args);
    };
};
