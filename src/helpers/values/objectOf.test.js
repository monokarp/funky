const { objectOf } = require('./objectOf');

describe('objectOf', () => {
  it('creates an ', () => {
    expect(objectOf('testProp', 'testVal')).toEqual({ testProp: 'testVal' });
  });
});
