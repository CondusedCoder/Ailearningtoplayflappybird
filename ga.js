function nextGeneration() {
  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = pickOne();

  }
  savedbird = [];

}
function calculateFitness() {
  let sum = 0;
  for (let bird of savedbirds) {
    sum += bird.score;

  }
  for (let bird of savedbirds) {
    bird.fitness = bird.score / sum;

  }
}
function pickOne() {
  let index = 0; let r = random(1);
  while (r > 0) {
    r = r - savedbirds[index].fitness;
    index++;

  }
  index--;
  let bird = savedbirds[index];
  let birdchild = new Bird(bird.brain);
  birdchild.mutate();
  return birdchild;

}
