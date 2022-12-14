const form = document.querySelector('.main_form');
const formBtn = document.querySelector('.contact-form_submit-btn');
const btnText = document.querySelector('.submit-button_text');
const btnImg = document.querySelector('.submit-btn_img');

form.onsubmit = (e) => {
  e.preventDefault();
  btnImg.classList.add('sendedMessage');
  setTimeout(() => {
    btnText.textContent = 'Ваше сообщение отправлено!';
    btnImg.classList.add('non-display');
    formBtn.classList.add('form-done');
  }, '700');
};
