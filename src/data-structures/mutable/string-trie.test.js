const { StrTrieMap } = require('./string-trie');

describe('String partitioned trie', () => {
  it('should set and lookup leaf value', () => {
    const trie = new StrTrieMap();

    trie.set('a', 3);

    expect(trie.get('a')).toEqual(3);
  });

  it('should set and lookup nested value', () => {
    const trie = new StrTrieMap();

    trie.set('abc', 3);

    expect(trie.get('abc')).toEqual(3);
  });

  it('should update a value', () => {
    const trie = new StrTrieMap();

    trie.set('abc', 3);

    trie.set('abc', 5);

    expect(trie.get('abc')).toEqual(5);
  });

  it('should serialize its state to string', () => {
    const trie = new StrTrieMap();

    trie.set('abc', 3);

    trie.set('abd', 5);

    expect(trie.toString()).toEqual('{abc:3,abd:5}');
  });
});
