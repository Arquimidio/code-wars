/*
Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.
*/

// Recursive solution
function compare(a, b){
  if(!a && !b) return true
  if((a || {}).val !== (b || {}).val) return false
  else return !!compare(a.left, b.left) && !!compare(a.right, b.right)
}

// Non recursive solution
function compare(a, b){
  const queue = [a, b];
  while(queue.length){
    const length = queue.length;
    for(let i = 0; i < length/2; i++){
      const currentA = queue.shift()
      const currentB = queue.shift()
      if(!currentA && !currentB) return true
      if((currentA || {}).val !== (currentB || {}).val) return false;
      if(currentA.left) queue.push(currentA.left, currentB.left)
      if(currentA.right) queue.push(currentA.right, currentB.right)
    }
  }
  return true
}