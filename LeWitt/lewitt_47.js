// should divide 80
let spacing = 8;

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
  createCanvas(1300, 600);
  background(255);
  stroke(20);
  noLoop();
}

var sw = 0.25;
let r;
let old_r = -1;
let choices = [0, 1, 2, 3];

function draw() {
  translate(50, 100);

  //strokeWeight(1);
  //rect(0, 0, 1200, 400);

  strokeWeight(sw);
  for (let i = 0; i < 15; i++){
    r = random(choices);
    // Don't repeat the same pattern twice in a row
    while (r == old_r) { r = random(choices); }
    old_r = r;
    for (let x = 0; x < 80 / spacing; x++) {
      for (let y = 0; y < 400 / spacing; y++) {
        fill_square(x*spacing, y*spacing, r);
      }
    }
    sw += 0.1;
    strokeWeight(sw);
    translate(80, 0);
  }
}
