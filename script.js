
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

let playerScore = 0;
let computerScore = 0;

// window.onload = game();

playBtn.addEventListener('click', function () {
  playerValue.classList = 'player-choice';
  computerValue.classList = 'computer-choice';
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
  computerResult.classList = 'computer-result';
  playerResult.classList = 'player-result';
  playerScoreEl.innerHTML = playerScore;
  computerScoreEl.innerHTML = computerScore;
  playerValue.innerHTML = '';
  computerValue.innerHTML = '';
  console.log('Player Score', playerScore);
  console.log('Computer Score', computerScore);
  game();
});

function game(){
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let player = String(buttons[i].innerHTML);
      Choices(player);
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorBtn.disabled = true;
    });
  }
}


function Choices(player) {
  playerValue.classList = 'player-choice show';
  playerValue.innerHTML = player;
  setTimeout(function(){
    computerChoice();
    checkResults();
  }, 1000);

}

function computerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const rdmNum = Math.floor(Math.random() * 3);
  result = String(choices[rdmNum]);
  computerValue.classList = 'computer-choice show';
  computerValue.innerHTML = result;
}

function checkResults() {
  const player = playerValue.innerHTML;
  const computer = computerValue.innerHTML;
  if (player == 'Rock') {
    if (computer == 'Paper') {
      computerWins();
      computerScore++;
    } else if (computer == 'Scissors') {
      playerWins();
      playerScore++;
    } else {
      computerResult.innerHTML = 'It\'s a tie!';
      computerResult.classList = 'computer-result show';
      playerResult.innerHTML = 'It\'s a tie!';
      playerResult.classList = 'player-result show';
    }
  } else if (player == 'Paper') {
    if (computer == 'Rock') {
      playerWins();
      playerScore++;
    } else if (computer == 'Scissors') {
      computerWins();
      computerScore++;
    } else {
      computerResult.innerHTML = 'It\'s a tie!';
      computerResult.classList = 'computer-result show';
      playerResult.innerHTML = 'It\'s a tie!';
      playerResult.classList = 'player-result show';
    }
  } else if (player == 'Scissors') {
    if (computer == 'Rock') {
      computerWins();
      computerScore++;
    } else if (computer == 'Paper') {
      playerWins();
      playerScore++;
    } else {
      computerResult.innerHTML = 'It\'s a tie!';
      computerResult.classList = 'computer-result show';
      playerResult.innerHTML = 'It\'s a tie!';
      playerResult.classList = 'player-result show';
    }
  }
}

function playerWins() {
  playerResult.innerHTML = 'Player Wins!';
  playerResult.classList = 'player-result show';
  computerResult.classList = 'computer-result';
  console.log('Players score after winning', playerScore);
  playerScoreEl.innerHTML = playerScore;
}

function computerWins() {
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