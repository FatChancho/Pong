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
    
    else p.innerText='Player 2 Wins';

    p.classList.add('centro')
    caja.appendChild(p);
  }

  stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
    this.ctx.restore();
    //this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
  }

  checkGameOver() {
    let p1=1;
    let p2=2;
    if (ball.score1 === 10 || ball.score2 === 10) {
      this.flag = true;
      ball.score1>ball.score2 ? this.win=1 : this.win=2
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
