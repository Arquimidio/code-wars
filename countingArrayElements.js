/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/


const count = array =>{
  return   array.reduce((acc, cur) => (acc[cur] = (acc[cur] + 1 || 1), acc), {});
}