var Tree = require('./tree.js');

module.exports = function arrayToBST(array) {
  if (array.length === 0) {
    return null;
  }

  var middle = Math.floor(array.length/2);
  var tree = new Tree(array[middle]);

  var left = arrayToBST(array.slice(0, middle));
  var right = arrayToBST(array.slice(middle + 1));

  if (left) {
    tree.add(left);
  }
  if (right) {
    tree.add(right);
  }

  return tree;
};
