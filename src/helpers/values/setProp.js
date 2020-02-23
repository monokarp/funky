function setProp(obj, name, value) {
  return { ...obj, [name]: value };
}

exports.setProp = setProp;
