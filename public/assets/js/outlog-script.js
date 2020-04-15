'use strict'

const submitButton = document.querySelector('.section__recovery-form_submit');
const inputEmail = document.querySelector('.section__recovery-form_input');
const recoveryForm = document.querySelector('.section__recovery-form');

let correctEmail = function (emailInput) {
  let value = emailInput.value;
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(value)) { return true; }
  else { return false; }
}

if (recoveryForm) {
  recoveryForm.addEventListener('submit', function(event) {
    if (!correctEmail(inputEmail)) {
      inputEmail.style.borderColor = '#FF0000';
      event.preventDefault();
    } else {
      inputEmail.style.borderColor = 'rgba(0, 0, 0, 0.4)';
      // inputEmail.value = '';
    }
  });
}

