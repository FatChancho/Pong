class Game {
  constructor(ctx, player1, player2, ball) {
    this.ctx = ctx;
    this.player1 = player1;
    this.player2 = player2;
    this.frameNumber = 0;
    this.ball = ball;
  }

  start() {
    this.init();
    this.play();
  }

  init() {
    if (this.frameNumber) stop();
    this.frameNumber = 0;
  }
  play() {
    this.frameNumber+=1;
    this.move();
    this.draw();
    requestAnimationFrame(this.play.bind(this))
  }

  stop() {
    cancelAnimationFrame(this.frameNumber);
    this.frameNumber = null;
  }

  move() {
    this.player1.move();
    this.player2.move();
    this.ball.move(this.frameNumber);
  }

  draw() {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.player1.draw();
    this.player2.draw();
    this.ball.draw();
    this.drawScore();
  }

  drawScore() {
    this.score = Math.floor(this.frameNumber / 5);
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Score: ${ball.score1} pts`, ctx.canvas.width/2 -300, 30);
    this.ctx.restore();
    //------player 2 ----------//
    this.score = Math.floor(this.frameNumber / 5);
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = "12px Arial";
    this.ctx.fillText(`Score: ${ball.score2} pts`, ctx.canvas.width/2 +180, 30);
    this.ctx.restore();
  }
}
