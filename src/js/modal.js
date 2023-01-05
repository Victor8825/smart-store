const openModalBtn = document.querySelector('.button-search');
const modalWindowOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.modal_close-btn');
const body = document.body;

const showModalWindow = () => {
  modalWindowOverlay.classList.remove('visually-hidden');
  body.style.overflow = 'hidden';
};
//Remove all the evemtListeners
const removeAllEventListeners = () => {
  openModalBtn.removeEventListener('click', showModalWindow, true);
  closeModalBtn.removeEventListener('click', hideModalWindow, true);
  modalWindowOverlay.removeEventListener('click', hideModalWindowOnBlur, true);
  document.removeEventListener('keydown', onEscClick, true);
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

openModalBtn.addEventListener('click', showModalWindow);
closeModalBtn.addEventListener('click', hideModalWindow);
modalWindowOverlay.addEventListener('click', hideModalWindowOnBlur);

//Hide modal when clicking on "Esc"
const onEscClick = event => {
  event.preventDefault();

  if (event.code !== 'Escape') {
    return;
  }

  hideModalWindow();
};

document.addEventListener('keydown', onEscClick);
