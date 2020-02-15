exports.constant =
    function(aValue) {
        return function value() {
            return aValue;
        }
    }
