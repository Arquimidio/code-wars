/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000
*/

class RomanNumerals{
  constructor(){
    this.numerals = {
      M: 1000, CM: 900, D: 500,
      CD: 400, C: 100,  XC: 90,
      L: 50,   XL: 40,  X : 10,
      IX: 9,   V: 5,    IV: 4,
      I: 1
    }
  }
  
  fromRoman(numerals){
    const numArr = [...numerals]
    return numArr.reduce((acc, cur, i) =>{
      const actual = this.numerals[cur];
      const next = this.numerals[numArr[i + 1]];
      return next > actual? acc - actual : acc + actual;
    }, 0);
  }
  
  toRoman(number){
    let str = '';
    for(let numeral in this.numerals){
      while(number >= this.numerals[numeral]){
        number -= this.numerals[numeral]
        str += numeral;
      }
    }
    return str;
  }
}

RomanNumerals = new RomanNumerals();