class Player1 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 10;
    this.y = 275;
    this.width = 10;
    this.color = "#fff";
    this.height = 50;
    this.speedX = 12;
    this.speedY = 12;
    this.img = new Image();
    this.img.src = "/Pong/Images/imagen-1.png.png";
  }

  move(key) {
    switch (key) {
      case "w":
        if (this.y - this.speedY > 0) this.y -= this.speedY; // UP
        break;
      case "s": // DOWN
        if (this.y + this.height < 500) this.y += this.speedY;
        break; /*
        case "a":
            if(this.x>0)
            this.x-=this.speedX; // LEFT
            break;
        case "d": // RIGHT
            if(this.x+this.width<300)
            this.x+=this.speedX;
            break;*/
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    //this.ctx.stroke();
  }
}
