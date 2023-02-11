const openBurgerMenuBtn = document.querySelector('.button-burger');
const closeBurgerMenuBtn = document.querySelector('.burger-header__close-btn');
const burgerMenuRef = document.querySelector('.burger');

openBurgerMenuBtn.addEventListener('click', () => {
  burgerMenuRef.classList.toggle('active');
  document.body.classList.toggle('show');
});

closeBurgerMenuBtn &&
  closeBurgerMenuBtn.addEventListener('click', () => {
    burgerMenuRef.classList.toggle('active');
    document.body.classList.toggle('show');
  });
