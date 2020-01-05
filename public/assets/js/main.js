'use strict'

const mode = document.querySelector('.callList__controls-mode');
const setting = document.querySelector('.callList__controls-setting');
const settingList = document.querySelector('.callList__controls-setting_list');
const settingItems = document.querySelectorAll('.callList__controls-setting_item');
const modeList = document.querySelector('.callList__controls-mode_list');
const modeItems = document.querySelectorAll('.callList__controls-mode_item');
const modeText = document.querySelector('.callList__controls-mode_text');
const period = document.querySelector('.callList__controls-period');
const periodList = document.querySelector('.callList__controls-period_list');
const periodItems = document.querySelectorAll('.callList__controls-period_item');
const periodText = document.querySelector('.callList__controls-period_text > span');
const search_call = document.querySelector('.callList__controls-search');
const searchInput_call = document.querySelector('.callList__controls-search_input');
const controlsItems = document.querySelectorAll('.callList__controls-item');
const popups = document.querySelectorAll('.callList__controls-popup');
const tags = document.querySelectorAll('.callList__tags-block_tag');

/* Mode clicking select */
if (mode && setting && settingList 
  && modeList && modeItems && modeText && period && periodList && periodItems 
  && periodText && search_call && searchInput_call && controlsItems && popups && tags) {

    mode.addEventListener('click', function() {
      if (!mode.classList.contains('open')) {
        mode.classList.add('open');
        modeList.classList.add('visible');
    
      } else {
        mode.classList.remove('open');
        modeList.classList.remove('visible');
      }
    });
    
    for (let i = 0; i < modeItems.length; i++) {
      modeItems[i].addEventListener('click', function() {
        if (!modeItems[i].classList.contains('selected')) { modeItems[i].classList.add('selected'); }
        for (let j = i - 1; j >=0; j--) {
          if (modeItems[j].classList.contains('selected')) { modeItems[j].classList.remove('selected'); }
        }
        for (let k = i + 1; k < modeItems.length; k++) {
          if (modeItems[k].classList.contains('selected')) { modeItems[k].classList.remove('selected'); }
        }
        let itemText = modeItems[i].textContent;
        modeText.textContent = itemText;
      });
    }
    /* -------------------------------------------------------- */
    
    /* Setting Clicking List Items */
    setting.addEventListener('click', function() {
      if (!setting.classList.contains('open')) {
        setting.classList.add('open');
        settingList.classList.add('visible');
    
      } else {
        setting.classList.remove('open');
        settingList.classList.remove('visible');
      }
    });
    
    for (let i = 0; i < settingItems.length; i++) {
      settingItems[i].addEventListener('click', function() {
        if (!settingItems[i].classList.contains('selected')) { settingItems[i].classList.add('selected'); }
        for (let j = i - 1; j >=0; j--) {
          if (settingItems[j].classList.contains('selected')) { settingItems[j].classList.remove('selected'); }
        }
        for (let k = i + 1; k < settingItems.length; k++) {
          if (settingItems[k].classList.contains('selected')) { settingItems[k].classList.remove('selected'); }
        }
      });
    }
    /* -------------------------------------------------------- */
    
    /* Search Button Click Input */
    search_call.addEventListener('click', function() {
      if (!search_call.classList.contains('open')) {
        search_call.classList.add('open');
        searchInput_call.classList.add('active');
    
      } else {
        search_call.classList.remove('open');
        searchInput_call.classList.remove('active');
      }
    
    });
    /* -------------------------------------------------------- */
    
    /* Tags Click Selected */
    tags.forEach(tag => {
      if(tag) {
        tag.addEventListener('click', function() {
          if (!tag.classList.contains('selected')) {
            tag.classList.add('selected');
          }
          else { tag.classList.remove('selected'); }
        });
      }
    });
    /* ----------------------------------------------------- */
    
    /* Perios clicking Item select */
    period.addEventListener('click', function() {
      if (!period.classList.contains('open')) {
        period.classList.add('open');
        periodList.classList.add('visible');
    
      } else {
        period.classList.remove('open');
        periodList.classList.remove('visible');
      }
    });
    
    for (let i = 0; i < periodItems.length; i++) {
      periodItems[i].addEventListener('click', function() {
        if (!periodItems[i].classList.contains('selected')) { periodItems[i].classList.add('selected'); }
        for (let j = i - 1; j >=0; j--) {
          if (periodItems[j].classList.contains('selected')) { periodItems[j].classList.remove('selected'); }
        }
        for (let k = i + 1; k < periodItems.length; k++) {
          if (periodItems[k].classList.contains('selected')) { periodItems[k].classList.remove('selected'); }
        }
        let itemText = periodItems[i].textContent;
        periodText.textContent = itemText;
      });
    }
    /* -------------------------------------------------------- */
    
    
    /* Clicking outside of popup to close and deselect */
    window.addEventListener('click', function(event) {
      let target = event.target;
      let controlItem = target.closest('.callList__controls-item');
    
      if (controlItem) { return; }
      else {
        for (let controlsItem of controlsItems) {
          if (controlsItem.classList.contains('open')) { controlsItem.classList.remove('open'); }
        }
        for (let popup of popups) {
          if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
        }
        if (searchInput_call.classList.contains('active')) { searchInput_call.classList.remove('active'); }
      }
    });
    
    /* -------------------------------------------------------- */

}

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