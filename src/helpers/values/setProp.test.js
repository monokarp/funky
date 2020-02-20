const { setProp } = require('./setProp');

describe('setProp', () => {
  it('should set the value', () => {
    const obj = { testProp: 'testVal' };

    expect(setProp(obj, 'newProp', 'newValue')).toEqual({
      testProp: 'testVal',
      newProp: 'newValue'
    });
  });

  it('should not mutate the given object', () => {
    const obj = { testProp: 'testVal' };

    expect(setProp(obj, 'testProp', 'newValue')).toEqual({ testProp: 'newValue', });
    expect(obj).toEqual({ testProp: 'testVal' });
  });
});
