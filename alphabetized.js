/*
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
*/

const alphabetized = s => s
  .replace(/[^a-zA-Z]/g, '')
  .split``
  .sort((x, y) => (x.toUpperCase() === y.toUpperCase()) ? (s.indexOf(x) - s.indexOf(y)) : x.localeCompare(y, { caseFirst: 'upper'}))
  .join``;