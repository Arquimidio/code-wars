/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

const CaesarCipher = function (shift) {
  this.shift = shift;
  
  this.encode = function(string){
    return string.toLowerCase().replace(/[a-z]/g, letter => {
      const letterCode = letter.charCodeAt() - 97;
      const sum = letterCode + this.shift;
      const newCode = (sum % 26 || 0) + 97;
      return String.fromCharCode(newCode).toUpperCase();
    }) 
  }
  
  this.decode = function(string){
    return string.toLowerCase().replace(/[a-z]/g, letter => {
      const letterCode = letter.charCodeAt() - 97;
      const subtraction = letterCode - this.shift;
      const newCode = (subtraction < 0? 26 - (Math.abs(subtraction) % 26) : subtraction) + 97
      return String.fromCharCode(newCode).toUpperCase()
    })
  }
};