const overlay = document.querySelector('.overlay');
const roundDOM = document.querySelector('.rounds');
const buttons = document.querySelectorAll('#rock, #paper, #scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const playerValue = document.querySelector('.player-choice');
const computerValue = document.querySelector('.computer-choice');
const playerScoreEl = document.querySelector('.p-score');
const computerScoreEl = document.querySelector('.c-score');
const playBtn = document.querySelector('.replay');
const playerResult = document.querySelector('.player-result');
const computerResult = document.querySelector('.computer-result');

let Game = {
  computer: {choice: '', score: ''},
  player: {choice: '', score: ''},
  round: 0,
  winner: '',
}

playBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
  startGame();
});

function startGame() {
  Game.round++;
  if (Game.round >= 2) {
    playBtn.innerHTML = 'Game Over.';
    restartGame();
  } else if (Game.round > 0) {
    playBtn.innerHTML = 'Play Again...';

  }
  // reset all values to emtpy
  playerValue.innerHTML = Game.player.choice;
  computerValue.innerHTML = Game.computer.choice;
  playerScoreEl.innerHTML = Game.player.score;
  computerScoreEl.innerHTML = Game.computer.score;
  playerValue.classList = 'player-choice';
  computerValue.classList = 'computer-choice';
  computerResult.classList = 'computer-result';
  playerResult.classList = 'player-result';
  rockBtn.style.visibility = 'visible';
  paperBtn.style.visibility = 'visible';
  scissorBtn.style.visibility = 'visible';
  getWinner();
}

function restartGame() {
  Game.round = 0;
  startGame();
}


// create function to to hold player + computer selection and disable RPS buttons
function getWinner() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      Game.player.choice = String(buttons[i].innerHTML);
      playerValue.classList = 'player-choice show';
      playerValue.innerHTML = Game.player.choice;
      setTimeout(function(){
        computerChoice();
      }, 1000);

    });
  }
}

// create function to check for winner
// create nextRound() that will keep player, computer score but clear out everything else


function computerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const rdmNum = Math.floor(Math.random() * 3);
  Game.computer.choice = String(choices[rdmNum]);
  computerValue.classList = 'computer-choice show';
  computerValue.innerHTML = Game.computer.choice;

  setTimeout(function(){
    overlay.style.display = 'block';
    roundDOM.innerHTML = `Round ${Game.round}/5`;
  },3000)
}


function checkResults() {

  console.log('Player: ', playerSelection, 'Score: ', playerScoreEl);
  console.log('Computer: ', playerSelection, 'Score: ', computerScoreEl);
  if (playerSelection == 'Rock') {
    if (computerSelection == 'Paper') {
      computerWins();

    } else if (computerSelection == 'Scissors') {
      playerWins();

    } else {
      tie()
    }
  } else if (playerSelection == 'Paper') {
    if (computerSelection == 'Rock') {
      playerWins();

    } else if (computerSelection == 'Scissors') {
      computerWins();

    } else {
      tie()
    }
  } else if (playerSelection == 'Scissors') {
    if (computerSelection == 'Rock') {
      computerWins();

    } else if (computerSelection == 'Paper') {
      playerWins();

    } else {
      tie()
    }
  }
}

function playerWins() {
  playerScore++;
  playerResult.innerHTML = 'Player Wins!';
  playerResult.classList = 'player-result show';
  computerResult.classList = 'computer-result';
  console.log('Players score after winning', playerScore);
  playerScoreEl.innerHTML = playerScore;
}

function computerWins() {
  computerScore++;
  computerResult.innerHTML = 'Computer Wins!';
  computerResult.classList = 'computer-result show';
  playerResult.classList = 'player-result';
  console.log('Computer score after winning', computerScore);
  computerScoreEl.innerHTML = computerScore;
}

function tie() {
  computerResult.innerHTML = 'It\'s a tie!';
  computerResult.classList = 'computer-result show';
  playerResult.innerHTML = 'It\'s a tie!';
  playerResult.classList = 'player-result show';
}