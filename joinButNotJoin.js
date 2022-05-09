/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

Array.prototype.Join = function(separator){
  const newArr = [];
  this.forEach((elt, i) =>{
    newArr.push(elt)
    if(!(i === this.length - 1)){
      Array.isArray(separator)? newArr.push(...separator) : newArr.push(separator)
    }
  });
  return newArr;
}