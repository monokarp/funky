const { Trie } = require('../trie');

// String partitioned trie map
class StringTrieMap extends Trie {
  constructor() {
    super();
  }

  get(key) {
    let node = this.root;

    for (let index = 0; index < key.length; index += 1) {
      node = node[key[index]];

      if (!node) {
        return undefined;
      }
    }

    return node.value;
  }

  set(key, value) {
    let node = this.root;

    for (let index = 0; index < key.length; index += 1) {
      const char = key[index];

      if (index === (key.length - 1)) {
        node[char] = { value };
        return;
      }

      if (!node[char]) {
        node[char] = {};
      }

      node = node[char];
    }
  }
}

exports.StringTrieMap = StringTrieMap;
