var line_length = 30;

function setup() {
  createCanvas(800, 600);
  background(255);
  stroke(20);
  strokeWeight(1);
  noLoop();
}

function random_direction() {
  let x = random() - 0.5;
  let y = random() - 0.5;
  let length = Math.sqrt(x*x + y*y);
  return [x/length, y/length];
}

function within_bounds(x, y, dir) {
  let endx = x + dir[0]*line_length;
  if (endx < 0 || endx > 700) { return false; }
  let endy = y + dir[1]*line_length;
  if (endy < 0 || endy > 500) { return false; }
  return true;
}

function draw() {
  translate(50, 50);
  rect(0, 0, 700, 500);
  let num_lines = 0;
  let x0, y0;
  let dir;
  strokeWeight(0.25);
  while (num_lines < 5000) {
    x0 = random() * 700;
    y0 = random() * 500;
    dir = random_direction();
    if (within_bounds(x0, y0, dir)) {
      line(x0, y0, x0 + dir[0]*line_length, y0 + dir[1]*line_length);
      num_lines++;
    }
  }
}
