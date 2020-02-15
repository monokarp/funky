const { constant } = require('./constant');

describe('constant', () => {
    it('should wrap a value', () => {
        const wrapped = constant('val1');

        expect(typeof (wrapped)).toEqual('function');
    });

    it('should return wrapped value', () => {
        const wrapped = constant('val1');

        expect(wrapped()).toEqual('val1');
    });
});
