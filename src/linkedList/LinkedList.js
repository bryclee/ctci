module.exports = LinkedList = function() {
    var LinkedList = function() {
        this.head = null;
        this.tail = null;
    };

    var Node = function(value) {
        this.value = value;
        this.next = null;
    };

    LinkedList.prototype.add = function(value) {
        if (this.head) {
            this.tail.next = new Node(value);
            this.tail = this.tail.next;
        } else {
            this.head = new Node(value);
            this.tail = this.head;
        }

        return this.tail;
    };

    return LinkedList;
}();
