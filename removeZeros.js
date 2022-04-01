/*
  Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

 For example, the following array

 [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

 is transformed into

 [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

 Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

 You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.
*/

function removeZeros(array) {
  //Verifies if a value equals 0 (string or number)
  const equalsZero = elt => elt === 0 || elt === '0'
  
  let zeroCount = 0
  //Counts how much zeros are in the array
  for(let h = 0; h < array.length; h++){
    if(equalsZero(array[h])) zeroCount++
  }
  
  //Iterates through the array
  for(let i = 0; i < array.length; i++){
    //If i reaches the first 0 at the end, stop
    if(i === (array.length - zeroCount)) break
    if(equalsZero(array[i])){
      /*If the actual element in the iteration equals 0,
       and move the array 1 position to the left and move
       the zero to the end of the array
       */
      let temp = array[i]
      for(let j = i; j < array.length; j++){
        array[j] = array[j + 1]
      }
      /*
        i-- because when 0 is found and the array
        is moved to the left, a 0 can go to a position
        before the actual i, so it's necessary to verify
        it
      */
      i--
      //Moves the 0 to the end of the array
      array[array.length - 1] = temp
    }
  }
  return array
}