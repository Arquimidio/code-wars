/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.
*/

function repeats(arr){
  // Hello, performance!
  const register = {};
  let sum = 0;
  arr.forEach(elt => register[elt]? sum -= elt : (sum += elt, register[elt] = 1))
  return sum
  
  //Bye bye, performance...
  const singles = arr.filter((num, i) => arr.lastIndexOf(num) === arr.indexOf(num))
  return singles[0] + singles[1]
};