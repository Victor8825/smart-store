const loginFormPhoneInputRef = document.querySelector('.login-form__phone');
const loginFormPasswordInputRef = document.querySelector('.login-form__password');
const loginFormSubmitRef = document.querySelector('.login-form__btn')
const loginFormErrorRef = document.querySelector('.login-form__password-error');
const loginFormInputIcon = document.querySelector('.eye-open');

loginFormInputIcon.addEventListener('mousedown', () => {
  loginFormPasswordInputRef.setAttribute('type', 'text');
});

loginFormInputIcon.addEventListener('mouseup', () => {
  loginFormPasswordInputRef.setAttribute('type', 'password');
});


function loginFormCheckInput(e) {
  if (loginFormPhoneInputRef.value.length == 15 && loginFormPasswordInputRef.value.length >= 6) {
    // enable submit button
    loginFormSubmitRef.disabled = false;
    loginFormSubmitRef.classList.add('login-form__btn--success');
  } else {
    //disable submit button
    loginFormSubmitRef.disabled = true;
    loginFormSubmitRef.classList.remove('login-form__btn--success');
  }
  if (loginFormPasswordInputRef.value.length < 6 && e.target.name == "password") {
    loginFormErrorRef.classList.add('login-form__password-error--visible')
  } else {
    loginFormErrorRef.classList.remove('login-form__password-error--visible')
  }
}

loginFormPhoneInputRef.addEventListener('input', loginFormCheckInput);
loginFormPasswordInputRef.addEventListener('input', loginFormCheckInput)
