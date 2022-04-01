/*
 Complete the method which accepts an array of integers, and returns one of the following:

 "yes, ascending" - if the numbers in the array are sorted in an ascending order
 "yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
 You can assume the array will always be valid, and there  will always be one correct answer.
*/

function isSortedAndHow(array) {
  //Gets the first and the second element of the array
  const [first, second] = array
  /*
    If the first element is bigger than the second, or equal verify if it's in ascending order
  */
  if(first <= second){
    /*
      If every element is smaller or equals the next,
      the array is in ascending order. Same logic
      reversed for descending order.
    */
    const isAscending = array.every((elt, i) => array[i + 1] === undefined? true : elt <= array[i + 1])
    return isAscending? 'yes, ascending' : 'no'
  }else if(first >= second){
    const isDescending = array.every((elt, i) => array[i + 1] === undefined? true : elt >= array[i + 1])
    return isDescending? 'yes, descending' : 'no'
  }
}