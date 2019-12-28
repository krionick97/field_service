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
const rowsNumber = document.querySelector('.callList__table-navigate_number > span');
const rowsNumberRest = document.querySelector('.callList__table-navigate_rest > span:first-child');
const rowsNumberList = document.querySelector('.callList__table-navigate_number-list');
const rowsNumberItems = document.querySelectorAll('.callList__table-navigate_number-item');
const rowsArrow = document.querySelector('.callList__table-navigate_arrow');

/* Mode clicking select */
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

/* Clicking Table Navigate Arrow to show Number Arrows */
rowsArrow.addEventListener('click', function() {
  if (!rowsArrow.classList.contains('open') && !rowsNumberList.classList.contains('show')) {
    rowsArrow.classList.add('open');
    rowsNumberList.classList.add('show');
  } else {
    rowsArrow.classList.remove('open');
    rowsNumberList.classList.remove('show');
  }
});

for (let i = 0; i < rowsNumberItems.length; i++) {
  rowsNumberItems[i].addEventListener('click', function() {
    if (!rowsNumberItems[i].classList.contains('selected')) { rowsNumberItems[i].classList.add('selected'); }
    for (let j = i - 1; j >=0; j--) {
      if (rowsNumberItems[j].classList.contains('selected')) { rowsNumberItems[j].classList.remove('selected'); }
    }
    for (let k = i + 1; k < rowsNumberItems.length; k++) {
      if (rowsNumberItems[k].classList.contains('selected')) { rowsNumberItems[k].classList.remove('selected'); }
    }
    let itemText = rowsNumberItems[i].textContent;
    let restRows = +itemText + 1;
    rowsNumber.textContent = itemText;
    rowsNumberRest.textContent = restRows;
  });
}
/* -------------------------------------------------------- */

/* Clicking outside of popup to close and deselect */
window.addEventListener('click', function(event) {
  let target = event.target;
  let controlItem = target.closest('.callList__controls-item');
  let tableNumberBlock = target.closest('.callList__table-navigate_leftBlock');

  /* For Controls Button */
  if (controlItem) { return; /* console.log(controlItem); */ }
  else {
    for (let controlsItem of controlsItems) {
      if (controlsItem.classList.contains('open')) { controlsItem.classList.remove('open'); }
    }
    for (let popup of popups) {
      if (popup.classList.contains('visible')) { popup.classList.remove('visible'); }
    }
  }

  /* For search-input */
  if (target === searchInput_call) { return; }
  else {
    if (searchInput_call.classList.contains('active')) { searchInput_call.classList.remove('active'); }
  }

  /* For popup rows number of the table */
  if (tableNumberBlock) { return; /* console.log(tableNumberBlock); */ }
  else {
    if (rowsArrow.classList.contains('open') && rowsNumberList.classList.contains('show')) {
      rowsArrow.classList.remove('open');
      rowsNumberList.classList.remove('show');
    }
  }
});
/* -------------------------------------------------------- */

