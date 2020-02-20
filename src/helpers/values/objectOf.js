const { setProp } = require('./setProp');

function objectOf(name, value) {
  return setProp({}, name, value);
}

exports.objectOf = objectOf;
