/*
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not.
*/

function fact(n){
  if(n < 1) return 1;
  return n * fact(n - 1);
}

function strong(n) {
  const numArr = [...n.toString()];
  const isStrong = numArr.reduce((acc, cur) => acc + fact(Number(cur)), 0) === n;
  return isStrong? "STRONG!!!!" : "Not Strong !!" ;
}