let spacing = 8;
let offset_horiz = 0;
let offset_vert  = 0;
let offset_diag  = 0;
let offset_delta = 0.20;

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
  for (let x=-100; x<=1300; x+= spacing) {
    line(x+offset_horiz, 200, x+offset_horiz, 400);
  }
  for (let y=-100; y<=700; y+= spacing) {
    line(500, y+offset_vert, 700, y+offset_vert);
  }
  for (let x=-100; x<=1300; x+= spacing) {
    let y = -x + 750;
    line(x+offset_diag, y-offset_diag, x+offset_diag + 140, y-offset_diag + 140);
  }
  offset_horiz = 15*spacing*noise(time);
  offset_vert  = 15*spacing*noise(time + 150);
  offset_diag  = 15*spacing*noise(time + 300);

  time += 0.005;

  strokeWeight(.5);
  line(0, 200, 1200, 200);
  line(0, 400, 1200, 400);
  line(500, 0, 500, 600);
  line(700, 0, 700, 600);
  line(0, 750, 1200, 750 - 1200);
  line(0+140, 750+140, 1200+140, 750 - 1200+140);
}
