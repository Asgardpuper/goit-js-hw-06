//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

const displayTextAndAmaount = (category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
};

categoriesEl.forEach(displayTextAndAmaount);
