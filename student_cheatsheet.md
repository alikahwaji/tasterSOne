# p5.js Quick Reference Cheat Sheet
**NMIT BIT Taster Session**

Use this quick guide during your session to help you build and customize your creative coding projects!

---

## 1. The Coordinate Grid
In p5.js, coordinates start at **(0, 0)** in the **Top-Left Corner**.
* **X-axis** goes across (horizontal).
* **Y-axis** goes down (vertical).

```text
(0,0)  ─────────────► +X (Width)
  │
  │     (x, y)
  │       ● (mouseX, mouseY)
  ▼
 +Y (Height)
```

---

## 2. Basic Commands

### Setup and Drawing Canvas
* `createCanvas(width, height);`  
  *Sets up the width and height of your screen (usually in `setup()`).*
* `background(red, green, blue);`  
  *Clears the screen with a solid color. Values go from `0` to `255`.*

### Shapes
* `ellipse(x, y, width, height);`  
  *Draws a circle/oval at (x, y).*
* `rect(x, y, width, height);`  
  *Draws a square/rectangle at (x, y).*
* `line(x1, y1, x2, y2);`  
  *Draws a line from the first point to the second point.*

### Colors & Outlines
* `fill(red, green, blue);`  
  *Sets the color for all shapes drawn after it.*
* `fill(red, green, blue, transparency);`  
  *Transparency (opacity) goes from `0` (invisible) to `255` (solid).*
* `noStroke();`  
  *Removes borders/outlines from shapes.*
* `stroke(red, green, blue);`  
  *Sets outline colors.*
* `strokeWeight(thickness);`  
  *Sets outline thickness in pixels.*

---

## 3. Handy Variables & Interactivity

These are variables built-in to p5.js that change automatically:
* `mouseX` — Current horizontal pixel position of your cursor.
* `mouseY` — Current vertical pixel position of your cursor.
* `width` — The total width of your canvas.
* `height` — The total height of your canvas.
* `mouseIsPressed` — `true` if you are clicking, `false` if not.

---

## 4. Key Starter Templates

### Neon Interactive Brush
Copy this into your editor to create a glowing trail brush. Click the canvas to clear!

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15, 23, 42); // Deep space dark background
}

function draw() {
  // Clear the board if clicked
  if (mouseIsPressed) {
    background(15, 23, 42);
  }
  
  // Choose random colorful neon shades
  let r = random(100, 255);
  let g = random(150, 255);
  let b = random(200, 255);
  
  // Draw the brush circle
  fill(r, g, b, 120); // 120 makes it transparent/glowy
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}
```

---

## 5. Want to study coding further?
If you enjoy this visual, hands-on way of building, check out NMIT's **Bachelor of Information Technology (BIT)**.
* **No prior coding required**: We teach you from scratch!
* **Project-based learning**: Build apps, websites, databases, and games.
* **High Careers Success**: Nelson/Marlborough has a booming tech sector waiting for graduate developers, security professionals, and IT administrators.
* **Learn more**: Talk to your facilitator or visit [nmit.ac.nz/bit](https://www.nmit.ac.nz/study/programmes/bachelor-of-information-technology)
