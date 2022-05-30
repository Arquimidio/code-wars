/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function(town) {
  const townArr = town.match(/~O|O~|P/g);
  const pLocation = townArr.indexOf('P');
  let deafRats = 0;
  townArr.forEach((rat, i) =>{
    if(rat === "O~" && i < pLocation || rat === "~O" && i > pLocation){
      deafRats++;
    }
  })
  return deafRats;
}