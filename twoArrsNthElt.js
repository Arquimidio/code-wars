/*
Task
Given two sorted arrays of integers(array1 and array2) and an integer n, find the nth (0-based) element of their sorted union.

In order to prevent brute force, array1 and array2 may contain 1000000 elements. ;-)

Input/Output
[input] integer array array1

Sorted array of distinct integers(negative, positive or zero).

0 ≤ array1.length ≤ 1000000

[input] integer array array2

Sorted array of distinct integers(negative, positive or zero).

It is guaranteed that no integer is contained in both array1 and array2.

0 ≤ array2.length ≤ 1000000

[input] integer n

Non-negative integer less than the summary size of array1 and array2.

0 ≤ n < array1.length + array2.length

[output] an integer

The nth element(0-based).

Example
For array1 = [1, 3, 4], array2 = [2, 6, 8] and n = 5,

the output should be 8.

Sorted union of array1 and array2 is [1, 2, 3, 4, 6, 8]. The 5th element is 8.
*/

function twoArraysNthElement(array1, array2, n) {
  const count = [];
  let arr1C = 0;
  let arr2C = 0;
  while(count.length <= n){
    if((array1[arr1C] > array2[arr2C]) || array1[arr1C] === undefined){
      count.push(array2[arr2C]);
      arr2C++;
    }else{
      count.push(array1[arr1C]);
      arr1C++;
    }
  }
  return count[n];
}
