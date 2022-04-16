/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.
*/

function solve(arr) {
  //P.E.R.F.O.R.M.A.N.C.E++
  let cache = {};
  return arr.reduceRight((acc, cur) => cache[cur]? acc : (cache[cur] = 1, acc.push(cur), acc), []).reverse()
  
  //P.E.R.F.O.R.M.A.N.C.E--
  return arr.filter((num, i) => i === arr.lastIndexOf(num));
}