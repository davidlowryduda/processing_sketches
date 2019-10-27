let backgroundcolor;
let colors;

function setup() {
  createCanvas(600,600);
  strokeWeight(1);
  backgroundcolor = color("#F7FFF7");
  colors = [
    color("#E5BC69"),
    color("#1A535C"),
    color("#4ECDC4"),
    color("#FF6B6B")
  ];
  noLoop();
}

let squarewidth = 18;
let pad = 5;

function draw() {
  noFill();
  background(backgroundcolor);
  let index;
  for (let i=5; i<(width-squarewidth); i+=(squarewidth+pad)) {
    for (let j=5; j<(width-squarewidth); j+=(squarewidth+pad)) {
      index = random([0, 1, 2, 3]);
      stroke(colors[index]);
      fill(colors[index]);
      rect(i, j, squarewidth, squarewidth);
    }
  }
}
