// Slower, making it work bit by bit

let delta = 250;
let tail = 50;
let slashes;

function setup() {
  createCanvas(700, 700);
  background(255);
  fill(0);
  noStroke();
  slashes = [];
  for (let i = 0; i < 20; i++) {
    slashes.push(new Slash(100));
  }
}

function draw() {
  for (let i = 0; i < 20; i++) {
    slashes[i].draw();
  }
}

class Slash {
  constructor(c) {
    let x1, x2, y1, y2, tarx1, tarx2, tary1, tary2;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.tarx1 = tarx1;
    this.tarx2 = tarx2;
    this.tary1 = tary1;
    this.tary2 = tary2;

    this.easing = random(0.01, 0.1);
    this.vertical = random([false, true]);
    this.color = c;
    this.initSlash();
  }

  initSlash() {
    let timer = 0;
    this.tmax = random(60, 150);
    this.vertical = random([false, true]);
    this.x1 = random(1, width/40 - 1) * 40;
    this.x2 = this.x1;
    this.y1 = random(1, height/40 - 1) * 40;
    this.y2 = this.y1;

    if (this.x1 < width / 2) {
      this.tarx2 = this.x1 + delta;
    }
    else {
      this.tarx2 = this.x1 - delta;
    }

    if (this.y1 < height / 2) {
      this.tary2 = this.y1 + delta;
    }
    else {
      this.tary2 = this.y1 - delta;
    }
  }

  draw() {
    this.x2 = ease(this.x2, this.tarx2, this.easing); this.ys = ease(this.y2, this.tary2, this.easing);
    if (abs(this.x2 - this.tarx2) <= 1) {
      this.timer++;

      if (this.timer > this.tmax) {
        this.tarx1 = this.tarx2;
        this.tary1 = this.tary2;
        this.x1 = ease(this.x1, this.tarx1, this.easing);
        this.y1 = ease(this.y1, this.tary1, this.easing);

        if (abs(this.x1 - this.tarx1) <= 1) {
          this.initSlash();
        }
      }
    }
    fill(this.color, 200);
    if (this.vertical) {
      quad(
        this.x1, this.y1-tail,
        this.x1, this.y1+tail,
        this.x2, this.y2+tail,
        this.x2, this.y2-tail
      );
    }
    else {
      quad(
        this.x1-tail, this.y1,
        this.x1+tail, this.y1,
        this.x2+tail, this.y2,
        this.x2-tail, this.y2
      );
    }
  }
}

function ease(value, target, easingVal) {
    let d = target - value;
    if (abs(d)>1) { value += d*easingVal };
    return value;
}
