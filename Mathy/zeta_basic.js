let scale = 200;

function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(20);
  strokeWeight(2);
  fill(0);
  fill(150);
  rect(0, 0, width, height);
  fill(255);
  rect(scale, 0, width, height);
}

function draw() {
  noStroke();
  clear();
  fill(150);
  rect(0, 0, width, height);
  fill(255);
  rect(scale, 0, width, height);
  stroke(20);
  draw_grid();

  lines_to(mouseX, mouseY);
  fill(200, 0, 0);
  ellipse(mouseX, mouseY, 5, 5);

  /* TESTING
  lines_to(200, height/2);
  ellipse(200, height/2, 10, 10);
  ellipse(PI*PI/6 * scale, height/2, 10, 10);
  */
}

function lines_to(x, y) {
  noFill();
  let curred = 200;
  let curgreen = 40;
  let curblue = 10;
  let xys = zeta_to_xy(approx_zeta(x/scale, (y-height/2)/scale));
  let curx, cury;
  beginShape();
  curx = 0;
  cury = height/2;
  for (let xy of xys) {
    curx += xy[0];
    cury += xy[1];
    stroke(curred, curgreen, curblue);
    vertex(curx, cury);
    curred = (curred + 40) % 256;
    curblue = (curblue + 80) % 256;
    curgreen = (curgreen + 90) % 256;
  }
  //console.log(x/scale, (y-height/2)/scale, curx/scale);
  endShape();
}

function draw_grid() {
  stroke(200);
  for (let i = scale; i < width; i += scale) {
    line(i, 0, i, height);
  }
  for (let j = height/2; j < height; j += scale) {
    line(0, j, width, j);
  }
  for (let j = height/2; j > 0; j -= scale) {
    line(0, j, width, j);
  }
}

let num_terms = 100;
/*
 * expects absolute x, y. So probably pass in
 * x / scale, y / scale
 */
function approx_zeta(x, y) {
  let result = [];
  let sum = new Complex(0, 0);
  let s = new Complex(x, y);
  let term;
  for (let n = 1; n <= num_terms; n++) {
    term = Complex.pow(new Complex(1/n, 0), s);
    result.push(term);
  }
  return result;
}


function zeta_to_xy(zeta_array) {
  let result = [];
  for (let term of zeta_array) {
    result.push([scale * term.real, scale * term.imag]);
  }
  return result;
}
