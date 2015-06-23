module.exports = function() {
  var Queue = require('../stackQueues/Queue.js');
  
  return function findShortestPath(graph, start, end) {

    //Find the shortest path between the start and end node

    var paths = {}; //Keep a store of all the paths
    var nextItems = new Queue();

    //Starting from the start node
    //Look at current node compared to all nodes connected to it
      //If node is the end node
        //Return the path - since using BFS, will be a shortest path
      //Find if path to that node is shorter than existing shortest
        //If so, save it
      //Push that node into a queue
    //Repeat with next node in the queue

    nextItems.enqueue(start);
    paths[start] = [start];
    var curentNode;
    while (currentNode = nextItems.dequeue()) {
      var nextNodes = graph.edges[currentNode];
      for (var i = 0; i < nextNodes.length; i++) {
        if (!paths[nextNodes[i]] || paths[currentNode].length + 1 < paths[nextNodes[i]].length) {
          paths[nextNodes[i]] = paths[currentNode].concat([nextNodes[i]]);
          nextItems.enqueue(nextNodes[i]);
        }
        if (nextNodes[i] === end) {
          return paths[nextNodes[i]];
        }
      }
    }

    return null;
  }
}();
