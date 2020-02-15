const { identity } = require('./identity');

describe('identity', () => {
    it('should return the value', () => {
        const value = {};

        expect(identity(value)).toEqual(value);
    });
});
