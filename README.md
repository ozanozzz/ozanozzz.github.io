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
import * as PIXI from 'pixi.js';


// Create a new Pixi.js application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x131313,
    resolution: devicePixelRatio || 1,
  });
  
  // Add the canvas to the HTML document
  document.getElementById('MCanvas').appendChild(app.view);
  
  // Create a rectangle
  const rectangle = new PIXI.Graphics();
  rectangle.beginFill(0x0000ff); // blue
  rectangle.drawRect(0, 0, 50, 50);
  rectangle.endFill();
  rectangle.x = 100;
  rectangle.y = 100;
  app.stage.addChild(rectangle);
  
  // Variables to store the mouse position and whether the rectangle is being dragged
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;
  
  // Event listeners for mouse down, up, and move
  app.stage.interactive = true;
  app.stage.hitArea = new PIXI.Rectangle(0, 0, 800, 600);
  app.stage.on('mousedown', (event) => {
    if (event.target === rectangle) {
      isDragging = true;
      offsetX = rectangle.x - event.data.global.x;
      offsetY = rectangle.y - event.data.global.y;
    }
  });
  
  app.stage.on('mouseup', () => {
    isDragging = false;
  });
  
  app.stage.on('mousemove', (event) => {
    if (isDragging) {
      rectangle.x = event.data.global.x + offsetX;
      rectangle.y = event.data.global.y + offsetY;
    }
  });
  
  // Animate the rectangle
  app.ticker.add(() => {
    // No need to clear the screen, Pixi.js does it for us
  });```

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

