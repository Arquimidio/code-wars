/*
Task
Create function union getting 2 sets as arguments and returning a new Set as result of union of these 2 sets.
*/

function union(s1, s2){
  return new Set([...s1].concat([...s2]))
}