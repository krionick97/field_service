const addressText = document.querySelector('.block-address_text');
const addressList = document.querySelector('.block-address_list');
const addressListItems = document.querySelectorAll('.block-address_item');
const addressListArrow = document.querySelector('.block-address_arrow');
const addressBlock = document.querySelector('.block-address');

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
const callCompanyNameBlock = document.querySelector('.call-company_selector');

const unitTypeText = document.querySelector('.call-units_add-unitType_text');
const unitTypeList = document.querySelector('.call-units_add-unitType_list');
const unitTypeListItems = document.querySelectorAll('.call-units_add-unitType_list-item');
const unitTypeListArrow = document.querySelector('.call-units_add-unitType_arrow');
const unitTypeListBlock = document.querySelector('.call-units_add-unitType_listBlock');

const unitText = document.querySelector('.call-units_add-unit_text');
const unitList = document.querySelector('.call-units_add-unit_list');
const unitInput = document.querySelector('.call-units_add-unit_input');
const unitListItems = document.querySelectorAll('.call-units_add-unit_list-item');
const unitListArrow = document.querySelector('.call-units_add-unit_arrow');
const unitBlock = document.querySelector('.call-units_add-unit_listBlock');

const brandText = document.querySelector('.call-units_add-brand_text');
const brandList = document.querySelector('.call-units_add-brand_list');
const brandInput = document.querySelector('.call-units_add-brand_input');
const brandListItems = document.querySelectorAll('.call-units_add-brand_list-item');
const brandListArrow = document.querySelector('.call-units_add-brand_arrow');
const brandBlock = document.querySelector('.call-units_add-brand_listBlock');

const addressUnitsText = document.querySelector('.call-units_add-address_text');
const addressUnitsList = document.querySelector('.call-units_add-address_list');
const addressUnitsListItems = document.querySelectorAll('.call-units_add-address_list-item');
const addressUnitsListArrow = document.querySelector('.call-units_add-address_arrow');
const addressUnitsBlock = document.querySelector('.call-units_add-address_listBlock');

const addressesText = document.querySelector('.call-contact_new-addresses_add-propertyType_text');
const addressesList = document.querySelector('.call-contact_new-addresses_add-propertyType_list');
const addressesListItems = document.querySelectorAll('.call-contact_new-addresses_add-propertyType_list-item');
const addressesListArrow = document.querySelector('.call-contact_new-addresses_add-propertyType_arrow');
const addressesPropTypeBlock = document.querySelector('.call-contact_new-addresses_add-propertyType');

const dataPropertyTypeText = document.querySelector('.call-contact_new-addresses_data-propertyType_text');
const dataPropertyTypeList = document.querySelector('.call-contact_new-addresses_data-propertyType_list');
const dataPropertyTypeListItems = document.querySelectorAll('.call-contact_new-addresses_data-propertyType_list-item');
const dataPropertyTypeListArrow = document.querySelector('.call-contact_new-addresses_data-propertyType_arrow');
const dataPropertyTypeBlock = document.querySelector('.call-contact_new-addresses_data-propertyType');

const bookingDurationText = document.querySelector('.call-bookingSettings_duration-listText');
const bookingDurationList = document.querySelector('.call-bookingSettings_duration-list');
const bookingDurationListItems = document.querySelectorAll('.call-bookingSettings_duration-listItem');
const bookingDurationBlock = document.querySelector('.call-bookingSettings_duration-listBlock');

const bookingOntimeFromText = document.querySelector('.call-bookingSettings_ontime-from-listText');
const bookingOntimeFromList = document.querySelector('.call-bookingSettings_ontime-from-list');
const bookingOntimeFromListItems = document.querySelectorAll('.call-bookingSettings_ontime-from-listItem');
const bookingOntimeFromBlock = document.querySelector('.call-bookingSettings_ontime-listBlock:nth-child(2)');

const bookingOntimeTillText = document.querySelector('.call-bookingSettings_ontime-till-listText');
const bookingOntimeTillList = document.querySelector('.call-bookingSettings_ontime-till-list');
const bookingOntimeTillListItems = document.querySelectorAll('.call-bookingSettings_ontime-till-listItem');
const bookingOntimeTillBlock = document.querySelector('.call-bookingSettings_ontime-listBlock:nth-child(4)');

/* List function to open-close */
function listFunction(text, list, listIems, arrayIndexSelect, arrow, input) {
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
      array[arrayIndexSelect].classList.add('selected');
      mainText.textContent = array[arrayIndexSelect].textContent;
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

/* Function to clost the list by clicking outside */
function clickOutsideCloseList(text, list, wholeBlock, arrow) {
  window.addEventListener('click', function(event) {
    let target = event.target;
    let blockClosest = target.closest(`.${wholeBlock.classList[0]}`);
    let blockListClosest = target.closest(`.${list.classList[0]}`);
  
    if (blockListClosest) { return; }
    else {
      if (blockClosest) { return; }
      if (text.classList.contains('open')) {
        text.classList.remove('open');
        if (arrow) { getListToggle('hidden', list, arrow); }
        else { getListToggle('hidden', list); }
      }
    }
  });
}
/* --------------------------------- */

listFunction(addressText, addressList, addressListItems, 0, addressListArrow); // address List
clickOutsideCloseList(addressText, addressList, addressBlock, addressListArrow);

listFunction(callCompanyNameText, callCompanyNameList, callCompanyNameListItems, 0, callCompanyNameListArrow); // company-names List
clickOutsideCloseList(callCompanyNameText, callCompanyNameList, callCompanyNameBlock, callCompanyNameListArrow);

listFunction(unitTypeText, unitTypeList, unitTypeListItems, 0, unitTypeListArrow);
clickOutsideCloseList(unitTypeText, unitTypeList, unitTypeListBlock, unitTypeListArrow);

listFunction(unitText, unitList, unitListItems, 0, unitListArrow, unitInput);
clickOutsideCloseList(unitText, unitList, unitBlock, unitListArrow);

listFunction(brandText, brandList, brandListItems, 0, brandListArrow, brandInput);
clickOutsideCloseList(brandText, brandList, brandBlock, brandListArrow);

listFunction(addressUnitsText, addressUnitsList, addressUnitsListItems, 0, addressUnitsListArrow);
clickOutsideCloseList(addressUnitsText, addressUnitsList, addressUnitsBlock, addressUnitsListArrow);


/* Property Type in current Address Contact */
listFunction(dataPropertyTypeText, dataPropertyTypeList, dataPropertyTypeListItems, 0, dataPropertyTypeListArrow);
clickOutsideCloseList(dataPropertyTypeText, dataPropertyTypeList, dataPropertyTypeBlock, dataPropertyTypeListArrow);
/* --------------- */

/* Property Type List in New Addresses Contact */
listFunction(addressesText, addressesList, addressesListItems, 0, addressesListArrow);
clickOutsideCloseList(addressesText, addressesList, addressesPropTypeBlock, addressesListArrow);
/* ------------- */

listFunction(bookingDurationText, bookingDurationList, bookingDurationListItems, 3);
clickOutsideCloseList(bookingDurationText, bookingDurationList, bookingDurationBlock);

listFunction(bookingOntimeFromText, bookingOntimeFromList, bookingOntimeFromListItems, 19);
clickOutsideCloseList(bookingOntimeFromText, bookingOntimeFromList, bookingOntimeFromBlock);

listFunction(bookingOntimeTillText, bookingOntimeTillList, bookingOntimeTillListItems, 23);
clickOutsideCloseList(bookingOntimeTillText, bookingOntimeTillList, bookingOntimeTillBlock);

// console.log(bookingOntimeTillListItems[23]);

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
/* ----------------------------------------------------------------- */

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
/* ----------------------------------------------------------------- */

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
/* ----------------------------------------------------------------- */


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

    let itemNewPhoneDelButton = addNewPhoneItemBlock.querySelector('.call-contact_new-block_trash');
    itemNewPhoneDelButton.addEventListener('click', function() {
      let itemParentNode = itemNewPhoneDelButton.parentNode.parentNode;
      itemParentNode.remove();
    });
  } else {
    if (phoneName.value === '') { phoneNameTitle.style.color = '#FF0000'; }
    if (phoneNumber.value === '') { phoneNumberTitle.style.color = '#FF0000'; }
  }
});
/* ------------------------------------ */

/* ------- Add of Phone-number ----------------- */
let addNewAddressBlock = document.querySelector('.call-contact_new-addresses');
let addNewAddressItemInput = addNewAddressBlock.querySelector('.call-contact_new-block:last-child');
let addNewAddressButton = addNewAddressItemInput.querySelector('.btn-add');
let addNewAddressItems = addNewAddressBlock.querySelectorAll('.call-contact_new-block');
let addNewAddressInputs = addNewAddressBlock.querySelectorAll('.call-contact_new-addresses_add-input');

let id_address = 0;
let propertyTypeText = addressesText.querySelector('p');
function dataPropertylistFunction(text, list, listIems, arrow, input) {
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
    // dataPropertyTypeText.style.color = '#D0D3DA';
    let mainText = text.querySelector('p');
    listIem.addEventListener('click', function() {
      let itemText = listIem.querySelector('p');
      // if (itemText.textContent === 'Property Type') { dataPropertyTypeText.style.color = '#D0D3DA'; } 
      // else { dataPropertyTypeText.style.color = '#000000'; }
      mainText.textContent = '';
      mainText.textContent = listIem.textContent;
      // if (!listIem.classList.contains('selected')) { listIem.classList.add('selected'); }
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
addNewAddressButton.addEventListener('click', function() {
  if (addNewAddressInputs[0].value != ''
      && addNewAddressInputs[2].value != ''
      && addNewAddressInputs[3].value != ''
      && addNewAddressInputs[4].value != ''
      ) {
        id_address += 1;
        let addNewAddressItemBlock = document.createElement('div');
        let addNewAddressItem = document.createElement('div');
        addNewAddressItemBlock.classList.add('call-contact_new-block');
        addNewAddressItem.classList.add('call-contact_new-addresses_item');

        // let propertyTypeValue = function() {
        //   if (addressesListItems[0].classList.contains('selected')) {
        //     return `<span color="#D0D3DA">${addressesText.textContent}</span>`;
        //   } else {
        //     return addressesText.textContent;
        //   }
        // }

        let appartmentNumber = function() {
          if (addNewAddressInputs[1].value != '') { return `#${addNewAddressInputs[1].value}`; }
          else { return ''; }
        }
        addNewAddressItem.insertAdjacentHTML('beforeend', `
          <div class="call-contact_new-addresses_data">
          <p class="call-contact_new-addresses_data-text"><span class="call-contact_new-addresses_data zip">${addNewAddressInputs[4].value}</span>&nbsp;<span class="call-contact_new-addresses_data street">${addNewAddressInputs[0].value}</span>&nbsp;<span class="call-contact_new-addresses_data appartment">${appartmentNumber()}</span>,&nbsp;<span class="call-contact_new-addresses_data city">${addNewAddressInputs[2].value}</span>,&nbsp;<span class="call-contact_new-addresses_data state">${addNewAddressInputs[3].value}</span></p>
          <div class="call-contact_new-addresses_data-block">
              <div class="call-contact_new-addresses_data-propertyType" id="address-data-propertyType-0${id_address}">
                <div class="data-border call-contact_new-addresses_data-propertyType_text">
                  <p>${addressesText.textContent}</p>
                </div>
                <div class="arrow-list call-contact_new-addresses_data-propertyType_arrow"></div>
                <div class="block-list call-contact_new-addresses_data-propertyType_list">
                  <div class="block-list_item call-contact_new-addresses_data-propertyType_list-item">
                    <p>Residential</p>
                  </div>
                  <div class="block-list_item call-contact_new-addresses_data-propertyType_list-item">
                    <p>Commercial</p>
                  </div>
                  <div class="block-list_item call-contact_new-addresses_data-propertyType_list-item">
                    <p>Industrial</p>
                  </div>
                </div>
              </div>
              <input class="call-contact_new-addresses_data-note" type="text" placeholder="" id="address-data-note-0${id_address}" value="${addNewAddressInputs[5].value}"/>
            </div>
          </div>
          <div class="call-contact_new-block_delete">
            <div class="cancel">
              <input class="input-cancelbox" type="checkbox" name="cancelbox-address-1" id="cancelbox-address-1"/>
              <label class="cancelbox" for="cancelbox-mainphone-1">
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

        const dataPropertyTypeText = addNewAddressItem.querySelector('.call-contact_new-addresses_data-propertyType_text');
        const dataPropertyTypeList = addNewAddressItem.querySelector('.call-contact_new-addresses_data-propertyType_list');
        const dataPropertyTypeListItems = addNewAddressItem.querySelectorAll('.call-contact_new-addresses_data-propertyType_list-item');
        const dataPropertyTypeListArrow = addNewAddressItem.querySelector('.call-contact_new-addresses_data-propertyType_arrow');
        const dataPropertyTypeBlock = addNewAddressItem.querySelector('.call-contact_new-addresses_data-propertyType');

        dataPropertylistFunction(dataPropertyTypeText, dataPropertyTypeList, dataPropertyTypeListItems, dataPropertyTypeListArrow);

        clickOutsideCloseList(dataPropertyTypeText, dataPropertyTypeList, dataPropertyTypeBlock, dataPropertyTypeListArrow);

        let addressItemDelButton = addNewAddressItem.querySelector('.call-contact_new-block_trash');

        addressItemDelButton.addEventListener('click', function() {
          if (addressItemDelButton.classList.contains('inactive')) { return; }
          else {
            let parentItemNode = addressItemDelButton.parentNode.parentNode.parentNode;
            parentItemNode.remove();
          }
        });

      } else {
        if (addNewAddressInputs[0].value === '') { addNewAddressInputs[0].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[2].value === '') { addNewAddressInputs[2].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[3].value === '') { addNewAddressInputs[3].style = 'border-color: #FF0000'; }
        if (addNewAddressInputs[4].value === '') { addNewAddressInputs[4].style = 'border-color: #FF0000'; }
      }

});
/* ------------------------------------ */

/* ---- Delete First Unit -------------*/
const firstUnit = document.querySelector('#unit-add-id-00');
const firstUnitDelButton = firstUnit.querySelector('.call-units_add-data_trash');
firstUnitDelButton.addEventListener('click', function() {
  let parentUnitNode = firstUnitDelButton.parentNode.parentNode.parentNode;
  parentUnitNode.remove();
});
/* ------------- */

/* ------- Add of Unit ----------------- */
const units = document.querySelector('.call-units');
const unitsBlock = units.querySelector('.call-units_content');
const addUnitItemAddButton = units.querySelector('.btn-add');
let unit_id = 0;

addUnitItemAddButton.addEventListener('click', function() {
  unit_id += 1;
  let unitAddItem = document.createElement('div');
  unitAddItem.id = `unit-add-id-0${unit_id}`;
  unitAddItem.classList.add('data-border', 'call-units_add');
  unitAddItem.insertAdjacentHTML('beforeend', `
  <div class="call-units_add-row ">
    <div class="call-units_add-data">
      <p class="call-units_add-data_title">Unit Type:</p>
      <div class="call-units_add-unitType_listBlock">
        <div class="data-border call-units_add-unitType_text">
          <p>Residential</p>
        </div>
        <div class="arrow-list call-units_add-unitType_arrow"></div>
        <div class="block-list call-units_add-unitType_list">
          <div class="block-list_item call-units_add-unitType_list-item">
            <p>Residential</p>
          </div>
          <div class="block-list_item call-units_add-unitType_list-item">
            <p>Commercial</p>
          </div>
          <div class="block-list_item call-units_add-unitType_list-item">
            <p>Industrial</p>
          </div>
        </div>
      </div>
    </div>
    <div class="call-units_add-data">
      <p class="call-units_add-data_title">Unit:</p>
      <div class="call-units_add-unit_listBlock">
        <div class="data-border call-units_add-unit_text">
          <p>&nbsp;</p>
        </div>
        <input class="call-units_add-unit_input" type="text" placeholder="other"/>
        <div class="arrow-list call-units_add-unit_arrow"></div>
        <div class="block-list call-units_add-unit_list">
          <div class="block-list_item call-units_add-unit_list-item">
            <p>&nbsp;</p>
          </div>
          <div class="block-list_item call-units_add-unit_list-item">
            <p>Refrigerator</p>
          </div>
          <div class="block-list_item call-units_add-unit_list-item">
            <p>Washer</p>
          </div>
          <div class="block-list_item call-units_add-unit_list-item">
            <p>Dryer</p>
          </div>
          <div class="block-list_item call-units_add-unit_list-item">
            <p>Oven</p>
          </div>
          <div class="block-list_item call-units_add-unit_list-item">
            <p>Other</p>
          </div>
        </div>
      </div>
    </div>
    <div class="call-units_add-data">
      <p class="call-units_add-data_title">Brand:</p>
      <div class="call-units_add-brand_listBlock">
        <div class="data-border call-units_add-brand_text">
          <p>&nbsp;</p>
        </div>
        <input class="call-units_add-brand_input" type="text" placeholder="Other"/>
        <div class="arrow-list call-units_add-brand_arrow"></div>
        <div class="block-list call-units_add-brand_list">
          <div class="block-list_item call-units_add-brand_list-item">
            <p>&nbsp;</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>Samsung</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>Bosch</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>Sub-Zero</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>Wolf</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>GE</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>GE Profile</p>
          </div>
          <div class="block-list_item call-units_add-brand_list-item">
            <p>Other</p>
          </div>
        </div>
      </div>
    </div>
    <div class="call-units_add-data">
      <label class="call-units_add-data_title">Model Number:</label>
      <input class="data-border call-units_add-modelNumber_input" type="text"/>
  </div>
</div>
<div class="call-units_add-row">
  <div class="call-units_add-data">
    <label class="call-units_add-data_title">Description:</label>
    <textarea class="data-border call-units_add-description_textarea" name="description-textarea" id="description-textarea"></textarea>
  </div>
  <div class="call-units_add-data">
    <label class="call-units_add-data_title">Diagnostic Fee:</label>
    <input class="data-border call-units_add-diagFee_input" type="number" min="0"/>
  </div>
</div>
<div class="call-units_add-row">
  <div class="call-units_add-data">
    <p class="call-units_add-data_title">Address:</p>
    <div class="call-units_add-address_listBlock">
      <div class="data-border call-units_add-address_text">
        <p>&nbsp;</p>
      </div>
      <div class="arrow-list call-units_add-address_arrow"></div>
      <div class="block-list call-units_add-address_list">
        <div class="block-list_item call-units_add-address_list-item">
          <p>1234 Florida Rt, Fort Mayers, 34354 FL</p>
        </div>
        <div class="block-list_item call-units_add-address_list-item">
          <p>Address_1</p>
        </div>
        <div class="block-list_item call-units_add-address_list-item">
          <p>Address_2</p>
        </div>
        <div class="block-list_item call-units_add-address_list-item">
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
  <div class="call-units_add-data">
    <div class="btn-marking btn-marking-mini saved"><svg viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.56286 9.84218H0.471429L0.0342857 0H3L2.56286 9.84218ZM0 13.2874C0 12.9718 0.0371429 12.7065 0.111429 12.4916C0.191429 12.27 0.3 12.092 0.437143 11.9577C0.574286 11.8234 0.734286 11.726 0.917143 11.6655C1.1 11.6051 1.29714 11.5749 1.50857 11.5749C1.70857 11.5749 1.89714 11.6051 2.07429 11.6655C2.25714 11.726 2.41714 11.8234 2.55429 11.9577C2.69143 12.092 2.8 12.27 2.88 12.4916C2.96 12.7065 3 12.9718 3 13.2874C3 13.5897 2.96 13.8482 2.88 14.0631C2.8 14.278 2.69143 14.456 2.55429 14.597C2.41714 14.7381 2.25714 14.8388 2.07429 14.8993C1.89714 14.9664 1.70857 15 1.50857 15C1.29714 15 1.1 14.9664 0.917143 14.8993C0.734286 14.8388 0.574286 14.7381 0.437143 14.597C0.3 14.456 0.191429 14.278 0.111429 14.0631C0.0371429 13.8482 0 13.5897 0 13.2874Z" fill="white"/>
</svg>
<svg viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 4L7.25 9.5L15.25 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
    <div class="trash call-units_add-data_trash"><svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.84242 1.28C8.84242 0.57312 8.27684 0 7.57926 0H4.42137C3.72379 0 3.15821 0.57312 3.15821 1.28V1.92H0V2.56H0.710526L1.26284 15.04C1.26284 15.04 1.46147 16 2.21021 16C2.73032 16 4.83221 16 5.68389 16C5.68389 16 5.94032 16 6.31547 16C7.03911 16 9.56542 16 9.78916 16C10.5382 16 10.7368 15.04 10.7368 15.04L11.2633 2.56H12V1.92H8.84242V1.28ZM3.79004 1.27998C3.79004 0.926384 4.12014 0.639984 4.52688 0.639984H7.47425C7.88099 0.639984 8.21109 0.926704 8.21109 1.27998V1.91998H3.79004V1.27998ZM9.79014 15.3597H6.31646H5.68488H2.21119C2.21119 15.3597 1.94846 15.2144 1.89541 14.7197C1.84267 14.2249 1.34277 2.55967 1.34277 2.55967H10.6058C10.6061 2.55967 10.159 14.2249 10.1062 14.7197C10.0532 15.2144 9.79014 15.3597 9.79014 15.3597ZM8.52745 3.84002H7.89587L7.58008 14.08H8.21166L8.52745 3.84002ZM4.42132 14.08L4.10553 3.84002H3.47363L3.78942 14.08H4.42132ZM5.68457 3.84002H6.31615V14.08H5.68457V3.84002Z" />
</svg>
    </div>
  </div>
</div>
  `);
  unitsBlock.append(unitAddItem);

  const unitTypeText = unitAddItem.querySelector('.call-units_add-unitType_text');
  const unitTypeList = unitAddItem.querySelector('.call-units_add-unitType_list');
  const unitTypeListItems = unitAddItem.querySelectorAll('.call-units_add-unitType_list-item');
  const unitTypeListArrow = unitAddItem.querySelector('.call-units_add-unitType_arrow');
  const unitTypeListBlock = unitAddItem.querySelector('.call-units_add-unitType_listBlock');

  const unitText = unitAddItem.querySelector('.call-units_add-unit_text');
  const unitList = unitAddItem.querySelector('.call-units_add-unit_list');
  const unitInput = unitAddItem.querySelector('.call-units_add-unit_input');
  const unitListItems = unitAddItem.querySelectorAll('.call-units_add-unit_list-item');
  const unitListArrow = unitAddItem.querySelector('.call-units_add-unit_arrow');
  const unitBlock = unitAddItem.querySelector('.call-units_add-unit_listBlock');
  
  const brandText = unitAddItem.querySelector('.call-units_add-brand_text');
  const brandList = unitAddItem.querySelector('.call-units_add-brand_list');
  const brandInput = unitAddItem.querySelector('.call-units_add-brand_input');
  const brandListItems = unitAddItem.querySelectorAll('.call-units_add-brand_list-item');
  const brandListArrow = unitAddItem.querySelector('.call-units_add-brand_arrow');
  const brandBlock = unitAddItem.querySelector('.call-units_add-brand_listBlock');
  
  const addressUnitsText = unitAddItem.querySelector('.call-units_add-address_text');
  const addressUnitsList = unitAddItem.querySelector('.call-units_add-address_list');
  const addressUnitsListItems = unitAddItem.querySelectorAll('.call-units_add-address_list-item');
  const addressUnitsListArrow = unitAddItem.querySelector('.call-units_add-address_arrow');
  const addressUnitsBlock = unitAddItem.querySelector('.call-units_add-address_listBlock');

  const unitItemDelButton = unitAddItem.querySelector('.call-units_add-data_trash');
  
  listFunction(unitTypeText, unitTypeList, unitTypeListItems, 0, unitTypeListArrow);
  clickOutsideCloseList(unitTypeText, unitTypeList, unitTypeListBlock, unitTypeListArrow);
  listFunction(unitText, unitList, unitListItems, 0, unitListArrow, unitInput);
  clickOutsideCloseList(unitText, unitList, unitBlock, unitListArrow);
  listFunction(brandText, brandList, brandListItems, 0, brandListArrow, brandInput);
  clickOutsideCloseList(brandText, brandList, brandBlock, brandListArrow);
  listFunction(addressUnitsText, addressUnitsList, addressUnitsListItems, 0, addressUnitsListArrow);
  clickOutsideCloseList(addressUnitsText, addressUnitsList, addressUnitsBlock, addressUnitsListArrow);

  unitItemDelButton.addEventListener('click', function() {
    let parentUnitNode = unitItemDelButton.parentNode.parentNode.parentNode;
    parentUnitNode.remove();
  });
});
/* ------------------------------------ */


/* Clicking outside for popups and others */
window.addEventListener('click', function(event) {
  let target = event.target;
  let callFromAcitonClosest = target.closest('.call-fromAction');
  let callLeadSourceClosest = target.closest('.call-leadSource');

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


