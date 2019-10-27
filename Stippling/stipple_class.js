function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

function draw() {
  let rect1 = new StippleRectangle(10, 10, 50, 100);
  rect1.draw();
  let rect2 = new StippleRectangle(100, 80, 100, 50, 0.1);
  rect2.draw();
  let rect3 = new StippleRectangle(300, 400, 200, 200, 0.2);
  rect3.draw();
}
