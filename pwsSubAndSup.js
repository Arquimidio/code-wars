/*
Task
Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if 2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if 1st set contains all elements of 2d one.
*/

function isSubsetOf(s1, s2){
  return [...s1].every(element => s2.has(element))
}

function isSupersetOf(s1, s2){
  return [...s2].every(element => s1.has(element))
}