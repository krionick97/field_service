'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');

burgerButton.addEventListener('click', function() {
  if (burgerButton.classList.contains('header__account-navigate_burger-active')) {
    burgerButton.classList.remove('header__account-navigate_burger-active');
  }
  else { burgerButton.classList.add('header__account-navigate_burger-active'); }
});