/*
Your task is to return duplicated objects from an array.

You will receive two arrays, objs and keys. Duplicate objects mean that the object properties defined on keys are duplicated, for example:

// keys
[ 'x', 'y' ]

// objs
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
{ x: 1, y: 1, z: 3 },
The expected result is:

{ x: 1, y: 1 },
{ x: 1, y: 1, z: 3 },
Because x and y repeat on the first and last element, so they will be picked up.

If a key is not present in the object the value of this property will be considered "not defined" native value for the current language.
*/

function duplicated(arr, keys) {
  // Maps the objects array, transforming every object into a string of values based on present keys in keys array
  const strArr = arr.map(obj => {
    return keys.map(key => obj[key]).toString();
  })
  // Filters the main array based on the strArr, transform objects in strings again
  return arr.filter(obj =>{
    const str = keys.map(key => obj[key]).toString();
    return strArr.indexOf(str) !== strArr.lastIndexOf(str);
  });
}

// Cleaner
function duplicated(arr, keys) {
  return arr.filter((obj, i) =>{
    return arr.some((otherObj, j) => i !== j && keys.every(k => obj[k] === otherObj[k]));
  })
}