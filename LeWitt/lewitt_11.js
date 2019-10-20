let spacing = 20;

let x1, y1, x2, y2;

/*
 * x, y is top left corner
 *
 * n should be between 0 and 3, and represents which of the types of lines to
 * *not* include in the segment.
 */
function fill_square(x, y, n) {
  if (n != 0) { line(x, y, x + spacing, y + spacing); }
  if (n != 1) { line(x, y + spacing, x + spacing, y); }
  if (n != 2) { line(x + spacing / 2, y, x + spacing / 2, y + spacing); }
  if (n != 3) { line(x, y + spacing / 2, x + spacing, y + spacing / 2); }
}

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(20);
  strokeWeight(2);
  noLoop();
}

var typei;
var typej;

function draw() {
  typei = 0;
  for (let i = 0; i < width/spacing; i++) {
    if (i > width / (2 * spacing)) { typei = 1; }
    typej = 0;
    for (let j = 0; j < width/spacing; j++) {
      if (j > width / (2 * spacing)) { typej = 1; }
      //fill_square(i*spacing, j*spacing, typei * typej);
      fill_square(i*spacing, j*spacing, typei * (1 - typej) + (1 - typei)*(typej));
    }
  }
}
