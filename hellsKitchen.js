/*
	Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

	Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

	Rules:

	Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any 	other vowel should become '*'.
*/

function gordon(a){
  // REGEX
  return a.toUpperCase()
          .replace(/\w+/g, word => word + '!!!!')
          .replace(/[aeiou]/gi, letter => letter === 'A'? '@' : '*')
  
  /* NO REGEX
  const vowels = ['E', 'I', 'O', 'U']
  return [...a.toUpperCase()].map(letter => {
    if(letter === 'A'){
      return '@'
    }else if(vowels.includes(letter)){
      return '*'
    }
    return letter
  })
  .join('')
  .split(' ')
  .map(word => word + '!!!!')
  .join(' ')
  */
}