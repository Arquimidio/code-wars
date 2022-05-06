/*
Description:
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

// LOOP
function product (string) {
  let exclamations = 0;
  let questions = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === '!') exclamations++;
    if(string[i] === '?') questions++;
  }
  return exclamations * questions;
}

//REGEX
function product (string) {
  const exclamations = (string.match(/!/g) || []).length;
  const questions = (string.match(/\?/g) || []).length;
  return exclamations * questions;
}