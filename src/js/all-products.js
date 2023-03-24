//open-close dropdown-menu
const sectionAllProductsRef = document.querySelector('.all-products');
const sectionAccountRef = document.querySelector('.account');
const itemDetailsRef = document.getElementById('item-details');
const sectionServices = document.querySelector('.services');

if (sectionAllProductsRef || itemDetailsRef || sectionAccountRef || sectionServices) {
  document.addEventListener('click', e => {
    const isDropDownBtn = e.target.matches('[data-dropdown-btn]');

    const currentDropdown = isDropDownBtn ? e.target.closest('[data-dropdown]') : null;

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown !== currentDropdown) dropdown.classList.remove('active');
    });

    document.querySelectorAll('[data-dropdown-btn].dropdown-btn--active').forEach(dropdown_btn => {
      if (dropdown_btn !== e.target) dropdown_btn.classList.remove('dropdown-btn--active');
    });

    document.querySelectorAll('[data-dropdown-btn].dropdown-btn--product-active').forEach(dropdown_btn => {
      if (dropdown_btn !== e.target) dropdown_btn.classList.remove('dropdown-btn--product-active'); //!
    });

    if (currentDropdown) {
      currentDropdown.classList.toggle('active');
      e.target.classList.toggle('dropdown-btn--active');
    }

    if (currentDropdown && currentDropdown.parentNode === itemDetailsRef) {
      //!
      e.target.classList.toggle('dropdown-btn--product-active');
    }
  });
}

// if (currentDropdown && currentDropdown.parentNode === itemDetailsRef) {

//   e.target.classList.toggle('dropdown-btn--product-active');
//   console.log(e.target);
//   e.target.classList.toggle('dropdown-btn--active');
// }
// console.log(e.target.matches('[data-account-category-button]');
// if (e.target.matches('[data-account-category-button]')) {
//   e.target.closest('[data-dropdown]').classList.toggle('dropdown-btn--active');
// }
// });
// }
