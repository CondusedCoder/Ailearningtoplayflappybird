class Pipe {
  constructor() {
    this.x = width;
    this.top = random(height / 3);
    this.bottom = random(height / 3);
    this.speed = 6;
    this.w = 80;

  }
  show() {
    fill(0, 255, 0);

    rect(this.x, 0, this.w, this.top);

    rect(this.x, height - this.bottom, this.w, this.bottom);

  }
  update() {
    this.x -= this.speed;

  }
  offscreen() {
    if (this.x < -this.w) {
     return true;
   } else {
     return false;
   }

  }
  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {

        return true;
      }
    }
    else {
      return false;

    }

  }
}
