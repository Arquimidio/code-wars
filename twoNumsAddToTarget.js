#Task Given a sorted array of integer numbers A and another integer number sum, write a function that returns true if there are two (distinct) numbers in A that add up to sum. Return false otherwise.

#Input

A: The array is guaranteed to be sorted and has at least two elements. All elements are integers.
sum: An integer.
#Example

A = [1,2,3,4], sum = 7 returns true, since 3+4=7.
A = [-1,2,7,15], sum = 12 returns false, since any combination of two integers in the array doesn't add up to 12.
A = [1,3,3], sum = 2 returns false. You cannot use 1 twice.
#Notes

Some arrays will have many elements (>100000). Therefore, please optimize your code.

function hasPair(A, sum){
  const cache = {};
  for(let number of A){
    if(number in cache){
      return true;
    }else{
      cache[sum - number] = number;
    }
  }
  return false;
}