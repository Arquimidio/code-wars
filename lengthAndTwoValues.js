/*
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]
*/

function alternate(n, firstValue, secondValue){
  return Array.from({length: n}, (_, i) => i % 2? secondValue : firstValue);
}