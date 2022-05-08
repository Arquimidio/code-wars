/*
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String
*/

function balancedNum(number)
{
    const numStr = number.toString();
    const len = numStr.length;
    const isEven = len % 2 === 0;
    if(len < 3) return 'Balanced'
    const left = numStr.slice(0, (isEven? len / 2 - 1: Math.floor(len / 2)));
    const right = numStr.slice(Math.floor(len / 2) + 1, len);
    const leftSum = [...left].reduce((acc, cur) => acc + Number(cur), 0);
    const rightSum = [...right].reduce((acc, cur) => acc + Number(cur), 0);
    const isBalanced = leftSum === rightSum;
    return isBalanced? 'Balanced' : 'Not Balanced';
}