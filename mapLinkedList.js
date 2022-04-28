/*
Implement the method map, which accepts a linked list (head) and a mapping function, and returns a new linked list (head) where every element is the result of applying the given mapping method to each element of the original list.

For example: Given the list: 1 -> 2 -> 3, and the mapping function x => x * 2, map should return 2 -> 4 -> 6
*/

function map(head, f) {
  let values = [];
  while(head){
    values.push(head.data);
    head = head.next;
  }
  return values.reduceRight((acc, cur) => {
    return {data: f(cur), next: acc}
  }, null)
}