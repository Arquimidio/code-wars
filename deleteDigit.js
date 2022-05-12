/*
Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

function deleteDigit(n) {
  const digits = n.toString();
  let biggest = parseInt(digits.slice(1));
  for(let i = 0; i < digits.length; i++){
    const actualNum = parseInt(digits.slice(0, i) + digits.slice(i + 1));
    if(actualNum > biggest) biggest = actualNum;
  }
  return biggest;
}