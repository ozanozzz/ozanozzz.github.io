const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Camera properties
let cameraX = 0;
let cameraY = 0;
let cameraZoom = 1;

// Rectangle properties
let rectangleX = 0;
let rectangleY = 0;
let rectangleWidth = 100;
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

gameLoop();