exports.unary = function(aFunction) {
    return function singleArg(arg) {
        return aFunction(arg);
    };
};
