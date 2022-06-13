/*
Write

function wordPattern(pattern, str)
that given a pattern and a string str, find if str follows the same sequence as pattern.

For example:

wordPattern('abab', 'truck car truck car') === true
wordPattern('aaaa', 'dog dog dog dog') === true
wordPattern('abab', 'apple banana banana apple') === false
wordPattern('aaaa', 'cat cat dog cat') === false
Note: Each letter in the pattern stands for a distinct word
*/

function wordPattern(pattern, str) {
  const wordRegister = {};
  const letterRegister = {};
  const strArr = str.split(' ');
  for(let i = 0, len = strArr.length; i < str.length; i++){
    const word = strArr[i];
    if(word in wordRegister){
      if(pattern[i] !== wordRegister[word] || word !== letterRegister[pattern[i]]) return false
    }else{
      if(pattern[i] in letterRegister) return false;
      letterRegister[pattern[i]] = word;
      wordRegister[word] = pattern[i];
    }
  }
  return true;
}