const sectionBurger = document.querySelector('.burger');
const openBurgerMenuBtn = document.querySelector('.button-burger');
const closeBurgerMenuBtn = document.querySelector('.burger-header__close-btn');
const burgerMenuRef = document.querySelector('.burger');
const burgerBackBtnRef = document.querySelector('.burger__go-back-btn');

const burgerBackBtnHandler = () => {
  const el = document.querySelectorAll('.burger-sub-menu.active')[0];
  // el.addEventListener('transitionend', (e) => {
  //   e.target.classList.remove('active');
  //   document.querySelector('.burger-sub-menu--main').classList.add('active');
  // }, { once: true });
  // el.classList.add('activating');
  el.classList.remove('active');
  document.querySelector('.burger-sub-menu--main').classList.add('active');

  burgerBackBtnRef.classList.add('visually-hidden');
};

const burgerMenuAnimationEndHandler = e => {
  e.target.classList.remove('activating');
  e.target.classList.add('active');
  e.target.addEventListener('transitionend', () => {
    burgerBackBtnRef.classList.remove('visually-hidden');
  });
};

window.addEventListener('load', () => {
  //dropdown menu open close within catalog list
  if (sectionBurger) {
    openBurgerMenuBtn.addEventListener('click', () => {
      burgerMenuRef.classList.toggle('active');
      document.body.classList.toggle('show');
      document.querySelector('.burger-sub-menu--main').classList.add('active');
    });

    closeBurgerMenuBtn &&
      closeBurgerMenuBtn.addEventListener('click', () => {
        burgerMenuRef.classList.toggle('active');
        document.body.classList.toggle('show');
        burgerBackBtnHandler();
        document.querySelector('.burger-sub-menu--main').classList.remove('active');
      });

    //open-close embedded menues inside burger-menu div
    const menuArrows = document.querySelectorAll('[data-burger-icon-chevrone]');
    menuArrows.forEach(menuArrow => {
      menuArrow.addEventListener('click', e => {
        const el = document.querySelector(`.burger-sub-menu--${e.target.dataset['submenu']}`);
        el.addEventListener('animationend', burgerMenuAnimationEndHandler);
        el.classList.add('activating');

        document.querySelector('.burger-sub-menu--main').classList.remove('active');
      });
    });

    // category types open links
    const catalogSubMenuArrows = document.querySelectorAll('.icon-chevrone--catalog');
    if (catalogSubMenuArrows.length > 0) {
      catalogSubMenuArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
          const currentItem = arrow.closest('.burger-menu__item');
          document.querySelectorAll('.burger-sub-menu-category__item').forEach(el => {
            if (el != currentItem) el.classList.remove('active');
          });
          currentItem.classList.toggle('active');
        });
      });
    }

    // burger back btn handler
    burgerBackBtnRef.addEventListener('click', burgerBackBtnHandler);
  }
});
