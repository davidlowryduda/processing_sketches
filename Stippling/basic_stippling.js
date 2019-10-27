function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

let pad = 40;
let density = 0.01;
let rectwidth = 20;
let offsetx = 100;
let offsety = 400;
let offseti = 800;

function draw() {
  noFill();
  stroke(0);
  strokeWeight(1.5);
  let points_per_rect = rectwidth*rectwidth*density;
  for (let x = pad; x <= width - pad; x += rectwidth) {
    for (let y = pad; y <= height - pad; y += rectwidth) {
      for (let index = 0; index < points_per_rect; index++) {
        push();
        translate(x - pad/2 + rectwidth/2, y - pad/2 + rectwidth/2);
        point(
          2.0*rectwidth * noise(1.5*x + 1.2*index, 1.1*y+3*offsety),
          2.0*rectwidth * noise(1.1*x+3*offsetx, 1.3*y + 1.5*index + offseti)
        );
        pop();
      }
    }
  }
  // manual cropping.
  strokeWeight(1);
  fill(255);
  noStroke();
  rect(0, 0, pad, height);
  rect(0, 0, width, pad);
  rect(0, height-pad, width, pad);
  rect(width-pad, 0, pad, height);
  stroke(0);
  noFill();
  rect(pad, pad, width - 2*pad, width - 2*pad);
}
