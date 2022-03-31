/*
  Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.
  An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first   person in line is also the first one who gets out. 

  Waiting Lines

  In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we   are creating, so we should be able to create new instances of the Queue.
  The enqueue method takes in the item as a parameter, while the dequeue method does not.
  The size method simply returns the number of items in the queue.
  Wait, what?
  To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
  To dequeue an item means means to remove the item at the front, or head, of the queue.
  In a queue, we remove the item the least recently added.
*/

const Queue = function() {
  this.head = []
};

Queue.prototype.enqueue = function(item) {
  return this.head.push(item)
};

Queue.prototype.dequeue = function() {
  return this.head.shift()
};

Queue.prototype.size = function() {
  return this.head.length
};
