You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Decends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
Notes:

length will always be non-negative
negative numbers can appear for minimum and maximum values
hyphens/dashes ("-") for negative numbers do count towards the length
the resulting string must be truncated to the exact length provided
return an empty string if maximum < minimum or length == 0
minimum and maximum can equal one another and result in a single number repeated for the length of the string

function ascendDescend(length, minimum, maximum) {
  const ascendingArr = Array.from({ length: (maximum - minimum) || 1 }, (_, i) => minimum + i);
  const descendingArr = Array.from({ length: (maximum - minimum) || 1 }, (_, i) => maximum - i);
  const [ascendingStr, descendingStr] = [ascendingArr.join(''), descendingArr.join('')];
  let resultString = '';
  
  for (let i = 0; i < length; i++){
    resultString += ascendingStr + descendingStr;
  }
  
  return resultString.slice(0, length);
}