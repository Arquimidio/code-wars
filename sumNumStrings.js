/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) { 
  const biggest = a.length > b.length? a : b;
  const smallest = (a.length > b.length? b : a).padStart(biggest.length, '0');
  const result = [];
  let carry = 0;
  for(let i = biggest.length - 1; i >= 0; i--){
    let sum = parseInt(biggest[i]) + parseInt(smallest[i]) + carry;
    if(sum >= 10){
      if(i) sum -= 10;
      carry = 1;
    }else{
      carry = 0
    }
    result.push(sum);
  }
  return result.reverse().join('').replace(/^0+/g, '');
}