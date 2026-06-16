// DEMO 2: Interactive Neon Brush
// --------------------------------------------------
// This demo introduces mouse interaction (mouseX, mouseY), 
// variables, conditional logic, and random color generation.

function setup() {
  // Make the canvas fit the entire window size
  createCanvas(windowWidth, windowHeight);
  
  // Paint background ONCE in setup to allow shapes to leave a trail
  background(15, 23, 42); // Deep space dark background
}

function draw() {
  // 1. CLEAR SCREEN: If the user presses/clicks their mouse, paint background black
  if (mouseIsPressed === true) {
    background(15, 23, 42);
  }

  // 2. GENERATE NEON COLORS: Make colors change randomly
  // random(min, max) selects a random decimal between two numbers
  let r = random(100, 255); // Red value skewed high
  let g = random(150, 255); // Green value skewed high
  let b = random(200, 255); // Blue value skewed high
  
  // 3. SET SHAPE PROPERTIES:
  // fill(Red, Green, Blue, Opacity)
  // Opacity of 120 (max 255) creates a transparent, glowing trail as circles overlap
  fill(r, g, b, 120);
  noStroke();

  // 4. DRAW AT CURSOR:
  // ellipse(X, Y, Size_X, Size_Y)
  // mouseX and mouseY are built-in variables that store current cursor coordinates
  ellipse(mouseX, mouseY, 40, 40);
}

// Optional: Adjust canvas size if students resize their browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(15, 23, 42); // Clear and reset
}
