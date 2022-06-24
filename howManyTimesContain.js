/*
Your task is to return how many times a string contains a given character.

The function takes a string(inputS) as a parameter and a char(charS) which is the character that you will have to find and count.

For example, if you get an input string "Hello world" and the character to find is "o", return 2.
*/

function stringCounter(inputS, charS){
  return [...inputS].reduce((acc, cur) => acc + (cur === charS), 0);
}