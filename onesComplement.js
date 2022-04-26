/*

*/

function onesComplement(n) {
  return [...n].map(num => num === "1"? "0" : "1").join('')
};