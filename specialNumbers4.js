/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.
*/

function jumpingNumber(n){
  const numStr = n.toString();
  const isJumping = [...numStr.slice(1)].every((num, i) => Math.abs(num - numStr[i]) === 1);
  return isJumping?  'Jumping!!' : 'Not!!';
}