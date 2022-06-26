/*
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/

function equalize(array){
  return array.map(num => num - array[0] >= 0? `+${num - array[0]}` : `${num - array[0]}`);
}