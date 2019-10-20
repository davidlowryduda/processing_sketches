
let spacing = 10;
let threshold = 0.5;

let rand;
let x1, y1, x2, y2;

function addLine(i, j) {
  rand = Math.random();
  x1 = i;
  x2 = i + spacing;
  if (rand > threshold) {
    y1 = j + spacing;
    y2 = j;
  }
  else {
    y1 = j;
    y2 = j + spacing;
  }
  line(x1, y1, x2, y2);
}

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(20);
  strokeWeight(2);
  noLoop();
}

function draw() {
  clear();
  for (let i = 0; i < width/spacing; i++) {
    for (let j = 0; j < width/spacing; j++) {
      addLine(i*spacing, j*spacing);
    }
    threshold += 0.01;
  }
}
