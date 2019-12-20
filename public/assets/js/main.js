'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');

/* Burger Arrow Click */
burgerButton.addEventListener('click', function() {
  if (burgerButton.classList.contains('active')) {
    burgerButton.classList.remove('active');
  }
  else { burgerButton.classList.add('active'); }
});
/* ------------------------------------------------- */

/* Marker Buttons Clicking */
for (let i = 0; i < markerButtons.length; i++) {
  markerButtons[i].addEventListener('click', function() {
    if (!markerButtons[i].classList.contains('active')) {
      markerButtons[i].classList.add('active');
    }
    for (let j = i - 1; j >= 0; j--) {
          if (markerButtons[j].classList.contains('active')) {
        markerButtons[j].classList.remove('active');
      }
    }
    for (let k = i + 1; k < markerButtons.length; k++) {
          if (markerButtons[k].classList.contains('active')) {
        markerButtons[k].classList.remove('active');
      }
    }
  });
}
/* -------------------------------------------------------- */