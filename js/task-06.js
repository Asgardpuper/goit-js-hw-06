const inputEl = document.querySelector("#validation-input");
const onBlurInput = (event) => {
  const isQuantityMatch =
    event.currentTarget.value.length === Number(inputEl.dataset.length);
  inputEl.classList.add(isQuantityMatch ? "valid" : "invalid");
  inputEl.classList.remove(!isQuantityMatch ? "valid" : "invalid");
};
inputEl.addEventListener("blur", onBlurInput);
