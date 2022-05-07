/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  const queue = [];
  for(let i = 0; i < parens.length; i++){
    if(parens[i] === '('){
      queue.push(')')
    }else if(parens[i] === ')'){
      const expected = queue.pop();
      if(!expected) return false;
    }
  }
  if(queue[0]) return false;
  return true;
}