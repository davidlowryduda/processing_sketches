---
title: Stippling Sketches
---

# Stippling

We begin a set of sketches based around a technique of stippling. This technique
is noise-based and computationally very fast --- but I now see it has the
downside of not giving beautifully uniform stippling. Thus this is something to
return to should I ever decide to implement a better stippling algorithm.
(The naive one where one looks at lots and lots of points and checks that none
are too near might even be just fine for not-too-many-points).


## Sketches

- In [this sketch](basic_stippling.html), we have some basic stippling.
- Compare that to [this sketch](random_dots.html), which has randomness instead
  of uniformity.
- [This sketch](stipple_class.html) is actually a test of a stipple rectangle
  class I wrote.
- [This sketch](stipple_stripes.html) uses that class to produce a set of
  stripes. Note that for higher density, it's not-quite uniform.


### Ideas

[Art](stipple_art.html) is supposed to hold some additional markings, like a set
of cubic curves or something. The cubic interpolator class was written for this.
