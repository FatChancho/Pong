class Player2 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 780;
    this.y = 275;
    this.width = 10;
    this.color = "#fff";
    this.height = 50;
    this.speedY = 14;
    this.img = new Image();
    this.img.src = "/Pong/Images/paddle2.png";
  }

  move(key) {
    switch (key) {
      case "ArrowUp":
        if (this.y > 0) this.y -= this.speedY; // UP
        break;
      case "ArrowDown": // DOWN
        if (this.y + this.height < 500) this.y += this.speedY;
        break;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
