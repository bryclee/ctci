module.exports = function() {
  var Tree = function(value) {
    this.value = value;
    this.children = [];
  };

  Tree.prototype.add = function(value) {
    var child = value instanceof Tree ? value : new Tree(value);
    this.children.push(child);
    return child;
  };

  return Tree;
}();
