class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 395;
    this.y = 245;
    this.width = 10;
    this.height = 10;
    this.score1 = 0;
    this.score2 = 0;
    this.color = "#fff";
    this.speedX = [5, 5];
    this.speedX1 = this.speedX[Math.floor(Math.random() * 2)]; //change de starting direction
    this.speedY = [5, -5];
    this.speedY1 = this.speedY[Math.floor(Math.random() * 2)]; //change de starting direction
    this.bounce = new Audio("/Pong/audio/bounce.wav");
    this.gol = new Audio("/Pong/audio/gol.wav");
  }

  //------ BALL COLLISION PADDLES ------//

  ballCollision() {
    if (
      (this.x < player1.x + player1.width &&
        this.x + this.width > player1.x &&
        this.y < player1.y + player1.height &&
        this.y + player1.height > player1.y) ||
      (this.x < player2.x + player2.width &&
        this.x + this.width > player2.x &&
        this.y < player2.y + player2.height &&
        this.y + player2.height > player2.y)
    ) {
      this.speedX1 = -(this.speedX1 + this.speedX1 / 5); // Change directtion
      this.bounce.play();
    } else if (this.x + this.speedX1 <= player1.x - 10) {
      //Gol player2
      this.gol.play();
      this.score2 += 1;
      this.speedX1 = 5;
      this.x = 395; // ball position center
      this.y = 245; // ball position center
    } else if (this.x + this.speedX1 >= player2.x + player2.width) {
      //Gol Player 1
      this.gol.play();
      this.score1 += 1;
      this.speedX1 = 5;
      this.x = 395; // ball position center
      this.y = 245; // ball position center
    }
  }

  //-----BALL REBOUND----//

  move() {
    if (this.y + this.speedY1 <= 0 || this.y + this.speedY1 >= canvas.height) {
      this.speedY1 *= -1;

      this.y += this.speedY1;
      this.x += this.speedX1;
    } else {
      this.y += this.speedY1;
      this.x += this.speedX1;
    }
    this.ballCollision();
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
