/*
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

// Javascript: return multiples into an array
function multiples(s1,s2,s3){
  const result = [];
  for(let i = 1; i < s3; i++){
    if(i % s1 === 0 && i % s2 === 0){
      result.push(i);
    }
  }
  return result
}