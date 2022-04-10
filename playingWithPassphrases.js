/*
 Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can  be  guessed due to common cultural references. You can get your passphrases stronger by different means. One is the  following:

 choose a text in capital letters including or not digits and non alphabetic characters,
 shift each letter by a given number but the transformed letter must be a letter (circular shift),
 replace each digit by its complement to 9,
 keep such as non alphabetic and non digit characters,
 downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
 reverse the whole result.
 Example:
 your text: "BORN IN 2015!", shift 1

 1 + 2 + 3 -> "CPSO JO 7984!"

 4 "CpSo jO 7984!"

 5 "!4897 Oj oSpC"
*/

const isLetter = element =>  /[a-z]/i.test(element)
const isNumber = element => /\d/.test(element)
const shiftLetter = (char, num) => String.fromCharCode(((char.toLowerCase().charCodeAt(0) - 96 + num) % 26 || 26) + 96);
const caseLetter = (letter, position) => position % 2 === 0? letter.toUpperCase() : letter.toLowerCase();
const complementTo9 = num => 9 - num;


function playPass(s, n) {
   return s.split('').map((elt, i) =>{
     return (
       isNumber(elt)
       ? complementTo9(elt)
       : isLetter(elt)
       ? caseLetter(shiftLetter(elt, n), i)
       : elt
     )
   }).reverse().join('')               
}