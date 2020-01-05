'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');
const accountMenu = document.querySelector('.section__account-menu');
const menuLabel = document.querySelector('#menu-label');
const menuItems = document.querySelectorAll('.section__account-menu_item');
const searchButton = document.querySelector('.header__account-navigate_search');
const searchInput = document.querySelector('.header__account-navigate_search-input');

/* Burger Arrow Click Arrows */
if (burgerButton) {
  burgerButton.addEventListener('click', function() {
    if (burgerButton.classList.contains('active')) {
      burgerButton.classList.remove('active');
    }
    else { burgerButton.classList.add('active'); }
  });
}
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
/* -------------------------------------------------- */

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
/* --------------------------------------------------- */

/* Burger Button Menu Active */
if (burgerButton) {
  burgerButton.addEventListener('click', function() {
    if (burgerButton.classList.contains('active')) {
      accountMenu.classList.add('active-button');
      menuLabel.classList.remove('active');
      for (let menuItem of menuItems) {
        menuItem.classList.add('visible');
      }
    }
    else {
      accountMenu.classList.remove('active-button'); 
      menuLabel.classList.add('active');
      for (let menuItem of menuItems) {
        menuItem.classList.remove('visible');
      }
    }
  });
}
/* ----------------------------------------------------- */

/* Search Button Input Active */
if (searchButton) {
  searchButton.addEventListener('click', function() {
    if (!searchInput.classList.contains('active')) {
      searchInput.classList.add('active');
    }
    else { searchInput.classList.remove('active'); }
  });
}

/* ----------------------------------------------------- */

/* Menu Label hover */
if (menuLabel) {
  menuLabel.addEventListener('mouseover', function() {
    accountMenu.classList.add('active');
    for (let menuItem of menuItems) {
      menuItem.classList.add('visible');
    }
  });
  accountMenu.addEventListener('mouseleave', function() {
    if (!burgerButton.classList.contains('active')) {
      accountMenu.classList.remove('active');
      for (let menuItem of menuItems) {
        menuItem.classList.remove('visible');
      }
    }
  });
}
/* ----------------------------------------------------- */