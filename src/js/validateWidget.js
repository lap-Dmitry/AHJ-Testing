import pickPaymentSystem from './pickPaymentSystem';
import validNumber from './validNumber';

export default class ValidateWidget {
  constructor(parent) {
    this.parent = parent;
    this.input = null;
    this.payImages = null;
  }

  init() {
    this.parent.innerHTML = `
      <form id='validate_form'>
        <div class='card-box'>
        <div class='image-card visa' data-id='visa'></div>
        <div class='image-card mir' data-id='mir'></div>          
        <div class='image-card mastercard' data-id='mastercard'></div>
        <div class='image-card americanexpress' data-id='american-express'></div>
        <div class='image-card discover' data-id='discover'></div>
        <div class='image-card jcb' data-id='jcb'></div>
        <div class='image-card dinersclub' data-id='diners-club'></div>
        </div>
        <div class='input-box'>
          <input id='validate_input' type='text'>
          <button id='validate_button'>Click to Validate</button>
        </div>
     </form>`;
    this.payImages = Array.from(document.getElementsByClassName('image-card'));
    this.input = document.getElementById('validate_input');
    const form = document.getElementById('validate_form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validateCard(this.input.value);
    });
    this.input.addEventListener('keypress', () => {
      if (this.input.classList.contains('valid') || this.input.classList.contains('invalid')) {
        this.input.className = '';
      }
      this.payImagesOff();
      const imageCard = document.querySelector(`[data-id="${pickPaymentSystem(this.input.value)}"]`);
      if (imageCard) {
        imageCard.style.opacity = 1;
      }
    });
  }

  validateCard(digits) {
    if (digits !== '' && validNumber(digits)) {
      this.input.className = 'valid';
    } else {
      this.input.className = 'invalid';
    }
  }

  payImagesOff() {
    this.payImages.forEach((el) => {
      el.style.opacity = 0.5;
    });
  }
}
