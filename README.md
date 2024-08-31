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
  border: 1px solid #aeb31e;
  width: 99%;
  height: 98%;
}```

## Main.js
```javascript
import * as THREE from 'three';

// Create a new Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('MCanvas'),
  antialias: true
});

// Set the renderer's size
renderer.setSize(800, 600);

// Create a rectangle
const rectangle = new THREE.Mesh(
  new THREE.PlaneGeometry(50, 50),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }) // blue
);
rectangle.position.set(0, 0, 0); // Set the position to the center of the canvas
scene.add(rectangle);

// Animate the rectangle
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();```

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

