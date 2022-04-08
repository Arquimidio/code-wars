/*

 You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every  instance of letter(case insensitive).

 If there is a number, punctuation or underscore following the letter, it should not be returned.

 If letter = 'r':
 comes_after("are you really learning Ruby?") # => "eenu"
 comes_after("Katy Perry is on the radio!")   # => "rya"
 comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
 comes_after("r8 your friend")                # => "i"
 Return an empty string if there are no instances of letter in the given string.

*/

function comes_after(str,l) {

  //RegEx
  const regex = new RegExp(`[a-z]`,'i')
  return [...str].reduce((acc, cur, i, arr) =>{
    const currentEqualsSearched = cur.toLowerCase() === l.toLowerCase()
    const nextIsLetter = regex.test(arr[i + 1])
    if(currentEqualsSearched && nextIsLetter){
      acc += (arr[i + 1] || '')
    }
    return acc
  }, '')

  /* Basic
   let exceptions = ['0','1','2','3','4','5','6','7','8','9','.', ':', '_', '!', '?', ' ']
    return [...str].reduce((acc, cur, i) => {
    let next = str[i + 1]
    if(cur.toLowerCase() === l.toLowerCase() && !exceptions.includes(next)){
      acc += (next || '')
    }
    return acc
  }, '')
  */
}