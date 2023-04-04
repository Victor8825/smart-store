//timer
const payflowSectionRef = document.querySelector('.payflow');

if (payflowSectionRef) {
  let minute = 10;
  let second = 0;
  const countDownTimer = setInterval(() => {
    second--;
    if (second < 0) {
      second = 59;
      minute--;
    }
    payflowSectionRef.querySelector('.timer-data').innerHTML = `${minute < 10 ? '0' + minute : minute}:${
      second < 10 ? '0' + second : second
    }`;
    if (minute === 0 && second === 0) clearInterval(countDownTimer);
  }, 1000);
}

//hide-show order details
// console.log(payflowSectionRef.querySelector('.payflow-order__open-close svg'));
payflowSectionRef &&
  payflowSectionRef.querySelector('.payflow-order__open-close').addEventListener('click', () => {
    document.querySelector('.payflow-order-wrap').classList.toggle('active');
  });

//hide-show dropdown menu when clicking on payflow-credentials__delivery-address label
const payflowCredentialsDeliveryAddressRef = document.querySelector('.payflow-credentials__delivery-address');

payflowCredentialsDeliveryAddressRef &&
  payflowCredentialsDeliveryAddressRef.addEventListener('click', e => {
    const isDropDownBtn = e.target.matches('[data-dropdown-btn]');
    const currentDropdown = isDropDownBtn ? e.target.parentNode : null;

    document.querySelectorAll('.payflow-credentials__dropdown-list').forEach(el => {
      if (el.parentNode !== currentDropdown) {
        el.classList.add('visually-hidden');
        el.parentNode.classList.remove('active');
      }
    });

    if (currentDropdown) {
      currentDropdown.classList.toggle('active');
      Array.from(currentDropdown.children).forEach(el => {
        if (el.classList.contains('payflow-credentials__dropdown-list')) {
          el.classList.toggle('visually-hidden');
        }
      });
    }
  });

//hide-show delivery method when clicking radio button
const radioButtonArrayRef = document.querySelectorAll('input[type=radio]');
const formDeliveryAddressRef = document.querySelector('.payflow-credentials__delivery-address');
const formSelfDropAddressRef = document.querySelector('.payflow-credentials__self-drop-address');

const radioDeliveryClickHandler = () => {
  const fungibleHeaderRef = document.querySelector('.payflow__fungible-header');
  Array.from(radioButtonArrayRef).forEach(el => {
    if (el.checked) {
      switch (el.value) {
        case 'post':
          formDeliveryAddressRef.classList.remove('visually-hidden');
          formSelfDropAddressRef.classList.add('visually-hidden');
          // console.log(fungibleHeaderRef);
          fungibleHeaderRef.textContent = 'Адреса доставки';
          break;

        case 'self-drop':
          formDeliveryAddressRef.classList.add('visually-hidden');
          formSelfDropAddressRef.classList.remove('visually-hidden');
          fungibleHeaderRef.textContent = 'Адреса самовивозу';
          break;

        default:
      }
    }
  });
};

radioButtonArrayRef &&
  Array.from(radioButtonArrayRef).forEach(el => {
    el.addEventListener('click', radioDeliveryClickHandler);
    if (el.checked && el.value === 'post') {
      formDeliveryAddressRef.classList.remove('visually-hidden');
      formDeliveryAddressRef.insertAdjacentHTML(
        'beforebegin',
        '<h4 class="payflow__fungible-header">Адреса доставки</h4>'
      );
    }
    if (el.checked && el.value === 'self-drop') {
      formSelfDropAddressRef.classList.remove('visually-hidden');
      formSelfDropAddressRef.insertAdjacentHTML('beforebegin', '<h4>Адреса самовивозу</h4>');
    }
  });
