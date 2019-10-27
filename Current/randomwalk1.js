let hspace;
let vspace;
let strokecolor;
let bgcolor;
let pad;

let curx;
let cury;

function setup() {
  createCanvas(600, 600);

  hspace = 30;
  vspace = hspace * Math.sqrt(3) / 2;
  strokecolor = color(240, 90);
  bgcolor = color(61, 61, 92, 195);
  pad = 15;

  curx = width/2;
  cury = height/2;

  background(bgcolor);
  stroke(strokecolor);
  strokeWeight(2);
  //noLoop();
}

let t = 0;

function draw() {
  for (let i=0; i<=150; i++) {
    let r = Math.random();
    switch (Math.floor(r*4)) {
      case 0:
        if (right(curx, cury)) { curx += hspace; }
        break;
      case 1:
        if (left(curx, cury))  { curx -= hspace; }
        break;
      case 2:
        if (diagright(curx, cury)) {
          curx += hspace;
          cury += vspace;
        }
        break;
      case 3:
        if (diagleft(curx, cury)) {
          curx -= hspace;
          cury -= vspace;
        }
        break;
    } // switch
  }

  if (t++ % 20 == 0) {
    background(bgcolor);
  }
}

function right(x, y) {
  stroke(strokecolor);
  if (width - x < 2*hspace)  { return false; }
  line(x, y, x+hspace, y);
  return true;
}

function left(x, y) {
  stroke(strokecolor);
  if (x < 2*hspace)  { return false; }
  line(x, y, x-hspace, y);
  return true;
}

function diagright(x, y) {
  stroke(strokecolor);
  if (width - x < 2*hspace)  { return false; }
  if (height - y < 2*vspace) { return false; }
  line(x, y, x+hspace, y+vspace);
  return true;
}

function diagleft(x, y) {
  stroke(strokecolor);
  if (x < 2*hspace)  { return false; }
  if (y < 2*vspace) { return false; }
  line(x, y, x-hspace, y-vspace);
  return true;
}
