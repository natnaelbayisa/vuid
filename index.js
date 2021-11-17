function vuid() {
  const one = Date.now().toString();
  const two = Math.random().toString().slice(2);

  return one + two;
}

module.exports = vuid;
