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
const callCompanyNameList = document.querySelector('.call-company_list');
const callCompanyNameListItems = document.querySelectorAll('.call-company_list-item');
const callCompanyNameListArrow = document.querySelector('.call-company_arrow');

const unitTypeText = document.querySelector('.call-units_add-unitType_text');
const unitTypeList = document.querySelector('.call-units_add-unitType_list');
const unitTypeListItems = document.querySelectorAll('.call-units_add-unitType_list-item');
const unitTypeListArrow = document.querySelector('.call-units_add-unitType_arrow');

const unitText = document.querySelector('.call-units_add-unit_text');
const unitList = document.querySelector('.call-units_add-unit_list');
const unitInput = document.querySelector('.call-units_add-unit_input');
const unitListItems = document.querySelectorAll('.call-units_add-unit_list-item');
const unitListArrow = document.querySelector('.call-units_add-unit_arrow');

const brandText = document.querySelector('.call-units_add-brand_text');
const brandList = document.querySelector('.call-units_add-brand_list');
const brandInput = document.querySelector('.call-units_add-brand_input');
const brandListItems = document.querySelectorAll('.call-units_add-brand_list-item');
const brandListArrow = document.querySelector('.call-units_add-brand_arrow');

const addressUnitsText = document.querySelector('.call-units_add-address_text');
const addressUnitsList = document.querySelector('.call-units_add-address_list');
const addressUnitsListItems = document.querySelectorAll('.call-units_add-address_list-item');
const addressUnitsListArrow = document.querySelector('.call-units_add-address_arrow');

const addressesText = document.querySelector('.call-contact_new-addresses_add-propertyType_text');
const addressesList = document.querySelector('.call-contact_new-addresses_add-propertyType_list');
const addressesListItems = document.querySelectorAll('.call-contact_new-addresses_add-propertyType_list-item');
const addressesListArrow = document.querySelector('.call-contact_new-addresses_add-propertyType_arrow');



/* List function to open-close */
function listFunction(text, list, listIems, arrow, input) {
  /* Event to show or to hide address-list by clicking on the adressText */
  text.addEventListener('click', function() {
    text.classList.toggle('open');
    if (text.classList.contains('open')) {
      getListToggle('visible', list, arrow);
    } else {
      getListToggle('hidden', list, arrow);
    }
  });
  if (arrow) {
    arrow.addEventListener('click', function() {
      text.classList.toggle('open');
      if (text.classList.contains('open')) {
        getListToggle('visible', list, arrow);
      } else {
        getListToggle('hidden', list, arrow);
      }
    });
  }
  /* Event to choose the address in addressText by click the item in addressList */
  listIems.forEach((listIem, index, array) => {
    let mainText = text.querySelector('p');
    if (!array[index].classList.contains('selected')) {
      array[0].classList.add('selected');
      mainText.textContent = array[0].textContent;
    }
    listIem.addEventListener('click', function() {
      let itemText = listIem.querySelector('p');
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
      if (input) {
        if (itemText.textContent === 'other' || itemText.textContent === 'Other') {
          mainText.innerHTML = '&nbsp;';
          input.value = '';
          input.classList.add('active');
        } else {
          input.value = '';
          input.classList.remove('active');
        }
      }
    });
  });
  /* ----------------------------------------------------------------- */
}
/* function to show or to hide address-list and turn the arrow */
function getListToggle(variable, list, arrow) { // variable = visible, variable = hidden;
  if (variable === 'visible') {
    if (arrow) {
      if (!arrow.classList.contains('open')) { arrow.classList.add('open'); }
    }
    if (!list.classList.contains('visible')) { list.classList.add('visible'); }
  }
  if (variable === 'hidden') {
    if (arrow) {
      if (arrow.classList.contains('open')) { arrow.classList.remove('open'); }
    }
    if (list.classList.contains('visible')) { list.classList.remove('visible'); }
  }
}
listFunction(addressText, addressList, addressListItems, addressListArrow); // address List
listFunction(callCompanyNameText, callCompanyNameList, callCompanyNameListItems, callCompanyNameListArrow); // company-names List
listFunction(unitTypeText, unitTypeList, unitTypeListItems, unitTypeListArrow);
listFunction(unitText, unitList, unitListItems, unitListArrow, unitInput);
listFunction(brandText, brandList, brandListItems, brandListArrow, brandInput);
listFunction(addressUnitsText, addressUnitsList, addressUnitsListItems, addressUnitsListArrow);

/* Property Type List in New Addresses Contact */
listFunction(addressesText, addressesList, addressesListItems, addressesListArrow);
let propertyTypeText = document.querySelector('.call-contact_new-addresses_add-propertyType_text > p');
addressesListItems.forEach(addressesListItem => {
  propertyTypeText.style.color = '#D0D3DA';
  addressesListItem.addEventListener('click', function() {
    let itemText = addressesListItem.querySelector('p');
    if (itemText.textContent === 'Property Type') { propertyTypeText.style.color = '#D0D3DA'; } 
    else { propertyTypeText.style.color = '#000000'; }
  });
});
/* ------------- */

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


/* -------- Action List in Units --------- */
// function listFunction(text, list, listIems, arrow) {
//   /* Event to show or to hide address-list by clicking on the adressText */
//   text.addEventListener('click', function() {
//     text.classList.toggle('open');
//     if (text.classList.contains('open')) {
//       getListToggle('visible', list, arrow);
//     } else {
//       getListToggle('hidden', list, arrow);
//     }
//   });
//   /* Event to choose the address in addressText by click the item in addressList */
//   listIems.forEach((listIem, index, array) => {
//     let mainText = text.querySelector('p');
//     if (!array[index].classList.contains('selected')) {
//       array[0].classList.add('selected');
//       mainText.textContent = array[0].textContent;
//     }
//     listIem.addEventListener('click', function() {
//       mainText.textContent = '';
//       mainText.textContent = listIem.textContent;
//       if (!listIem.classList.contains('selected')) { listIem.classList.add('selected'); }
//       if (text.classList.contains('open')) {
//         text.classList.remove('open'); 
//         getListToggle('hidden', list, arrow);
//       }
//       for (let j = index - 1; j >= 0; j--) {
//         if (array[j].classList.contains('selected')) { array[j].classList.remove('selected'); }
//       }
//       for (let k = index + 1; k < array.length; k++) {
//         if (array[k].classList.contains('selected')) { array[k].classList.remove('selected'); }
//       }
//     });
//   });
//   /* ----------------------------------------------------------------- */
// }
/* --------------------------------------- */

/* Clicking outside for popups and others */
window.addEventListener('click', function(event) {
  let target = event.target;
  let blockAddressClosest = target.closest('.block-address');
  let blockAddressListClosest = target.closest('.block-address_list');
  let callCompanyNameClosest = target.closest('.call-company_selector');
  let callCompanyNameListClosest = target.closest('.call-compamy_list');
  let callFromAcitonClosest = target.closest('.call-fromAction');
  let callLeadSourceClosest = target.closest('.call-leadSource');
  let unitTypeListBlockClosest = target.closest('.call-units_add-unitType_listBlock');
  let unitTypeListClosest = target.closest('.call-units_add-unitType_list');
  let unitListBlockClosest = target.closest('.call-units_add-unit_listBlock');
  let unitListClosest = target.closest('.call-units_add-unit_list');
  let brandListBlockClosest = target.closest('.call-units_add-brand_listBlock');
  let brandListClosest = target.closest('.call-units_add-brand_list');
  let addressesUnitsListBlockClosest = target.closest('.call-units_add-address_listBlock');
  let addressUnitsListClosest = target.closest('.call-units_add-address_list');
  let addressesPropertyTypeClosest = target.closest('.call-contact_new-addresses_add-propertyType');
  let addressesPropertyTypeListClosest = target.closest('.call-contact_new-addresses_add-propertyType_list');

  function clickOutsideCloseList(blockClosest, blockListClosest, blockText, blockList, blockArrow) {
    if (blockListClosest) { return; }
    else {
      if (blockClosest) { return; }
      if (blockText.classList.contains('open')) {
        blockText.classList.remove('open'); 
        getListToggle('hidden', blockList, blockArrow);
      }
    }  
  }
  clickOutsideCloseList(blockAddressClosest, blockAddressListClosest, addressText, addressList, addressListArrow);
  clickOutsideCloseList(callCompanyNameClosest, callCompanyNameListClosest, callCompanyNameText, callCompanyNameList, callCompanyNameListArrow);
  clickOutsideCloseList(unitTypeListClosest, unitTypeListBlockClosest, unitTypeText, unitTypeList, unitTypeListArrow);
  clickOutsideCloseList(unitListBlockClosest, unitListClosest, unitText, unitList, unitListArrow);
  clickOutsideCloseList(brandListBlockClosest, brandListClosest, brandText, brandList, brandListArrow);
  clickOutsideCloseList(addressesUnitsListBlockClosest, addressUnitsListClosest, addressUnitsText, addressUnitsList, addressUnitsListArrow);
  clickOutsideCloseList(addressesPropertyTypeClosest, addressesPropertyTypeListClosest, addressesText, addressesList, addressesListArrow);

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


/* ------- Add of Phone-number ----------------- */
let addNewPhoneBlock = document.querySelector('.call-contact_new-phones');
let addNewPhoneItemInput = addNewPhoneBlock.querySelector('.call-contact_new-block:last-child');
let addNewPhoneButton = addNewPhoneItemInput.querySelector('.btn-add');
let addNewPhoneItems = addNewPhoneBlock.querySelectorAll('.call-contact_new-block');
let phoneName = addNewPhoneItemInput.querySelector('.call-contact_new-phone_add > .call-contact_new-phone_data > .call-contact_new-phone_name > .call-contact_new-phone_input');
let phoneNumber = addNewPhoneItemInput.querySelector('.call-contact_new-phone_add > .call-contact_new-phone_data > .call-contact_new-phone_phone > .call-contact_new-phone_input');
let phoneNameTitle = addNewPhoneItemInput.querySelector('.call-contact_new-phone_add > .call-contact_new-phone_data > .call-contact_new-phone_name > label');
let phoneNumberTitle = addNewPhoneItemInput.querySelector('.call-contact_new-phone_add > .call-contact_new-phone_data > .call-contact_new-phone_phone > label');
let id_phone = 0;

addNewPhoneButton.addEventListener('click', function() {
  if (phoneName.value != '' && phoneNumber.value != '') {
    id_phone += 1;
    let addNewPhoneItemBlock = document.createElement('div');
    let addNewPhoneItem = document.createElement('div');
    addNewPhoneItemBlock.classList.add('call-contact_new-block');
    addNewPhoneItem.classList.add('call-contact_new-phone_item');
    addNewPhoneItem.insertAdjacentHTML('beforeend', `
      <div class="call-contact_new-block_text">
        <p>${phoneName.value}<span>:</span></p>
        <p>${phoneNumber.value}</p>
      </div>
      <div class="call-contact_new-checkboxes">
        <div class="check">
          <input class="input-checkbox" type="checkbox" name="checkbox-phone-payer-10${id_phone}" id="checkbox-phone-payer-10${id_phone}"/>
          <label class="checkbox" for="checkbox-mainphone-payer-10${id_phone}">
            <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.2002 3.80002L5.0402 8.60002L10.8002 1.40002" stroke="#6093DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </div>
        <div class="check">
          <input class="input-checkbox" type="checkbox" name="checkbox-phone-payer-20${id_phone}" id="checkbox-phone-payer-20${id_phone}"/>
          <label class="checkbox" for="checkbox-phone-payer-20${id_phone}">
            <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.2002 3.80002L5.0402 8.60002L10.8002 1.40002" stroke="#6093DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </div>
      </div>
    `);
    addNewPhoneItemBlock.append(addNewPhoneItem);
    addNewPhoneItemBlock.insertAdjacentHTML('beforeend', `
      <div class="call-contact_new-block_delete">
        <div class="cancel">
          <input class="input-cancelbox" type="checkbox" name="cancelbox-tenantPhone-10${id_phone}" id="cancelbox-tenantPhone-10${id_phone}"/>
          <label class="cancelbox" for="cancelbox-tenantPhone-10${id_phone}">
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 1.25L1.25 8.75M1.25 1.25L8.75 8.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        </div>
        <div class="trash call-contact_new-block_trash">
          <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84242 1.28C8.84242 0.57312 8.27684 0 7.57926 0H4.42137C3.72379 0 3.15821 0.57312 3.15821 1.28V1.92H0V2.56H0.710526L1.26284 15.04C1.26284 15.04 1.46147 16 2.21021 16C2.73032 16 4.83221 16 5.68389 16C5.68389 16 5.94032 16 6.31547 16C7.03911 16 9.56542 16 9.78916 16C10.5382 16 10.7368 15.04 10.7368 15.04L11.2633 2.56H12V1.92H8.84242V1.28ZM3.79004 1.27998C3.79004 0.926384 4.12014 0.639984 4.52688 0.639984H7.47425C7.88099 0.639984 8.21109 0.926704 8.21109 1.27998V1.91998H3.79004V1.27998ZM9.79014 15.3597H6.31646H5.68488H2.21119C2.21119 15.3597 1.94846 15.2144 1.89541 14.7197C1.84267 14.2249 1.34277 2.55967 1.34277 2.55967H10.6058C10.6061 2.55967 10.159 14.2249 10.1062 14.7197C10.0532 15.2144 9.79014 15.3597 9.79014 15.3597ZM8.52745 3.84002H7.89587L7.58008 14.08H8.21166L8.52745 3.84002ZM4.42132 14.08L4.10553 3.84002H3.47363L3.78942 14.08H4.42132ZM5.68457 3.84002H6.31615V14.08H5.68457V3.84002Z" />
          </svg>
        </div>
      </div>
    `);
    addNewPhoneItemInput.before(addNewPhoneItemBlock);
    phoneNameTitle.style.color = '#000000';
    phoneNumberTitle.style.color = '#0000';
    phoneName.value = '';
    phoneNumber.value = '';
  } else {
    if (phoneName.value === '') { phoneNameTitle.style.color = '#FF0000'; }
    if (phoneNumber.value === '') { phoneNumberTitle.style.color = '#FF0000'; }
  }
});

let delNewPhoneButtons = document.querySelectorAll('.call-contact_new-block_trash');
delNewPhoneButtons.forEach(delNewPhoneButton => {
  delNewPhoneButton.addEventListener('click', function() {
    let parent = delNewPhoneButton.parentNode;
    console.log(parent);
  });
});
/* ------------------------------------ */

/* ------- Add of Phone-number ----------------- */
let addNewAddressBlock = document.querySelector('.call-contact_new-addresses');
let addNewAddressItemInput = addNewAddressBlock.querySelector('.call-contact_new-block:last-child');
let addNewAddressButton = addNewAddressItemInput.querySelector('.btn-add');
let addNewAddressItems = addNewAddressBlock.querySelectorAll('.call-contact_new-block');
let addNewAddressInputs = addNewAddressBlock.querySelectorAll('.call-contact_new-addresses_add-input');

let id_address = 0;

addNewAddressButton.addEventListener('click', function() {
  if (addNewAddressInputs[0].value != ''
      && addNewAddressInputs[1].value != ''
      && addNewAddressInputs[2].value != ''
      && addNewAddressInputs[3].value != ''
      && addNewAddressInputs[4].value != ''
      ) {
        id_address += 1;
        let addNewAddressItemBlock = document.createElement('div');
        let addNewAddressItem = document.createElement('div');
        addNewAddressItemBlock.classList.add('call-contact_new-block');
        addNewAddressItem.classList.add('call-contact_new-addresses_item');
        let propertyTypeValue = function() {
          if (addressesListItems[0].classList.contains('selected')) {
            return '';
          } else {
            return addressesText.textContent;
          }
        }
        // if (addressesText.textContent === 'Property Type') {
        //   console.log(addressesText.textContent);
        // }
        addNewAddressItem.insertAdjacentHTML('beforeend', `
          <div class="call-contact_new-addresses_data">
            <p><span class="call-contact_new-addresses_data zip">${addNewAddressInputs[0].value}</span>&nbsp;<span class="call-contact_new-addresses_data street">${addNewAddressInputs[1].value}</span>&nbsp;#<span class="call-contact_new-addresses_data appartment">${addNewAddressInputs[2].value}</span>,&nbsp;<span class="call-contact_new-addresses_data city">${addNewAddressInputs[3].value}</span>,&nbsp;<span class="call-contact_new-addresses_data state">${addNewAddressInputs[4].value}</span></span></p>
            <p>Property Type:&nbsp;<span class="call-contact_new-addresses_data propertyType">${propertyTypeValue()}</span>&nbsp;</p>
            <p>Note:&nbsp;<span class="call-contact_new-addresses_data note">${addNewAddressInputs[5].value}</span></p>
          </div>
          <div class="call-contact_new-block_delete">
            <div class="cancel">
              <input class="input-cancelbox" type="checkbox" name="cancelbox-address-10${id_address}" id="cancelbox-address-10${id_address}"/>
              <label class="cancelbox" for="cancelbox-address-10${id_address}">
                <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 1.25L1.25 8.75M1.25 1.25L8.75 8.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </label>
            </div>
            <div class="trash call-contact_new-block_trash">
              <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.84242 1.28C8.84242 0.57312 8.27684 0 7.57926 0H4.42137C3.72379 0 3.15821 0.57312 3.15821 1.28V1.92H0V2.56H0.710526L1.26284 15.04C1.26284 15.04 1.46147 16 2.21021 16C2.73032 16 4.83221 16 5.68389 16C5.68389 16 5.94032 16 6.31547 16C7.03911 16 9.56542 16 9.78916 16C10.5382 16 10.7368 15.04 10.7368 15.04L11.2633 2.56H12V1.92H8.84242V1.28ZM3.79004 1.27998C3.79004 0.926384 4.12014 0.639984 4.52688 0.639984H7.47425C7.88099 0.639984 8.21109 0.926704 8.21109 1.27998V1.91998H3.79004V1.27998ZM9.79014 15.3597H6.31646H5.68488H2.21119C2.21119 15.3597 1.94846 15.2144 1.89541 14.7197C1.84267 14.2249 1.34277 2.55967 1.34277 2.55967H10.6058C10.6061 2.55967 10.159 14.2249 10.1062 14.7197C10.0532 15.2144 9.79014 15.3597 9.79014 15.3597ZM8.52745 3.84002H7.89587L7.58008 14.08H8.21166L8.52745 3.84002ZM4.42132 14.08L4.10553 3.84002H3.47363L3.78942 14.08H4.42132ZM5.68457 3.84002H6.31615V14.08H5.68457V3.84002Z" fill="#FF0000"/>
              </svg>
            </div>
          </div>
        `);
        addNewAddressItemBlock.append(addNewAddressItem);
        addNewAddressItemInput.before(addNewAddressItemBlock);
        for (let i = 0; i < addNewAddressInputs.length; i++) {
          addNewAddressInputs[i].style = 'border-color: #D0D3DA';
          addNewAddressInputs[i].value = '';
        }
      } else {
        if (addNewAddressInputs[0].value === '') { addNewAddressInputs[0].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[1].value === '') { addNewAddressInputs[1].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[2].value === '') { addNewAddressInputs[2].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[3].value === '') { addNewAddressInputs[3].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[4].value === '') { addNewAddressInputs[4].style = 'border-color: #FF0000'; }
      }

});

/* ------------------------------------ */

