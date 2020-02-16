const { when } = require('./when');

describe('when', () => {
  const isEven = aNum => aNum % 2 === 0;
  const addOne = aNum => aNum + 1;

  it('should call function when predicate is satisfied', () => {
    const incrementEvens = when(isEven, addOne);

    expect(incrementEvens(4)).toEqual(5);
  });
  
  it('should return undefined when predicate is not satisfied', () => {
    const incrementEvens = when(isEven, addOne);

    expect(incrementEvens(3)).toEqual(undefined);
  });
});
