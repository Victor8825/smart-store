//delete decorative-link--header class when screen wide >== 768px;
const linkRef = document.querySelector('.categories-dropdown-menu__link');
const linkRefArray = document.querySelectorAll(
  '.categories-dropdown-menu__link'
);
// console.log(linkRefArray);

const removeClassWhenDesktop = () => {
  // console.log(window.innerWidth);
  if (window.innerWidth >= 768) {
    linkRefArray.forEach(link =>
      link.classList.remove('decorative-link--header')
    );
  }

  if (linkRef.classList.contains('decorative-link--header') === true) {
    linkRefArray.forEach(link => link.classList.add('decorative-link--header'));
  }
  console.log(window.innerWidth);
};

window.onresize = removeClassWhenDesktop;
