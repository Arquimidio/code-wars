/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

let orderedCount = function (text) {
  const indexRegister = {};
  return[...text].reduce((acc, cur, i) =>{
    if(indexRegister[cur] !== undefined){
      acc[indexRegister[cur]][1]++;
    }else{
      indexRegister[cur] = i;
      acc.push([cur, 1])
    }
    return acc
  }, []);
}