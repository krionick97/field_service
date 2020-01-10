'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const burgerButtonMobile = document.querySelector('.header__account-navigate_burger.mobile');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');
const accountMenu = document.querySelector('.section__account-menu');
const menuLabel = document.querySelector('#menu-label');
const menuItems = document.querySelectorAll('.section__account-menu_item');
const searchButton = document.querySelector('.header__account-navigate_search');
const searchForm = document.querySelector('.header__account-navigate_search-form');
const searchInput = document.querySelector('.header__account-navigate_search-input');
const searchSubmit = document.querySelector('.header__account-navigate_search-submit');
const accountNavigate = document.querySelector('.header__account-navigate');
const accountHeader = document.querySelector('.header__account');

const popup = document.querySelector('.header__account-navigate_popup');
const popupItems = document.querySelectorAll('.header__account-navigate_popup-item:not(:first-child)');
const popupAccounts = document.querySelector('.header__account-navigate_popup-item:first-child');
const popupIndicators = document.querySelectorAll('.header__account-navigate_indicator-mobile');
const popupAccountsList = document.querySelector('.header__account-navigate_popup-list');
const popupAccountsItems = document.querySelectorAll('.header__account-navigate_popup-subitem');
const popupLogout = document.querySelector('.header__account-navigate_popup-logout');
const profile = document.querySelector('.header__account-navigate_profile');
const frameBlock = document.querySelector('.section__account_frame-block');


/* Screen Width updating */
setInterval(function() {
  if (document.body.clientWidth <= 1121 && menuLabel) {
    if (menuLabel.classList.contains('active')) { menuLabel.classList.remove('active'); }
  } else {
    if (menuLabel && !menuLabel.classList.contains('active')) { menuLabel.classList.add('active'); }
  }


  if (document.body.clientWidth >= 821 && searchButton) {
    if (searchButton.classList.contains('mobile-visible')
        && searchForm.classList.contains('mobile-visible')
        && accountNavigate.classList.contains('mobile-visible')
        && accountHeader.classList.contains('mobile-visible')
        && accountMenu.classList.contains('mobile-visible')) {
      searchButton.classList.remove('mobile-visible');
      searchForm.classList.remove('mobile-visible');
      accountNavigate.classList.remove('mobile-visible');
      accountHeader.classList.remove('mobile-visible');
      accountMenu.classList.remove('mobile-visible');
    } 
    // else {
    //   searchButton.classList.remove('mobile-visible');
    //   searchForm.classList.remove('mobile-visible');
    //   accountNavigate.classList.remove('mobile-visible');
    //   accountHeader.classList.remove('mobile-visible');
    //   accountMenu.classList.remove('mobile-visible');
    // }
    if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
    // else { frameBlock.classList.remove('menu-visible'); }
  
    for (let markerButton of markerButtons) {
      if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
      // else { markerButton.classList.remove('mobile-visible'); }
    }
  }
  
  /* Menu Label hover */
  if (menuLabel) {
    menuLabel.addEventListener('mouseover', function() {
      accountMenu.classList.add('active');
      for (let menuItem of menuItems) {
        menuItem.classList.add('visible');
      }
    });
  
    accountMenu.addEventListener('mouseleave', function() {
      if (!burgerButton.classList.contains('active') && menuLabel.classList.contains('active')) {
        accountMenu.classList.remove('active');
        for (let menuItem of menuItems) {
          menuItem.classList.remove('visible');
        }
      }
    });
  }
  

  /* Accounts-item hover and list in popup */
  if (popup) {
    popupAccounts.addEventListener('mouseover', function() {
      if (document.body.clientWidth >= 1121) {
        if (!popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.add('visible'); }
      }
    });
    popupAccountsList.addEventListener('mouseleave', function() {
      if (document.body.clientWidth >= 1121) {
        if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
      }
    });
    popup.addEventListener('mouseleave', function() {
      if (document.body.clientWidth >= 1121) {
        if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
      }
    });
    popupLogout.addEventListener('mouseover', function() {
      if (document.body.clientWidth >= 1121) {
        if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
      }
    });

  }

  // if (document.body.clientWidth < 721) {
  //   if (!burgerButton.classList.contains('mobile')) { burgerButton.classList.contains('mobile'); }
  //   else { burgerButton.classList.remove('mobile'); }
  // }

  if (document.body.clientWidth <= 561 && searchForm
    && searchInput.classList.contains('active')
    && searchSubmit.classList.contains('active')) {
  if (!searchForm.classList.contains('mobile-mini')) { searchForm.classList.add('mobile-mini'); }
  if (!accountMenu.classList.contains('search-mini')) { accountMenu.classList.add('search-mini'); }
} else {
  if (searchForm && searchForm.classList.contains('mobile-mini')) { searchForm.classList.remove('mobile-mini'); }
  if (accountMenu && accountMenu.classList.contains('search-mini')) { accountMenu.classList.remove('search-mini'); }
}

  
}, 100);
/* ----------------------------------------------------- */


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
    if (!menuItems[i].classList.contains('active')) { menuItems[i].classList.add('active'); }
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
      burgerButton.classList.remove('active');
    }
    else { burgerButton.classList.add('active'); }

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

/* Burger Button-mobile Menu and Bar Active */
if (burgerButtonMobile) {
  burgerButtonMobile.addEventListener('click', function() {
    if (!burgerButtonMobile.classList.contains('active')) {
      burgerButtonMobile.classList.add('active');
    }
    else { burgerButtonMobile.classList.remove('active'); }

    if (burgerButtonMobile.classList.contains('active')) {
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
    if (!searchButton.classList.contains('mobile-visible')
        && !searchForm.classList.contains('mobile-visible')
        && !accountNavigate.classList.contains('mobile-visible')
        && !accountHeader.classList.contains('mobile-visible')
        && !accountMenu.classList.contains('mobile-visible')) {
      searchButton.classList.add('mobile-visible');
      searchForm.classList.add('mobile-visible');
      accountNavigate.classList.add('mobile-visible');
      accountHeader.classList.add('mobile-visible');
      accountMenu.classList.add('mobile-visible');
    } else {
      searchButton.classList.remove('mobile-visible');
      searchForm.classList.remove('mobile-visible');
      accountNavigate.classList.remove('mobile-visible');
      accountHeader.classList.remove('mobile-visible');
      accountMenu.classList.remove('mobile-visible');
    }
    if (!frameBlock.classList.contains('menu-visible')) { frameBlock.classList.add('menu-visible'); }
    else { frameBlock.classList.remove('menu-visible'); }

    for (let markerButton of markerButtons) {
      if (!markerButton.classList.contains('mobile-visible')) { markerButton.classList.add('mobile-visible'); }
      else { markerButton.classList.remove('mobile-visible'); }
    }
  });

}
/* ---------------------------------------------------- */

/* Clicking item of mobile-menu and close it */
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function() {
    if (accountMenu.classList.contains('mobile-visible')
        && accountHeader.classList.contains('mobile-visible')
        && accountMenu.classList.contains('active-button')) {
      if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
      if (accountHeader.classList.contains('mobile-visible')) { accountHeader.classList.remove('mobile-visible'); }
      if (accountMenu.classList.contains('mobile-visible')) { accountMenu.classList.remove('mobile-visible'); }
      if (searchForm.classList.contains('mobile-visible')) { searchForm.classList.remove('mobile-visible'); }
      if (searchButton.classList.contains('mobile-visible')) { searchButton.classList.remove('mobile-visible'); }
      if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }
      if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
      if (accountMenu.classList.contains('active-button')) { accountMenu.classList.remove('active-button'); }
      if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }

      for (let menuItem of menuItems) {
        if (menuItem.classList.contains('visible')) { setTimeout(() => { menuItem.classList.remove('visible'); }, 500); }
      }
      for (let markerButton of markerButtons) {
        if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
      }
    }
  });
});
/* ---------------------------------------------------- */

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

if (popup && popupAccounts) {
  /* Accounts-clicking and listing of account-list */
  popupAccounts.addEventListener('click', function() {
    if (!popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.add('visible'); }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) popupIndicator.classList.remove('selected');
    }  
  });
  for (let popupItem of popupItems) {
    popupItem.addEventListener('click', function() {
      if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
    });
  }

  /* Logout and popup-clos */
  popupLogout.addEventListener('click', function() {
    if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) { popupIndicator.classList.remove('selected'); }
    }
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
  });
  /* ------------------------------------------------------ */
  
  /* Header item-indicators selecting */
  for (let i = 0; i < menuItems.length; i++) {
    if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active');
    menuItems[i].addEventListener('click', function() {
      if (!menuItems[i].classList.contains('active')) { menuItems[i].classList.add('active'); }
      for (let j = i - 1; j >=0; j--) {
        if (menuItems[j].classList.contains('active')) menuItems[j].classList.remove('active');
      }
      for (let k = i + 1; k < menuItems.length; k++) {
        if (menuItems[k].classList.contains('active')) menuItems[k].classList.remove('active')
      }
    });
  }
  /* --------------------------------------------------- */

  
  /* Popup Accounts-item Clicking Select */
  for (let i = 0; i < popupIndicators.length; i++) {
    popupIndicators[i].addEventListener('click', function() {
      if (!popupIndicators[i].classList.contains('selected')) popupIndicators[i].classList.add('selected');
      for (let j = i - 1; j >= 0; j--) {
        if (popupIndicators[j].classList.contains('selected')) popupIndicators[j].classList.remove('selected');
      }
      for (let k = i + 1; k < popupIndicators.length; k++) {
        if (popupIndicators[k].classList.contains('selected')) popupIndicators[k].classList.remove('selected');
      }
    });
  }

  /* Accounts subitems Clicking Select */
  for (let i = 0; i < popupAccountsItems.length; i++) {
    if (!popupAccountsItems[i].classList.contains('selected')) popupAccountsItems[0].classList.add('selected');
    popupAccountsItems[i].addEventListener('click', function() {
      for (let popupIndicator of popupIndicators) {
        if (popupIndicator.classList.contains('selected')) popupIndicator.classList.remove('selected');
      }  
      if (!popupAccountsItems[i].classList.contains('selected')) popupAccountsItems[i].classList.add('selected');
      for (let j = i - 1; j >= 0; j--) {
        if (popupAccountsItems[j].classList.contains('selected')) popupAccountsItems[j].classList.remove('selected');
      }
      for (let k = i + 1; k < popupAccountsItems.length; k++) {
        if (popupAccountsItems[k].classList.contains('selected')) popupAccountsItems[k].classList.remove('selected');
      }
    });
  }
}
/* --------------------------------------------------- */

/* Profile Clicking popup-call */
if (profile) {
  profile.addEventListener('click', function() {
    if (!popup.classList.contains('visible')) { popup.classList.add('visible'); }
    else { 
      popup.classList.remove('visible'); 
      if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
    }
    if (!frameBlock.classList.contains('overframe')) { frameBlock.classList.add('overframe'); }
    else {
      frameBlock.classList.remove('overframe');
    }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) popupIndicator.classList.remove('selected');
    }
  });
}
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
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
  }
});
/* -------------------------------------------------------- */


