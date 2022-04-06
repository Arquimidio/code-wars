/*
 Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
 Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  //Transform the num into an array
  let numArr = [...num.toString()]
  //Verifies if the num passed is Odd
  let isOdd = num => num % 2 !== 0
  //Maps the num arr, adding dashes in the correct places
  return numArr.map((elt, i) =>{
    if(numArr[i + 1] && isOdd(elt) && isOdd(numArr[i + 1])){
      return elt + '-'
    }
    return elt
  }).join('')
}