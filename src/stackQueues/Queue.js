module.exports = (function() {
  var Queue = function() {
    this.inStack = [];
    this.outStack = [];
  };

  Queue.prototype.enqueue = function(value) {
    this.inStack.push(value);
  };

  Queue.prototype.dequeue = function() {
    if (!this.outStack.length) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop() || null;
  };

  return Queue;
})();
