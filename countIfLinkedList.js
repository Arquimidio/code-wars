/*
Implement the method countIf (count_if in PHP), which accepts a linked list (head) and a predicate function, and returns the number of elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2, countIf / count_if should return 2, since x >= 2 applies to both 2 and 3.
*/

function countIf(head, p, count=0) {
  if(!head) return count;
  if(!p(head.data)) return countIf(head.next, p, count);
  return countIf(head.next, p, ++count);
}