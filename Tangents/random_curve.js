let spacing = 5;
let fun_height;
let exp_factor;
let sin_factor;
let fun_window = 14;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(0);
  noFill();
  noLoop();
  sin_factor = random(.5, 2);
  exp_factor = random(3, 10);
  fun_height = random(5, 20);
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

function fun(x) {
  return sin(x/sin_factor) * exp(x/exp_factor);
}

function draw() {
  translate(10, height/2);
  strokeWeight(0.4);
  stroke(10, 200);
  let x1, y1, x2, y2;
  for (let i = 0; i <= width; i++) {
    x1 = map(i, 0, width, 0, fun_window);
    x2 = map(i+1, 0, width, 0, fun_window);
    y1 = fun_height * fun(x1);
    y2 = fun_height * fun(x2);
    line_through(i, y1, i+1, y2);
  }

  stroke(255, 0, 0);
  strokeWeight(3);
  let x, y;
  beginShape();
  for (let i = 0; i <= width; i++) {
    x = map(i, 0, width, 0, fun_window);
    y = fun_height * fun(x);
    vertex(i, y);
  }
  endShape();

}
