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
const phonecall = document.querySelector('.header__account-navigate_phonecall');
const phonecallMobile = document.querySelector('.header__account-navigate_phonecall-mobile');
const softphoneMenu = document.querySelector('.section__account_softphone');
const softphoneTapItems = document.querySelectorAll('.section__account_softphone-tap');
const softphoneQuit = document.querySelector('.section__account_softphone-control_quit');
const softphoneContentItems = document.querySelectorAll('.section__account_softphone-content_item');
const frameBlock = document.querySelector('.section__account_frame-block');
const controlStatus = document.querySelector('.section__account_softphone-control_status');
const statusPresence = document.querySelector('.section__account_softphone-control_presence');
const statusTitle = document.querySelector('.section__account_softphone-control_presence-text p');
const statusPopup = document.querySelector('.section__account_softphone-control_status-popup');
const statusArrow = document.querySelector('.section__account_softphone-control_presence-arrow');
const statusPopupItems = document.querySelectorAll('.section__account_softphone-control_popup-item');
const statusSymbol = document.querySelector('.section__account_softphone-control_presence-symbol');
const volumeSlider = document.querySelector('#volumeSlider');
const volumeFill = document.querySelector('.section__account_softphone-control_volume-fill');
const homeInfoButtons = document.querySelectorAll('.section__account_softphone-content_home-item_button-info');
const homeInfoBlocks = document.querySelectorAll('.section__account_softphone-content_home-item_infoblock');
const homeActiveMicrophone = document.querySelector('.section__account_softphone-content_home-item_actionButtons-microphone');
const actionButton = document.querySelector('.section__account_softphone-content_home-item_actionButtons-actions');
const actionButtonComplet = document.querySelector('.section__account_softphone-content_home-item_actionButtons-actionsComplet');
const actionMenu = document.querySelector('.section__account_softphone-content_home-item_actions-menu');
const actionMenuComplet = document.querySelector('.section__account_softphone-content_home-item_actions-menuComplet');
const homeBlock = document.querySelector('.section__account_softphone-content_home-block');
const homeActionsBlacklist = document.querySelector('.section__account_softphone-content_home-item_actions-blacklist');
const homeActionsBlacklistComplet = document.querySelector('.section__account_softphone-content_home-item_actions-blacklistComplet');
const actionComment = document.querySelector('.section__account_softphone-content_home-item_actions-comment');
const actionCommentComplet = document.querySelector('.section__account_softphone-content_home-item_actions-commentComplet');
const actionCommentAdd = document.querySelector('.section__account_softphone-content_home-item_actions-comment > p');
const actionCommentAddComplet = document.querySelector('.section__account_softphone-content_home-item_actions-commentComplet > p');
const actionCommentForm = document.querySelector('.section__account_softphone-content_home-item_actions-comment_inputBlock > form');
const actionCommentFormComplet = document.querySelector('.section__account_softphone-content_home-item_actions-comment_inputBlockComplet > form');
const dialAccountBlock = document.querySelector('.section__account_softphone-content_dial-block');
const dialAccountSelect = document.querySelector('.section__account_softphone-content_dial-accSelect');
const dialAccountArrow = document.querySelector('.section__account_softphone-content_dial-accArrow');
const dialAccounts = document.querySelector('.section__account_softphone-content_dial-account');
const dialAccountsList = document.querySelector('.section__account_softphone-content_dial-accList');
const dialAccountsItems = document.querySelectorAll('.section__account_softphone-content_dial-accListItem');
const dialInput = document.querySelector('#dial-input');
const dialInputBackspace = document.querySelector('.section__account_softphone-content_dial-backspace');
const dialKeys = document.querySelectorAll('.section__account_softphone-content_dial-key');
const callItemsList = document.querySelector('.section__account_softphone-content_calls-list');
const callItems = document.querySelectorAll('.section__account_softphone-content_calls-item');
const contactsItemsList = document.querySelector('.section__account_softphone-content_contacts-list');
const infoblockItems = document.querySelectorAll('.section__account_softphone-content_home-item_infoblock-item');
const homeActionMenuItems = document.querySelectorAll('.section__account_softphone-content_home-item_actions-item');

const callingFlag = document.querySelector('.section__account_callingFlag');

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
  // burgerButtonMobile.addEventListener('click', function() {
  //   burgerButtonMobile.classList.toggle('active');
  //   if (burgerButtonMobile.classList.contains('active')) {
  //     if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
  //     accountMenu.classList.add('active-button');
  //     menuLabel.classList.remove('active');
  //     frameBlock.classList.add('menu-visible');

  //     for (let menuItem of menuItems) {
  //       menuItem.classList.add('visible');
  //     }

  //   } else {
  //     accountMenu.classList.remove('active-button'); 
  //     menuLabel.classList.add('active');
  //     if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
  //     for (let menuItem of menuItems) {
  //       menuItem.classList.remove('visible');
  //     }
  //   }
  // });

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
      if (callingFlag.classList.contains('active')) { callingFlag.classList.remove('active'); }
    }
    else {
      accountMenu.classList.remove('active-button'); 
      menuLabel.classList.add('active');
      if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
      for (let menuItem of menuItems) {
        menuItem.classList.remove('visible');
      }
      if (statusTitle.textContent === 'Available') {
        if (!callingFlag.classList.contains('active')) { callingFlag.classList.add('active'); }
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

    if (softphoneMenu.classList.contains('active')) { softphoneMenu.classList.remove('active'); }
  });
}
/* ---------------------------------------------------- */


/* Clicking item of mobile-menu and close it */
for (let i = 0; i < menuItems.length; i++) {
  if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active');
  menuItems[i].addEventListener('click', function() {
    if (document.body.clientWidth < 721 && accountMenu.classList.contains('active-button')) {
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
      if (popupSupport.classList.contains('visible')) {popupSupport.classList.remove('visible'); }
      if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
      if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
      if (popupNotices.classList.contains('visible')) {popupNotices.classList.remove('visible'); }
      if (popupAccountsList.classList.contains('visible')) { popupAccountsList.classList.remove('visible'); }
      if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (popupNotices.classList.contains('visible')) {}
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
      if (!burgerButtonMobile.contains('active')) {
        if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
      }
      // if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
    }
    for (let popupIndicator of popupIndicators) {
      if (popupIndicator.classList.contains('selected')) popupIndicator.classList.remove('selected');
      if (popupIndicator.classList.contains('active')) popupIndicator.classList.remove('active');
    }

    /* (ВАЖНО!!) в случае надобности переместить в блок else  */
    // if (softphoneMenu.classList.contains('active')) { softphoneMenu.classList.remove('active'); }
    // if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    // if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    // if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }  
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
    // if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
    if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    if (softphoneMenu.classList.contains('active')) { softphoneMenu.classList.remove('active'); }
    if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }


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
      if (!accountHeader.classList.contains('height')) { accountHeader.classList.add('height'); }
    } else {
      if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (noticesControlMobile.classList.contains('active')) { noticesControlMobile.classList.remove('active'); }
      if (noticesControlMobile.classList.contains('selected')) { noticesControlMobile.classList.remove('selected'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }

    if (document.body.clientWidth < 721 && noticesControl.classList.contains('active')) {
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
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
      if (!accountHeader.classList.contains('height')) { accountHeader.classList.add('height'); }

    } else {
      if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
      if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
      if (supportControlMobile.classList.contains('selected')) { supportControlMobile.classList.remove('selected'); }
      if (supportControlMobile.classList.contains('active')) { supportControlMobile.classList.remove('active'); }
      if (accountHeader.classList.contains('height')) { accountHeader.classList.remove('height'); }
      if (accountPage.classList.contains('hidden')) { accountPage.classList.remove('hidden'); }
    }

    if (document.body.clientWidth < 721 && supportControl.classList.contains('active')) {
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
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
      if (!accountHeader.classList.contains('height')) { accountHeader.classList.add('height'); }
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


/* Function to activate softphone-menu */
function softPhoneActive() {
  if (!softphoneMenu.classList.contains('active')) {
    softphoneMenu.classList.add('active');
    if (!phonecall.classList.contains('active')) { phonecall.classList.add('active'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
    if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
    if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
    if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    dialAccountBlock.scrollTo(0, 0);
    callItemsList.scrollTo(0, 0);
    homeBlock.scrollTo(0, 0);
    contactsItemsList.scrollTo(0, 0);
    // if (!frameBlock.classList.contains('menu-visible')) { frameBlock.classList.add('menu-visible'); }
    // if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
    // if (searchButton.classList.contains('mobile-visible')
    // && searchForm.classList.contains('mobile-visible')
    // && accountNavigate.classList.contains('mobile-visible')
    // && accountHeader.classList.contains('mobile-visible')
    // && accountMenu.classList.contains('mobile-visible')
    // && accountMenu.classList.contains('active-button')) {
    //   searchButton.classList.remove('mobile-visible');
    //   searchForm.classList.remove('mobile-visible');
    //   accountNavigate.classList.remove('mobile-visible');
    //   accountHeader.classList.remove('mobile-visible');
    //   accountMenu.classList.remove('mobile-visible');
    //   accountMenu.classList.remove('active-button');
    // }
    for (let markerButton of markerButtons) {
      if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
    }
    // if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
  } 
  else {
    softphoneMenu.classList.remove('active');
    if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }    
  }
} /* ----- */
function softPhoneActiveMobile() {
  if (!softphoneMenu.classList.contains('active')) {
    softphoneMenu.classList.add('active');
    if (!phonecall.classList.contains('active')) { phonecall.classList.add('active'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
    if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
    if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
    if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    if (!frameBlock.classList.contains('menu-visible')) { frameBlock.classList.add('menu-visible'); }
    if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
    if (searchButton.classList.contains('mobile-visible')
    && searchForm.classList.contains('mobile-visible')
    && accountNavigate.classList.contains('mobile-visible')
    && accountHeader.classList.contains('mobile-visible')
    && accountMenu.classList.contains('mobile-visible')
    && accountMenu.classList.contains('active-button')) {
      searchButton.classList.remove('mobile-visible');
      searchForm.classList.remove('mobile-visible');
      accountNavigate.classList.remove('mobile-visible');
      accountHeader.classList.remove('mobile-visible');
      accountMenu.classList.remove('mobile-visible');
      accountMenu.classList.remove('active-button');
    }
    for (let markerButton of markerButtons) {
      if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
    }
    if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
    if (burgerButtonMobile.classList.contains('active')) {burgerButtonMobile.classList.remove('active'); }
    dialAccountBlock.scrollTo(0, 0);
    callItemsList.scrollTo(0, 0);
    homeBlock.scrollTo(0, 0);
    contactsItemsList.scrollTo(0, 0);
  } 
  else {
    softphoneMenu.classList.remove('active');
    if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }
    if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }    
  }
}
/* ----------------------------- */

/* Phonecall click */
if (phonecall) {
  phonecall.addEventListener('click', function() {
    softPhoneActive();
    // if (!softphoneMenu.classList.contains('active')) {
    //   softphoneMenu.classList.add('active');
    //   // if (!phonecallMobile.classList.contains('active')) { phonecallMobile.classList.add('active'); }
    //   // if (!phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.add('selected'); }
    // } else {
    //   softphoneMenu.classList.remove('active');
    //   // if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    //   // if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }
    // }
  });
  phonecallMobile.addEventListener('click', function() {
    if (document.body.clientWidth < 721) { softPhoneActiveMobile(); }
    else { softPhoneActive(); }
    // if (!softphoneMenu.classList.contains('active')) {
    //   softphoneMenu.classList.add('active');
    //   if (!phonecall.classList.contains('active')) { phonecall.classList.add('active'); }
    //   if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    //   if (popup.classList.contains('mobile-mini')) { popup.classList.remove('mobile-mini') };
    //   if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    //   // if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    //   // if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    //   if (popupNotices.classList.contains('visible')) { popupNotices.classList.remove('visible'); }
    //   if (noticesControl.classList.contains('active')) { noticesControl.classList.remove('active'); }
    //   if (popupSupport.classList.contains('visible')) { popupSupport.classList.remove('visible'); }
    //   if (supportControl.classList.contains('active')) { supportControl.classList.remove('active'); }
    //   if (!frameBlock.classList.contains('menu-visible')) { frameBlock.classList.add('menu-visible'); }
    //   if (burgerButtonMobile.classList.contains('active')) { burgerButtonMobile.classList.remove('active'); }
    //   if (searchButton.classList.contains('mobile-visible')
    //   && searchForm.classList.contains('mobile-visible')
    //   && accountNavigate.classList.contains('mobile-visible')
    //   && accountHeader.classList.contains('mobile-visible')
    //   && accountMenu.classList.contains('mobile-visible')
    //   && accountMenu.classList.contains('active-button')) {
    //     searchButton.classList.remove('mobile-visible');
    //     searchForm.classList.remove('mobile-visible');
    //     accountNavigate.classList.remove('mobile-visible');
    //     accountHeader.classList.remove('mobile-visible');
    //     accountMenu.classList.remove('mobile-visible');
    //     accountMenu.classList.remove('active-button');
    //   }
    //   for (let markerButton of markerButtons) {
    //     if (markerButton.classList.contains('mobile-visible')) { markerButton.classList.remove('mobile-visible'); }
    //   }
    //   if (burgerButton.classList.contains('active')) { burgerButton.classList.remove('active'); }
    // } 
    // else {
    //   softphoneMenu.classList.remove('active');
    //   if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    //   if (phonecallMobile.classList.contains('active')) { phonecallMobile.classList.remove('active'); }
    //   if (phonecallMobile.classList.contains('selected')) { phonecallMobile.classList.remove('selected'); }
    //   if (popup.classList.contains('visible')) { popup.classList.remove('visible') };
    //   if (frameBlock.classList.contains('overframe')) { frameBlock.classList.remove('overframe'); }
    //   if (frameBlock.classList.contains('overframe-notices')) { frameBlock.classList.remove('overframe-notices'); }
    //   if (profile.classList.contains('active')) { profile.classList.remove('active'); }
    //   if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }

    // }
  });
}
/* ---------------------------------------------------- */

/* Softphone Tap-items clicking */
if (softphoneMenu) {
  for (let i = 0; i < softphoneTapItems.length; i++) {
    if (!softphoneTapItems[i].classList.contains('selected')) { softphoneTapItems[0].classList.add('selected'); }
    if (!softphoneContentItems[i].classList.contains('active')) { softphoneContentItems[0].classList.add('active'); }
    softphoneTapItems[i].addEventListener('click', function() {
       /* Selected tap */
      if (!softphoneTapItems[i].classList.contains('selected')) {
        softphoneTapItems[i].classList.add('selected');
        if (!softphoneContentItems[i].classList.contains('active')) { softphoneContentItems[i].classList.add('active'); }
      }
      for (let j = i - 1; j >= 0; j--) {
        if (softphoneTapItems[j].classList.contains('selected')) { softphoneTapItems[j].classList.remove('selected'); }
        if (softphoneContentItems[j].classList.contains('active')) { softphoneContentItems[j].classList.remove('active'); }
      }
      for (let k = i + 1; k < softphoneTapItems.length; k++) {
        if (softphoneTapItems[k].classList.contains('selected')) { softphoneTapItems[k].classList.remove('selected'); }
        if (softphoneContentItems[k].classList.contains('active')) { softphoneContentItems[k].classList.remove('active'); }
      }
      /* ----------- */
    });
  }
}
/* ---------------------------------------------------- */

/* Presence status clickinkg */
if (controlStatus) {
  statusPresence.addEventListener('click', function() {
    if (!statusPopup.classList.contains('visible')) {
      statusPopup.classList.add('visible');
      if (!statusArrow.classList.contains('rotate')) { statusArrow.classList.add('rotate'); }
    }
    else {
      statusPopup.classList.remove('visible');
      if (statusArrow.classList.contains('rotate')) { statusArrow.classList.remove('rotate'); }
    }
  });

  for (let i = 0; i < statusPopupItems.length; i++) {
    statusPopupItems[i].addEventListener('click', function() {
      if (!statusPopupItems[i].classList.contains('selected')) {
        statusPopupItems[i].classList.add('selected');
        for (let j = i - 1; j >= 0; j--) {
          if (statusPopupItems[j].classList.contains('selected')) { statusPopupItems[j].classList.remove('selected'); }
        }
        for (let k = i + 1; k < statusPopupItems.length; k++) {
          if (statusPopupItems[k].classList.contains('selected')) { statusPopupItems[k].classList.remove('selected'); }
        }
      }
      if (statusPopup.classList.contains('visible')) { statusPopup.classList.remove('visible'); }
      if (statusArrow.classList.contains('rotate')) { statusArrow.classList.remove('rotate'); }
      if (statusPopupItems[i] === statusPopupItems[0]) {
        if (!callingFlag.classList.contains('active')) { callingFlag.classList.add('active'); }
      }
      else {
        if (callingFlag.classList.contains('active')) { callingFlag.classList.remove('active'); }
      }
    });
  }
  statusPopupItems.forEach(statusPopupItem => {
    statusPopupItem.addEventListener('click', function() {
      let icon = statusPopupItem.querySelector('.section__account_softphone-control_popup-icon svg');
      let iconClone = icon.cloneNode(true);
      let statusSymbolSVG = statusSymbol.querySelector('svg');
      let statusItemTitle = statusPopupItem.querySelector('.section__account_softphone-control_popup-title').textContent;
      if (statusSymbolSVG) { statusSymbolSVG.remove(); }
      statusSymbol.append(iconClone);
      statusTitle.textContent = statusItemTitle;
    });
  });
  softphoneQuit.addEventListener('click', function() {
    if (softphoneMenu.classList.contains('active')) { softphoneMenu.classList.remove('active'); }
    if (phonecall.classList.contains('active')) { phonecall.classList.remove('active'); }
    if (statusPopup.classList.contains('visible')) { statusPopup.classList.remove('visible'); }
    if (statusArrow.classList.contains('rotate')) { statusArrow.classList.remove('rotate'); }
    if (frameBlock.classList.contains('menu-visible')) { frameBlock.classList.remove('menu-visible'); }
  });
}
/* --------------------------------------------------- */

/* Home Info Button clicking and home-info blocks appeareance */
// const homeInfoButtons
// const homeInfoBlocks
for (let i = 0; i < homeInfoButtons.length; i++) {
  homeInfoButtons[i].addEventListener('click', function() {
    if (homeInfoButtons[i].classList.contains('inactive')) { return; }
    else { homeInfoBlocks[i].classList.toggle('inactive'); }
  });
}

/* -------------------------------------------------- */

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let profileClosest = target.closest('.header__account-navigate_profile');
  let popupClosest = target.closest('.header__account-navigate_popup');
  let noticesClosest = target.closest('.header__account-navigate_bell');
  let popupNoticesClosest = target.closest('.header__account-navigate_notices');
  let supportClosest = target.closest('.header__account-navigate_question');
  let popupSupportClosest = target.closest('.header__account-navigate_support');
  let statusControlClosest = target.closest('.section__account_softphone-control_status');
  let dialAccountsClosest = target.closest('.section__account_softphone-content_dial-account');

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

  if (statusControlClosest) { return; }
  else {
    if (statusPopup.classList.contains('visible')) { statusPopup.classList.remove('visible'); }
    if (statusArrow.classList.contains('rotate')) { statusArrow.classList.remove('rotate'); }
  }

  if (dialAccountsClosest) { return; }
  else {
    if (dialAccountSelect.classList.contains('open')) { dialAccountSelect.classList.remove('open'); }
    if (dialAccountsList.classList.contains('active')) { dialAccountsList.classList.remove('active'); }
    if (dialAccountArrow.classList.contains('rotate')) { dialAccountArrow.classList.remove('rotate'); }
  }
});
/* -------------------------------------------------------- */

/* Filling color when we pulling the thumb in Slider-bar-volume */
function setBarVolume() {
  volumeFill.style.width = `${volumeSlider.value}%`;
  volumeSlider.oninput = function() {
    volumeFill.style.width = `${this.value}%`;
  }
}
setBarVolume();
/* -------------------------------------------------------- */


/* Home-tap Active-call Microphone clicing on-off */
homeActiveMicrophone.addEventListener('click', function() {
  homeActiveMicrophone.classList.toggle('off');
  const iconON = homeActiveMicrophone.querySelector('svg:first-child');
  const iconOFF = homeActiveMicrophone.querySelector('svg:last-child');
  if (homeActiveMicrophone.classList.contains('off')) {
    if (!iconON.classList.contains('inactive')) { iconON.classList.add('inactive'); }
    if (iconOFF.classList.contains('inactive')) { iconOFF.classList.remove('inactive'); }
  } else {
    if (iconON.classList.contains('inactive')) { iconON.classList.remove('inactive'); }
    if (!iconOFF.classList.contains('inactive')) { iconOFF.classList.add('inactive'); }
  }
});
/* ------------------------------------------------------- */

/* Mark Blacklist in Acitons-menu */
// homeActionsBlacklist, actionButton, actionMenu, actionCommentForm, actionCommentAdd, actionComment
function actionFunctional(var_1, var_2, var_3, var_4, var_5, var_6) {

  var_1.addEventListener('click', function() {
    var_1.classList.toggle('marked');
    const mark = var_1.querySelector('svg');
    if (var_1.classList.contains('marked')) {
      if (mark.classList.contains('inactive')) { mark.classList.remove('inactive'); }
    } else {
      if (!mark.classList.contains('inactive')) { mark.classList.add('inactive'); }
    }
  });
  /* ------------------------------------------------------ */
  
  /* Action-button to open action-menu */
  var_2.addEventListener('click', function() {
    var_2.classList.toggle('open');
    if (var_2.classList.contains('open')) {
      if (var_3.classList.contains('inactive')) { var_3.classList.remove('inactive'); }
    } else {
      if (!var_3.classList.contains('inactive')) { var_3.classList.add('inactive'); }
    }
  });
  /* ------------------------------------------------------ */
  
  /* Add Comment */
  var_4.addEventListener('click', function(event) {
    event.preventDefault();
  });
  
  
  var_5.addEventListener('click', function() {
    var_6.classList.toggle('open');
    if (var_6.classList.contains('open')) {
      if (var_4.classList.contains('inactive')) { var_4.classList.remove('inactive'); }
    } else {
      if (!var_4.classList.contains('inactive')) { var_4.classList.add('inactive'); }
    }
  });
}
actionFunctional(homeActionsBlacklist, actionButton, actionMenu, actionCommentForm, actionCommentAdd, actionComment);
actionFunctional(homeActionsBlacklistComplet, actionButtonComplet, actionMenuComplet, actionCommentFormComplet, actionCommentAddComplet, actionCommentComplet);

// homeActionsBlacklist.addEventListener('click', function() {
//   homeActionsBlacklist.classList.toggle('marked');
//   const mark = homeActionsBlacklist.querySelector('svg');
//   if (homeActionsBlacklist.classList.contains('marked')) {
//     if (mark.classList.contains('inactive')) { mark.classList.remove('inactive'); }
//   } else {
//     if (!mark.classList.contains('inactive')) { mark.classList.add('inactive'); }
//   }
// });
// /* ------------------------------------------------------ */

// /* Action-button to open action-menu */
// actionButton.addEventListener('click', function() {
//   actionButton.classList.toggle('open');
//   if (actionButton.classList.contains('open')) {
//     if (actionMenu.classList.contains('inactive')) { actionMenu.classList.remove('inactive'); }
//   } else {
//     if (!actionMenu.classList.contains('inactive')) { actionMenu.classList.add('inactive'); }
//   }
// });
// /* ------------------------------------------------------ */

// /* Add Comment */
// actionCommentForm.addEventListener('click', function(event) {
//   event.preventDefault();
// });


// actionCommentAdd.addEventListener('click', function() {
//   actionComment.classList.toggle('open');
//   if (actionComment.classList.contains('open')) {
//     if (actionCommentForm.classList.contains('inactive')) { actionCommentForm.classList.remove('inactive'); }
//   } else {
//     if (!actionCommentForm.classList.contains('inactive')) { actionCommentForm.classList.add('inactive'); }
//   }
// });
/* ------------------------------------------------------ */

/* Dial Account list clicking */
dialAccountSelect.addEventListener('click', function() {
  dialAccountSelect.classList.toggle('open');
  if (dialAccountSelect.classList.contains('open')) {
    if (!dialAccountsList.classList.contains('active')) { dialAccountsList.classList.add('active'); }
    if (!dialAccountArrow.classList.contains('rotate')) { dialAccountArrow.classList.add('rotate'); }
  } else {
    if (dialAccountsList.classList.contains('active')) { dialAccountsList.classList.remove('active'); }
    if (dialAccountArrow.classList.contains('rotate')) { dialAccountArrow.classList.remove('rotate'); }
  }
});

dialAccountsItems.forEach(dialAccountItem => {
  dialAccountItem.addEventListener('click', function() {
    let accountName = dialAccountSelect.querySelector('p:first-child');
    let accountNumber = dialAccountSelect.querySelector('p:nth-child(2)');
    let itemName = dialAccountItem.querySelector('p:first-child');
    let itemNumber = dialAccountItem.querySelector('p:last-child');
    accountName.textContent = itemName.textContent;
    accountNumber.textContent = itemNumber.textContent;
    if (dialAccountsList.classList.contains('active')) { dialAccountsList.classList.remove('active'); }
    if (dialAccountArrow.classList.contains('rotate')) { dialAccountArrow.classList.remove('rotate'); }
    if (dialAccountSelect.classList.contains('open')) { dialAccountSelect.classList.remove('open'); }
  });
});
/* ------------------------------------------------------ */

/* Dial typing */
function correctPhoneNumber() {
  let value = dialInput.value;
    value = value.replace(/\D+/g, '');
    if (value.substring(0,1) != '1') {
        value = '1' + value;
    }
    let new_value = '+';
    for (let i = 0; i < value.length; i++) {
        if (new_value.length === 2) { new_value += ' (' + value.substring(i,i+1);}
        else if (new_value.length === 7) { new_value += ') ' + value.substring(i,i+1);}
        else if (new_value.length === 12) { new_value += '-' + value.substring(i,i+1);}
        else if (new_value.length === 17) {}
        else {new_value += value.substring(i,i+1);}
    }
    dialInput.value = new_value;
}
correctPhoneNumber();
dialInput.addEventListener('input', function() {
    correctPhoneNumber();
});
dialKeys.forEach(dialKey => {
    let number = dialKey.querySelector('p:first-child');
    // let letter = dialKey.querySelector('p:last-child');
    dialKey.addEventListener('click', function(event) {
        if (number.textContent != '') {
            dialInput.value += number.textContent;
            correctPhoneNumber();
        }
    });
});
dialInputBackspace.addEventListener('click', function() {
    let value = dialInput.value;
    dialInput.value = value.substring(0, value.length - 1);
});
/* ------------------------------------------------------ */

/* active-clicking background*/
function activeClicking(items) {
  items.forEach(item => {
    item.addEventListener('mousedown', function() {
      item.style = "background-color: #E7E9EC";
    });
    item.addEventListener('mouseup', function() {
      item.style = "background-color: none";
    });
    item.addEventListener('touchstart', function() {
      item.style = "background-color: #E7E9EC";
    });
    item.addEventListener('touchend', function() {
      item.style = "background-color: none";
    });
  });
}
activeClicking(callItems);
activeClicking(infoblockItems);
activeClicking(homeActionMenuItems);
/* --------------------------------------------------- */

/* Play-record button in complete-item */
// completePlayRecordButton.addEventListener('click', function() {
//   if (!completePlayRecordButton.classList.contains('play')) {
//     completePlayRecordButton.classList.add('play');
//     if (completePlayRecordButton.classList.contains('pause')) { completePlayRecordButton.classList.remove('pause'); }
//   }
//   else {
//     completePlayRecordButton.classList.remove('play');
//     completePlayRecordButton.classList.add('pause');
//   }

//   let playButton = completePlayRecordButton.querySelector('div > svg:first-child');
//   let pauseButton = completePlayRecordButton.querySelector('div > svg:last-child');
//   if (completePlayRecordButton.classList.contains('pause')) {
//     if (!pauseButton.classList.contains('inactive')) { pauseButton.classList.add('inactive'); }
//     if (playButton.classList.contains('inactive')) { playButton.classList.remove('inactive'); }
//   } else {
//     if (pauseButton.classList.contains('inactive')) { pauseButton.classList.remove('inactive'); }
//     if (!playButton.classList.contains('inactive')) { playButton.classList.add('inactive'); }
//   }
// });
/* ---------------------------------------------------- */


/* Function to automatical open dial-tap */
function getOpenDialTap() {
  if (document.body.clientWidth < 721) { softPhoneActiveMobile(); }
  else { softPhoneActive(); }
  if (softphoneTapItems[0].classList.contains('selected')) { softphoneTapItems[0].classList.remove('selected'); }
  if (softphoneContentItems[0].classList.contains('active')) { softphoneContentItems[0].classList.remove('active'); }
  if (!softphoneTapItems[1].classList.contains('selected')) { softphoneTapItems[1].classList.add('selected'); }
  if (!softphoneContentItems[1].classList.contains('active')) { softphoneContentItems[1].classList.add('active'); }
}
/* ----- */



/* Open Softphone by callig-flag */
callingFlag.addEventListener('click', function() {
  softPhoneActiveMobile();
  if (!softphoneTapItems[0].classList.contains('selected')) { softphoneTapItems[0].classList.add('selected'); }
  if (!softphoneContentItems[0].classList.contains('active')) { softphoneContentItems[0].classList.add('active'); }
  for (let i = 1; i < softphoneTapItems.length; i++) {
    if (softphoneTapItems[i].classList.contains('selected')) { softphoneTapItems[i].classList.remove('selected'); }
  }
});

