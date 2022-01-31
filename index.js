const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
const ctx = canvas.getContext("2d");

//---------AUDIO----------//
/*const song=new Audio('../Pong/audio/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3');
song.play(); */ 

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
  start.innerText='TRY AGAIN';
  game.start();
  
});
//window.addEventListener('keypress',player1.move,false)


