var expect = require('chai').expect;
var Graph = require('../../src/treesGraphs/graph.js');

describe('graphFindPath', function() {
  var graph;
  var findPath = require('../../src/treesGraphs/graphFindPath.js');

  beforeEach(function() {
    graph = new Graph();

    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('D', 'E');
    graph.addEdge('C', 'E');
  });

  it('should find the shortest path', function() {
    expect(graph).to.be.an.instanceOf(Graph);
    expect(graph.edges).to.be.a('object');

    expect(findPath(graph, 'A', 'E')).to.eql(['A','C','E']);
  });
});
