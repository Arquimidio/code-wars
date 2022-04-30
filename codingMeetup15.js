/*
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number
*/

function findOddNames(list) {
  return list.filter(dev => {
         return [...dev.firstName].reduce((acc, cur) => acc + cur.charCodeAt(), 0) % 2 !== 0
  });
}