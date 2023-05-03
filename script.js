window.onload = generateGrid(gridSize.value);
gridSize = document.getElementById("gridSize");
grid = document.getElementById("grid");
let randomMode = false;

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
gridSize.addEventListener("change", () => {
  removeChildNodes(grid);
  generateGrid(gridSize.value);
});

btnThree = document.getElementById("btnThree");
btnThree.addEventListener("click", () => {
    randomMode = !randomMode;
});

// generate grid size and sort grid row/column value based on user input.
// Squares the user choice to create a grid
function generateGrid(size = 4) {
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`
  );
    //make a grid
  size = size * size;

  for (let i = 0; i < size; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell");

    grid.appendChild(cell);
    

    cell.addEventListener("mouseenter", () => {
      cell.classList.add("selected");
      //random mode gives a random color
      if (randomMode === false) {
        //go with user's choice of color
        const colorChoice = document.getElementById("selectColor").value;
        cell.setAttribute("style", `background-color: ${colorChoice};`);
        
      } else {
        const colorChoice = Math.floor(Math.random()*16777215).toString(16);
        
        cell.setAttribute("style", `background-color: #${colorChoice};`);

      }
    });
  }
}

//clear the grid of spaces to reset for another grid generation
function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
