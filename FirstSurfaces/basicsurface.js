        
// YOYO

let noise_increment = 1.5;
let offset = 0;

function setup() {
  createCanvas(800, 800);
  background(195);
  fill(255);
  stroke(20);
  strokeWeight(1);
  noLoop();
}

function noisy_circle(centerx, centery, base_radius, radius_delta, n_points, offset){
  let x0 = 0;
  let y0 = 0;
  let angle;
  let results = [];
  let x, y;
  for (let i = 0; i < n_points; i++){
    angle = i * 2 * PI / n_points;
    r_noisy = base_radius
              +
              map(noise(cos(angle)+1, centerx*0.01, offset),
                  0, 1,
                  base_radius - radius_delta, base_radius + radius_delta);
    x = centerx + r_noisy * cos(angle);
    y = centery + 2 * r_noisy * sin(angle);
    results.push([x, y]);
  }
  return results;
}


function draw() {
  //clear();
  offset += noise_increment;
  let r = 50;
  let r_delta = 70;
  let num_points = 200;
  let horizontal_position = 50;

  let num_slices = 550;
  for (let i = 0; i <= num_slices; i+=2){
    let multiplierangle = PI * i / num_slices;
    let multiplier = sin(multiplierangle);
    let circlepts = noisy_circle(
                      horizontal_position,
                      height/2 - 100,
                      r * multiplier,
                      r_delta * multiplier,
                      num_points,
                      offset
                    );
    beginShape();
    horizontal_position += max(multiplier * 3.5, 0.25);
    for (let j = 0; j< circlepts.length; j++){
      let pt = circlepts[j];
      vertex(pt[0], pt[1]);
    }
    endShape(CLOSE);
  }
}
