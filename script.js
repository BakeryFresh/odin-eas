gridSize = document.getElementById("gridSize");
grid = document.getElementById("grid");

window.onload = generateGrid(gridSize.value);

//calls func to generate grid based on slider size
btnOne = document.getElementById("btnOne");
btnOne.addEventListener("click", function () {
  removeChildNodes(grid);
  generateGrid(gridSize.value);
});

// calls func to reset grid back to start
btnTwo = document.getElementById("btnTwo");
btnTwo.addEventListener("click", function () {
  removeChildNodes(grid);
  generateGrid(gridSize.value);
});

// when a mouse moves over the square set it to red
let selectedCell = document.querySelectorAll(".cell");
let selectedCellArray = [...selectedCell];

// selectedCell.forEach((selectedCell) => {
//   console.log("running 1");
//   selectedCell.addEventListener("mouseenter", () => {
//     selectedCell.classList.add("selectedCell");
//   });
// });

// generate grid size and sort grid row/column value based on user input.
// Squares the user choice to create a grid
function generateGrid(size = 4) {
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`
  );
  console.log("function started");
  size = size * size;
  for (let i = 0; i < size; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell");

    grid.appendChild(cell);
    console.log("Div should be added");

    cell.addEventListener("mouseenter", () => {
      cell.classList.add("selectedCell");
    });
  }
}

//clear the grid of spaces to reset for another grid generation
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
