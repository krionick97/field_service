'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');
const accountMenu = document.querySelector('.section__account-menu');
const menuLabel = document.querySelector('#menu-label');
const menuItems = document.querySelectorAll('.section__account-menu_item');

/* Burger Arrow Click Arrows */
burgerButton.addEventListener('click', function() {
  if (burgerButton.classList.contains('active')) {
    burgerButton.classList.remove('active');
  }
  else { burgerButton.classList.add('active'); }
});
/* ------------------------------------------------- */

/* Marker Buttons Clicking Active */
for (let i = 0; i < markerButtons.length; i++) {
  markerButtons[i].addEventListener('click', function() {
    if (!markerButtons[i].classList.contains('active')) markerButtons[i].classList.add('active');
    for (let j = i - 1; j >= 0; j--) {
      if (markerButtons[j].classList.contains('active')) markerButtons[j].classList.remove('active');
    }
    for (let k = i + 1; k < markerButtons.length; k++) {
      if (markerButtons[k].classList.contains('active')) markerButtons[k].classList.remove('active');
    }
  });
}
/* -------------------------------------------------------- */

/* Menu Item Button Clicking Active */
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    if (!menuItems[i].classList.contains('active')) menuItems[i].classList.add('active');
    for (let j = i - 1; j >=0; j--) {
      if (menuItems[j].classList.contains('active')) menuItems[j].classList.remove('active');
    }
    for (let k = i + 1; k < menuItems.length; k++) {
      if (menuItems[k].classList.contains('active')) menuItems[k].classList.remove('active')
    }
  });
}
/* ---------------------------------------------------------- */

/* Burger Button Menu Active */
burgerButton.addEventListener('click', function() {
  if (burgerButton.classList.contains('active')) { 
    accountMenu.classList.add('active');
    menuLabel.classList.remove('active');
  }
  else { 
    accountMenu.classList.remove('active'); 
    menuLabel.classList.add('active');
  }
});
/* ---------------------------------------------------------- */

/* Menu Label hover */
menuLabel.addEventListener('mouseover', function() {
  accountMenu.classList.add('active');
});
accountMenu.addEventListener('mouseleave', function() {
  if (!burgerButton.classList.contains('active')) {
    accountMenu.classList.remove('active'); 
  }
});
/* ---------------------------------------------------------- */