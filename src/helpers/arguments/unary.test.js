const { unary } = require('./unary');

describe('unary', () => {
    it('should apply first argument to the inner fn', () => {
        const fn = jest.fn();

        unary(fn)('arg1', 2, null, 'arg3');

        expect(fn).toHaveBeenCalledWith('arg1');
    });

    it('should correctly decrease parseInt arity', () => {
        const fn = unary(parseInt);

        expect(['1', '2', '3'].map(fn)).toEqual([1, 2, 3]);
    });
});
