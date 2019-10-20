let x = 0;
let y = 0;
let spacing = 10;

let rand;
let x1, y1, x2, y2;

function addLine(i, j) {
  rand = Math.random();
  x1 = i;
  x2 = i + spacing;
  if (rand > 0.75) {
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
}

function draw() {
  addLine(x, y);
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
