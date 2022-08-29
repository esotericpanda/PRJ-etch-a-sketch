const grid = document.querySelector(".grid")

const btn= document.querySelector("#size-changer");

function makeGrid(size) {
    grid.rem

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            let cell = makeACell();
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function makeACell() {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener('mouseover',(e)=>{
        e.target.style.backgroundColor='black';
    });
    return cell;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

makeGrid(16);

btn.addEventListener('click',()=>{
    let size = prompt("please enter new size:");
    if(0<size && size <100){
        clearGrid();
        makeGrid(size);
    }
})