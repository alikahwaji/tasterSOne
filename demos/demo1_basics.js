// DEMO 1: p5.js Basics (Canvas, Coordinates & Shapes)
// --------------------------------------------------
// In p5.js, setup() runs ONCE at the start, and draw() runs 60 times/sec.
// X-axis goes across (0 to width), Y-axis goes down (0 to height).

function setup() {
  // Create a canvas 600 pixels wide and 400 pixels high
  createCanvas(600, 400);
}

function draw() {
  // Set the background color (0 = black, 255 = white, or RGB values)
  // Let's use a nice dark slate color: background(Red, Green, Blue)
  background(30, 41, 59);

  // --- DRAWING A CIRCLE ---
  // fill(Red, Green, Blue) - sets color for subsequent shapes
  fill(244, 63, 94); // Vibrant pink/red
  noStroke();        // Turn off borders
  
  // ellipse(X_Position, Y_Position, Width, Height)
  ellipse(150, 200, 100, 100); // Placed at X=150, Y=200

  // --- DRAWING A RECTANGLE ---
  fill(14, 165, 233); // Vibrant blue
  
  // rect(X_Position, Y_Position, Width, Height)
  rect(350, 150, 120, 100); // Placed at X=350, Y=150

  // --- ADDING A GLOWING BORDER ---
  stroke(234, 179, 8); // Golden yellow border
  strokeWeight(6);     // 6 pixels thick
  noFill();            // No inside color
  
  // Draw another circle in the middle
  ellipse(300, 200, 250, 250);
}
