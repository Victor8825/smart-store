const loginFormInputRef = document.querySelector('.login-form__password');
const loginFormInputIcon = document.querySelector('.eye-open');

loginFormInputIcon.addEventListener('mousedown', () => {
  loginFormInputRef.setAttribute('type', 'text');
});

loginFormInputIcon.addEventListener('mouseup', () => {
  loginFormInputRef.setAttribute('type', 'password');
});

