const inputEL = document.querySelector("#font-size-control");
const scaleText = document.querySelector("#text");

inputEL.addEventListener("input", (event) => {
  scaleText.style.fontSize = `${event.currentTarget.value}px`;
});
