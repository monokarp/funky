// Generic trie map
class Trie {
  constructor() {
    this.root = {};
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

exports.Trie = Trie;
