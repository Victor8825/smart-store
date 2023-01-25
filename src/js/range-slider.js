import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1];

var slider = document.getElementById('range-slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 9999],
    connect: true,
    margin: 100,
    step: 1,
    range: {
      min: 0,
      max: 9999,
    },
  });

  //change inputs value when gradding
  slider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  //change slider's handlers position when input
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
