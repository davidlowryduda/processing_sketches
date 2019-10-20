function setup() {
  createCanvas(700, 600);
  noLoop();
  background(250);
  fill(237, 247, 200);
  stroke(0);
  rect(20, 20, width-40, height-20);
}

var rect_limit = 12;
let width_limit = 400;
let height_limit = 400;


function find_spot(rect_array) {
  let found = false;
  let x, y;
  while (!found) {
    x = map(random(), 0, 1, 0, width_limit);
    y = map(random(), 0, 1, 0, height_limit);
    if (!in_a_rectangle(rect_array, x, y)) { found = true; }
  }
  return [x, y];
}


function in_a_rectangle(rect_array, x, y){
  for (let r of rect_array) {
    if (r.pt_in_rectangle(x, y)) { return true; }
  }
  return false;
}


function determine_max_height(rect_array, x, y, maxheight=1000) {
  for (let r of rect_array) {
    maxheight = min(maxheight, r.distance_in_y(x, y));
  }
  return maxheight;
}


function determine_max_width(rect_array, x, y, maxwidth=1000) {
  for (let r of rect_array) {
    maxwidth = min(maxwidth, r.distance_in_x(x, y));
  }
  return maxwidth;
}

function choose_length(limit, small_threshold=0.2) {
  let toss = random();
  if (toss < small_threshold) {
    return random(-limit, limit);
  }
  else {
    toss = random();
    if (toss < 0) {
      return random(-limit, -limit/1.3);
    }
    else {
      return random(limit/1.3, limit);
    }
  }
}

function find_suitable_rectangle(rect_array, min_area=70) {
  let found = false;
  let x, y, w, h;
  let rectangle;
  while (!found) {
    [x, y] = find_spot(rectangle_array);
    w = determine_max_width(rectangle_array, x, y, width_limit);
    h = determine_max_height(rectangle_array, x, y, height_limit);
    rectangle = new Rectangle(x, y, choose_length(w), choose_length(h));
    if (in_bounds(rectangle) && rectangle.area() > min_area) {
      found = true;
    }
  }
  return rectangle;
}

function in_bounds(rectangle, xleft=25, xright=(width_limit-25), ybottom=25, ytop=(height_limit-25)) {
  let boundary_rect = new Rectangle(xleft, ybottom, (xright - xleft), (ytop - ybottom));
  if (!boundary_rect.pt_in_rectangle(rectangle.x, rectangle.y)) {
    return false;
  }
  if (!boundary_rect.pt_in_rectangle(rectangle.x + rectangle.width, rectangle.y + rectangle.height)) {
    return false;
  }
  return true;
}


let rectangle_array = [];

function draw() {
  rotate(PI/4);
  translate(width/3, -height/3);
  let num_rects = 3 + max(Math.floor(random() * (rect_limit - 3)), 0);
  let rectangle;
  for (let i = 0; i < num_rects; i++) {
    rectangle = find_suitable_rectangle(rectangle_array);
    rectangle_array.push(rectangle);
  }

  fill(168, 25, 12);
  noStroke();
  for (let r of rectangle_array) {
    r.draw(twist=true);
  }
}
