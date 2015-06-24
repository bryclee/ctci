module.exports = function kthToLast(linkedList, k) {
    var result;

    var recursiveSearch = function(node) {
        var depth;
        if (node.next) {
            depth = recursiveSearch(node.next) + 1;
            if (depth === k) {
                result = node.value;
            }
            return depth;
        } else {
            return 0;
        }
    };

    recursiveSearch(linkedList.head);
    return result;
};

var iterativeGetKth = function(linkedList, k) {
    var headNode = linkedList.head;
    var trailingNode = linkedList.head;
    var counter = 0;

    while (headNode = headNode.next) {
        counter++;
        if (counter > k) {
            trailingNode = trailingNode.next;
        }
    }

    if (counter > k) {
        return trailingNode.value;
    } else {
        return null;
    }
};
