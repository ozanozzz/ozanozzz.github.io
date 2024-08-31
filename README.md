# ozanozzz.github.io
## Style.css
```css
body {
  font-family: Arial, sans-serif;
  background-color: #131313;
  display: flex;
  height: 100vh;
  margin: 0;
}

#title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
}

#description {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #ccc;
  margin-bottom: 20px;
}

#canvasContainer {
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  
}

#MCanvas {
  border: 1px solid #1e84b3;
  width: 99%;
  height: 98%;
}```

## Main.js
```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Camera properties
let cameraX = 5;
let cameraY = 5;
let cameraZoom = 1;

// Rectangle properties
let rectangleX = 6;
let rectangleY = 6;
let rectangleWidth = 50;
let rectangleHeight = 50;

// Function to draw the rectangle
function drawRectangle() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(rectangleX - cameraX, rectangleY - cameraY, rectangleWidth / cameraZoom, rectangleHeight / cameraZoom);
}

// Function to update the camera position and zoom
function updateCamera() {
    // Implement your camera movement and zoom logic here
    // For example, you could use arrow keys or mouse wheel
}

// Main game loop
function gameLoop() {
    updateCamera();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRectangle();
    requestAnimationFrame(gameLoop);
}

gameLoop();```

## index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mutecity</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="title">
        <h1>Mutecity</h1>
    </div>
    <div id="description">
        <p>A New Medium</p><br>
    </div>
    <div id="canvasContainer">
        <canvas id="MCanvas"></canvas>
    </div>
    <script src="main.js"></script>
</body>
</html>```

