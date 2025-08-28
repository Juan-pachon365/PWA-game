const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gravity = 0.5;
const flapStrength = -8;
const pipeWidth = 50;
const gap = 150;

let player = {
  x: 50,
  y: 150,
  width: 30,
  height: 30,
  velocity: 0,
};

let pipes = [];
let frame = 0;
let isGameOver = false;

function drawPlayer() {
  ctx.fillStyle = "#CC5803";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawPipes() {
  ctx.fillStyle = "#1F1300";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
    ctx.fillRect(pipe.x, pipe.top + gap, pipeWidth, canvas.height - pipe.top - gap);
  });
}

function updatePipes() {
  if (frame % 90 === 0) {
    let top = Math.random() * (canvas.height - gap - 100) + 50;
    pipes.push({ x: canvas.width, top: top });
  }

  pipes.forEach(pipe => {
    pipe.x -= 2;
  });

  pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);
}

function checkCollision() {
  for (let pipe of pipes) {
