/*
Objective
Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.
*/

function score(n){
  return n? parseInt(n.toString(2).replace(/0/g, '1'), 2) : n
}