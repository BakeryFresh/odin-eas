gridSize = document.getElementById('gridSize');
grid = document.getElementById('grid');

console.log(gridSize.value);
console.log(grid);

btnOne = document.getElementById('btnOne');
btnOne.addEventListener('click', function() {
    generateGrid(gridSize.value);
});


function generateGrid(size = 4) {
    // grid.style.cssText = 'grid-template-columns: repeat(`${size}`, 1fr)';
    grid.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
    console.log("function started");
    size = size*size;
    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');

        cell.classList.add('Cell', "Cell-" + i)
        cell.textContent = "cell:" + i;
        cell.classList.add('cell');

        grid.appendChild(cell);
        console.log("Div should be added");
        
    }
}
