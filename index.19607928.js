!function(){var e=document.querySelector(".login-form__phone"),t=document.querySelector(".login-form__password"),o=document.querySelector(".login-form__btn"),r=document.querySelector(".login-form__password-error"),s=document.querySelector(".eye-open");function n(s){15==e.value.length&&t.value.length>=6?(o.disabled=!1,o.classList.add("login-form__btn--success")):(o.disabled=!0,o.classList.remove("login-form__btn--success")),t.value.length<6&&"password"==s.target.name?r.classList.add("login-form__password-error--visible"):r.classList.remove("login-form__password-error--visible")}s.addEventListener("mousedown",(function(){t.setAttribute("type","text")})),s.addEventListener("mouseup",(function(){t.setAttribute("type","password")})),e.addEventListener("input",n),t.addEventListener("input",n)}();
//# sourceMappingURL=index.19607928.js.map