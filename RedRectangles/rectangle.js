/*
 * rectangle.js
 *
 * Depends on p5js
 */

class Rectangle {
  constructor(x, y, width, height) {
    if (width < 0) {
      x = x + width;
      width = -width;
    }
    if (height < 0) {
      y = y + height;
      height = -height;
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(twist=false) {
    if (!twist) {
      rect(this.x, this.y, this.width, this.height);
    }
    else {
      push();
      translate(3*this.x/2, 3*this.y/2);
      rotate(random(-0.1, 0.1));
      rect(-this.x/2, -this.y/2, this.width, this.height);
      pop();
    }
  }

  pt_in_rectangle(x, y) {
    if (x < this.x) { return false; }
    if (x > this.x + this.width) { return false; }
    if (y < this.y) { return false; }
    if (y > this.y + this.height) { return false; }
    return true;
  }

  distance_to_point(x, y) {
    if (this.pt_in_rectangle(x, y)) { return 0; }

    if (this.x < x && x < this.x + this.width) {
      return this.distance_in_y(x, y);
    }
    else if (this.y < y && y < this.y + this.height) {
      return this.distance_in_x(x, y);
    }
    else {
      return min(
        distance_between_points(x, y, this.x, this.y),
        distance_between_points(x, y, this.x + this.width, this.y),
        distance_between_points(x, y, this.x, this.y + this.height),
        distance_between_points(x, y, this.x + this.width, this.y + this.height),
      );
    }
  }

  distance_in_x(x, y) {
      return min(abs(this.x - x), abs(this.x + this.width - x));
  }

  distance_in_y(x, y) {
      return min(abs(this.y - y), abs(this.y + this.height - y));
  }

  area() {
      return this.width * this.height;
  }
}

function distance_between_points(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
}
