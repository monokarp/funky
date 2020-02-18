const { pipe } = require('./pipe');

const fn1 = (val) => val + 'a';
const fn2 = (val) => val + 'b';
const fn3 = (val) => val + 'c';
const fn4 = (val) => val + 'd';

describe('pipe', () => {
  it('should be a function (not immidiately invoked)', () => {
    const pipeline = pipe(fn1, fn2, fn3, fn4);

    expect(typeof (pipeline)).toEqual('function');
  });

  it('should pipe functions', () => {
    const pipeline = pipe(fn1, fn2, fn3, fn4);

    expect(pipeline('')).toEqual('abcd');
  });

  it('should be pure', () => {
    const pipeline = pipe(fn1, fn2, fn3, fn4);

    expect(pipeline('')).toEqual('abcd');
    expect(pipeline('')).toEqual('abcd');
    expect(pipeline('f')).toEqual('fabcd');
  });

  it('should handle multiple args', () => {
    const multiArgs = (v1, v2, v3) => v1 + v2 + v3;

    const pipeline = pipe(multiArgs, fn1, fn2, fn3);

    expect(pipeline('a', 'a', 'a')).toEqual('aaaabc');
  });
});

