/*
Task
Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.
*/

function inter(s1, s2){
  return new Set([...s1].filter(elt => s2.has(elt)))
}