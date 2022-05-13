/*
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"

If a character provided is not in the opposing alphabet, simply leave it as be.

*/

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return [...str].map(letter =>{
      const index = abc1.indexOf(letter);
      if(index !== -1) return abc2[index]
      return letter
    }).join('')
  }
  this.decode = function (str) {
    return [...str].map(letter => {
      const index = abc2.indexOf(letter)
      if(index !== -1) return abc1[index];
      return letter
    }).join('')
  }
}