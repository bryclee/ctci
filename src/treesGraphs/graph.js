module.exports = function() {
  var Graph = function() {
    this.edges = {};
  };

  Graph.prototype.addNode = function(node) {
    this.edges[node] = this.edges[node] || [];
  };

  Graph.prototype.addEdge = function(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  };

  return Graph;
}();
