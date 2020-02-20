const { getProp } = require('./getProp');

describe('getProp', () => {
  it('should return the specified property', () => {
    const obj = { testProp: 'testVal' };

    expect(getProp(obj, 'testProp')).toEqual('testVal');
  });

  it('should return undefined from a falsy property', () => {
    const obj = { testProp: 'testVal' };

    expect(getProp(obj, null)).toEqual(undefined);
  });

  it('should return undefined from an undefined property', () => {
    const obj = {};

    expect(getProp(obj, 'testProp')).toEqual(undefined);
  });

  it('should return undefined from a falsy object', () => {
    expect(getProp(null, 'testProp')).toEqual(undefined);
  });
});
