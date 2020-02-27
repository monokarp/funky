const { StringTrieMap } = require('./string-trie-map');

describe('String partitioned trie', () => {
  let trie;

  beforeEach(() => {
    trie = new StringTrieMap();
  });

  it('should set and lookup leaf value', () => {
    trie.set('a', 3);

    expect(trie.get('a')).toEqual(3);
  });

  it('should set and lookup nested value', () => {
    trie.set('abc', 3);

    expect(trie.get('abc')).toEqual(3);
  });
  
  it('should lookup non-existing value', () => {
    expect(trie.get('abc')).toEqual(undefined);
  });

  it('should lookup nested non-existing value', () => {
    trie.set('abd', 3);

    expect(trie.get('abc')).toEqual(undefined);
  });

  it('should update a value', () => {
    trie.set('abc', 3);

    trie.set('abc', 5);

    expect(trie.get('abc')).toEqual(5);
  });

  it('should serialize its state to string', () => {
    trie.set('abc', 3);

    trie.set('abd', 5);

    expect(trie.toString()).toEqual('{abc:3,abd:5}');
  });
});
