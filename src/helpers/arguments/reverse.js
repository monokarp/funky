exports.reverse = function (aFunction) {
    return function (...args) {
        return aFunction(...args.reverse())
    };
};
