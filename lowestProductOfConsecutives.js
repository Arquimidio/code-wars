/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

function lowestProduct(input) { 
  if(input.length < 4) return 'Number is too small'
  let smallest = [...input.slice(0,  4)].reduce((acc, cur) => acc * cur);
  for(let i = 0; i < input.length - 3; i++){
    let product = [...input.slice(i, i + 4)].reduce((acc, cur) => acc * cur);
    if(product < smallest) smallest = product;
  }
  return smallest
}