!function(){var e=document.querySelector(".login-form__phone"),s=document.querySelector(".login-form__password"),t=document.querySelector(".login-form__btn"),r=document.querySelector(".login-form__password-error"),o=document.querySelector(".eye-open");function n(o){15==e.value.length&&s.value.length>=6?(t.disabled=!1,t.classList.add("login-form__btn--success")):(t.disabled=!0,t.classList.remove("login-form__btn--success")),15==e.value.length?(e.classList.add("form-input--success"),e.classList.remove("form-input--failure")):(e.classList.remove("form-input--failure"),e.classList.remove("form-input--success")),s.value.length<6&&"password"==o.target.name?r.classList.add("login-form__password-error--visible"):r.classList.remove("login-form__password-error--visible")}o.addEventListener("mousedown",(function(){s.setAttribute("type","text")})),o.addEventListener("mouseup",(function(){s.setAttribute("type","password")})),e.addEventListener("input",n),e.addEventListener("blur",(function(){e.value.length>4&&e.value.length<15&&e.classList.add("form-input--failure"),"380("!=e.value&&""!=e.value||e.classList.remove("form-input--failure")})),s.addEventListener("input",n)}();
//# sourceMappingURL=login-create-account.f913f0cb.js.map
