//constants

const GRID_SIZE = 16;

//

// to create grid
const mainContainer = document.querySelector(".mainContainer");

const gridRow = document.createElement("div");
gridRow.classList.add("gridRow");
gridRow.style.display = "flex";

const singleBlock = document.createElement("div");
singleBlock.classList.add("singleBlock");

for (let i = 0; i < GRID_SIZE; ++i) {
  gridRow.appendChild(singleBlock.cloneNode(true));
}

for (let i = 0; i < GRID_SIZE; ++i) {
  mainContainer.appendChild(gridRow.cloneNode(true));
}

const selectPixes = document.querySelectorAll(".mainContainer .singleBlock");

selectPixes.forEach((selectPix) =>
  selectPix.addEventListener("mouseover", () => {
    selectPix.style.backgroundColor = "white";
  })
);
