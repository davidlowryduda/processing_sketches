---
title: A randomly defined surface
---

# Random surface

The idea here is interesting. Plot a sequence of points that are
Perlin-noise-deviated from circles, where the noise depends on the x-coordinate
of the center of the (non-deviated) circle. Drawing these circles, allowing
later circles to overlap the earlier ones, has the appearance of drawing a 3d
shape slice by slice.

There is a lot to play with here.


## Sketches

- In [this sketch](basicsurface.html), I draw a surface with some smoothing done
  near the sides to make it closed on both ends. The downside is that there end
  up being more level curves near the two ends, so it looks a bit odd.
