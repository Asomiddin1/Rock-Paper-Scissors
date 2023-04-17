const choices = ["rock", "scissors", "paper"];
const eLi = document.getElementsByTagName("i");
const resDiv = document.getElementById("result");
const namel = prompt("What is your name ?");
const compRes = document.getElementById("comp_res");
const playerRes = document.getElementById("player_res");
const modal = document.getElementById("modal");
var compPlayerO = 0;
var compResO = 0;

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerChoice) {
  const computer = computerChoice();
  document.getElementById(
    "computer-choice"
  ).innerHTML = ` <i class="fa-solid fa-8x fa-hand-${computer}"></i>`;

  if (playerChoice === computer) {
    document.getElementById("winner").innerHTML = "Draw!";
  } else if (
    (playerChoice === "rock" && computer === "scissors") ||
    (playerChoice === "scissors" && computer === "paper") ||
    (playerChoice === "paper" && computer === "rock")
  ) {
    document.getElementById("winner").innerHTML = `${
      namel ? namel : "You"
    } win!`;

    compPlayerO += 1;
    playerRes.innerHTML = compPlayerO;
    getReslatPlayer(compPlayerO);
  } else {
    document.getElementById("winner").innerHTML = "Computer win!";

    compResO += 1;
    compRes.innerHTML = compResO;
    getReslatComp(compResO);
  }
}

document.getElementById("rock").addEventListener("click", function () {
  play("rock");
});

document.getElementById("scissors").addEventListener("click", function () {
  play("scissors");
});

document.getElementById("paper").addEventListener("click", function () {
  play("paper");
});

console.log("hello");

function getReslatPlayer(compPlayerO) {
  if (compPlayerO >= 5) {
    modal.classList.remove("hidden");
    modal.classList.add("block");
    modal.innerHTML = `
   <h1 class="sug">You win</h1>
  <p class="dan">computer lose</p>
   `;
  }
  console.log("player win");
}

function getReslatComp(compResO) {
  if (compResO >= 5) {
    modal.classList.remove("hidden");
    modal.classList.add("block");
    modal.innerHTML = `
   <h1 class="sug">Computer win</h1>
  <p class="dan">You lose</p>
   `;
  }
}
