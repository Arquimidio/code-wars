/*
Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT : use closures
*/

function sum(x, y) {
  if(y !== undefined) return x + y;
  return (y) => {
    return x + y;
  }
 }