let spacing = 5;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(20);
  strokeWeight(.5);
  noLoop();
}

function draw() {
  translate(75, 200);
  rect(0, 0, 200, 200);
  for (let x = 0; x <= 200; x += spacing) {
    line(x, 0, x, 200);
  }

  translate(300, 0);
  rect(0, 0, 200, 200);
  for (let y = 0; y <= 200; y += spacing) {
    line(0, y, y, 0);
    line(200, 200-y, 200-y, 200);
  }

  translate(300, 0);
  rect(0, 0, 200, 200);
  for (let y = 0; y <= 200; y += spacing) {
    line(0, y, 200, y);
  }

  translate(300, 0);
  rect(0, 0, 200, 200);
  for (let y = 0; y<= 200; y += spacing) {
    line(0, 200-y, y, 200);
    line(200, y, 200-y, 0);
  }
}
