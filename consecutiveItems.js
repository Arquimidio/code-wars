/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

function consecutive(arr, a, b) {
  let areConsecutive = false;
  arr.forEach((element, i) => {
    if(element === a && (arr[i - 1] === b || arr[i + 1] === b)) areConsecutive = true
  })
  return areConsecutive
}