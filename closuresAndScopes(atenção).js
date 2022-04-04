/*

We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
*/

function createFunctions(n) {
  var callbacks = [];

/*
 The only necessary change was to declare "i" as let instead of var.
 It works because let is block scoped, while var is not, so, when the loop runs,
 if "i" is a "var", all the callbacks pushed to the array will have the same
 "i"(n -  1). Now, when "i" is declared as "let", each iteration will have a unique i that
 will be "i" accessible as closure in the functions inside the callbacks array
*/
function createFunctions(n) {
  var callbacks = [];

  for (/*var*/ let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
}