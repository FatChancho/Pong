class Player2 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 780;
    this.y = 275;
    this.width = 10;
    this.color = "#fff";
    this.height = 50;
    this.speedX = 5;
    this.speedY = 5;
    //img
    /*this.img=new Image();
          this.img.src=''//imagen barra*/
  }

  move(key) {
    switch (key) {
      case "ArrowUp":
        if (this.y > 0) this.y -= this.speedY; // UP
        break;
      case "ArrowDown": // DOWN
        if (this.y + this.height < 500) this.y += this.speedY;
        break; /*
        case "ArrowLeft":
            if(this.x>0 && this.x>500)
            this.x-=this.speedX; // LEFT
            break;
        case "ArrowRight": // RIGHT
            if(this.x+this.width<800)
            this.x+=this.speedX;
            break;*/
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    //this.ctx.stroke();
  }
}
