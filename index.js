const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
const ctx = canvas.getContext("2d");



// CLASSES
const player1 = new Player1(ctx);
const player2 = new Player2(ctx);
const ball = new Ball(ctx);
const game = new Game(ctx, player1, player2, ball);

//START

const start = document.getElementById("start");
start.addEventListener("click", (e) => {
  canvas.classList.remove("bg-canvas");
  canvas.classList.add('canvas-game')
  start.classList.add('hidden')
  //start.innerText='TRY AGAIN';
  game.start();
  
});

document.addEventListener('keydown',(e)=>{
  game.onKey(e)
})

document.addEventListener('keyup',()=>{
  game.onKey(null)
})




