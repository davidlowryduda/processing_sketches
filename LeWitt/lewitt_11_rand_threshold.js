let spacing = 20;

let x1, y1, x2, y2;
let rand;
let bias = 0.05;

function randZeroThree() {
  rand = bias + (1 - bias)*Math.random()*4;
  return Math.floor(rand);
}

/*
 * x, y is top left corner
 *
 * n should be between 0 and 3, and represents which of the types of lines to
 * *not* include in the segment.
 */
function fill_square(x, y, n) {
  stroke(20);
  if (n != 0) { line(x, y, x + spacing, y + spacing); }
  if (n != 1) { line(x, y + spacing, x + spacing, y); }
  stroke(240);
  if (n != 2) { line(x + spacing / 2, y, x + spacing / 2, y + spacing); }
  if (n != 3) { line(x, y + spacing / 2, x + spacing, y + spacing / 2); }
}

function setup() {
  createCanvas(600, 600);
  background(90, 90, 200);
  strokeWeight(2);
  noLoop();
}

var typei;
var typej;

function draw() {
  for (let i = 0; i < width/spacing; i++) {
    for (let j = 0; j < width/spacing; j++) {
      fill_square(i*spacing, j*spacing, randZeroThree());
    }
  }
}
