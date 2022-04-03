/*
Linked Lists - Get Nth

 Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index   position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.   So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);

 getNth(1 -> 2 -> 3 -> null, 0).data === 1
 getNth(1 -> 2 -> 3 -> null, 1).data === 2
 The index should be in the range [0..length-1]. If it is not, GetNth() should throw/raise an exception (ArgumentException   in C#, InvalidArgumentException in PHP). You should also raise an exception (ArgumentException in C#,   InvalidArgumentException in PHP) if the list is empty/null/None.
*/

function getNth(node, index) {
  if(!node) throw new Error('Error')
  let i = 0
  while(i < index){
    node = node.next
    if(!node) throw new Error('Error')
    i++
  }
  return node
}
