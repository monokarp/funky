const { reverse } = require('./reverse');

describe('reverse', () => {
    it('should reverse arguments', () => {
        const fn = jest.fn();

        reverse(fn)('arg1', 2, null);

        expect(fn).toHaveBeenCalledWith(null, 2, 'arg1');
    });
});
