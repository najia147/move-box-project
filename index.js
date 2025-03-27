const myBox = document.getElementById("myBox");
const resetButton = document.getElementById("resetButton");
const moveCounter = document.getElementById("moveCounter");

const moveAmount = 20;
let x = 0;
let y = 0;
let moveCount = 0;

// Get screen width & height
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

// Function to update position
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    let newX = x;
    let newY = y;

    switch (event.key) {
      case "ArrowUp":
        newY -= moveAmount;
        break;
      case "ArrowDown":
        newY += moveAmount;
        break;
      case "ArrowLeft":
        newX -= moveAmount;
        break;
      case "ArrowRight":
        newX += moveAmount;
        break;
    }

    // Prevent moving out of bounds
    if (
      newX >= -containerWidth / 2 + 60 &&
      newX <= containerWidth / 2 - 60 &&
      newY >= -containerHeight / 2 + 60 &&
      newY <= containerHeight / 2 - 60
    ) {
      x = newX;
      y = newY;

      // Change color on movement
      myBox.style.backgroundColor = getRandomColor();

      // Update movement counter
      moveCount++;
      moveCounter.innerText = `Moves: ${moveCount}`;

      // Move the box
      myBox.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});

// Function to generate random colors
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Reset button functionality
resetButton.addEventListener("click", () => {
  x = 0;
  y = 0;
  moveCount = 0;
  myBox.style.transform = "translate(0, 0)";
  myBox.style.backgroundColor = "lightblue";
  moveCounter.innerText = "Moves: 0";
});
