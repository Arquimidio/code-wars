/*
  Task:
  Complete the function piecesValue that accepts two arguments, an 8x8 array (arr),representing a chess board and a string (s). Depending on the value of the string s (which can be either "white" or "black") calculate the value of the pieces on the table for the corresponding player(white or black).
  Empty fields will be marked as a space " " while the fields with pieces look like this:

  "w-king"   //meaning white king
  "b-bishop" //a black bishop
  "w-pawn"   //white pawn
  ...and so on. Preloaded for you there is an object called hash:

   const hash = Object.freeze({
    queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
  });
  Having the estimated value of each piece. This is a rough estimation and the real piece value depends on other factors in game as well ,such as the game being a closed or open one, which can favor either knights or bishops. (If you are interested more about that here: open vs closed game.) But for our purposes we will use the mentioned values.
  Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king.You will not be tested for invalid input.
  Example case:
  piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
             [' ','b-king',' ',' ','w-rook',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             ['w-king',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' ']], 
             'white');
  //should be 14 since white has a queen and a rook 
  //while the same table would return 9 for 'black'

  piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
             [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
             [' ',' ',' ',' ','w-pawn',' ',' ',' '],
             [' ',' ',' ',' ',' ','w-bishop',' ',' '],
             ['w-king',' ',' ',' ',' ',' ',' ',' '],
             [' ',' ',' ','b-pawn',' ',' ',' ',' '],
             [' ',' ',' ',' ',' ',' ',' ',' ']],
             'white');
  //should return 18 for 'white' (queen, rook, pawn, bishop)
  //and 11 in case s is 'black'(queen, pawn, pawn)
*/

function piecesValue(arr, s) {
  /*
    Gets the desired side abreviation (w or b) from the
    given string
  */
  let side = s[0]
  /*Reduces the array of arrays to the desired value
  (iterates through the bigger array)*/
  return arr.reduce((acc, cur) =>{
    /*Iterating through each smaller array and adding
    the piece value to the accumulator*/
    cur.forEach(slot => {
      if(slot.startsWith(side)){
        //Getting the desired piece from the str in the array
        const piece = slot.split('-')[1]
        //Adding the piece to acc (excepting KING)
        acc += (hash[piece] || 0)
      }
    })
    return acc
  }, 0)
}