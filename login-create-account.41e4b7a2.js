const e=document.querySelector(".button-search"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal_close-btn"),c=document.body,o=()=>{t.classList.remove("visually-hidden"),c.style.overflow="hidden"},d=()=>{t.classList.add("visually-hidden"),c.style.overflow="auto",e.removeEventListener("click",o,!0),n.removeEventListener("click",d,!0),t.removeEventListener("click",r,!0),document.removeEventListener("keydown",l,!0)},r=e=>{e.target===e.currentTarget&&d()};e.addEventListener("click",o),n.addEventListener("click",d),t.addEventListener("click",r);const l=e=>{e.preventDefault(),"Escape"===e.code&&d()};document.addEventListener("keydown",l);
//# sourceMappingURL=login-create-account.41e4b7a2.js.map
