function setup() {
  createCanvas(1000, 600);
  background(255);
  stroke(20);
  strokeWeight(1);
//  noLoop();
}

var hspacing = 7;
var vspacing = 10;
var offset1 = 0;
var offset2 = 10000;
var max_iters = 400 / vspacing;
var choices = [3, 3, 4, 5, 6, 7, 7, 8, 10];

let iters;

function draw() {
  clear();
  translate(200, 100);
  rect(0, 0, 800, 400);
  strokeWeight(0.5);
  let iter_count;
  let inner_iters;

  for (let i = 1.5*hspacing; i < 800 - 1.5*hspacing; i += hspacing) {
    iter_count = 0;
    let cury = 0;

    let fails=0;
    while (iter_count <= max_iters + 1 && fails < 5) {
      inner_iters = choices[Math.floor(choices.length * noise(i))];
      if (inner_iters + cury > max_iters + 1) { fails++; continue; }
      beginShape();
      for (let y = 0; y < inner_iters + 2; y++) {
        cury++;
        curveVertex(
          i + 1.75*hspacing*noise(0.25*i + offset1, 1.5*cury + offset2),
          -1.5*vspacing + vspacing*cury + map(
            noise(0.25*i + offset1, 5*cury + offset2),
            0, 1, -vspacing/2, vspacing/2
          )
        );
      }
      cury -= 2.75; // 2 points are eaten by curve control points --- don't count those
      endShape();
      iter_count += inner_iters;
    }
  }
  offset1 += 0.01;
  offset2 += 0.015;
}
