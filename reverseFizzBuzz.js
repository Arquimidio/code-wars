/*

 Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could   also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

 For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and   Buzz. Return them as an array [n, m]

 The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100.  The  Fizz and Buzz numbers might be equal, and might be equal to 1.

 Examples
 Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
 [1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
 Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
 [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
 Multiples of 2 are replaced by Fizz and Buzz:
 [1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
 Fizz = 1, Buzz = 6:
 ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]

*/

function reverseFizzBuzz(array) {
  let fizz = false
  let buzz = false
  let fizzbuzz = false
  array.forEach((element, index) => {
    if(element === "Fizz" && !fizz){
      fizz = index + 1
    }else if(element === 'Buzz' && !buzz){
      buzz = index + 1
    }else if(element === 'FizzBuzz' && !fizzbuzz){
      fizzbuzz = index + 1
    }
  })
  return [fizz || fizzbuzz, buzz || fizzbuzz]
};

/* Shorter way

function reverseFizzBuzz(array) {
  var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz")+1;
  var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz")+1;

return [fizz,buzz];

};

*/