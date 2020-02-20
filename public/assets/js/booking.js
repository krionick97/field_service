const addressText = document.querySelector('.block-address_text');
const addressList = document.querySelector('.block-address_list');
const addressListItems = document.querySelectorAll('.block-address_item');
const addressListArrow = document.querySelector('.block-address_arrow');

const arrButton = document.querySelector('.arr-button');
const bookingLeft = document.querySelector('.booking-left');

// const callFromAciton = document.querySelector('.call-fromAction');
const callFromAciton_list = document.querySelector('.call-fromAction_list');
const callFromAciton_listItems = document.querySelectorAll('.call-fromAction_list-item');
const callFromActionText = document.querySelector('.call-fromAction_text > p');
const callFromActionInput = document.querySelector('.call-fromAction_input');
const callFromActionArrow = document.querySelector('.call-fromAction_arrow');
const callFromActionClear = document.querySelector('.call-fromAction_clear');

// const callLeadSource = document.querySelector('.call-leadSource');
const callLeadSource_list = document.querySelector('.call-leadSource_list');
const callLeadSource_listItems = document.querySelectorAll('.call-leadSource_list-item');
const callLeadSourceText = document.querySelector('.call-leadSource_text > p');
const callLeadSourceInput = document.querySelector('.call-leadSource_input');
const callLeadSourceArrow = document.querySelector('.call-leadSource_arrow');
const callLeadSourceClear = document.querySelector('.call-leadSource_clear');

const appointmentTypeButtons = document.querySelectorAll('.call-variant_btn');
const appointmentTypeSearchBlock = document.querySelector('.call-variant_search');

const callCompanyNameText = document.querySelector('.call-company_text');
const callCompanyNameList = document.querySelector('.call-compamy_list');
const callCompanyNameListItems = document.querySelectorAll('.call-company_list-item');
const callCompanyNameListArrow = document.querySelector('.call-company_arrow');

/* List function to open-close */
function listFunction(text, list, listIems, arrow) {
  /* Event to show or to hide address-list by clicking on the adressText */
  text.addEventListener('click', function() {
    text.classList.toggle('open');
    if (text.classList.contains('open')) {
      getListToggle('visible', list, arrow);
    } else {
      getListToggle('hidden', list, arrow);
    }
  });
  /* Event to choose the address in addressText by click the item in addressList */
  listIems.forEach((listIem, index, array) => {
    let mainText = text.querySelector('p');
    if (!array[index].classList.contains('selected')) {
      array[0].classList.add('selected');
      mainText.textContent = array[0].textContent;
    }
    listIem.addEventListener('click', function() {
      mainText.textContent = '';
      mainText.textContent = listIem.textContent;
      if (!listIem.classList.contains('selected')) { listIem.classList.add('selected'); }
      if (text.classList.contains('open')) {
        text.classList.remove('open'); 
        getListToggle('hidden', list, arrow);
      }
      for (let j = index - 1; j >= 0; j--) {
        if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
      }
      for (let k = index + 1; k < array.length; k++) {
        if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
      }
    });
  });
  /* ----------------------------------------------------------------- */
}
/* function to show or to hide address-list and turn the arrow */
function getListToggle(variable, list, arrow) { // variable = visible, variable = hidden;
  if (variable === 'visible') {
    if (!arrow.classList.contains('open')) { arrow.classList.add('open'); }
    if (!list.classList.contains('visible')) { list.classList.add('visible'); }
  }
  if (variable === 'hidden') {
    if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
    if (list.classList.contains('visible')) { list.classList.remove('visible'); }
  }
}
listFunction(addressText, addressList, addressListItems, addressListArrow); // address List
listFunction(callCompanyNameText, callCompanyNameList, callCompanyNameListItems, callCompanyNameListArrow); // company-names List

/* function to show or to hide address-list and turn the arrow */
// function getAdressListToggle(variable) { // variable = visible, variable = hidden;
//   const arrow = addressText.querySelector('.arrow-list');
//   if (variable === 'visible') {
//     if (!arrow.classList.contains('open')) { arrow.classList.add('open'); }
//     if (!addressList.classList.contains('visible')) { addressList.classList.add('visible'); }
//   }
//   if (variable === 'hidden') {
//     if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
//     if (addressList.classList.contains('visible')) { addressList.classList.remove('visible'); }
//   }
// }
// /* Event to show or to hide address-list by clicking on the adressText */
// addressText.addEventListener('click', function() {
//   addressText.classList.toggle('open');
//   if (addressText.classList.contains('open')) {
//     getAdressListToggle('visible');
//   } else {
//     getAdressListToggle('hidden');
//   }
// });
// /* Event to choose the address in addressText by click the item in addressList */
// addressListItems.forEach((addressListItem, index, array) => {
//   let mainText = addressText.querySelector('p');
//   if (!array[index].classList.contains('selected')) {
//     array[0].classList.add('selected');
//     mainText.textContent = array[0].textContent;
//   }
//   addressListItem.addEventListener('click', function() {
//     mainText.textContent = '';
//     mainText.textContent = addressListItem.textContent;
//     if (!addressListItem.classList.contains('selected')) { addressListItem.classList.add('selected'); }
//     if (addressText.classList.contains('open')) {
//       addressText.classList.remove('open'); 
//       getAdressListToggle('hidden');
//     }
//     for (let j = index - 1; j >= 0; j--) {
//       if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
//     }
//     for (let k = index + 1; k < array.length; k++) {
//       if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
//     }
//   });
// });
/* ----------------------------------------------------------------- */

/* Event to active or inactive left-block with the map by clicking the arr-button */
arrButton.addEventListener('click', function() {
  if (bookingLeft.classList.contains('active')) {
    if (!bookingLeft.classList.contains('collapse')) { bookingLeft.classList.add('collapse'); }
    setTimeout(function() { bookingLeft.classList.remove('active'); }, 80);
  } else {
    if (!bookingLeft.classList.contains('active')) { bookingLeft.classList.add('active'); }
    setTimeout(function() {
      if (bookingLeft.classList.contains('collapse')) { bookingLeft.classList.remove('collapse'); }
    }, 50);
  }
  arrButton.classList.toggle('inactive');
});
/* ----------------------------------------------------------------- */

// callFromActionArrow.addEventListener('click', function() {
//   if (callFromActionInput.classList.contains('active')) {
//     callFromAciton_list.classList.toggle('visible');
//     callFromActionArrow.classList.toggle('open');
//   }
// });
// callFromAciton.addEventListener('click', function() {
//   if (callFromActionInput.classList.contains('active')) { return; }
//   else {
//     callFromAciton_list.classList.toggle('visible');
//     callFromActionArrow.classList.toggle('open');
//   }
//   if (callLeadSource_list.classList.contains('visible')) { callLeadSource_list.classList.remove('visible'); }
//   if (callLeadSourceArrow.classList.contains('open')) { callLeadSourceArrow.classList.remove('open'); }
// });
// callFromActionClear.addEventListener('click', function() {
//   callFromActionText.textContent = '';
//   if (callFromActionInput.classList.contains('active')) { callFromActionInput.classList.remove('active'); }
//   if (!callFromAciton_listItems[0].classList.contains('selected')) { callFromAciton_listItems[0].classList.add('selected'); }
//   for (let i = 1; i < callFromAciton_listItems.length; i++) {
//     if (callFromAciton_listItems[i].classList.contains('selected')) { callFromAciton_listItems[i].classList.remove('selected'); }
//   }
//   callFromActionInput.value = '';
// });
// callFromAciton_listItems.forEach((callFromAciton_listItem, index, array) => {
//   if (!array[index].classList.contains('selected')) {
//     array[1].classList.add('selected');
//     let itemText = array[1].querySelector('p');
//     callFromActionText.textContent = itemText.textContent;
//   }
//   callFromAciton_listItem.addEventListener('click', function() {
//     if (!callFromAciton_listItem.classList.contains('selected')) {
//       callFromAciton_listItem.classList.add('selected');
//       callFromActionText.textContent = '';
//     }
//     if (index === 1) {
//       let itemText = callFromAciton_listItem.querySelector('p');
//       callFromActionText.textContent = itemText.textContent;
//     }
//     if (index === 2) {
//       if (!callFromActionInput.classList.contains('active')) {
//         callFromActionInput.classList.add('active');
//         callFromAciton_list.classList.remove('visible');
//         callFromActionArrow.classList.remove('open');
//       }
//     } else {
//       if (callFromActionInput.classList.contains('active')) { callFromActionInput.classList.remove('active'); }
//     }

//     for (let j = index - 1; j >= 0; j--) {
//       if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
//     }
//     for (let k = index + 1; k < array.length; k++) {
//       if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
//     }
//   });
// });
// callLeadSourceArrow.addEventListener('click', function() {
//   if (callLeadSourceInput.classList.contains('active')) {
//     callLeadSource_list.classList.toggle('visible');
//     callLeadSourceArrow.classList.toggle('open');
//   }
// });
// callLeadSource.addEventListener('click', function() {
//   if (callLeadSourceInput.classList.contains('active')) { return; }
//   else {
//     callLeadSource_list.classList.toggle('visible');
//     callLeadSourceArrow.classList.toggle('open');
//   }
//   if (callFromAciton_list.classList.contains('visible')) { callFromAciton_list.classList.remove('visible'); }
//   if (callFromActionArrow.classList.contains('open')) { callFromActionArrow.classList.remove('open'); }
// });
// callLeadSourceClear.addEventListener('click', function() {
//   callLeadSourceText.textContent = '';
//   if (callLeadSourceInput.classList.contains('active')) { callLeadSourceInput.classList.remove('active'); }
//   if (!callLeadSource_listItems[0].classList.contains('selected')) { callLeadSource_listItems[0].classList.add('selected'); }
//   for (let i = 1; i < callFromAciton_listItems.length; i++) {
//     if (callLeadSource_listItems[i].classList.contains('selected')) { callLeadSource_listItems[i].classList.remove('selected'); }
//   }
//   callLeadSourceInput.value = '';
// });
// callLeadSource_listItems.forEach((callLeadSource_listItem, index, array) => {
//   if (!array[index].classList.contains('selected')) {
//     array[1].classList.add('selected');
//     let itemText = array[1].querySelector('p');
//     callLeadSourceText.textContent = itemText.textContent;
//   }
//   callLeadSource_listItem.addEventListener('click', function() {
//     if (!callLeadSource_listItem.classList.contains('selected')) {
//       callLeadSource_listItem.classList.add('selected');
//       callLeadSourceText.textContent = '';
//     }
//     if (index === 1) {
//       let itemText = callLeadSource_listItem.querySelector('p');
//       callLeadSourceText.textContent = itemText.textContent;
//     }
//     if (index === 2) {
//       if (!callLeadSourceInput.classList.contains('active')) {
//         callLeadSourceInput.classList.add('active');
//         callLeadSource_list.classList.remove('visible');
//         callLeadSourceArrow.classList.remove('open');
//       }
//     } else {
//       if (callLeadSourceInput.classList.contains('active')) { callLeadSourceInput.classList.remove('active'); }
//     }

//     for (let j = index - 1; j >= 0; j--) {
//       if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
//     }
//     for (let k = index + 1; k < array.length; k++) {
//       if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
//     }
//   });
// });


/* ----------------callFromAction------------------------------------------------- */
callFromActionArrow.addEventListener('click', function() {
    callFromAciton_list.classList.toggle('visible');
    callFromActionArrow.classList.toggle('open');
});
callFromActionText.addEventListener('click', function() {
    callFromAciton_list.classList.toggle('visible');
    callFromActionArrow.classList.toggle('open');
  if (callLeadSource_list.classList.contains('visible')) { callLeadSource_list.classList.remove('visible'); }
  if (callLeadSourceArrow.classList.contains('open')) { callLeadSourceArrow.classList.remove('open'); }
});
callFromActionClear.addEventListener('click', function() {
  callFromActionText.innerHTML = '&nbsp;';
  if (callFromActionInput.classList.contains('active')) { callFromActionInput.classList.remove('active'); }
  if (!callFromAciton_listItems[0].classList.contains('selected')) { callFromAciton_listItems[0].classList.add('selected'); }
  for (let i = 1; i < callFromAciton_listItems.length; i++) {
    if (callFromAciton_listItems[i].classList.contains('selected')) { callFromAciton_listItems[i].classList.remove('selected'); }
  }
  callFromActionInput.value = '';
});
callFromAciton_listItems.forEach((callFromAciton_listItem, index, array) => {
  callFromAciton_listItem.addEventListener('click', function() {
    if (!callFromAciton_listItem.classList.contains('selected')) {
      callFromAciton_listItem.classList.add('selected');
    }
    let itemText = callFromAciton_listItem.querySelector('p');
    if (itemText.textContent === 'Other') {
      callFromActionText.textContent = '';
      if (!callFromActionInput.classList.contains('active')) {
        callFromActionInput.classList.add('active');
      }
    } else {
      if (callFromActionInput.classList.contains('active')) { callFromActionInput.classList.remove('active'); }
        callFromActionText.textContent = itemText.textContent;
        callFromActionInput.value = '';
    }
    callFromAciton_list.classList.remove('visible');
    callFromActionArrow.classList.remove('open');
    for (let j = index - 1; j >= 0; j--) {
      if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
    }
    for (let k = index + 1; k < array.length; k++) {
      if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
    }
  });
});

/* ----------------callLeadSource------------------------------------------------- */
callLeadSourceArrow.addEventListener('click', function() {
    callLeadSource_list.classList.toggle('visible');
    callLeadSourceArrow.classList.toggle('open');
});
callLeadSourceText.addEventListener('click', function() {
    callLeadSource_list.classList.toggle('visible');
    callLeadSourceArrow.classList.toggle('open');
  if (callFromAciton_list.classList.contains('visible')) { callFromAciton_list.classList.remove('visible'); }
  if (callFromActionArrow.classList.contains('open')) { callFromActionArrow.classList.remove('open'); }
});
callLeadSourceClear.addEventListener('click', function() {
  callLeadSourceText.innerHTML = '&nbsp;';
  if (callLeadSourceInput.classList.contains('active')) { callLeadSourceInput.classList.remove('active'); }
  if (!callLeadSource_listItems[0].classList.contains('selected')) { callLeadSource_listItems[0].classList.add('selected'); }
  for (let i = 1; i < callFromAciton_listItems.length; i++) {
    if (callLeadSource_listItems[i].classList.contains('selected')) { callLeadSource_listItems[i].classList.remove('selected'); }
  }
  callLeadSourceInput.value = '';
});
callLeadSource_listItems.forEach((callLeadSource_listItem, index, array) => {
  callLeadSource_listItem.addEventListener('click', function() {
    if (!callLeadSource_listItem.classList.contains('selected')) {
      callLeadSource_listItem.classList.add('selected');
    }
    let itemText = callLeadSource_listItem.querySelector('p');
    if (itemText.textContent === 'Other') {
      callLeadSourceText.textContent = '';
      if (!callLeadSourceInput.classList.contains('active')) {
        callLeadSourceInput.classList.add('active');
      }
    } else {
      if (callLeadSourceInput.classList.contains('active')) { callLeadSourceInput.classList.remove('active'); }
      callLeadSourceText.textContent = itemText.textContent;
      callLeadSourceInput.value = '';
    }
    callLeadSource_list.classList.remove('visible');
    callLeadSourceArrow.classList.remove('open');
    for (let j = index - 1; j >= 0; j--) {
      if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
    }
    for (let k = index + 1; k < array.length; k++) {
      if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
    }
  });
});


/* Clicking outside for popups and others */
window.addEventListener('click', function(event) {
  let target = event.target;
  let blockAddressClosest = target.closest('.block-address');
  let blockAddressListClosest = target.closest('.block-address_list');
  let callCompanyNameClosest = target.closest('.call-company_selector');
  let callCompanyNameListClosest = target.closest('.call-compamy_list');
  let callFromAcitonClosest = target.closest('.call-fromAction');
  let callLeadSourceClosest = target.closest('.call-leadSource');

  if (blockAddressListClosest) { return; }
  else {
    if (blockAddressClosest) { return; }
    if (addressText.classList.contains('open')) {
      addressText.classList.remove('open'); 
      getListToggle('hidden', addressList, addressListArrow);
    }
  }
  if (callCompanyNameListClosest) { return; }
  else {
    if (callCompanyNameClosest) { return; }
    if (callCompanyNameText.classList.contains('open')) {
      callCompanyNameText.classList.remove('open'); 
      getListToggle('hidden', callCompanyNameList, callCompanyNameListArrow);
    }
  }

  if (callFromAcitonClosest) { return; }
  else {
    if (callFromAciton_list.classList.contains('visible')) { callFromAciton_list.classList.remove('visible'); }
    if (callFromActionArrow.classList.contains('open')) { callFromActionArrow.classList.remove('open'); }
  }
  if (callLeadSourceClosest) { return; }
  else {
    if (callLeadSource_list.classList.contains('visible')) { callLeadSource_list.classList.remove('visible'); }
    if (callLeadSourceArrow.classList.contains('open')) { callLeadSourceArrow.classList.remove('open'); }
  }
});
/* --------------------------------------- */

/* Clicking by buttons "Service Call", "Follow  Up", "Recall" and calling the search-block */
appointmentTypeButtons.forEach((appointmentTypeButton, index, array) => {
  if (!array[index].classList.contains('selected')) { array[0].classList.add('selected'); }
  appointmentTypeButton.addEventListener('click', function() {
    if (!appointmentTypeButton.classList.contains('selected')) { appointmentTypeButton.classList.add('selected'); }
    for (let j = index - 1; j >= 0; j--) {
      if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
    }
    for (let k = index + 1; k < array.length; k++) {
      if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
    }

    function getAppointmentTypeSearchBlock(variable) { // variable = active || inactive
      if (variable === 'active') {
        if (!appointmentTypeSearchBlock.classList.contains('active')) { appointmentTypeSearchBlock.classList.add('active'); }
        setTimeout(function() {
          if (appointmentTypeSearchBlock.classList.contains('collapse')) { appointmentTypeSearchBlock.classList.remove('collapse'); }
        }, 80);
      }
      if (variable === 'inactive') {
        if (!appointmentTypeSearchBlock.classList.contains('collapse')) { appointmentTypeSearchBlock.classList.add('collapse'); }
        setTimeout(function() {
          if (appointmentTypeSearchBlock.classList.contains('active')) { appointmentTypeSearchBlock.classList.remove('active'); }
        }, 80);
      }
    } // function to active or inactive the search-block
    if (index === 1) { // second and third button activate the search-block
      getAppointmentTypeSearchBlock('active');
    } else if (index === 2) {
      getAppointmentTypeSearchBlock('active');
    } else {
      getAppointmentTypeSearchBlock('inactive');
    }
  });
});





