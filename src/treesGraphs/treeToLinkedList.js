module.exports = function() {
	var Tree = require('./tree.js');
	var LinkedList = require('../linkedList/LinkedList.js');

	return function treeToLinkedList(tree) {
		var lists = [];

		var DFRecurse = function(subtree, depth) {
			lists[depth] = lists[depth] || new LinkedList();
			lists[depth].add(subtree.value);

			for (var i = 0; i < subtree.children.length; i++) {
				DFRecurse(subtree.children[i], depth + 1);
			}
		};
		DFRecurse(tree, 0);

		return lists;
	};
}();
