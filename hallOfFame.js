/*
Task
Create a HallOfFame object to store some game-of-the-century best players name and score.

On creation a HallOfFame may take 2 arguments :

size : an int (default: 5), defining the size of the Hall.
players : an array of players.
A player is a 2-items array of the form [name, score] with :

name : a string, the name of the player.
score : an int, the score of this player.
An HallOfFame object should provide an attribute list and a method add(player).

list : is an array of player of the form "Name: score", sorted by score in descending order (in alphabetic order of name in case of same score).

eg : ["Alya: 325", "Boris: 253", "Clem: 235"]
list.length is limited to size items. If a "list-slot" is empty, return an "empty-player" ("")

eg : ["Alya: 325", "", ""] // in case only 1st player is provided
add(player) should :

add the player to the list (if its score is high enough).
eventually re-sort the list.
and return the object (to permit chaining adds).
*/

class HallOfFame{

  constructor(size=5, players=[]){
    this.size = size;
    this._list = [];
    players.forEach(player => this._list.push(player));
  }
   
  sortPlayers(){
    this._list.sort((a, b) =>{
      const [aName, aScore, bName, bScore] = [...a, ...b];
      if(aScore === bScore) return aName.localeCompare(bName);
      else return bScore - aScore;
    })
    return this._list;
  }
  
  get list(){
    this.sortPlayers();
    const mapped = this._list.map(player => `${player[0]}: ${player[1]}`);
    return mapped.concat(Array(this.size - this._list.length).fill(""));
  }
  
  add( player ){
     this._list = this._list.concat([player]);
     this._list = this.sortPlayers().slice(0, this.size);
     return this;
  }
  
}