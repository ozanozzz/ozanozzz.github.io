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
rectangle.position.set(100, 100, 0);
scene.add(rectangle);

// Variables to store the mouse position and whether the rectangle is being dragged
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Event listeners for mouse down, up, and move
document.addEventListener('mousedown', (event) => {
  if (event.target === renderer.domElement) {
    const raycaster = new THREE.Raycaster();
    const mousePosition = new THREE.Vector2();
    mousePosition.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mousePosition.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mousePosition, camera);
    const intersects = raycaster.intersectObjects([rectangle]);
    if (intersects.length > 0) {
      isDragging = true;
      offsetX = rectangle.position.x - event.clientX;
      offsetY = rectangle.position.y - event.clientY;
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    rectangle.position.x = event.clientX + offsetX;
    rectangle.position.y = event.clientY + offsetY;
  }
});

// Animate the rectangle
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();