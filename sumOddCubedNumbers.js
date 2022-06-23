/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  const result =  arr.reduce((acc, cur) => cur ** 3 % 2 === 0? acc : acc + cur ** 3, 0);
  return isNaN(result)? undefined : result;
}