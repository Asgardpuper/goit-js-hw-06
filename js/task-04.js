const btnDecrement = document.querySelector("[data-action=decrement]");
const btnIncrement = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");
let counterValue = 0;
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
