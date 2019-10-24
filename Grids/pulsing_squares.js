function setup() {
  createCanvas(600,600);
  noStroke();
  rectMode(CENTER);
  colorMode(HSB);
}

let t = 0;
let time_delta = 1;
let spacing = 50;

function draw() {
  background(255);
  let x, y, r;
  for(x = spacing; x <= width - spacing; x += spacing) {
    for(y = spacing; y <= height - spacing; y += spacing) {
      r = pow(1-((t-y/spacing) % 60)/60, 3);
      fill((t/3) % 255, 255, r * 255);
      rect(x, y, spacing/3 + (spacing/2)*r, spacing/3 + (spacing/2)*r);
    }
  }
  t += time_delta;
}
