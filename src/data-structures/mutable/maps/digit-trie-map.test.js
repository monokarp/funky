const { DigitTrieMap } = require('./digit-trie-map');

describe('Digit partitioned trie', () => {

  describe('Default radix', () => {
    runTrieSpec(() => new DigitTrieMap());
  });

  describe('Custom radix', () => {
    runTrieSpec(() => new DigitTrieMap(7));
  });

  function runTrieSpec(makeTrieFn) {
    let trie;

    beforeEach(() => {
      trie = makeTrieFn();
    });

    describe('A trie', () => {
      it('should set and lookup leaf value', () => {
        trie.set(1, 'test_value');

        expect(trie.get(1)).toEqual('test_value');
      });

      it('should set and lookup nested value', () => {
        trie.set(123, 'test_value');

        expect(trie.get(123)).toEqual('test_value');
      });

      it('should not set an invalid key', () => {
        trie.set('123', 'test_value');

        expect(trie.get('123')).toEqual(undefined);
        expect(trie.get(123)).toEqual(undefined);
      });

      it('should not set a falsy key', () => {
        trie.set(null, 'test_value');

        expect(trie.get(null)).toEqual(undefined);
      });

      it('should lookup non-existing value', () => {
        expect(trie.get(123)).toEqual(undefined);
      });

      it('should lookup nested non-existing value', () => {
        trie.set(123, 3);

        expect(trie.get(124)).toEqual(undefined);
      });

      it('should update a value', () => {
        trie.set(456, 'old_val');

        trie.set(456, 'new_val');

        expect(trie.get(456)).toEqual('new_val');
      });

      it('should serialize its state to string', () => {
        trie.set(523, 'old_val');

        trie.set(526, 'new_val');

        expect(trie.toString()).toEqual('{1345:old_val,1351:new_val}');
      });
    });
  }
});
