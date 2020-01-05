'use strict'

const burgerButton = document.querySelector('.header__account-navigate_burger');
const markerButtons = document.querySelectorAll('.header__account-navigate_marker');
const accountMenu = document.querySelector('.section__account-menu');
const accountMenuList = document.querySelector('.section__account-menu_list');
const menuLabel = document.querySelector('.menu-label');
const menuItems = document.querySelectorAll('.section__account-menu_item');
const searchButton = document.querySelector('.header__account-navigate_search');
const searchInput = document.querySelector('.header__account-navigate_search-input');

/* HTML-content for menu-item */
// Account Menu-items
function getAccountMenuItem(title, imgSource, imgID) {
  let item = document.createElement('li');
  item.classList.add('section__account-menu_item');
  let itemHTML = `
    <div class="section__account-menu_item-block">
      <div class="section__account-menu_item-bg"></div>
      <div class="section__account-menu_item-image"><img src="${imgSource}" id="${imgID}" alt="Icon" /></div>
      <h3 class="section__account-menu_item-title">${title}</h3>
    </div>
  `;
  item.insertAdjacentHTML('beforeend', itemHTML);
  return item;
}

// Messenger Menu-items
function getMessengerMenuItem(title, imgSource, imgID) {
  let item = document.createElement('li');
  item.classList.add('section__messenger-menu_item');
  let itemHTML = `
    <div class="section__messenger-menu_item-block">
      <div class="section__messenger-menu_item-bg"></div>
      <div class="section__messenger-menu_item-image"><img src="${imgSource}" id="${imgID}" alt="Icon" /></div>
      <h3 class="section__messenger-menu_item-title">${title}</h3>
    </div>
  `;
  item.insertAdjacentHTML('beforeend', itemHTML);
  return item;
}

// Settings Menu-items
function getSettingsMenuItem(title, imgSource, imgID) {
  let item = document.createElement('li');
  item.classList.add('section__settings-menu_item');
  let itemHTML = `
    <div class="section__settings-menu_item-block">
      <div class="section__settings-menu_item-bg"></div>
      <div class="section__settings-menu_item-image"><img src="${imgSource}" id="${imgID}" alt="Icon" /></div>
      <h3 class="section__settings-menu_item-title">${title}</h3>
    </div>
  `;
  item.insertAdjacentHTML('beforeend', itemHTML);
  return item;
}

// Account menu-fragment
function getAccountMenuFragment() {
  let fragment = document.createDocumentFragment();
  let arrData = [
    {
      title: 'Dashboard',
      imgSource: 'assets/images/dashboard_icon.svg',
      imgID: ''  
    },
    {
      title: 'Schedule',
      imgSource: 'assets/images/schedule_icon.svg',
      imgID: ''  
    },
    {
      title: 'Booking',
      imgSource: 'assets/images/booking_icon.svg',
      imgID: ''  
    },
    {
      title: 'Calls',
      imgSource: 'assets/images/voice_icon.svg',
      imgID: ''  
    },
    {
      title: 'SMS',
      imgSource: 'assets/images/sms_icon.svg',
      imgID: ''  
    },
    {
      title: 'Clients',
      imgSource: 'assets/images/clients_icon.svg',
      imgID: ''  
    },
    {
      title: 'Appointments',
      imgSource: 'assets/images/appointments_icon.svg',
      imgID: ''  
    },
    {
      title: 'Jobs',
      imgSource: 'assets/images/jobs_icon.svg',
      imgID: ''  
    },
    {
      title: 'Estimates',
      imgSource: 'assets/images/estimates_icon.svg',
      imgID: ''  
    },
    {
      title: 'Invoices',
      imgSource: 'assets/images/invoice_icon.svg',
      imgID: ''  
    },
    {
      title: 'Payments',
      imgSource: 'assets/images/payments_icon.svg',
      imgID: ''  
    },
    {
      title: 'Absences',
      imgSource: 'assets/images/absences_icon.svg',
      imgID: 'absences-icon-1'  
    },
    {
      title: 'Tickets',
      imgSource: 'assets/images/tickets_icon.svg',
      imgID: ''  
    }
  ];

  for (let dataItem of arrData) {
    let accountMenuItem = getAccountMenuItem(dataItem.title, dataItem.imgSource, dataItem.imgID);
    fragment.append(accountMenuItem);
  }
  return fragment;
}

// Messenger menu-fragment
function getMessengerMenuFragment() {
  let fragment = document.createDocumentFragment();
  let arrData = [
    {
      title: 'Messenger',
      imgSource: 'assets/images/dashboard_icon.svg',
      imgID: ''  
    },
    {
      title: 'Schedule',
      imgSource: 'assets/images/schedule_icon.svg',
      imgID: ''  
    },
    {
      title: 'Booking',
      imgSource: 'assets/images/booking_icon.svg',
      imgID: ''  
    },
    {
      title: 'Calls',
      imgSource: 'assets/images/voice_icon.svg',
      imgID: ''  
    },
    {
      title: 'SMS',
      imgSource: 'assets/images/sms_icon.svg',
      imgID: ''  
    },
    {
      title: 'Clients',
      imgSource: 'assets/images/clients_icon.svg',
      imgID: ''  
    },
    {
      title: 'Appointments',
      imgSource: 'assets/images/appointments_icon.svg',
      imgID: ''  
    }
  ];

  for (let dataItem of arrData) {
    let messengerMenuItem = getMessengerMenuItem(dataItem.title, dataItem.imgSource, dataItem.imgID);
    fragment.append(messengerMenuItem);
  }
  return fragment;
}

// Settings menu-fragment
function getSettingsMenuFragment() {
  let fragment = document.createDocumentFragment();
  let arrData = [
    {
      title: 'Settings',
      imgSource: 'assets/images/dashboard_icon.svg',
      imgID: ''  
    },
    {
      title: 'Schedule',
      imgSource: 'assets/images/schedule_icon.svg',
      imgID: ''  
    },
    {
      title: 'Booking',
      imgSource: 'assets/images/booking_icon.svg',
      imgID: ''  
    },
    {
      title: 'Calls',
      imgSource: 'assets/images/voice_icon.svg',
      imgID: ''  
    },
    {
      title: 'SMS',
      imgSource: 'assets/images/sms_icon.svg',
      imgID: ''  
    },
    {
      title: 'Clients',
      imgSource: 'assets/images/clients_icon.svg',
      imgID: ''  
    },
    {
      title: 'Appointments',
      imgSource: 'assets/images/appointments_icon.svg',
      imgID: ''  
    }
  ];

  for (let dataItem of arrData) {
    let settingsMenuItem = getSettingsMenuItem(dataItem.title, dataItem.imgSource, dataItem.imgID);
    fragment.append(settingsMenuItem);
  }
  return fragment;
}



/* -------------------------------- */

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
if (markerButtons) {
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
}
/* -------------------------------------------------- */

/* Menu Item Button Clicking Active */
for (let i = 0; i < menuItems.length; i++) {
  if (!menuItems[i].classList.contains('active')) menuItems[0].classList.add('active')
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