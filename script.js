
const buttons = document.querySelectorAll('#rock, #paper, #scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissors');
const playerValue = document.querySelector('.player-choice');
const computerValue = document.querySelector('.computer-choice');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let player = String(buttons[i].innerHTML);
    Choices(player);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  });
}

function Choices(player) {
  playerValue.classList.toggle('show');
  playerValue.innerHTML = player;
  setTimeout(function(){
    computerChoice();
  }, 1000);
}

function computerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const rdmNum = Math.floor(Math.random() * 3);
  result = String(choices[rdmNum]);
  console.log(result);
  computerValue.classList.toggle('show');
  computerValue.innerHTML = result;
}