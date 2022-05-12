/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

*/

function upArray(arr){
  if(arr.some(elt => typeof elt !== 'number' || elt < 0) || !arr.length) return null
  const bigNum = arr;
  const bigOne = String(1).padStart(bigNum.length, '0');
  const result = [];
  let carry = 0;
  for(let i = bigNum.length - 1; i >= 0; i--){
    const x = parseInt(bigNum[i]);
    const y = parseInt(bigOne[i]);
    if(x > 9) return null;
    let sum = x + y + carry;
    if(sum >= 10){
      carry = 1;
      if(i) sum = sum - 10
      else{
        const arrSum = [...sum.toString()].reverse()
        arrSum.forEach(digit => result.push(digit))
      }
    }else{
      carry = 0;
    }
    if(i || sum < 10) result.push(sum);
  }
  return result.reverse().map(Number);
}