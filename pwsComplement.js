/*
Task
Create function diff getting 2 sets as arguments and returning a new Set as result of relative complement of second set in first.
*/

function diff(s1, s2){
  return new Set([...s1].filter(element => !s2.has(element)));
}