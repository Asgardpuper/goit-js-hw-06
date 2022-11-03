const btnChangeColor = document.querySelector(".change-color");
const colorNameOutputEl = document.querySelector(".color");

btnChangeColor.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = `${randomColor}`;
  colorNameOutputEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
