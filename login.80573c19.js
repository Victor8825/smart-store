const e=document.querySelector(".login-form__phone"),s=document.querySelector(".login-form__password"),o=document.querySelector(".login-form__btn"),r=document.querySelector(".login-form__password-error"),t=document.querySelector(".eye-open");function n(t){15==e.value.length&&s.value.length>=6?(o.disabled=!1,o.classList.add("login-form__btn--success")):(o.disabled=!0,o.classList.remove("login-form__btn--success")),15==e.value.length?(e.classList.add("login-form__phone--success"),e.classList.remove("login-form__phone--failure")):(e.classList.remove("login-form__phone--failure"),e.classList.remove("login-form__phone--success")),s.value.length<6&&"password"==t.target.name?r.classList.add("login-form__password-error--visible"):r.classList.remove("login-form__password-error--visible")}t.addEventListener("mousedown",(()=>{s.setAttribute("type","text")})),t.addEventListener("mouseup",(()=>{s.setAttribute("type","password")})),e.addEventListener("input",n),e.addEventListener("blur",(function(){e.value.length>4&&e.value.length<15&&e.classList.add("login-form__phone--failure"),"380("!=e.value&&""!=e.value||e.classList.remove("login-form__phone--failure")})),s.addEventListener("input",n);
//# sourceMappingURL=login.80573c19.js.map