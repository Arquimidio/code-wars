/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

snail = function(array) {
  const result = [];
  const directions = ['r', 'd', 'l', 'u']
  let direction = 'r';
  while(array.length){
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
        let val;
        if(direction === 'r'){
          val = array[0].shift();
        }else if(direction === 'd'){
          val = array[j].pop();
        }else if(direction === 'l'){
          val = array[array.length - 1].pop();
        }else if(direction === 'u'){
          val = array[array.length - j- 1].shift();
        }
        if(val !== undefined) result.push(val);
      }
      array = array.filter(arr => arr.length)
      direction = directions[(directions.indexOf(direction) + 1) % 4]
    }
  }
    return result
}