const { curry } = require('./curry');

const fn = (a, b, c) => a + b + c;

describe('curry', () => {
    it('handles single argument calls', () => {
        const result = curry(fn)(3)(6)(2);

        expect(result).toEqual(11);
    });

    it('throws with extra single argument calls', () => {
        expect(() => curry(fn)(3)(6)(2)(7)).toThrow();
    });

    it('handles partial calls', () => {
        const result = curry(fn)(3)(6, 2);

        expect(result).toEqual(11);
    });

    it('handles single calls', () => {
        const result = curry(fn)(3, 6, 2);

        expect(result).toEqual(11);
    });

    it('handles partial extra args', () => {
        const result = curry(fn)(3, 6)(2, 7, 4, 5);

        expect(result).toEqual(11);
    });

    it('handles empty calls', () => {
        const result = curry(fn)(3)()()(6)()(2);

        expect(result).toEqual(11);
    });
});
