const gridDisplay = document.getElementById('grid');
const blackButton = document.getElementById('black-btn');
const rainbowButton = document.getElementById('rainbow-btn');
const clearButton = document.getElementById('clear-btn');
const createNewGridButton = document.getElementById('create-new-grid-btn');

// Amount of squares to be created
const amountOfSquares = 20;
let square = '';

// Function to create squares

function createGrid(amountOfSquares) {
  for (let i = 0; i < amountOfSquares ** 2; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    square.id = `Square_${[i]}`;
    gridDisplay.append(square);
    blackMode();
  }
  gridDisplay.style.gridTemplateColumns = `repeat(${amountOfSquares}, auto)`;
  gridDisplay.style.gridTemplateRows = `repeat(${amountOfSquares}, auto)`;
}

function blackMode() {
  document.querySelectorAll('.square').forEach((square) =>
    square.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
  );
}

function rainbowMode() {
  document.querySelectorAll('.square').forEach((square) =>
    square.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
    })
  );
}

function clearGrid() {
  document
    .querySelectorAll('.square')
    .forEach((square) => (square.style.backgroundColor = 'rgb(212, 212, 212)'));
}

function createNewGrid(userAmount) {
  userAmount = prompt(
    'Enter a number (Maximum 26). The longer the number, the longer the loading time.',
    16
  );
  if (userAmount > 26 || userAmount == null) {
    prompt(
      'Enter a number (Maximum 26). The longer the number, the longer the loading time.',
      16
    );
  } else {
    gridDisplay.innerHTML = '';
    createGrid(userAmount);
  }
}

createNewGridButton.addEventListener('click', createNewGrid);
blackButton.addEventListener('click', blackMode);
rainbowButton.addEventListener('click', rainbowMode);
clearButton.addEventListener('click', clearGrid);

createGrid(amountOfSquares);
