let backgroundcolorstring = "#1A535C";
let colorstrings = [
  "#F7FFF7",
  "#4ECDC4",
  "#FF6B6B",
  "#E5BC69"
];

function setup() {
  createCanvas(600,600);
  strokeWeight(1);
  backgroundcolor = color(backgroundcolorstring);
  colors = [];
  for (let i=0; i<colorstrings.length; i++) {
    colors.push(color(colorstrings[i]));
  }
  noLoop();
}

let squarewidth = 18;
let pad = 8;
let threshold = 0.20;

function draw() {
  noFill();
  background(backgroundcolor);
  let index;
  for (let i=5; i<(width-squarewidth); i+=(squarewidth+pad)) {
    for (let j=5; j<(width-squarewidth); j+=(squarewidth+pad)) {
      if (random() > threshold) {
        index = random([0, 1, 2, 3]);
        stroke(colors[index]);
        fill(colors[index]);
        rect(i, j, squarewidth, squarewidth);
      }
    }
  }
}
