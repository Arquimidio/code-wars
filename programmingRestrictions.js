/*
	The evil programming government has banned the use of numbers. Your task, if you choose to accept it is to return 	numbers, without using numbers.
	
	Problems:

	You can't use number literals in your source code.
	You can't use the length property directly in your code.
	Goal:

	You have to return 'I can write numbers like, 1, 2, 3.'
*/

let anarchy = function () {
  const toCode = str => str.charCodeAt()
  const getChar = minuend => String.fromCharCode(toCode(minuend) - toCode('#'))
  let one = getChar('T')
  let two = getChar('U')
  let three = getChar('V')
  return `I can write numbers like, ${one}, ${two}, ${three}.`;
}