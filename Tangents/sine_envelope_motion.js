let spacing = 5;
let num_periods = 4;
let sine_height = 50;

let direction = 1;
let distance = 1;
let distance_delta= .01;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(0);
  noFill();
}

function line_through(x1, y1, x2, y2) {
  // m = (y2 - y1) / (x2 - x1)
  // y - y1 = m (x - x1)
  let slope = (y2 - y1)/(x2 - x1);
  let lefty, righty;
  lefty  = slope * (0 - x1) + y1;
  righty = slope * (width - x1) + y1;
  line(0, lefty, width, righty);
}

function draw() {
  clear();
  translate(10, height/2);
  strokeWeight(0.4);
  stroke(10, 200);
  let x1, y1, x2, y2;
  for (let i = 0; i <= width; i+=distance) {
    x1 = map(i, 0, width, 0, num_periods * 2 * PI);
    x2 = map(i+1, 0, width, 0, num_periods * 2 * PI);
    y1 = sine_height * sin(x1);
    y2 = sine_height * sin(x2);
    line_through(i, y1, i+1, y2);
  }

  stroke(255, 0, 0);
  strokeWeight(3);
  let x, y;
  beginShape();
  for (let i = 0; i <= width; i++) {
    x = map(i, 0, width, 0, num_periods * 2 * PI);
    y = sine_height * sin(x);
    vertex(i, y);
  }
  endShape();

  distance += direction * distance_delta;
  if (distance >= 20) { direction = -1; }
  if (distance <= 1)  { direction = 1; }
}
