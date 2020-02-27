const { Trie } = require('../trie');

const getNumberLength = (number, radix) => {
  let result = 1;

  while ((number / radix ** result) > 1) {
    result += 1;
  }

  return result;
};

// Digit partitioned trie map
class DigitTrieMap extends Trie {
  constructor(radix = 10) {
    super();
    this.radix = radix;
  }

  get(key) {
    let node = this.root;

    if (!Number.isSafeInteger(key)) {
      return undefined;
    }

    let depth = this.radix ** (getNumberLength(key, this.radix) - 1);

    do {
      const index = Math.floor(key / depth) % this.radix;
      node = node[index];

      if (!node) {
        return undefined;
      }

      depth /= this.radix;
    } while (depth >= 1);

    return node.value;
  }

  set(key, value) {
    if (!Number.isSafeInteger(key)) {
      return;
    }

    let node = this.root;

    let depth = this.radix ** (getNumberLength(key, this.radix) - 1);

    do {
      const index = Math.floor(key / depth) % this.radix;

      if (depth === 1) {
        node[index] = { value };
        return;
      }

      if (!node[index]) {
        node[index] = {};
      }

      node = node[index];

      depth /= this.radix;
    } while (depth >= 1);
  }
}

exports.DigitTrieMap = DigitTrieMap;
