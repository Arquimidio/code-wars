/*
	Your task is to write function findSum.

	Upto and including n, this function will return the sum of all multiples of 3 and 5.

	For example:

	findSum(5) should return 8 (3 + 5)

	findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

function findSum(n) {
  let sum = 0
  while(n){
    if(n % 3 === 0 || n % 5 === 0){
      sum += n
    }
    n--
  }
  return sum;
}