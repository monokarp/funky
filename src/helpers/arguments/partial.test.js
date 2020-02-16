const { partial } = require('./partial');

describe('partial', () => {
    it('should partial arguments', () => {
        const fn = (a, b, c) => a + b + c;

        const applied = partial(fn, 2, 3);

        expect(typeof (applied)).toEqual('function');

        expect(applied(1)).toEqual(6);
    });
});
