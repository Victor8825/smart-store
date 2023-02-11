const sectionBurger = document.querySelector('.burger');


window.addEventListener('load', () => {
  //dropdown menu open close within catalog list
  if (sectionBurger) {
    const catalogSubMenuArrows = document.querySelectorAll('.icon-chevrone--catalog');
    if (catalogSubMenuArrows.length > 0) {
      catalogSubMenuArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
          const currentItem = arrow.closest('.burger-menu__item');
          document.querySelectorAll('.burger-sub-menu-category__item').forEach(
            el => {if (el != currentItem) el.classList.remove('active')});
          currentItem.classList.toggle('active');
        });
      });
    };

    //open-close embedded menues inside burger-menu div
    const menuArrows = document.querySelectorAll('[data-burger-icon-chevrone]');
    menuArrows.forEach(menuArrow => {
      menuArrow.addEventListener('click', e => {
        // console.log(e.target.dataset['submenu']);
        switch (e.target.dataset['submenu']) {
          case 'catalog':
            document.querySelector('.burger-sub-menu--catalog ').classList.add('active');
            break;
          case 'service':
            document.querySelector('.burger-sub-menu--services ').classList.add('active');
            break;
          case 'search':
            document.querySelector('.burger-sub-menu--search ').classList.add('active');
            break;
        }
        document.querySelector('.burger-sub-menu--main').classList.remove('active');
      });
    });

    // burger back btn handler
    document.querySelector('.burger__go-back-btn').addEventListener('click', () => {
      document.querySelectorAll('.burger-sub-menu').forEach(el => el.classList.remove('active'));
      document.querySelector('.burger-sub-menu--main').classList.add('active');
    })
  }
})