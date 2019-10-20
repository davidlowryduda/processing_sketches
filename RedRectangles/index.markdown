---
title: Red Rectangles
---

# Red Rectangles

I draw inspiration from Malevich's "8 Red Rectangles", and appropriately draw
several red rectangles.


## Sketches

- [Here](red_rectangles.html), I do a first approximation. There are several
  things I like here. This is the first javascript class I've ever written. The
  logic is actually a bit complicated, but rather nice.
- [Here](red_rectangles_large.html), I have additional logic that makes the
  rectangles generically larger.


## Thoughts

I have implemented within this logic for drawing several rectangles randomly
that do not intersect each other. That's nice.

The logic for filling the available area is non-trivial in principle --- I did a
poor approximation. So my rectangles will never fill the corners of the image. I
should take a moment and really try to understand where the actual boundaries
are, and do a better job of placing rectangles within the entire canvas.
