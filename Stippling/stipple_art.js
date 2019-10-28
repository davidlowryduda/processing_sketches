function setup() {
  createCanvas(1000, 600);
  background(255);
  let density = 0.01;
  for (let x = space; x < width; x+= rwidth + space) {
    if (x + rwidth < width) {
      let srect = new StippleRectangle(x, ymin, rwidth, rheight, density);
      srect.draw();
      density += 0.03;
    }
  }
}

let space   = 25;
let rwidth  = 125;
let ymin    = 100;
let rheight = 400;

function draw() {
  let tmp = 1;
}

keyPressed = function() {
  if (key == "p") {
    console.log(mouseX, mouseY);
  }
}
