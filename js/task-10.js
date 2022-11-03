const inputNumberEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

createEl.addEventListener("click", () => {
  const amountEl = Number(inputNumberEl.value);
  createBoxes(amountEl);
});

destroyEl.addEventListener("click", () => {
  const amountEl = Number(inputNumberEl.value);
  destroyBoxes(amountEl);
});

function createBoxes(amount) {
  boxEl.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    const newColor = getRandomHexColor();
    newEl.style.backgroundColor = newColor;
    newEl.style.width = `${30 + i * 10}px`;
    newEl.style.height = `${30 + i * 10}px`;
    boxEl.appendChild(newEl);
  }
}

function destroyBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxEl.removeChild(boxEl.lastChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
