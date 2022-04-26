/*

*/

function doubleEveryOther(a) {
  return a.map((num, i) => i % 2? num * 2 : num);
}