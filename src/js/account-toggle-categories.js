//open account partials when clicking on account__categories-dropdown-menu link
const accountCategoryButtonsArray = document.querySelectorAll('li[data-account-category-button');
const accountCategoryDropdownMenu = document.querySelector('.account__categories-dropdown-menu');
// console.log(accountPartialsButtonsArray);
// accountPartialsButtonsArray.forEach(i => console.log(i.getAttribute('data-account-partial-button')));
accountCategoryDropdownMenu.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
});
