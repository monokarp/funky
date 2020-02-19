const { compose } = require('./compose');

const fn1 = (val) => val + 'a';
const fn2 = (val) => val + 'b';
const fn3 = (val) => val + 'c';
const fn4 = (val) => val + 'd';

describe('compose', () => {
  it('should be a function (not immidiately invoked)', () => {
    const composition = compose(fn1, fn2, fn3, fn4);

    expect(typeof (composition)).toEqual('function');
  });

  it('should compose functions', () => {
    const composition = compose(fn1, fn2, fn3, fn4);

    expect(composition('')).toEqual('dcba');
  });

  it('should be stateless', () => {
    const composition = compose(fn1, fn2, fn3, fn4);

    expect(composition('')).toEqual('dcba');
    expect(composition('')).toEqual('dcba');
    expect(composition('f')).toEqual('fdcba');
  });

  it('should accept multiple args', () => {
    const multiArgs = (v1, v2, v3) => v1 + v2 + v3;

    const composition = compose(fn1, fn2, fn3, multiArgs);

    expect(composition('a', 'a', 'a')).toEqual('aaacba');
  });
});
