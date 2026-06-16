# NMIT BIT Taster Session: Creative Coding with p5.js
**Target Audience**: High School Students (Years 11-13)  
**Duration**: 1 Hour 45 Minutes (105 Minutes)  
**Facilitator Guide & Lesson Plan**

---

## Session Objectives
1. **Engage & Inspire**: Show students that programming is a highly visual, creative, and accessible field.
2. **Learn Programming Core Concepts**: Introduce canvas coordinates, shapes, colors, variables (`mouseX`/`mouseY`), and basic user interaction.
3. **Promote NMIT BIT**: Position the Bachelor of Information Technology (BIT) at NMIT as a practical, hands-on pathway to an exciting career in tech.

---

## Timeline Overview

| Time | Duration | Activity | NMIT BIT Promotion Focus |
| :--- | :--- | :--- | :--- |
| **09:00 - 09:15** | 15 mins | Part 1: Welcome & The "Why IT?" Hook | What is IT? Tech careers & the NMIT BIT degree value. |
| **09:15 - 09:35** | 20 mins | Part 2: p5.js Basics (Canvas & Shapes) | Practical learning approach: We teach from scratch! |
| **09:35 - 10:05** | 30 mins | Part 3: Guided Build (Interactive Brush) | Software Engineering major & Web development topics. |
| **10:05 - 10:25** | 20 mins | Part 4: Creative Play & Challenge Lab | Student-led project work, simulating NMIT's lab style. |
| **10:25 - 10:45** | 20 mins | Part 5: Showcase & Study Pathways | How to enrol, student success stories, Q&A. |

---

## Detailed Step-by-Step Guide

### Part 1: Welcome & The "Why IT?" Hook (15 mins)
* **Objective**: Grab attention, break down negative stereotypes about coding, and introduce NMIT.
* **Talking Points**:
  - Welcome everyone to the NMIT BIT Taster session! Introduce yourself and any student leaders/tutors helping out.
  - Ask the room: *"Who has done coding before?"* (Acknowledge all experience levels. Emphasize that **no experience is required** to succeed today).
  - What is IT? It’s not just sitting in a dark basement typing green text. It's designing games, securing networks against hackers, building mobile apps, creating digital art, and solving global problems.
  - Introduce **NMIT's Bachelor of Information Technology (BIT)**:
    - Located in Nelson (and online/Marlborough).
    - 3-year degree with hands-on labs (like the one they are in today).
    - Strong connections with local businesses, meaning real internship projects in Year 3.
  - Today, they will become creative programmers using **p5.js**—a Javascript library for drawing and interactive design.

---

### Part 2: p5.js Basics (20 mins)
* **Objective**: Get everyone logged in and writing their first lines of visual code.
* **Activity**:
  1. Have students open their browsers and navigate to: **[https://editor.p5js.org/](https://editor.p5js.org/)**
  2. Point out the layout:
     - **Left panel**: The Code Editor.
     - **Right panel**: The Preview Canvas (where the program runs).
     - **Play/Stop buttons**: Run and halt the code.
  3. Walk through the default template:
     ```javascript
     function setup() {
       createCanvas(400, 400);
     }

     function draw() {
       background(220);
     }
     ```
     - Explain `setup()`: Runs **once** at the start. Sets up our drawing board.
     - Explain `draw()`: Runs **continuously** (60 times a second), like pages in a flip-book.
  4. **The Coordinate System**:
     - Explain that the canvas starts at `(0,0)` at the **Top-Left** corner.
     - X goes right (width), Y goes down (height).
  5. **Live Coding (Follow Along)**:
     - Guide students to add a shape inside `draw()`:
       ```javascript
       function draw() {
         background(220);
         fill(255, 0, 150); // Bright pink color (Red, Green, Blue)
         ellipse(200, 200, 100, 100); // Draw a circle in the center
       }
       ```
     - Explain parameters: `ellipse(x, y, width, height)`.
     - Introduce color parameters: RGB (Red, Green, Blue) scale from `0` to `255`.
* **NMIT BIT Pitch**: *"At NMIT, we don't just lecture you. We code together in interactive sessions. Every line of theory you learn is put straight into a project."*

---

### Part 3: Guided Build: Digital Neon Brush (30 mins)
* **Objective**: Introduce variables, movement, interaction, and simple conditional statements.
* **Activity**:
  1. Explain **variables**: placeholders for values that change.
  2. Introduce p5.js built-in variables: `mouseX` and `mouseY`.
  3. Change the circle coordinates to track the mouse:
     ```javascript
     ellipse(mouseX, mouseY, 80, 80);
     ```
     - Press Play. Move the mouse. *Notice how the circle follows the cursor!*
  4. **The "Flipbook" Trick**:
     - Move `background(220)` from `draw()` to `setup()`.
     - *Why?* If background runs 60 times a second, it clears the canvas. If it only runs once in `setup()`, our circles stack, drawing a continuous trail!
     - Let them try this. It becomes a drawing app!
  5. **Vibrant / Random Colors**:
     - Add random RGB colors so the brush looks like neon paint:
       ```javascript
       function draw() {
         // Generate random colors
         let r = random(0, 255);
         let g = random(0, 255);
         let b = random(0, 255);
         
         fill(r, g, b);
         noStroke(); // Remove the black outline
         ellipse(mouseX, mouseY, 50, 50);
       }
       ```
  6. **Adding Interaction (Conditionals)**:
     - Clear the canvas if the mouse is pressed:
       ```javascript
       if (mouseIsPressed) {
         background(0); // Paint it black!
       }
       ```
* **NMIT BIT Pitch**: *"This is software engineering. We take user inputs (mouse position, clicks), write logic (if conditions, random functions), and output something dynamic. If you love creating mechanics, our Software Major teaches you how to build robust games, apps, and interfaces."*

---

### Part 4: Creative Play & Challenge Lab (20 mins)
* **Objective**: Give students autonomy, let them experiment, and solve minor bugs on their own.
* **Task**: Give students 20 minutes to custom design their sketch. Provide them with challenges:
  - **Challenge 1 (Visuals)**: Instead of circles, draw squares (`rect(mouseX, mouseY, size, size)`) or draw multiple shapes at once.
  - **Challenge 2 (Interactive)**: Make the size of the shape change depending on how fast the mouse moves, or make it shrink over time.
  - **Challenge 3 (Game Starter)**: Share the `demo3_game.js` template where they have to catch a falling target. Let them modify the target's speed, score display, and colors.
* **Troubleshooting Common Errors** (Facilitator Watchlist):
  - **Case Sensitivity**: `createcanvas` instead of `createCanvas`, `mousex` instead of `mouseX`.
  - **Missing syntax**: Missing semi-colons (though JS handles some, it breaks code blocks), missing closing brackets `}` for functions.
  - **Out of bounds**: Drawing shapes outside the 400x400 canvas.
  - **Wrong order**: Calling background *after* shapes are drawn, causing shapes to be hidden.

---

### Part 5: Showcase & Study Pathways (20 mins)
* **Objective**: Celebrated achievement, share student work, and present the NMIT BIT academic pathway.
* **Activity**:
  1. Ask students to share their p5.js screens or generate a share link (`File -> Share -> Present`).
  2. Call out 2-3 unique designs (e.g., *"Look at this neon grid!"* or *"Awesome interactive game additions!"*).
  3. **Promote the BIT at NMIT Slide Presentation (Use `presentation.html`)**:
     - **The BIT Degree**: Focus on practical hands-on classes. 
     - **Major Streams**: Software Development, Information Systems, Networking & Cyber Security.
     - **Flexibility**: Option to study full-time (3 years) or part-time. Nelson campus has state-of-the-art labs.
     - **Success Story**: Tell them about a local graduate working in a top Kiwi tech firm.
     - **Next Steps**: Talk to their school careers advisor, visit the NMIT campus, or check the NMIT BIT program website (https://www.nmit.ac.nz/study/programmes/bachelor-of-information-technology) to apply.
  4. Q&A and hand out promotional flyers/stickers.

---

## Facilitator Cheat Sheet (Common Codes)

### Neon Brush Sketch (Part 3 Output)
```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15, 23, 42); // Sleek slate dark background
}

function draw() {
  if (mouseIsPressed) {
    background(15, 23, 42); // Clear screen when clicked
  }
  
  // Neon colors
  let r = random(100, 255);
  let g = random(100, 255);
  let b = random(200, 255);
  
  fill(r, g, b, 150); // 150 opacity makes it glow/blend
  noStroke();
  
  ellipse(mouseX, mouseY, 40, 40);
}
```
