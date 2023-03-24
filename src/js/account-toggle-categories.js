//open account partials when clicking on account__categories-dropdown-menu link
const accountCategoryMenu = document.querySelector('.account__categories-dropdown-menu');
const accountCategoriesArray = document.querySelectorAll('[data-account-category]');
const accountSectionRef = document.querySelector('.account');
const servicesSectionRef = document.querySelector('.services');

accountCategoryMenu &&
  accountCategoryMenu.addEventListener('click', e => {
    console.log(e.target.nodeName);

    if (e.target.nodeName !== 'A') {
      e.preventDefault();
    }
    // e.preventDefault();
    const currentCategoryButton = e.target;

    document.querySelectorAll('[data-account-category-button]').forEach(categoryButton => {
      if (categoryButton !== currentCategoryButton) categoryButton.classList.remove('active');
      else {
        categoryButton.classList.add('active');
      }

      accountCategoriesArray.forEach(category => {
        if (category.dataset.accountCategory !== currentCategoryButton.dataset.accountCategoryButton) {
          category.classList.add('visually-hidden');
        } else {
          category.classList.remove('visually-hidden');
        }
      });

      if (accountSectionRef) {
        const btnRef = document.querySelector('.account__choose-categories-btn > span');
        const textToInsert = `Акаунт: ${e.target.textContent}`;
        changeBtnTextContent(btnRef, textToInsert);
      }

      if (servicesSectionRef) {
        const btnRef = document.querySelector('.account__choose-categories-btn > span');
        const textToInsert = `Сервіси: ${e.target.textContent}`;
        changeBtnTextContent(btnRef, textToInsert);
      }
    });
  });

//change textContent of the button
function changeBtnTextContent(btnRef, textToInsert) {
  btnRef.textContent = `${textToInsert}`;
}

//create new address
document.querySelector('.account__address-empty-card') &&
  document.querySelector('.account__address-empty-card').addEventListener('click', () => {
    document.querySelector('.account__privacy-settings-form.account__address-form').classList.remove('visually-hidden');
    document.querySelector('[data-account-category="address-form"]').classList.add('visually-hidden');
  });

// console.log(document.querySelector('.account__privacy-settings-form-btn-wrap'));
// document.querySelector('.account__privacy-settings-form-btn-wrap').addEventListener('click', (e) => {
//   console.log(e.target);
//   document.querySelector('.account__privacy-settings-form.account__address-form').classList.add('visually-hidden');
//   document.querySelector('[data-account-category="address-form"]').classList.remove('visually-hidden');
//   console.log(document.querySelector('div.account__privacy-settings-form-btn-wrap button'));
// });
