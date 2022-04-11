/*

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

*/

function solve(n) {
  const notes = [500, 200, 100, 50, 20, 10];
  let count = 0;
  let index = 0;
  while(index < notes.length){
    if(n - notes[index] >= 0){
      n -= notes[index];
      count++;
    }else{
      index++;
    }
  }
  return n? -1 : count
}
