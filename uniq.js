/*
Implement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

Example:

["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
*/

function uniq(a) {
  return a.filter((char, i) => char !== a[i + 1]);
}