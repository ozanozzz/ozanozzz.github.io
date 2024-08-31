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
animate();