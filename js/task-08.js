// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit. +
// Під час відправлення форми сторінка не повинна перезавантажуватися. +
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені. +
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset. +

const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", onButtonSubmitClick);

function onButtonSubmitClick(event) {
  event.preventDefault();
  const eventShortAccess = event.currentTarget;
  if (!eventShortAccess.email.value || !eventShortAccess.password.value) {
    return alert("Fill all fields");
  }
  const dataForm = {
    email: eventShortAccess.email.value,
    password: eventShortAccess.password.value,
  };
  console.log(dataForm);
  setTimeout(() => {
    registerForm.reset();
  }, 500);
}
