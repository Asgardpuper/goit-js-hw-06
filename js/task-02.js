const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createEls = (ingredients) => {
  return ingredients.map((el) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = el;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const ingredientsEL = document.querySelector("#ingredients");
ingredientsEL.append(...createEls(ingredients));
