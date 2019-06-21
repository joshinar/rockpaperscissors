const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

// play game
function play(e) {
  const playerChoice = e.target.id;
  restart.style.display = "inline-block";
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// get computers choice
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get game winner

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (
    (p == "rock" && c == "paper") ||
    (p == "scissors" && c == "rock") ||
    (p == "paper" && c == "scissors")
  ) {
    return "computer";
  } else {
    return "player";
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win"> You win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose"> You Lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else {
    result.innerHTML = `
    <h1>It's a draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer chose <strong>${computerChoice}</strong></p>
    `;
  }

  //   Show score
  score.innerHTML = `
  <p>Player : ${scoreboard.player}</p>
  <p>Computer : ${scoreboard.computer}</p>
  
  `;

  modal.style.display = "block";
}

// Restart game

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player : ${scoreboard.player}</p>
  <p>Computer : ${scoreboard.computer}</p>
  
  `;
}

// clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
