
/*
 * Simple, fast, Lagrange interpolator.
 */
class CubicInterpolator {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.x4 = x4;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.y4 = y4;
  }

  interpolate(x) {
    let ret = 0;
    ret += part(x, this.x1, this.y1, this.x2, this.x3, this.x4);
    ret += part(x, this.x2, this.y2, this.x1, this.x3, this.x4);
    ret += part(x, this.x3, this.y3, this.x1, this.x2, this.x4);
    ret += part(x, this.x4, this.y4, this.x1, this.x2, this.x3);
    return ret;
  }

  part(x, x0, y0, x1, x2, x3) {
    let denom = (x0 - x1) * (x0 - x2) * (x0 - x3);
    return y0 * (x - x1) * (x - x2) * (x - x3) / denom;
  }
}
