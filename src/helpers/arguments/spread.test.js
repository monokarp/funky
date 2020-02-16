const { spread } = require('./spread');

describe('spread', () => {
    it('should spread arguments', () => {
        const fn = jest.fn();

        spread(fn)(['arg1', 2, null]);

        expect(fn).toHaveBeenCalledWith('arg1', 2, null);
    });
});
