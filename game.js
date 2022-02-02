class Game {
  constructor(ctx, player1, player2, ball) {
    this.ctx = ctx;
    this.player1 = player1;
    this.player2 = player2;
    this.frameNumber = 0;
    this.ball = ball;
    this.flag = false;
    this.key1 = null;
    this.key2 = null;
    this.win=0;
    this.timer=null
  }

  start() {
    this.init();
    this.play();
  }

  lineCanvas(){
    ctx.beginPath();
    ctx.moveTo(canvas.width/2,0);
    ctx.setLineDash([10, 10])
    ctx.strokeStyle='#fff';
    ctx.lineTo(canvas.width/2,canvas.height)
    ctx.stroke()
  }

  init() {
    //if (this.frameNumber) stop();
    this.frameNumber = 0;
    ball.score1=0
    ball.score2=0
    this.flag = false;  
    this.win=0;
    ball.x=395;
    ball.y=245;
    canvas.classList.remove('game-over')
    const player=document.querySelector('p');
    if(player)player.remove();
       
  }

  play() {
    if (this.flag === false) {
      this.frameNumber += 1;
      this.move();
      this.draw();
      this.checkGameOver();
      this.checkTimer();
      requestAnimationFrame(this.play.bind(this));
    }
  }

  gameOverMsg(){
    start.innerText='RETRY'
    start.classList.remove('hidden')
    canvas.classList.add('game-over')
    const p=document.createElement('p');
    const caja=document.getElementById('caja')

    if(this.win===1)p.innerText='Player 1 Wins';
    if (this.win===2) p.innerText='Player 2 Wins';
    if(this.win===0)p.innerText='Loooosers';
    console.log(this.win)

    p.classList.add('centro')
    caja.appendChild(p);
  }

  stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
    this.ctx.restore();
    this.gameOverMsg();
  }

  move() {
    this.player1.move(this.key1);
    this.player2.move(this.key2);
    this.ball.move(this.frameNumber);
  }

  draw() {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.player1.draw();
    this.player2.draw();
    this.ball.draw();
    this.lineCanvas()
    this.drawScore();
    this.drawTimer()
  }

  drawTimer(){
    this.timer=Math.floor(this.frameNumber/60)*-1;
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "16px Arial";
    this.ctx.fillText(
      `${10+this.timer} s`,
      ctx.canvas.width / 2 - 15,
      30)
    this.ctx.restore()
  }

  checkTimer(){/*
    if(this.timer===-10){
      this.timer=false;
      return this.timer;
    }*/
    /*if(this.timer%5===-0){ ////check later
      ball.changeVelocity();
    }*/
  }
  
  checkGameOver() { //check score 0
    if (ball.score1 === 10 || ball.score2 === 10) {
      this.flag = true;
      ball.score1>ball.score2 ? this.win=1 : this.win=2
      this.stop();
    }else if(this.timer===-10){
          this.flag = true;
          ball.score1>ball.score2 ? this.win=1 
          : ball.score1===ball.score2 ? this.win=0 
          : this.win =2 
          this.stop();
          }
    }

  drawScore() {
    // this.score = Math.floor(this.frameNumber / 120); timer
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "16px Arial";
    this.ctx.fillText(
      `Score: ${ball.score1} pts`,
      ctx.canvas.width / 2 - 300,
      30
    );
    this.ctx.restore();
    //------player 2 ----------//
    this.score = Math.floor(this.frameNumber / 5);
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "16px Arial";
    this.ctx.fillText(
      `Score: ${ball.score2} pts`,
      ctx.canvas.width / 2 + 180,
      30
    );
    this.ctx.restore();
  }

  onKey(event){
    if(event){
      switch(event.key){
        case 'w':{
          this.key1=event.key;
          break;}
        case 'd':{
          this.key1=event.key;
            break;}
        case 'ArrowUp':{
          this.key2=event.key;
          break;
        }
        case 's':{
          this.key1=event.key;
          break;
        }
        case 'ArrowDown':{
          this.key2=event.key;
          break
        }
      }
    }else{
      this.key1=null;
      this.key2=null;
    }
  }
}
