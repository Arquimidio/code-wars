/*
 Your task is to add up letters to one letter.

 The function will be given a variable amount of arguments, each one being a letter to add.

 Notes:
 Letters will always be lowercase.
 Letters can overflow (see second to last example of the description)
 If no letters are given, the function should return 'z'
 Examples:
 addLetters('a', 'b', 'c') = 'f'
 addLetters('a', 'b') = 'c'
 addLetters('z') = 'z'
 addLetters('z', 'a') = 'a'
 addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
 addLetters() = 'z'
*/

function addLetters(...letters) {
 // Transforms letter in it's character code and turns it into a number between 1 and 26
  const toNumber = letter => letter.charCodeAt(0) - 96
  // Sums all the characters in the array (considering overflow)
  const newLetterCode = (letters.reduce((acc, cur) => {
    return acc + toNumber(cur)
  }, 0) % 26 || 26) + 96
  // Returns the new letter from the sum
  return String.fromCharCode(newLetterCode)
}