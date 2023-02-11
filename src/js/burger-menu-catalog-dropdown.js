const sectionBurger = document.querySelector('.burger');

if (sectionBurger) {
  const subMenuArrows = document.querySelectorAll('.icon-chevrone--catalog');
  if (subMenuArrows.length > 0) {
    subMenuArrows.forEach(subMenuArrow => {
      subMenuArrow.addEventListener('click', () => {
        subMenuArrow
          .closest('.burger-sub-menu__item')
          .classList.toggle('active');
      });
    });
  }

  const menuArrows = document.querySelectorAll('[data-burger-icon-chevrone]');
  menuArrows.forEach(menuArrow => {
    menuArrow.addEventListener('click', e => {
      console.log(e.target.previousElementSibling.textContent);
      switch (e.target.previousElementSibling.textContent) {
        case 'Каталог':
          document.querySelector('.burger-sub-menu--catalog ').style.display =
            'block';
          break;

        case 'Сервіси':
          document.querySelector('.burger-sub-menu--services ').style.display =
            'block';
          break;

        case 'Пошук':
          document.querySelector('.burger-sub-menu--search ').style.display =
            'block';
          break;
      }
    });
  });
}
