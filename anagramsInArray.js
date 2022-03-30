/*

	An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is 	"angel", which is an anagram of "glean".

	Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words 	inside it.

	Some examples:

	There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
	There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

*/

function anagramCounter (wordsArray) {
  let counter = 0;
  wordsArray.forEach((word, i) => {
    wordsArray.forEach((otherWord, j) => {
      let wordsGotSameLetters = [...word].every(letter => otherWord.includes(letter))
      let wordsGotSameLength = word.length === otherWord.length
      let wordsIndexIsDifferent = i !== j

      if(wordsGotSameLetters && wordsGotSameLength && wordsIndexIsDifferent){
        counter++
      }
    })
  })
  return counter / 2;
}