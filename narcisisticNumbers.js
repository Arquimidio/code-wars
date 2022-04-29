/*
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.
*/

function isNarcissistic(n){
  return [...n.toString()].reduce((acc, cur, i, arr) => acc + Math.pow(cur, arr.length), 0) === n;
}