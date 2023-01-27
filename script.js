const resetGrid = document.querySelector("#resetBtn");
const container = document.querySelector(".container");
const grid = document.querySelector(".lower-container");
const setSize = document.getElementById("input");

setSize.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    clearGrid();
    createGrid();
    addEventListenerToCells();
  }
})

function clearGrid () {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

// shows the grid based on given size, must be between 1 and 100 cells
function createGrid() {

  let squareNum = document.getElementById("input").value;
  squareNum = Math.floor(squareNum);
        
  if (squareNum >= 1 && squareNum <= 100) {
    grid.classList.add('lower-container');
    container.appendChild(grid); 
    grid.style.setProperty("grid-template-columns", `repeat(${squareNum}, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${squareNum}, 1fr)`); 
    grid.style.setProperty("border", "5px solid rgb(74, 42, 0)");

    for(let i = 0; i < squareNum * squareNum; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);            
    }
  }
  else {
    alert("Define a number between 1 and 100")
    container.removeChild(grid);
  }
}

// changes color of moused-over cells
function addEventListenerToCells () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "orange";
    });
  });
}

// returns colors of cells to original
resetGrid.addEventListener("click", () =>{
  clearGrid(); 
  createGrid();
  addEventListenerToCells();
})
