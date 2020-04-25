const TOTAL = 100;
let birds = [];
let savedbirds = [];


let pipes = [];



let pipesi;
let gen = 0;



let birdimg;

let maxscore = 0;
let pmaxscore = 0;
let mscore = 0;


function preload() {
birdimg = loadImage("assets/flappybird.png");




}
function setup() {
  createCanvas(600, 600);
for (let i = 0; i < TOTAL; i++) {
  birds[i] = new Bird();

}
pipes.push(new Pipe());

}
function draw() {
  background(0, 255, 255);

  for (let i = 0; i < pipes.length; i++) {
    pipesi = pipes[i];

    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
     pipes.splice(i, 1);
   }



  }
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());

  }
  for (let bird of birds) {
    bird.show(birdimg);
    bird.update();
    let pipe = pipes[0];


    bird.think(pipe);

  }
  for (let i = 0; i < birds.length; i++) {
    if (pipesi.hits(birds[i])) {
      savedbirds.push(birds.splice(i, 1))
    }
  }
  if (birds.length === 0) {
if (maxscore > pmaxscore) {
  pmaxscore = maxscore;

}

    nextGeneration();
    gen++;

  }
  fill(255);

  text("gen: " + (gen + 1), 10, 20);
  if (maxscore > pmaxscore) {
    mscore = maxscore;

  }
  if (pmaxscore > maxscore) {
    mscore = pmaxscore;

  }
  text("maxscore: " + (parseInt(mscore / 100)), 400, 20);



for (let i = 0; i < birds.length; i++) {
maxscore = max([birds[i].score]);


}




}
