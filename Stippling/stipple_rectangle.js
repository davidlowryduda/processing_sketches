
/*
 * A rectangle based around rect(x, y, w, h), but which has stippling in it at a
 * density rating of `density`. The `pad` and `padded` arguments determine
 * whether the area around the rectangle is cleaned (manually and naively) by
 * added white rectangles at the described padding
 */
class StippleRectangle {
  constructor(x, y, w, h, density=0.01, pad=20, padded=true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.density = density;
    this.pad = pad
    this.padded = padded;
  }

  draw() {
    noFill();
    stroke(0);
    strokeWeight(1.5);
    let rectwidth = 10;
    let points_per_rect = rectwidth * rectwidth * this.density;
    for (let xx = this.x - rectwidth; xx <= (this.x + this.w); xx += rectwidth) {
      for (let yy = this.y - rectwidth; yy <= (this.y + this.h); yy += rectwidth) {
        for (let index = 0; index < points_per_rect; index++) {
          push();
          translate(xx, yy);
          point(
            2.0 * rectwidth * noise(1.5*xx + 2*index, 1.3*yy + 300),
            2.0 * rectwidth * noise(1.2*xx + 500, 1.6*yy + 2.1*index + 800)
          );
          pop();
        }
      }
    }

    if (this.padded) {
      strokeWeight(1);
      fill(255);
      noStroke();
      rect(this.x - this.pad, this.y - this.pad, this.pad, this.h + 2*this.pad);
      rect(this.x - this.pad, this.y - this.pad, this.w + 2*this.pad, this.pad);
      rect(this.x - this.pad, this.y + this.h,   this.w + 2*this.pad, this.pad);
      rect(this.x + this.w,   this.y - this.pad, this.pad, this.h + 2*this.pad);
      stroke(0);
      noFill();
      rect(this.x, this.y, this.w, this.h);
    }
  }
}
