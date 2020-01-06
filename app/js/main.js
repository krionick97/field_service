'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');
const accountMenu = document.querySelector('.section__account-menu');
const menuLabel = document.querySelector('#menu-label');
const menuItems = document.querySelectorAll('.section__account-menu_item');
const searchButton = document.querySelector('.header__account-navigate_search');
const searchInput = document.querySelector('.header__account-navigate_search-input');
const searchSubmit = document.querySelector('.header__account-navigate_search-submit');

const popup = document.querySelector('.header__account-navigate_popup');
const popupAccounts = document.querySelector('.header__account-navigate_popup-item:first-child');
const popupAccountsList = document.querySelector('.header__account-navigate_popup-list');
const popupAccountsItems = document.querySelectorAll('.header__account-navigate_popup-subitem');
const profile = document.querySelector('.header__account-navigate_profile');
const popupLogout = document.querySelector('.header__account-navigate_popup-item:nth-child(2)');
const frameBlock = document.querySelector('.section__account_frame-block');


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
  if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active');
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
    if (!searchInput.classList.contains('active') && !searchSubmit.classList.contains('active')) {
      searchInput.classList.add('active');
      searchSubmit.classList.add('active');
    }
    else { 
      searchInput.classList.remove('active');
      searchSubmit.classList.remove('active');
    }
  });
  searchSubmit.addEventListener('click', function(event) {
    if (searchInput.value === '') {
      event.preventDefault();
    }
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

/* Accounts-item hover and list in popup */
if (popup && popupAccounts && popupAccountsList && popupAccountsItems) {
  popupAccounts.addEventListener('mouseover', function() {
    if (!popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.add('visible'); }
  });
  popupAccountsList.addEventListener('mouseleave', function() {
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
  });
  popup.addEventListener('mouseleave', function() {
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
  });
  popupLogout.addEventListener('mouseover', function() {
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
  });
/* ---------------------------------------------------- */

/* Popup Accounts-tem Clicking Select */
for (let i = 0; i < popupAccountsItems.length; i++) {
  if (!popupAccountsItems[i].classList.contains('selected')) popupAccountsItems[0].classList.add('selected');
  popupAccountsItems[i].addEventListener('click', function() {
    if (!popupAccountsItems[i].classList.contains('selected')) popupAccountsItems[i].classList.add('selected');
    for (let j = i - 1; j >= 0; j--) {
      if (popupAccountsItems[j].classList.contains('selected')) popupAccountsItems[j].classList.remove('selected');
    }
    for (let k = i + 1; k < menuItems.length; k++) {
      if (popupAccountsItems[k].classList.contains('selected')) popupAccountsItems[k].classList.remove('selected');
    }
  });
}
/* --------------------------------------------------- */

/* Profile Clicking popup-call */
profile.addEventListener('click', function() {
  if (!popup.classList.contains('visible')) { popup.classList.add('visible'); }
  else { 
    popup.classList.remove('visible'); 
  }
  if (!frameBlock.classList.contains('overframe')) { frameBlock.classList.add('overframe'); }
  else {
    frameBlock.classList.remove('overframe');
  }
});
/* ------------------------------------------------- */

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let controlItem = target.closest('.header__account-navigate_popup');
  
  if (target === profile) { return; }
  if (controlItem) { return; }
  else {
    if (popup.classList.contains('visible')) popup.classList.remove('visible');
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
  }
});
/* -------------------------------------------------------- */
}
