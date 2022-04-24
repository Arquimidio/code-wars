/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

function solve(s){
  return [...s].reduce((acc, cur) => {
    if(/\W/.test(cur)) acc[3]++;
    else if(/\d/.test(cur)) acc[2]++;
    else if(cur !== cur.toUpperCase()) acc[1]++;
    else acc[0]++
    return acc
  },[0, 0, 0, 0]);
}
