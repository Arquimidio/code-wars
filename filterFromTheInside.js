/*
Example of Filter

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);
// Expected
[1, 2, 3, 4, 5]
Not allowed:

Array.prototype.filter
Array.prototype.forEach
I can't disable forEach since console.log needs it and the Test Cases require console.log implicitly, but please don't use it since forEach does most of the work.
Array.prototype.reduce/reduceRight
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.fiter is a function that takes a predicate function and an object as a context
The predicate function receives the current item, the index and the array itself
The context will be this inside the predicate function
NOTE

As always, take into account that an array built with [] and new Array(elemn1, elem2...) is different in content than a new Array(length).
[1, 2]; // { '0': 1, '1': 2, length: 2}
new Array(1, 2); // { '0': 1, '1': 2, length: 2}
new Array(2); // { length: 2 }

[1, 2].push(3); // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(1, 2).push(3);  // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(2).push(3); // { '2': 3, length: 3 }
That said, Happy Coding!

Another Note

Your implementation should not modify the current array:

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.filter(function(item) { return item < 3 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [1, 2]
*/

Array.prototype.filter = function(callback, context){
  const result = [];
  const origLen = this.length;
  for(let i = 0; i < origLen; i++){
    if(callback.call(context || this, this[i], i, this) && i in this){
      result.push(this[i]);
    }
  }
  return result;
}