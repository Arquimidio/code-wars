/*

*/

function areEqual(s1, s2){
  return [...s1].every(elt => s2.has(elt)) && s1.size === s2.size;
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}