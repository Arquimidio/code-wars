/*
Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/

function f(x, cc) { 
  const opposites = {
    a : 'b',
    b : 'c',
    c : 'a'
  }
  
  for(let key in cc){
    if(x === cc[key]) return cc[opposites[key]] 
  }
}