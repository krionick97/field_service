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
const accountPage = document.querySelector('.section__account-page');

const popup = document.querySelector('.header__account-navigate_popup');
const popupItems = document.querySelectorAll('.header__account-navigate_popup-item:not(:nth-child(1)):not(:nth-child(2))');
const popupAccounts = document.querySelector('.header__account-navigate_popup-accounts');
const navigateIndicators = document.querySelectorAll('.header__account-navigate_indicator');
const popupIndicators = document.querySelectorAll('.header__account-navigate_indicator-mobile');
const popupAccountsList = document.querySelector('.header__account-navigate_popup-list');
const popupAccountsItems = document.querySelectorAll('.header__account-navigate_popup-subitem');
const popupLogout = document.querySelector('.header__account-navigate_popup-logout');
const popupNotices = document.querySelector('.header__account-navigate_notices');
const popupSupport = document.querySelector('.header__account-navigate_support');
const noticesControl = document.querySelector('.header__account-navigate_bell'); // Bell navigate-item
const noticesControlMobile = document.querySelector('.header__account-navigate_bell-mobile'); // Bell-mobile navigate-item
const noticesItems = document.querySelectorAll('.header__account-navigate_notices-item'); 
const supportControl = document.querySelector('.header__account-navigate_question'); // Suppot navigate-item
const supportControlMobile = document.querySelector('.header__account-navigate_question-mobile'); // Suppot-mobile navigate-item
const supportItems = document.querySelectorAll('.header__account-navigate_support-item'); // Suppot-mobile navigate-item
const profile = document.querySelector('.header__account-navigate_profile');
const frameBlock = document.querySelector('.section__account_frame-block');


/* Screen Width updating */
// setInterval(function() {

//   if (document.body.clientWidth >= 721 && searchButton) {
//     if (searchButton.classList.contains('mobile-visible')
//         && searchForm.classList.contains('mobile-visible')
//         && accountNavigate.classList.contains('mobile-visible')
//         && accountHeader.classList.contains('mobile-visible')) {
//       searchButton.classList.remove('mobile-visible');
//       searchForm.classList.remove('mobile-visible');
//       accountNavigate.classList.remove('mobile-visible');
//       accountHeader.classList.remove('mobile-visible');
//     }
//     if (accountMenu.classList.contains('active-button') && accountMenu.classList.contains('mobile-visible')) {
//       accountMenu.classList.remove('mobile-visible');
//       if (!burgerButton.classList.contains('active')) { burgerButton.classList.add('active'); }
//       if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
//     }

//     if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
  
//     for (let markerButton of markerButtons) {
//       if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
//     }
//   }
//   if (document.body.clientWidth < 721 && searchButton) {
//     if (accountMenu.classList.contains('active-button')) {
//       if (!accountMenu.classList.contains('mobile-visible')) { accountMenu.classList.add('mobile-visible'); }
//       if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
//       if (!burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.add('active'); }
//       if (!accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.add('mobile-visible'); }
//       if (!accountHeader.classList.contains('mobile-visible')) { accountHeader.classList.add('mobile-visible'); }
//       if (!searchButton.classList.contains('mobile-visible')) { searchButton.classList.add('mobile-visible'); }
//       if (!searchForm.classList.contains('mobile-visible')) { searchForm.classList.add('mobile-visible'); }
//       if (!frameBlock.classList.contains('menu-visible')) { frameBlock.classList.add('menu-visible'); }
//       for (let markerButton of markerButtons) {
//         if (!markerButton.classList.contains('mobile-visible')) { markerButton.classList.add('mobile-visible'); }
//       }
//     }
//   }  
//   }

// }, 100);
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
    if (!burgerButton.classList.contains('active') && menuLabel.classList.contains('active')) {
      accountMenu.classList.remove('active');
      for (let menuItem of menuItems) {
        menuItem.classList.remove('visible');
      }
    }
  });
}
/* ---------------------------------------------------- */

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

// /* Menu Item Button Clicking Active */
// for (let i = 0; i < menuItems.length; i++) {
//   if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active');
//   menuItems[i].addEventListener('click', function() {
//     if (!menuItems[i].classList.contains('active')) { menuItems[i].classList.add('active'); }
//     for (let j = i - 1; j >=0; j--) {
//       if (menuItems[j].classList.contains('active')) menuItems[j].classList.remove('active');
//     }
//     for (let k = i + 1; k < menuItems.length; k++) {
//       if (menuItems[k].classList.contains('active')) menuItems[k].classList.remove('active')
//     }
//   });
// }
// /* --------------------------------------------------- */

/* Burger Button Menu Active */
if (burgerButton) {
  burgerButton.addEventListener('click', function() {
    if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
    else { burgerButton.classList.add('active'); }
    if (!burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.add('active'); }
    else { burgerButtonMobile.classList.remove('active'); }

    if (burgerButton.classList.contains('active')) {
      accountMenu.classList.add('active-button');
      menuLabel.classList.remove('active');
      frameBlock.classList.add('menu-visible');
      for (let menuItem of menuItems) {
        menuItem.classList.add('visible');
      }
    }
    else {
      accountMenu.classList.remove('active-button'); 
      menuLabel.classList.add('active');
      frameBlock.classList.remove('menu-visible');
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
    if (!searchForm.classList.contains('mobile-mini')) { searchForm.classList.add('mobile-mini'); }

    for (let markerButton of markerButtons) {
      if (!markerButton.classList.contains('mobile-visible')) { markerButton.classList.add('mobile-visible'); }
      else { markerButton.classList.remove('mobile-visible'); }
    }
  });
}
/* ----------------------------------------------------- */

/* Burger Button-mobile Menu and Bar Active */
if (burgerButtonMobile) {
  burgerButtonMobile.addEventListener('click', function() {
    if (!burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.add('active'); }
    else { burgerButtonMobile.classList.remove('active'); }
    if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
    else { burgerButton.classList.add('active'); }

    if (burgerButtonMobile.classList.contains('active')) {
      accountMenu.classList.add('active-button');
      menuLabel.classList.remove('active');
      frameBlock.classList.add('menu-visible');

      for (let menuItem of menuItems) {
        menuItem.classList.add('visible');
      }
    }
    else {
      accountMenu.classList.remove('active-button'); 
      menuLabel.classList.add('active');
      frameBlock.classList.remove('menu-visible');
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
    if (!searchForm.classList.contains('mobile-mini')) { searchForm.classList.add('mobile-mini'); }

    for (let markerButton of markerButtons) {
      if (!markerButton.classList.contains('mobile-visible')) { markerButton.classList.add('mobile-visible'); }
      else { markerButton.classList.remove('mobile-visible'); }
    }
  });  
}
/* ---------------------------------------------------- */


/* Clicking item of mobile-menu and close it */
for (let i = 0; i < menuItems.length; i++) {
  if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active');
  menuItems[i].addEventListener('click', function() {
    if (screen.width < 721 && accountMenu.classList.contains('active-button')) {
      if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
      if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
      if (accountHeader.classList.contains('mobile-visible')) { accountHeader.classList.remove('mobile-visible'); }
      if (accountMenu.classList.contains('mobile-visible')) { accountMenu.classList.remove('mobile-visible'); }
      if (searchForm.classList.contains('mobile-visible')) { searchForm.classList.remove('mobile-visible'); }
      if (searchButton.classList.contains('mobile-visible')) { searchButton.classList.remove('mobile-visible'); }
      if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }
      if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
      if (accountMenu.classList.contains('active-button')) { accountMenu.classList.remove('active-button'); }
      if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }
      if (!menuLabel.classList.contains('active')) { menuLabel.classList.add('active'); }

      for (let menuItem of menuItems) {
        if (menuItem.classList.contains('visible')) { setTimeout(() => { menuItem.classList.remove('visible'); }, 500); }
      }
      for (let markerButton of markerButtons) {
        if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
      }
    }

    if (!menuItems[i].classList.contains('active')) { menuItems[i].classList.add('active'); }
    for (let j = i - 1; j >=0; j--) {
      if (menuItems[j].classList.contains('active')) menuItems[j].classList.remove('active');
    }
    for (let k = i + 1; k < menuItems.length; k++) {
      if (menuItems[k].classList.contains('active')) menuItems[k].classList.remove('active')
    }
  });
}

// menuItems.forEach(menuItem => {
//   menuItem.addEventListener('click', function() {
//     if (accountMenu.classList.contains('mobile-visible')
//         && accountHeader.classList.contains('mobile-visible')
//         && accountMenu.classList.contains('active-button')) {
//       if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
//       if (accountHeader.classList.contains('mobile-visible')) { accountHeader.classList.remove('mobile-visible'); }
//       if (accountMenu.classList.contains('mobile-visible')) { accountMenu.classList.remove('mobile-visible'); }
//       if (searchForm.classList.contains('mobile-visible')) { searchForm.classList.remove('mobile-visible'); }
//       if (searchButton.classList.contains('mobile-visible')) { searchButton.classList.remove('mobile-visible'); }
//       if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }
//       if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
//       if (accountMenu.classList.contains('active-button')) { accountMenu.classList.remove('active-button'); }
//       if (accountNavigate.classList.contains('mobile-visible')) { accountNavigate.classList.remove('mobile-visible'); }
//       if (!menuLabel.classList.contains('active')) { menuLabel.classList.add('active'); }

//       for (let menuItem of menuItems) {
//         if (menuItem.classList.contains('visible')) { setTimeout(() => { menuItem.classList.remove('visible'); }, 500); }
//       }
//       for (let markerButton of markerButtons) {
//         if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
//       }
//     }
//   });
// });
/* ---------------------------------------------------- */

/* Search Button Input Active */
if (searchButton) {
  searchButton.addEventListener('click', function() {
    if (!searchInput.classList.contains('active')
        && !searchSubmit.classList.contains('active')
        && !accountMenu.classList.contains('search-mini')) {
      searchInput.classList.add('active');
      searchSubmit.classList.add('active');
      accountMenu.classList.add('search-mini');
    }
    else { 
      searchInput.classList.remove('active');
      searchSubmit.classList.remove('active');
      accountMenu.classList.remove('search-mini');
    }
  });
  searchSubmit.addEventListener('click', function(event) {
    if (searchInput.value === '') {
      event.preventDefault();
    }
  });
}
/* ----------------------------------------------------- */

/* Navigate-indicators active by clicking */
if (navigateIndicators) {
  for (let navigateIndicator of navigateIndicators) {
    navigateIndicator.addEventListener('click', function() {
      navigateIndicator.classList.toggle('active');
    });
  }
}
/* -------------------------------------------------- */


/* Profile Clicking popup-call */
if (profile) {
  profile.addEventListener('click', function() {
    if (profile.classList.contains('active')) {
      if (!popup.classList.contains('visible')) { popup.classList.add('visible') };
      if (!frameBlock.classList.contains('overframe')) { frameBlock.classList.add('overframe'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    }
    else { 
      if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
      if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
      if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
      if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
      if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) popupIndicator.classList.remove('selected');
      if (popupIndicator.classList.contains('active')) popupIndicator.classList.remove('active');
    }
  });
}
/* ------------------------------------------------- */

/* Accounts-item hover and list in popup */
if (popup) {
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
}

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
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
    if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
    if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) { popupIndicator.classList.remove('selected'); }
      if (popupIndicator.classList.contains('active')) { popupIndicator.classList.remove('active'); }
    }
    if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
    if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
    if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
    if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    for (let noticesItem of noticesItems) {
      if (noticesItem.classList.contains('selected')) { noticesItem.classList.remove('selected'); }
    }

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
      if (!popupIndicators[i].classList.contains('selected') && !popupIndicators[i].classList.contains('active')) {
        popupIndicators[i].classList.add('selected');
        popupIndicators[i].classList.add('active');
      }
      else {
        popupIndicators[i].classList.remove('selected');
        popupIndicators[i].classList.remove('active');
      }
      for (let j = i - 1; j >= 0; j--) {
        if (popupIndicators[j].classList.contains('selected') && popupIndicators[j].classList.contains('active')) {
          popupIndicators[j].classList.remove('selected');
          popupIndicators[j].classList.remove('active');
        }
      }
      for (let k = i + 1; k < popupIndicators.length; k++) {
        if (popupIndicators[k].classList.contains('selected') && popupIndicators[k].classList.contains('active')) {
          popupIndicators[k].classList.remove('selected');
          popupIndicators[k].classList.remove('active');
        }
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


/* Notices-popup by clicking the bell-control */
if(popupNotices) {
  noticesControl.addEventListener('click', function() {
    if (noticesControl.classList.contains('active')) {
      if (!popupNotices.classList.contains('visible')) { popupNotices.classList.add('visible'); }
      if (!frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.add('overframe-notices'); }
      if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
      if (profile.classList.contains('active')) { profile.classList.remove('active'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
      if (supportControlMobile.classList.contains('active')) { supportControlMobile.classList.remove('active'); }
      if (supportControlMobile.classList.contains('active')) { supportControlMobile.classList.remove('active'); }
      if (supportControlMobile.classList.contains('selected')) { supportControlMobile.classList.remove('selected'); }
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (!noticesControlMobile.classList.contains('active')) { noticesControlMobile.classList.add('active'); }
      if (!noticesControlMobile.classList.contains('selected')) { noticesControlMobile.classList.add('selected'); }
    } else {
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (noticesControlMobile.classList.contains('active')) { noticesControlMobile.classList.remove('active'); }
      if (noticesControlMobile.classList.contains('selected')) { noticesControlMobile.classList.remove('selected'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }
  });
}
if (noticesControlMobile) {
  noticesControlMobile.addEventListener('click', function() {
    if (noticesControlMobile.classList.contains('active')) {
      if (!popupNotices.classList.contains('visible')) { popupNotices.classList.add('visible'); }
      if (!frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.add('overframe-notices'); }
      if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
      if (!noticesControl.classList.contains('active')) { noticesControl.classList.add('active'); }
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (!accountHeader.classList.contains('height')) { accountHeader.classList.add('height'); }
      if (!popup.classList.contains('mobile-mini')) { popup.classList.add('mobile-mini') };
      if (!accountPage.classList.contains('hidden')) { accountPage.classList.add('hidden'); }
    } else {
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }
  });
}
if (noticesItems) {
  for (let i = 0; i < noticesItems.length; i++) {
    noticesItems[i].addEventListener('click', function() {
      noticesItems[i].classList.toggle('selected');
      for (let j = i - 1; j >= 0; j--) {
        if (noticesItems[j].classList.contains('selected')) { noticesItems[j].classList.remove('selected'); }
      }
      for (let k = i + 1; k < noticesItems.length; k++) {
        if (noticesItems[k].classList.contains('selected')) { noticesItems[k].classList.remove('selected'); }
      }
    });
  }
}
/* --------------------------------------------------- */

/* Support-popup by clicking support(?)-control */
if (popupSupport) {
  supportControl.addEventListener('click', function() {
    if (supportControl.classList.contains('active')) {
      if (!popupSupport.classList.contains('visible')) { popupSupport.classList.add('visible'); }
      if (!supportControlMobile.classList.contains('selected')) { supportControlMobile.classList.add('selected'); }
      if (!supportControlMobile.classList.contains('active')) { supportControlMobile.classList.add('active'); }
      if (profile.classList.contains('active')) { profile.classList.remove('active'); }
      if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
      
      if (!frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.add('overframe-notices'); }
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      
    } else {
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (supportControlMobile.classList.contains('selected')) { supportControlMobile.classList.remove('selected'); }
      if (supportControlMobile.classList.contains('active')) { supportControlMobile.classList.remove('active'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }
  });
}
if (supportControlMobile) {
  supportControlMobile.addEventListener('click', function() {
    if (supportControlMobile.classList.contains('active')) {
      if (!popupSupport.classList.contains('visible')) { popupSupport.classList.add('visible'); }
      if (!supportControl.classList.contains('active')) { supportControl.classList.add('active'); }
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (!accountHeader.classList.contains('height')) { accountHeader.classList.add('height'); }
      if (!popup.classList.contains('mobile-mini')) { popup.classList.add('mobile-mini') };
      if (!accountPage.classList.contains('hidden')) { accountPage.classList.add('hidden'); }
      frameBlock.classList.add('menu-visible');
    } else {
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }
  
  });
}
if (supportItems) {
  for (let i = 0; i < supportItems.length; i++) {
    supportItems[i].addEventListener('click', function() {
      supportItems[i].classList.toggle('selected');
      for (let j = i - 1; j >= 0; j--) {
        if (supportItems[j].classList.contains('selected')) { supportItems[j].classList.remove('selected'); }
      }
      for (let k = i + 1; k < supportItems.length; k++) {
        if (supportItems[k].classList.contains('selected')) { supportItems[k].classList.remove('selected'); }
      }
    });
  }
}
/* --------------------------------------------------- */


/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let profileClosest = target.closest('.header__account-navigate_profile');
  let popupClosest = target.closest('.header__account-navigate_popup');
  let noticesClosest = target.closest('.header__account-navigate_bell');
  let popupNoticesClosest = target.closest('.header__account-navigate_notices');
  let supportClosest = target.closest('.header__account-navigate_question');
  let popupSupportClosest = target.closest('.header__account-navigate_support');

  if (profileClosest) { return; }
  if (noticesClosest) { return; }
  if (supportClosest) { return; }

  if (popupClosest) { return; }
  else {
    if (popupNoticesClosest) { return; }
    if (popupSupportClosest) {return; }
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
    if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
  }

  if (popupNoticesClosest) { return; }
  else {
    if (noticesClosest) { return; }
    if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
    if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
    if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
    if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected') && popupIndicator.classList.contains('active')) {
        popupIndicator.classList.remove('selected');
        popupIndicator.classList.remove('active');
      }
    }
    for (let noticesItem of noticesItems) {
      if (noticesItem.classList.contains('selected')) { noticesItem.classList.remove('selected'); }
    }
  }

  if (popupSupportClosest) { return; }
  else {
    if (supportClosest) { return; }
    if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
    if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
    if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
    if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected') && popupIndicator.classList.contains('active')) {
        popupIndicator.classList.remove('selected');
        popupIndicator.classList.remove('active');
      }
    }
    for (let supportItem of supportItems) {
      if (supportItem.classList.contains('selected')) { supportItem.classList.remove('selected'); }
    }
  }
});
/* -------------------------------------------------------- */


