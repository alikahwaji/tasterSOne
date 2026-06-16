// DEMO 3: Catch the Bubble Game
// --------------------------------------------------
// This demo combines movement mechanics (speed, gravity),
// boundaries, collision detection, and score counters.

// 1. GAME VARIABLES
let ballX;       // Ball X-coordinate
let ballY = 0;   // Ball Y-coordinate starts at the top
let ballSpeed = 5; // How fast the ball falls (pixels per frame)
let ballSize = 30; // Size of the falling ball

let score = 0;   // Player's score

function setup() {
  createCanvas(600, 400);
  
  // Set random horizontal start position for the ball
  ballX = random(20, width - 20);
}

function draw() {
  background(15, 23, 42); // Clear screen each frame (essential for animation)

  // 2. FALLING LOGIC: Increase ballY by ballSpeed
  ballY = ballY + ballSpeed;

  // 3. DRAW GAME OBJECTS
  
  // Draw the falling bubble (Cyan)
  fill(34, 211, 238);
  noStroke();
  ellipse(ballX, ballY, ballSize, ballSize);

  // Draw the catcher paddle (Magenta) centered on the mouse position
  let catcherX = mouseX;
  let catcherY = 370;
  let catcherW = 80;
  let catcherH = 15;
  
  fill(236, 72, 153);
  rect(catcherX - catcherW/2, catcherY, catcherW, catcherH, 5); // 5 is border radius

  // 4. COLLISION / CATCH DETECTION
  // Check if ball hits the catcher vertically (near catcherY) 
  // AND horizontally (between left and right edges of catcher)
  if (ballY + ballSize/2 >= catcherY && ballY - ballSize/2 <= catcherY + catcherH) {
    if (ballX >= catcherX - catcherW/2 && ballX <= catcherX + catcherW/2) {
      // Caught the bubble!
      score = score + 1;
      resetBall();
    }
  }

  // 5. MISS DETECTION
  // Check if ball falls past the screen bottom
  if (ballY > height) {
    score = score - 1; // Lose a point
    resetBall();
  }

  // 6. DRAW TEXT (SCORE BOARD)
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("Score: " + score, 20, 35);
  
  // Display a quick tip
  fill(148, 163, 184);
  textSize(12);
  textAlign(RIGHT);
  text("Move mouse left/right to catch. Customize variables in code!", width - 20, 35);
}

// Custom function to reset the falling ball to the top
function resetBall() {
  ballY = 0;
  ballX = random(20, width - 20);
  
  // Slightly increase speed as score gets higher to make it challenging!
  ballSpeed = 5 + Math.floor(score / 5);
  
  // Cap the speed so it's not impossible
  if (ballSpeed > 15) {
    ballSpeed = 15;
  }
}
