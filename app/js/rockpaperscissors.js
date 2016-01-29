////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
  var response = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  //  console.log("response: " + response);
  return response;
}

function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    //    console.log('computer response: rock');
    return "rock";
  } else if (randomNumber < 0.66) {
    //    console.log("computer response: paper");

    return "paper";

  } else {
    //    console.log("computer response: scissors");
    return "scissors";
  }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  if (move) {
    return move;
  } else {
    return getInput();
  }
  /* Your Expression */
}

function getComputerMove(move) {
  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  if (move) {
    return move; /* Your Expression */
  } else {
    return randomPlay();
  }
}

function getWinner(playerMove, computerMove) {
  var winner;
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  /* YOUR CODE HERE */

  if (playerMove === computerMove) {
    winner = 'tie';
  } else if (playerMove === 'scissors') {
    if (computerMove === 'paper') {
      winner = 'player';
    } else { // computerMove == 'rock'
      winner = 'computer';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      winner = 'player';
    } else { // computerMove == 'scissors'
      winner = 'computer';
    }
  } else { // playerMove == 'rock'
    if (computerMove === 'scissors') {
      winner = 'player';
    } else { // computerMove =='paper'
      winner = 'computer';
    }
  }
  console.log("Winner is: " + winner);
  return winner;
}

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0,
    computerWins = 0,
      ties = 0;
  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  /* YOUR CODE HERE */

  var numberOfGames = 5;
  var i;

  for (i = 0; i < numberOfGames; i++) {
    var playerMove = getPlayerMove();
    console.log("player move: " + playerMove);

    var computerMove = getComputerMove();
    console.log("computer move: " + computerMove);

    var winner = getWinner(playerMove, computerMove);
    if (winner === 'player') {
      playerWins += 1;
    } else if (winner === 'computer') {
      computerWins += 1;
    } else { // tie
      ties += 1;
    }
    console.log("Score after round " + (i+1) + "... " + "Player: " + playerWins + " –– Computer: " + computerWins + " –– Ties: " + ties);

  }
  return [playerWins, computerWins];

}

playToFive();