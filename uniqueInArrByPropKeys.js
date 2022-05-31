/*
Your task is to return unique objects from an array.

You will receive two arrays, objs and keys. Unique objects mean that the object properties defined on keys are unique, for example:

// keys
[ 'x', 'y' ]

// objs
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
{ x: 1, y: 1, z: 3 },
The expected result is:

{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
Because x and y repeat on the first and last element, so only the first will be picked up.

If a key is not present in the object the value of this property will be considered "not defined" native value for the current language.
*/

function unique(arr, keys) {
  const register = [];
  return arr.filter(obj =>{
    const compareArr = keys.map(key => obj[key]);
    const str = compareArr.toString();
    if(!register.includes(str)){
      register.push(str);
      return true;
    }
    return false;
  });
}