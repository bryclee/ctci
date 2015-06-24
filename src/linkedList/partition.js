module.exports = function partitionList(linkedList, value) {
    // given LinkedList, a function to create a linked list
    var lowList = new LinkedList();
    var lowListTail;
    var highList = new LinkedList();
    var node = linkedList.head;

    while (node) {
        if (node.value < value) {
            lowListTail = lowList.add(node);
        } else {
            highList.add(node);
        }

        node = node.next;
    }

    lowListTail.next = highList.head;
    lowListTail.tail = highList.tail;

    return lowList;
};
