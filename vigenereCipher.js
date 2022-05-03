/*
The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Example
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'
Any character not in the alphabet must be left as is. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
*/

function VigenèreCipher(key, abc) {
  let matchingKey;
  this.getEncodedStr = function(letter, i){
     //Verifies if letter is present in the given alphabet
     if(!abc.includes(letter)) return letter
     //Gets the index of the new shifted letter (old index + actual key index)
     const index = abc.indexOf(letter) + abc.indexOf(matchingKey[i]);
     //Gets the new letter based on the new index
     const newLetter = abc[index % abc.length];
     return newLetter;
  }
  
  this.encode = function (str) {
    //Creates matching key of str lenght
    matchingKey = key.repeat(str.length).slice(0, str.length);
    //Iterates through the str array, shifting th indexes based on matching key
    return [...str].map(this.getEncodedStr).join('')
  };
  
  this.getDecodedStr = function(letter, i){
      if(!abc.includes(letter)) return letter
      const index = abc.indexOf(letter) - abc.indexOf(matchingKey[i]);
      return abc[index >= 0? index : abc.length + index]
  }
  
  this.decode = function (str) {
    matchingKey = key.repeat(str.length).slice(0, str.length);
    return [...str].map(this.getDecodedStr).join('')
  };
}
function VigenèreCipher(key, abc) {
  this.shift = function(str, direction){
    //Creates key string with same length of str
    const matchingKey = key.repeat(str.length).slice(0, str.length);
    const shiftedArr = [...str].map((letter, i) => {
      //Verifies if letter exists in alphabet
      if(!abc.includes(letter)) return letter;
      //Gets the actual letter index in the alphabet
      const letterIndex = abc.indexOf(letter);
      //Gets the actual match index in the alphabet
      const matchIndex = abc.indexOf(matchingKey[i]);
      let index;
      // Changes the index based on given direction
      index = direction === 1
      ? letterIndex + matchIndex
      : letterIndex - matchIndex
      //Shfts based on given direction
      return direction === 1? this.shiftRight(index) : this.shiftLeft(index);
    })
    return shiftedArr.join('');
  }
  
  this.shiftLeft = function(index){
    return abc[index >= 0? index : abc.length + index];
  }
  
  this.shiftRight = function(index){
    return abc[index % abc.length];
  }
  
  this.encode = function (str) {return this.shift(str,  1)};
  this.decode = function (str) {return this.shift(str, -1)};
}