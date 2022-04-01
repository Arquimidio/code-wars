/*
Introduction
  There is a war and nobody knows - the alphabet war!
  There are two groups of hostile letters. The tension between left side letters and right side letters was too high and   the   war began.

Task
  Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left     side   wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight      again!.

  The left side letters and their power:

   w - 4
   p - 3
   b - 2
   s - 1
  The right side letters and their power:

   m - 4
   q - 3
   d - 2
   z - 1
  The other letters don't have power and are only victims.

  Example
  alphabetWar("z");        //=> Right side wins!
  alphabetWar("zdqmwpbs"); //=> Let's fight again!
  alphabetWar("zzzzs");    //=> Right side wins!
  alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight)
{
   let fightArr = [...fight]
   let leftLetters = {s: 1, b: 2, p: 3, w: 4}
   let rightLetters = {z: 1, d: 2, q: 3, m: 4}
   let leftPoints = 0
   let rightPoints = 0
   
   for(let letter of fightArr){
     letter in leftLetters
     ? leftPoints += leftLetters[letter]
     : letter in rightLetters
     ? rightPoints += rightLetters[letter]
     : null
   }
  
   if(leftPoints > rightPoints) return 'Left side wins!'
   else if(rightPoints > leftPoints) return 'Right side wins!'
   else return 'Let\'s fight again!'
}