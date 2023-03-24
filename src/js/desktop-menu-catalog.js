//show/close menu when clicking on desktop header's button
const sectionHeader = document.querySelector('.header');

const deskDropdownMenuArray = Array.from(
  sectionHeader.querySelectorAll(
    '.desk-dropdown-catalog, .desk-dropdown-search, .desk-dropdown-services, .desk-dropdown-account'
  )
);

const deskDropdownBtnArray = Array.from(sectionHeader.querySelectorAll('li[data-desk-dropdown-btn]'));
const deskDropdownChevronIconsArray = Array.from(sectionHeader.querySelectorAll('icon-chevrone-down--only-header'));
const deskDropdownCatalogItemsArray = Array.from(sectionHeader.querySelectorAll('li[data-catalog-item]'));

sectionHeader &&
  sectionHeader.addEventListener('click', e => {
    if (e.target.nodeName !== 'A') {
      e.preventDefault();
    }
    const menuBtnName = e.target.getAttribute('data-desk-dropdown-btn');
    if (menuBtnName) {
      //show active menu
      sectionHeader.querySelector(`.desk-dropdown-${menuBtnName}`).classList.toggle('visually-hidden');
      e.target.classList.toggle('active');

      //hide all inactive menues
      deskDropdownMenuArray.forEach(dropDownMenu => {
        if (!dropDownMenu.classList.contains(`desk-dropdown-${menuBtnName}`)) {
          dropDownMenu.classList.add('visually-hidden');
        }
      });

      //return arrow icons into initial position
      deskDropdownBtnArray.forEach(liEl => {
        if (liEl.dataset.deskDropdownBtn !== menuBtnName) {
          liEl.classList.remove('active');
        }
      });

      return;
    }
    //checking if we click outside the dropdown menues area
    if (!e.target.closest('[data-dropdown-menu]')) {
      deskDropdownMenuArray.forEach(el => el.classList.add('visually-hidden'));

      //delete underline from buttons
      sectionHeader.querySelectorAll('[data-desk-dropdown-btn]').forEach(el => el.classList.remove('active'));
    }
  });

//show-hide submenu within catalog on mouseenter/mouseleave events
const showHeaderCatalogTypes = e => {
  const datasetValue = e.target.dataset.catalogLink;
  console.log(e.target);
  if (datasetValue) {
    typesUl = document.createElement('ul');
    typesUl.classList.add('desk-dropdown-catalog-submenu');
    typesUl.innerHTML = createCategoryTypesHTML(datasetValue);
    if (document.querySelector('[data-dropdown-menu]').children.length > 1) {
      document.querySelector('[data-dropdown-menu]').children[1] = typesUl;
    } else {
      document.querySelector('[data-dropdown-menu]').insertAdjacentElement('beforeend', typesUl);
    }
  } else {
    if (document.querySelector('[data-dropdown-menu]').children.length > 1) {
      document.querySelector('[data-dropdown-menu]').children[1].remove();
    }
  }

  deskDropdownCatalogItemsArray.forEach(liEl => {
    if (liEl === e.target.parentNode) {
      liEl.classList.add('active');
    } else {
      liEl.classList.remove('active');
    }
  });
};

const createCategoryTypesHTML = category => {
  types = [
    { name: 'shoes', id: 1 },
    { name: 't-shirts', id: 2 },
    { name: 'outfit', id: 3 },
    { name: 'blouse', id: 4 },
    { name: 'jackets', id: 5 },
    { name: 'pant/shorts', id: 6 },
    { name: 'fleece', id: 7 },
    { name: 'accessories', id: 8 },
  ];
  return types.map(t => `<li><a class="decorative-link--header" href="#${t.id}">${t.name}</a></li>`).join('');
};

window.addEventListener('load', () => {
  document.querySelectorAll('[data-catalog-link]').forEach(item => {
    item.addEventListener('mouseover', showHeaderCatalogTypes);
    // item.addEventListener('mouseleave', hideHeaderCatalogTypes);
  });
});
