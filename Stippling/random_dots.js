function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

let pad = 50;
let numdots = 1000;

function draw() {
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(pad, pad, width - 2*pad, width - 2*pad);
  for (let i = 0; i < numdots; i++) {
    point(pad + random()*(width - 2*pad), pad + random()*(height - 2*pad));
  }
}
