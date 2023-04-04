const text = document.querySelector('.landing-circle__text p');

const infiniteCirclingTextEl = () => {
  text.innerHTML = text.innerText
    .split('')
    .map((elem, i) => `<span style="transform:rotate(${i * 8.3}deg)">${elem}</span>`)
    .join('');
};

text && infiniteCirclingTextEl();
