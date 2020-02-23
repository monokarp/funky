// String partitioned trie map
class StrTrieMap {
  constructor() {
    this.root = {};
  }

  get(key) {
    let node = this.root;

    for (let index = 0; index < key.length; index += 1) {
      node = node[key[index]];
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

  toString() {
    const result = [];

    const formatPair = (key, value) => `${key}:${value}`;

    const formatPairs = (pairs) => `{${pairs.join(',')}}`;

    const inspect = (node, path = '') => {
      Object.keys(node).forEach((key) => {
        if (node[key].value) {
          result.push(
            formatPair(path + key, node[key].value),
          );
        } else {
          inspect(node[key], path + key);
        }
      });
    };

    inspect(this.root);

    return formatPairs(result);
  }
}

exports.StrTrieMap = StrTrieMap;
