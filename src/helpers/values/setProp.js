function setProp(obj, name, value) {
  return Object.assign({}, obj, { [name]: value });
}

exports.setProp = setProp;
