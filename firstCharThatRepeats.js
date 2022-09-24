Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.

function firstDup (s) {
  const cache = {};
  let repeatedCharIndex;
  
  for(let i = 0, j = s.length; i < j; i++){
    const curChar = s[i];
    
    if(curChar in cache){
      const curCharFirstIndex = cache[curChar]
      if(repeatedCharIndex === undefined ||  curCharFirstIndex < repeatedCharIndex){
        repeatedCharIndex = curCharFirstIndex;
      }
    }else{
      cache[curChar] = i;
    }
  }
  
  return s[repeatedCharIndex];
}