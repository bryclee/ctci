var expect = require('chai').expect;
var Tree = require('../../src/treesGraphs/tree.js');

describe('arrayToBST', function() {
  var tree;

  beforeEach(function() {
    tree = new Tree(5);
    tree.add(3);
    tree.add(7);
  });

  it('should create a tree', function() {
    var array = [1,2,3,4,5,6,7];
    var transform = require('../../src/treesGraphs/arrayToBST.js');

    var tree = transform(array);

    expect(tree).to.be.an.instanceOf(Tree);
    expect(tree.value).to.equal(4);
    expect(tree.children[0].value).to.equal(2);
    expect(tree.children[1].value).to.equal(6);

    expect(tree.children[0].children[0].value).to.equal(1);
    expect(tree.children[0].children[1].value).to.equal(3);
    expect(tree.children[1].children[0].value).to.equal(5);
    expect(tree.children[1].children[1].value).to.equal(7);
  })
});
