/*
The Gods punished our Kingdom for being rich and prosperous - The Black Death is spreading between us. Moreover, plenty of people in hundreds of villages are affected by the dancing mania, singing and dancing till death. Some people say that they saw the dancing Witch in the crowds. You, Great Inquisitor, must find her and put her at the stake!

Task
You are given the array of strings of equal length, that consist of unique lowercase letters(dancing people) and spaces. You have to figure out which letter is the Witch(if there is one) and return it.

Rules
Each string represents the next moment of dancing, where people have changed their position relative to the previous string(like a filmstrip). Each letter can move only one position to the left or to the right (or can stay in the same place), comparing to its previous position in the previous string. They move simultaneously and can switch places. The "Witch letter" pretends being an ordinary letter(moving one position,staying or switching places), but also she is the one who can leap over others, moving more than 1 position(see the explanation below). When you found out the Witch, return it. If there is no Witch, return null (she felt the danger or probably she is in other village).

Leap over:
The Witch leaped over other letters(s) when she moved more than one position, leaving behind all these letters or some of them. She can jump only when she is adjacent to them.

Notes:
The minimum length of a string is 3;

The array contains at least 2 strings and a string contains at least 2 letters;

When the Witch doesn't leap over, it moves a normal distance;

The letters can change their direction;

There will always be only one witch (or no witch);

Two letters can not occupy the same position at the same time;

All strings contain same letters.

Example 1:
given
["a b", " ba"]

return "a"
Example 2:
given
["ab kl", "ba kl", "a blk"]

return "b"
Example 3:
given
["icwth", "wicth", "witch"]

return "w"
Example 4:
given
["abcdef", "abcfde"]

return "f"
Example 5:
given
["hop", "hpo", "pho"]

return null
*/

function figureOut(arr) {
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      const actualLetter = arr[i][j];
      if(/[a-z]/i.test(actualLetter)){
        const previousIndex = arr[i - 1].indexOf(actualLetter);
        if(Math.abs(j - previousIndex) > 1){
          return actualLetter;
        }
      }
    }
  }
  return null;
}