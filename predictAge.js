/*
 My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

 In honor of my grandfather's memory we will write a function using his formula!

 Take a list of ages when each of your great-grandparent died.
 Multiply each number by itself.
 Add them all together.
 Take the square root of the result.
 Divide by two.
 Example
 predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
 Note: the result should be rounded down to the nearest integer.

 Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

function predictAge(...grandparentsAges){
  //iterates through grandparentsAges array, squaring and summing every age
  let grandAgeSum = grandparentsAges.reduce((acc, cur) => acc + cur ** 2, 0)
  let myMaxAge = Math.floor(Math.sqrt(grandAgeSum) / 2)
  return myMaxAge
}