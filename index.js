const container = document.getElementById("grid-container");
const pixelRange = document.getElementById("pixel-range")
const rangeLabel = document.getElementById("pixel-range-label")
let gridNum = pixelRange.value;

function fillCell(e) {
   e.target.style.backgroundColor = "red";
}

pixelRange.addEventListener("change", changeRange, false);

function changeRange(e) {
   gridNum = e.target.value;
   rangeLabel.textContent = `Pixel range: ${gridNum}`;
   buildGrid();
}

function clearGrid() {
   while (container.firstChild) {
      container.removeChild(container.lastChild);
   }
}

function createCell() {
   let cell = document.createElement("div");
   cell.classList.add("grid-item");
   cell.addEventListener("mouseover", fillCell, false);

   return cell
}

function fillGrid() {
   for (let i = 0; i < gridNum * gridNum; i++) {
      container.appendChild(createCell());
   }
}

function buildGrid() {
   clearGrid();
   container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
   fillGrid();
};

buildGrid();







