/*
Hangman
Hangman is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters, within a certain number of guesses.

Everytime the player misses a word, a part of the sketch is drawn:

Hangman

If the player finds the word before being hung he wins. He has 6 chances to miss before being hung.

Your task
You have to implement a class Hangman that receives a word in it's constructor and has the method guess, that will be used by the player to try to guess the word.

Your method guess will receive a letter as parameter and has this return behaviour:

if the player found the word: You found the word! ({word})
if the player got hung: You got hung! The word was {word}.
if the game still on: {game state}
if the game has ended already: The game has ended.
important: if the player guesses a letter that was already guessed, you should ignore it and return the {game state}

{game state}
The {game state} is the word to be found with all letters separated by white space. The letters that weren't found yet will be replaced with _ and, if the player had missed one or more letters, we will keep this record adding # to the output followed by a string with all missed letters in order of occurence.

Ex. If the player is trying to guess the word codewars and attempts with the letters d,w,u,a,c,g,s, respectively, he would guess the letters d,w,a,c,s right and miss the letters u,g. The game state at this point should look like:

c _ d _ w a _ s # ug

#Example:

let hangman = new Hangman('wars');

hangman.guess('w')
w _ _ _
hangman.guess('u')
w _ _ _ # u
hangman.guess('s')
w _ _ s # u
hangman.guess('a')
w a _ s # a
hangman.guess('r')
# You found the word! (wars)
hangman.guess('g')
# The game has ended.
*/

class Hangman {
  constructor(word) {
    this._word = word.toLowerCase();
    this._TRIES = 7;
    this._gameState = Array(this._word.length).fill('_'); 
    this._guessed = [];
    this._missed = [];
    this._gameEnded = false;
  }
  
  // Performs all the operations related to inputing a letter
  // Add to guessed list, missed list, change de game state or do no changes
  _handleInput(letter){
    const letterAlreadyGuessed = this._guessed.includes(letter);
    const guessIsCorrect = this._word.includes(letter);
    
    if(letterAlreadyGuessed)
    {
      return this._getFullState(); 
    }
    else if(guessIsCorrect)
    {
     this._fillState(letter); 
    }
    else
    {
      this._missed.push(letter); 
    }
    this._guessed.push(letter);
  }
  
  // Verifies if all the spaces in game state are filled with letters 
  _wordWasFound(){
    return this._gameState.join('') === this._word;
  }
  
  // Gets all the info about the current situation of the game
  _getFullState(){
    const wordState = this._gameState.join(' ');
    const missedState = this._missed.join('');
    return missedState? `${wordState} # ${missedState}` : wordState;
  }
  
  // Fill the gaps in game state array with the correct letters
  _fillState(letter){
    this._gameState = this._gameState.map((elt, i) =>{
      return letter === this._word[i]? letter : elt;
    });
  }
  
  /* 
    Performs game state changing operations and returns the related messages according
    to the actual situation
  */
  _handleState(){
    const gameHasEnded = this._gameEnded;
    const foundWord = this._wordWasFound();
    const gotHung = this._missed.length >= this._TRIES;
    if(gameHasEnded)
    {
      return 'The game has ended.'
    }
    else if(foundWord)
    {
     this._gameEnded = true;
     return `You found the word! (${this._word})`; 
    }
    else if(gotHung)
    {
     this._gameEnded = true;
     return `You got hung! The word was ${this._word}.` 
    }
    else
    {
      return this._getFullState();
    }
  }
  
  // Performs all the operations related to input and game state when the user inputs a letter
  // That's the function that provides interaction with the game
  guess(letter) {
    this._handleInput(letter);
    const gameSituation = this._handleState();
    return gameSituation;
  }
}