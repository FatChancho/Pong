class Ball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 395;
    this.y = 245;
    this.width = 10;
    this.height = 10;
    this.score1=0;
    this.score2=0;
    this.color = "#fff";
    this.speedX = [3,-3];
    this.speedX1 = this.speedX[Math.floor(Math.random() * 2)]; //change de starting direction
    this.speedY = [3, -3];
    this.speedY1 = this.speedY[Math.floor(Math.random() * 2)]; //change de starting direction
  }

 //------ BALL COLLISION ------//

  ballCollision() {
    if (
      (this.y + this.speedY1 <= player2.y + player2.height &&
        this.x + this.width + this.speedX1 >= player2.x &&
        this.y + this.speedY1 > player2.y) ||
      (this.y + this.speedY1 > player1.y &&
        this.x + this.speedX1 <= player1.x + player1.width)
    ) {
      this.speedX1 *= -1; // Change directtion
    } else if (this.x + this.speedX1 <= player1.x-10) { //Gol player2
      this.score2 += 1;
      this.speedX1 *= -1;
      this.x = 395; // ball position center
      this.y = 245; // ball position center
    } else if (this.x + this.speedX1 >= player2.x + player2.width) { //Gol Player 1
      this.score1 += 1;
      this.speedX1 *= -1;
      this.x = 395; // ball position center
      this.y = 245; // ball position center
    }
  }

  //-----BALL MOVEMENT----//

  move(frameNumber) { 
    //if (frameNumber % 1 === 0) {
      if (
        this.y + this.speedY1 <= 0 ||
        this.y + this.speedY1 >= canvas.height
      ) {
        this.speedY1 *= -1;
        this.y += this.speedY1;
        this.x += this.speedX1;
      } else {
        this.y += this.speedY1;
        this.x += this.speedX1;
      }
      this.ballCollision();
    //}
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
