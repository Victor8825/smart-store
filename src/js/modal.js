const openModalBtn = document.querySelector('.button-search');
const modalWindowOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.modal_close-btn');
const body = document.body;

const showModalWindow = () => {
  if (modalWindowOverlay) {
    modalWindowOverlay.classList.remove('visually-hidden');
    body.style.overflow = 'hidden';
    closeModalBtn.addEventListener('click', hideModalWindow);
    modalWindowOverlay.addEventListener('click', hideModalWindowOnBlur);
    document.addEventListener('keydown', onEscClick);
  }
};
//Remove all the eventListeners
const removeAllEventListeners = () => {
  openModalBtn.removeEventListener('click', showModalWindow);
  closeModalBtn.removeEventListener('click', hideModalWindow);
  modalWindowOverlay.removeEventListener('click', hideModalWindowOnBlur);
  document.removeEventListener('keydown', onEscClick);
};

//Hide modal
const hideModalWindow = () => {
  modalWindowOverlay.classList.add('visually-hidden');
  body.style.overflow = 'auto';
  removeAllEventListeners();
};

//Hide modal when clicking on overlay
const hideModalWindowOnBlur = e => {
  if (e.target === e.currentTarget) {
    hideModalWindow();
  }
};

openModalBtn && openModalBtn.addEventListener('click', showModalWindow);

//Hide modal when clicking on "Esc"
const onEscClick = event => {
  if (event.code === 'Escape') {
    event.preventDefault();
    hideModalWindow();
  }
};
