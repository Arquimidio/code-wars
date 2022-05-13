/*
Sum two integers, what would be easier? And what about the really big summands? Create your function, that will be able to take two or more integers as arguments and return their sum.

    Result must be a string
    1-digit to 500-digit integers
    Only integers greater than or equal to zero
    No exponent notation
    Variable number of arguments (omitted arguments = zero result)
    Big integers will be represented as strings
    Leading zeros are possible and must be taken in account
*/

function sumBigInts(a, b){
  a = a.toString();
  b = b.toString();
  const bigger = a.length > b.length? a : b;
  const smaller = (a.length > b.length? b : a).padStart(bigger.length, '0');
  const result = [];
  let carry = 0;
  for(let i = bigger.length - 1; i >= 0; i--){
    let sum = parseInt(bigger[i]) + parseInt(smaller[i]) + carry;
    if(sum >= 10){
      if(i) sum -= 10;
      carry = 1;
    }else{
      carry = 0;
    }
    result.push(sum)
  }
  return result.reverse().join('');
}

function sum(...args) {
  let sum = '0';
  args.forEach(bigInt => {
    sum = sumBigInts(sum, bigInt);
  })
  return sum.length > 1? sum.replace(/^0+/, '') : sum;
}