/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/


function scrollingText(text){
  const rotations = [text.toUpperCase()];
  for(let i = 1; i < text.length; i++){
    const actualRot = rotations[rotations.length - 1];
    const newRot = actualRot.slice(1) + actualRot[0];
    rotations.push(newRot);
  }
  return rotations
}