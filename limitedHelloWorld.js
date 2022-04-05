//Link: https://www.codewars.com/kata/54db3f2903e88ad6c30002ff

/*
 In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

 Disallowed functionality:

 Strings
 Numbers
 Regular Expressions
 Functions named "Hello", "World", "HelloWorld" or anything similar.
 Object keys named "Hello", "World", "HelloWorld" or anything similar.
 Without using the above, output the string "Hello World!" to prove that there is always a way.
*/

let helloWorld = function () {
  let one = Number(true)
  let two = one + one
  let three = two + one
  let five = --(typeof one).length
  let seven = five + two
  let ten = five * two
  let aHundred = ten * ten
  
  let H = seven * ten + two
  let e = aHundred + one
  let l = e + seven
  let o = l + three
  let space = ten * three + two
  let W = H + ten + five
  let r = o + three
  let d = aHundred
  let bang = space + one
  
  return String.fromCharCode(H,e,l,l,o,space,W,o,r,l,d,bang)
}