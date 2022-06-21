/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/

function isHollow(arr){
  while(arr.length >= 3 && arr[0] !== 0 && arr[arr.length - 1] !== 0){
    arr.pop();
    arr.shift();
  }
  
  return /^0{3,}$/.test(arr.join(''))
}