/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
*/

function minSum(arr) {
  return arr.sort((a, b) => b - a)
            .slice(0, arr.length / 2)
            .reduce((acc, cur, i) => acc + (cur * arr[arr.length - 1 - i]), 0)
}