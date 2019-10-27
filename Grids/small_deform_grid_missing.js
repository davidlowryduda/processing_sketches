let backgroundcolorstring = "#1A535C";
let colorstrings = [
  "#F7FFF7",
  "#4ECDC4",
  "#FF6B6B",
  "#E5BC69"
];

function setup() {
  createCanvas(600,600);
  strokeWeight(2);
  backgroundcolor = color(backgroundcolorstring);
  colors = [];
  for (let i=0; i<colorstrings.length; i++) {
    colors.push(color(colorstrings[i]));
  }
  noLoop();
}

let squarewidth = 18;
let pad = 8;
let threshold = 0.35;
let fill_threshold = 0.30;
let noise_offset = 1000;
let continuity = .2;
let noise_scale = 8;

function thisnoise(x, y) {
  return noise_scale * noise(x*continuity, noise_offset + y*continuity);
}

function draw() {
  noFill();
  background(backgroundcolor);
  let index;
  for (let i=5; i<(width-squarewidth); i+=(squarewidth+pad)) {
    for (let j=5; j<(width-squarewidth); j+=(squarewidth+pad)) {
      if (random() > threshold) {
        index = random([0, 1, 2, 3]);
        stroke(colors[index]);
        if (random() > fill_threshold) {
          fill(colors[index]);
        }
        else {
          noFill();
        }
        quad(
          i + thisnoise(i, j), j + thisnoise(i, j),
          i + thisnoise(i, j+squarewidth), j + squarewidth + thisnoise(i, j+squarewidth),
          i + squarewidth + thisnoise(i+squarewidth, j), j + squarewidth + thisnoise(i, j+squarewidth),
          i + squarewidth + thisnoise(i+squarewidth, j), j + thisnoise(i+squarewidth, j)
        );
      }
    }
  }
}
