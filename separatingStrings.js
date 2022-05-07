/*
Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)
*/

function sepStr(str) {
  const wordArr = str.split(' ');
  const biggestWord = wordArr.reduce((acc, cur) => cur.length > acc? cur.length : acc, 0);
  const finalArr = Array.from({length: biggestWord}, _ => []);
  finalArr.forEach((row, rowIndex) => wordArr.forEach((column, columnIndex) => {
    finalArr[rowIndex].push(wordArr[columnIndex][rowIndex] || '');
  }))
  return finalArr;
}