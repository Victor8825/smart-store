const loginFormInputRef = document.querySelector('.login-form__password');
const loginFormInputIcon = document.querySelector('.eye-open');

loginFormInputIcon.addEventListener('click', () => {
  const type =
    loginFormInputRef.getAttribute('type') === 'password' ? 'text' : 'password';
  loginFormInputRef.setAttribute('type', type);
});
