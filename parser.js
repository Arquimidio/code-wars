/*
 Write a simple parser that will parse and run Deadfish.

 Deadfish has 4 commands, each 1 character long:

 i increments the value (initially 0)
 d decrements the value
 s squares the value
 o outputs the value into the return array
 Invalid characters should be ignored.

 parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data )
{ 
  const parser  = {
    output: [],
    val: 0,
    'i': function(){++this.val},
    'd': function(){--this.val},
    's': function(){this.val *= this.val},
    'o': function(){this.output.push(this.val)},
  }
  
  data.split('')
      .forEach(com => com in parser? parser[com]() : null)

  return parser.output
}