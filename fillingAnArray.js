/*
Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

const makeArr = (len, fun) => Array.from({length: len}, (_, i) => fun(i));

const squares = n => makeArr(n, i => (i + 1) ** 2);

const range = (n, start, step) => makeArr(n, i => start + (i * step))

const random = (n, min, max) => makeArr(n, i => Math.floor(Math.random() * (max + 1 - min) + min))

const primes = n => {
  const arr = [];
  let count = 2;
  while(arr.length < n){
    let isPrime = true;
    for(let i = 2; i < count; i++){
      if(count % i === 0) isPrime = false;
    }
    if(isPrime) arr.push(count)
    count++
  }
  return arr;
}