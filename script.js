"use strict";

function opponentPick() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let pick = opponentPick();
let winBox = 1;

document.querySelector(".rock").addEventListener("click", function () {
  document.querySelector(
    ".opponent"
  ).textContent = `Your opponent picked...${pick}`;

  if (pick === "Paper") {
    document.querySelector(".message").textContent = "You lost...";
    winBox = 0;
  } else if (pick === "Scissors") {
    document.querySelector(".message").textContent = "You win!";
    winBox++;
  } else {
    document.querySelector(".message").textContent = "Pick Again";
  }
  document.querySelector(".win-box").textContent = winBox;

  pick = opponentPick();
});

document.querySelector(".paper").addEventListener("click", function () {
  document.querySelector(
    ".opponent"
  ).textContent = `Your opponent picked...${pick}`;

  if (pick === "Scissors") {
    document.querySelector(".message").textContent = "You lost...";
    winBox = 0;
  } else if (pick === "Rock") {
    document.querySelector(".message").textContent = "You win!";
    winBox++;
  } else {
    document.querySelector(".message").textContent = "Pick Again";
  }
  document.querySelector(".win-box").textContent = winBox;

  pick = opponentPick();
});

document.querySelector(".scissor").addEventListener("click", function () {
  document.querySelector(
    ".opponent"
  ).textContent = `Your opponent picked...${pick}`;

  if (pick === "Rock") {
    document.querySelector(".message").textContent = "You lost...";
    winBox = 0;
  } else if (pick === "Paper") {
    document.querySelector(".message").textContent = "You win!";
    winBox++;
  } else {
    document.querySelector(".message").textContent = "Pick Again";
  }
  document.querySelector(".win-box").textContent = winBox;

  pick = opponentPick();
});

console.log(pick);
