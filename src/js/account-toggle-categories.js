//open account partials when clicking on account__categories-dropdown-menu link
const accountCategoryMenu = document.querySelector('.account__categories-dropdown-menu');
const accountCategoriesArray = document.querySelectorAll('[data-account-category]');

accountCategoryMenu &&
  accountCategoryMenu.addEventListener('click', e => {
    e.preventDefault();
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

      document.querySelector('.account__choose-categories-btn').textContent = `Акаунт: ${e.target.textContent}`;
    });
  });

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
