/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

function evenLast(nums) {
  const sumOfEven = nums.reduce((acc, cur, i) => i % 2 === 0? acc + cur : acc, 0);
  const lastNum = nums[nums.length - 1];
  return sumOfEven * lastNum || 0;
}