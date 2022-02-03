const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
const ctx = canvas.getContext("2d");
canvas.classList.add("mouse");

// CLASSES
const player1 = new Player1(ctx);
const player2 = new Player2(ctx);
const ball = new Ball(ctx);
const game = new Game(ctx, player1, player2, ball);

//START
//const retry = document.getElementById("retry");
const start = document.getElementById("start");

//AUDIO
const presentationSong = new Audio("/Pong/audio/presentation-sound.wav");
presentationSong.play();

//LISTENERS

start.addEventListener("click", (e) => {
  const target = e.target;
  if ((target.innerText = "START")) {
    canvas.classList.remove("bg-canvas");
    canvas.classList.add("canvas-game");
    start.classList.add("hidden");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    game.start();
  }
  if (target.innerText === "RETRY") {
    canvas.classList.remove("game-over");
    game.start();
  }
});

document.addEventListener("keydown", (e) => {
  game.onKey(e);
});

document.addEventListener("keyup", () => {
  game.onKey(null);
});

document.addEventListener("mousemove", (e) => {
  if (e.clientY > 0 && e.clientY < 450) player2.y = e.clientY;
});
