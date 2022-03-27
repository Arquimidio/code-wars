/*

Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!

*/

function lastIndexOf(head, value) {
  if(!head) return -1
  let actualElement = head;
  let actualIndex = 0;
  let lastIndex = -1;
  while(actualElement){
    if(actualElement.data === value){
      lastIndex = actualIndex
    }
    actualIndex++
    actualElement = actualElement.next
  }
  return lastIndex
}


