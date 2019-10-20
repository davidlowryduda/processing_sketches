let spacing = 8;
let offset_horiz = 0;
let offset_vert  = 0;
let offset_diag  = 0;
let offset_delta = 0.20;

let dir_horiz = 0;
let dir_vert  = 0;
let dir_diag  = 0;

function setup() {
  createCanvas(1200, 600);
  background(255);
  stroke(20);
  strokeWeight(2);
  dir_horiz = random([-1, 0, 1]);
  dir_vert  = random([-1, 0, 1]);
  dir_diag  = random([-1, 0, 1]);
}

function draw() {
  clear();
  strokeWeight(1);
  for (let x=0; x<=1200; x+= spacing) {
    line(x+offset_horiz, 200, x+offset_horiz, 400);
  }
  for (let y=0; y<=600; y+= spacing) {
    line(500, y+offset_vert, 700, y+offset_vert);
  }
  for (let x=0; x<=1200; x+= spacing) {
    let y = -x + 750;
    line(x+offset_diag, y-offset_diag, x+offset_diag + 140, y-offset_diag + 140);
  }
  offset_horiz += dir_horiz * offset_delta;
  offset_vert  += dir_vert  * offset_delta;
  offset_diag  += dir_diag  * offset_delta;
  offset_horiz = offset_horiz % spacing;
  offset_vert  = offset_vert  % spacing;
  offset_diag  = offset_diag  % spacing;

  strokeWeight(.5);
  line(0, 200, 1200, 200);
  line(0, 400, 1200, 400);
  line(500, 0, 500, 600);
  line(700, 0, 700, 600);
  line(0, 750, 1200, 750 - 1200);
  line(0+140, 750+140, 1200+140, 750 - 1200+140);
}
