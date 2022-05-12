/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  // Gets the biggest of the numbers
  const biggest = a.length > b.length? a : b;
  // Gets the smallest of the numbers
  const smallest = a.length > b.length? b : a;
  const bigArr = [...biggest];
  // Adequates the size of the smallest number adding zeroes
  const smallArr = [...smallest.padStart(biggest.length, '0')];
  const result = [];
  // Store the carry of the actual calculation
  let carry = 0;
  /* 
     Loops through the numbers starting from the end, adding one by one 
     and keeping track of the carry, exactly like calculations made in paper
  */
  for(let i = bigArr.length - 1; i >= 0; i--){
    let sum = parseInt(bigArr[i]) + parseInt(smallArr[i]) + carry;
    if(sum >= 10){
      if(i) sum -= 10;
      carry = 1;
    }else{
      carry = 0;
    }
    result.push(sum);
  }
  return result.reverse().join('')
}