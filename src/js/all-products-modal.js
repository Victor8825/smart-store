// const openModalBtn = document.querySelector('.filters-dropdown-btn');
// const modalWindowOverlay = document.querySelector(
//   '.all-products-modal-overlay'
// );

const openFiltersBtnRef = document.querySelector('.filters-dropdown-btn');
const closeModalBtnRef = document.querySelector(
  '.all-products-modal__close-btn'
);
const filtersMenuRef = document.querySelector('.filters-thumb');

const onEscClick = event => {
  if (event.code === 'Escape') {
    event.preventDefault();
    closeFiltersMenu();
  }
};

const openFiltersMenu = () => {
  filtersMenuRef.classList.add('active');
  document.addEventListener('keydown', onEscClick);
  closeModalBtnRef &&
    closeModalBtnRef.addEventListener('click', closeFiltersMenu);
  document.body.classList.add('overflow-hidden');
};

const closeFiltersMenu = () => {
  filtersMenuRef.classList.remove('active');
  document.removeEventListener('keydown', onEscClick);
  closeModalBtnRef &&
    closeModalBtnRef.removeEventListener('click', closeFiltersMenu);
  document.body.classList.remove('overflow-hidden');
};

// const removeAllEventListeners = () => {
//   openFiltersBtnRef &&
//     openFiltersBtnRef.removeEventListener('click', openFiltersMenu);

// };

// const closeFiltersMenu = () => {
//   closeModalBtnRef &&
//     closeModalBtnRef.addEventListener('click', removeClassActive);
//   removeAllEventListeners();
// };

window.addEventListener('load', () => {
  openFiltersBtnRef &&
    openFiltersBtnRef.addEventListener('click', openFiltersMenu);
});

// closeModalBtnRef &&
//   closeFiltersMenu.addEventListener('click', () => {
//     filtersMenuRef.classList.remove('.active');
//   });
// openFiltersBtnRef &&
//   openFiltersBtnRef.addEventListener('click', openFiltersBtnRef);
//   document.addEventListener('keydown', onEscClick);

//   });

// const body = document.body;

// const showModalWindow = () => {
//   modalWindowOverlay.classList.remove('visually-hidden');
//   body.style.overflow = 'hidden';
//   document.addEventListener('keydown', onEscClick);
//   closeModalBtn && closeModalBtn.addEventListener('click', hideModalWindow);
// };
//Remove all the eventListeners
// const removeAllEventListeners = () => {
//   openModalBtn && openModalBtn.removeEventListener('click', showModalWindow);
//   closeModalBtn && closeModalBtn.removeEventListener('click', hideModalWindow);
//   modalWindowOverlay.removeEventListener('click', hideModalWindowOnBlur, true);
//   document.removeEventListener('keydown', onEscClick);
// };
//Hide modal
// const hideModalWindow = () => {
//   modalWindowOverlay && modalWindowOverlay.classList.add('visually-hidden');
//   body.style.overflow = 'auto';
//   removeAllEventListeners();
// };

//Hide modal when clicking on overlay
// const hideModalWindowOnBlur = e => {
//   if (e.target === e.currentTarget) {
//     hideModalWindow();
//   }
// };
// openModalBtn && openModalBtn.addEventListener('click', showModalWindow);

//Hide modal when clicking on "Esc"
