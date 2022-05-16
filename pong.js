/*
Lets play some Pong!

pong

For those who don't know what Pong is, it is a simple arcade game where two players can move their paddles to hit a ball towards the opponent's side of the screen, gaining a point for each opponent's miss. You can read more about it here.
Task:

You must finish the Pong class. It has a constructor which accepts the maximum score a player can get throughout the game, and a method called play. This method determines whether the current player hit the ball or not, i.e. if the paddle is at the sufficient height to hit it back. There're 4 possible outcomes: player successfully hits the ball back, player misses the ball, player misses the ball and his opponent reaches the maximum score winning the game, either player tries to hit a ball despite the game being over. You can see the input and output description in detail below.
"Play" method input:

    ball position - The Y coordinate of the ball
    player position - The Y coordinate of the centre(!) of the current player's paddle

"Play" method output:

One of the following strings:

    "Player X has hit the ball!" - If the ball "hits" the paddle
    "Player X has missed the ball!" - If the ball is above/below the paddle
    "Player X has won the game!" - If one of the players has reached the maximum score
    "Game Over!" - If the game has ended but either player still hits the ball

Important notes:

    Players take turns hitting the ball, always starting the game with the Player 1.
    The paddles are 7 pixels in height.
    The ball is 1 pixel in height.

*/

class Pong {
  constructor(maxScore) {
    this._maxScore = maxScore;
    this._BALL_SIZE = 1;
    this._PADDLE_SIZE = 7;
    this._PADDLE_HALF = this._PADDLE_SIZE / 2;
    this._turn = 1;
    this.gameState = {
      player1: {
        name: 'Player 1',
        score: 0
      },
      player2: {
        name: 'Player 2',
        score: 0
      },
      gameEnded: false
    }
  }
  
  // Verify if some player has won (score >= maxScore). If true, returns the winner.
  _checkScores(p1, p2){
    return [p1, p2].find(p => p.score >= this._maxScore);
  }
  
  // Verify if playr hit or missed the ball
  _checkHit(ballPos, playerPos){
    const lessThanTop = playerPos + this._PADDLE_HALF >= ballPos;
    const moreThanBottom = playerPos - this._PADDLE_HALF <= ballPos;
    return lessThanTop && moreThanBottom;
  }
  
  _changeTurn(){
   this._turn = this._turn === 1? 2 : 1; 
  }
  
  play(ballPos, playerPos) {
    const actualPlayer = this._turn;
    const  {player1, player2, gameEnded } = this.gameState;
    
    if(gameEnded) return 'Game Over!'
    
    const playerHit = this._checkHit(ballPos, playerPos);
    
    // Updates other player score if miss
    if(!playerHit){
      if(actualPlayer === 1) player2.score++;
      else player1.score++;
    }
    
    const winner = this._checkScores(player1, player2);
    this._changeTurn();
    
    // Returns the message reflecting the actual game situation
    if(winner){
      this.gameState.gameEnded = true;
      return `${winner.name} has won the game!`
    }else if(playerHit){
      return `Player ${actualPlayer} has hit the ball!`
    }else{
      return `Player ${actualPlayer} has missed the ball!`
    }
  }
}
