const { gather } = require('./gather');

describe('gather', () => {
  it('should gather arguments', () => {
    const fn = jest.fn();

    gather(fn)('arg1', 2, null);

    expect(fn).toHaveBeenCalledWith(['arg1', 2, null]);
  });
});
