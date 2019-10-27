let num_slashes = 20;
let colors = [color(0), color(0, 158, 224), color(244, 229, 0)];
let delta = 240;
let tail = 50;

function setup() {
    createCanvas(700, 700);

    slashes = [];
    for(let i = 0; i < num_slashes; i++){
      slashes.push(new Slash(colors[i%3]);
    }
}

function draw() {
    for (let i = 0; i < num_slashes; i++) {
        slash[i].draw();
    }
}

function mousePressed() {
    for(let i = 0; i < num_slashes; i++){
        slash[i].initSlash();
    }
}

class Slash {
    constructor(c) {
      this.x1, this.x2, this.y1, this.y2, this.tarx1, this.tarx2, this.tary1, this.tary2;
      this.easing = random(0.01, 0.1);
      this.vertical;
      this.color = c;
      this.initSlash();
    }

    initSlash() {
      let timer = 0;
      let tmax = random(60, 150);
      this.vertical = random([false, true]);
      this.x1 = random(1, width/40 - 1)*40;
      this.x2 = this.x1;
      this.y1 = random(1, height/40 - 1)*40;
      this.y2 = this.y1;

      if (this.x1 < width/2) { this.tarx2 = this.x1 + delta; }
      else { this.tarx2 = this.x1 - delta; }

      if (this.y1 < height/2) { this.tary2 = this.y1 + delta; }
      else { this.tary2 = this.y1 - delta; }
    }

    draw() {
      this.x2 = ease(this.x2, this.tarx2, this.easing);
      this.ys = ease(this.y2, this.tary2, this.easing);
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

      noStroke();
      fill(this.color, 200);
      if (vertical) {
        quad(this.x1, this.y1-tail, this.x1, this.y1+tail, this.x2, this.y2+tail, this.x2, this.y2-tail);
      }
      else {
        quad(this.x1-tail, this.y1, this.x1+tail, this.y1, this.x2+tail, this.y2, this.x2-tail, this.y2);
      }
    }
}

function ease(value, target, easingVal) {
    let d = target - value;
    if (abs(d)>1) { value += d*easingVal };
    return value;
}
