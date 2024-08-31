# ozanozzz.github.io
## Style.css
```css
body {
  font-family: Arial, sans-serif;
  background-color: #6e6e6e; /* Changed to white */
  margin: 0;
}

#title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #231616;
}```

## Main.js
```javascript
import * as THREE from 'three';

console.log('Loading Three.js...');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

console.log('Creating renderer...');
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

console.log('Creating cube...');
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

console.log('Setting up camera...');
camera.position.z = 5;

console.log('Starting animation loop...');
function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
  console.log('Rendering scene...');
}

animate();

console.log('Animation loop started.');```

## index.html
```html

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Mutecity</title>
	    <link rel="stylesheet" href="style.css">
	</head>
	<body>
		<script type="module" src="main.js"></script>
	</body>
</html>```

