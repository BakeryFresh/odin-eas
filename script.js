gridSize = document.getElementById('gridSize');
grid = document.getElementById('grid');

console.log(gridSize.value);
console.log(grid);

btnOne = document.getElementById('btnOne');
btnOne.addEventListener('click', function() {
    generateGrid(gridSize.value);
});


function generateGrid(size = 2) {
    grid.style.cssText = 'display: grid; '
    console.log("function started");

    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');

        cell.classList.add('Cell', "Cell-" + i)
        cell.textContent = "cell:" + i;

        grid.appendChild(cell);
        console.log("Div should be added");
        
    }
}