exports.gather = function (aFunction) {
    return function gatheredArgs(...args) {
        return aFunction(args);
    };
};
