/*
 * Dot
 *
 * A dot is a persistent wandering dot. It leaves a trail and moves with some
 * excitement.
 *
 * Each dot splits up its path between its initial position and target position
 * into pieces, each consisting of a piece_start and piece_end.
 */
class Dot {
  constructor() {
    this.position    = createVector(0, 0);
    this.displaySize = 10;
    this.color       = color(0);
    this.target      = createVector(0, 0);
    this.inMotion    = false;

    this.timeAlive   = 0;
    this.duration    = 20;

    this.piece_start = createVector(0, 0);
    this.piece_end   = createVector(0, 0);
  }

  /*
   * updateTarget
   *
   * Sets the target to (x, y), and sets the dot in motion.
   */
  updateTarget(x, y) {
    this.target.set(x, y);
    this.inMotion = true;
    this.timeAlive = 0;
  }

  /*
   * update
   */
  update() {
    if (this.inMotion) {
      this.timeAlive++;

    }
  }

}
