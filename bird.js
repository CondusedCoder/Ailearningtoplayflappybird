class Bird {
  constructor(brain) {


  this.x = 40;

  this.y = random(height);
  this.fallspeed = 20;
  this.jumpheight = 100;
  this.vel = 0.2;
  this.brain;
  if (brain) {
    this.brain = brain;

  }
  else {
    this.brain = new NerualNetwork(5, 4, 2);

  }
  this.score = 0;

}
  show(img) {
    fill(255, 255, 0);
imageMode(CENTER);

    image(img, this.x, this.y, 30, 30)
  }
  update() {
    this.y += this.fallspeed * this.vel;
    this.vel += 0.001;
    if (this.y <= 0) {
      this.y = 0;

    }
    if (this.y >= 600) {
      this.y = 600;

    }
    this.score++;


  }
  jump() {

    this.y -= this.jumpheight * (this.vel * 6);
    this.vel = 0.2;

  }
  think(pipe = []) {
      let inputs = [this.x, this.y, pipe.top, pipe.bottom, pipe.x];

      let output = this.brain.feedforward(inputs);
      if (output[0] >= output[1]) {
        this.jump();

      }
  }
  mutate() {
    this.brain.mutate(1);

  }
}
