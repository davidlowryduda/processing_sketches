let spacing = 10;
let offset = 0;
let time = 0;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(20);
  strokeWeight(2);
}

function draw() {
  clear();
  strokeWeight(1);
  for (let x=0; x<=1200; x+= spacing) {
    line(x+offset, 200, x+offset, 400);
  }
  for (let y=0; y<=600; y+= spacing) {
    line(500, y+offset, 700, y+offset);
  }
  for (let x=0; x<=1200; x+= spacing) {
    let y = -x + 750;
    line(x+offset, y-offset, x+offset + 140, y-offset + 140);
  }
  offset = 3*spacing*sin(time);
  time += 0.015;
  strokeWeight(.5);
  line(0, 200, 1200, 200);
  line(0, 400, 1200, 400);
  line(500, 0, 500, 600);
  line(700, 0, 700, 600);
  line(0, 750, 1200, 750 - 1200);
  line(0+140, 750+140, 1200+140, 750 - 1200+140);
}
