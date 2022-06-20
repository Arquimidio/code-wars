/*
Build a function that can get all the integers between two given numbers.

Example:

(2,9)

Should give you this output back:

[ 3, 4, 5, 6, 7, 8 ]

If startNum is the same as endNum, return an empty array.
*/

function range(startNum, endNum)   
{  
 return Array(endNum - startNum - 1).fill().map((_, i) => startNum + i + 1)
};  