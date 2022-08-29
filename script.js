const grid = document.querySelector(".grid")

function makeGrid(size) {

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

makeGrid(16);