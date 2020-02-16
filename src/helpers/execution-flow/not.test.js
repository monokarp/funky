const { not } = require('./not');

describe('not', () => {
  it('should negate a predicate', () => {
    const isEven = aNum => aNum % 2 === 0;

    const isOdd = not(isEven);

    expect(isOdd(3)).toEqual(true);
    expect(isOdd(4)).toEqual(false);
  });
});
