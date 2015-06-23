var expect = require('chai').expect;
var Tree = require('../../src/treesGraphs/tree.js');
var LinkedList = require('../../src/linkedList/LinkedList.js');

describe('treeToLinkedList', function() {
	var tree;

	beforeEach(function() {
		/*
			5
		   / \
		  3   8
		  |   |
		  1   9
		  |
		  0
		*/
		tree = new Tree(5);
		tree.add(3);
		tree.add(8);
		tree.children[0].add(1);
		tree.children[1].add(9);
		tree.children[0].children[0].add(0);
	});

	it('should change a tree to a linkedList', function() {
		var transform = require('../../src/treesGraphs/treeToLinkedList.js');

		var lists = transform(tree);

		expect(lists.length).to.equal(4);
		lists.map(function(list) {
			expect(list).to.be.an.instanceof(LinkedList);
		});

		expect(lists[0].head.value).to.equal(5);
		expect(lists[1].head.value).to.equal(3);
		expect(lists[2].head.value).to.equal(1);
		expect(lists[3].head.value).to.equal(0);
	});
});
