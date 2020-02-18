const { compose } = require('./compose');
const { reverse } = require('../arguments/reverse');

exports.pipe = reverse(compose);
