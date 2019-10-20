let spacing = 5;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(20);
  strokeWeight(.5);
  noLoop();
}

function draw() {
  for (let x=0; x<=1200; x+= spacing) {
    line(x, 200, x, 400);
  }
  for (let y=0; y<=600; y+= spacing) {
    line(500, y, 700, y);
  }
  for (let x=0; x<=1200; x+= spacing) {
    let y = -x + 750;
    line(x, y, x + 140, y + 140);
  }
  strokeWeight(.25);
  line(0, 200, 1200, 200);
  line(0, 400, 1200, 400);
  line(500, 0, 500, 600);
  line(700, 0, 700, 600);
  line(0, 750, 1200, 750 - 1200);
  line(0+140, 750+140, 1200+140, 750 - 1200+140);
}
