/* ============================================================
   ResetMate -- script.js  (v1.3.0)

   Catalogue data lives in catalogue.js and must be loaded
   before this file. This file handles UI population, cascade
   logic, rendering, and form submission only.
   ============================================================ */


/* ============================================================
   LOOKUP HELPERS
   ============================================================ */

/* Returns sorted array of { id, name } for the manufacturer dropdown */
function getManufacturers() {
  var result = [];
  var keys = Object.keys(catalogue).sort(function(a, b) {
    return catalogue[a].name.localeCompare(catalogue[b].name);
  });
  for (var i = 0; i < keys.length; i++) {
    result.push({ id: keys[i], name: catalogue[keys[i]].name });
  }
  return result;
}

/* Returns vehicles array for a given manufacturer id, or [] */
function getVehiclesFor(manufacturerId) {
  if (!catalogue[manufacturerId]) return [];
  return catalogue[manufacturerId].vehicles;
}

/* Returns resets array for a given manufacturer + vehicle, or [] */
function getResetsFor(manufacturerId, vehicleId) {
  var vehicles = getVehiclesFor(manufacturerId);
  for (var i = 0; i < vehicles.length; i++) {
    if (vehicles[i].id === vehicleId) return vehicles[i].resets;
  }
  return [];
}

/* Returns a single reset procedure object, or null */
function findReset(manufacturerId, vehicleId, resetType) {
  var resets = getResetsFor(manufacturerId, vehicleId);
  for (var i = 0; i < resets.length; i++) {
    if (resets[i].type === resetType) return resets[i];
  }
  return null;
}


/* ============================================================
   SELECT HELPERS -- clear and rebuild a <select> element
   ============================================================ */

/* Empties a select back to just its placeholder option */
function clearSelect(selectEl, placeholderText) {
  selectEl.innerHTML = '<option value="">' + placeholderText + '</option>';
  selectEl.disabled  = true;
  selectEl.value     = '';
}

/* Populates a select from an array of objects.
   labelKey: the property to use as option.textContent
   valueKey: the property to use as option.value (default: 'id') */
function populateSelect(selectEl, items, labelKey, valueKey) {
  valueKey = valueKey || 'id';
  for (var i = 0; i < items.length; i++) {
    var opt = document.createElement('option');
    opt.value       = items[i][valueKey];
    opt.textContent = items[i][labelKey];
    selectEl.appendChild(opt);
  }
  selectEl.disabled = false;
}


/* ============================================================
   DOM REFS
   ============================================================ */

var manufacturerSelect = document.getElementById('manufacturerSelect');
var vehicleSelect      = document.getElementById('vehicleSelect');
var resetSelect        = document.getElementById('resetSelect');
var showStepsBtn       = document.getElementById('showStepsBtn');
var resultArea         = document.getElementById('resultArea');


/* ============================================================
   INIT MANUFACTURER DROPDOWN
   Runs once on page load -- all other dropdowns start disabled.
   ============================================================ */

populateSelect(manufacturerSelect, getManufacturers(), 'name');


/* ============================================================
   CASCADE: manufacturer -> vehicle
   ============================================================ */

manufacturerSelect.addEventListener('change', function() {
  var mId = this.value;

  clearSelect(vehicleSelect, 'Select vehicle...');
  clearSelect(resetSelect,   'Select vehicle first...');
  resultArea.innerHTML = '';

  if (!mId) return;

  var vehicles = getVehiclesFor(mId);
  populateSelect(vehicleSelect, vehicles, 'name');
});


/* ============================================================
   CASCADE: vehicle -> reset type
   ============================================================ */

vehicleSelect.addEventListener('change', function() {
  var mId = manufacturerSelect.value;
  var vId = this.value;

  clearSelect(resetSelect, 'Select reset type...');
  resultArea.innerHTML = '';

  if (!vId) return;

  var resets = getResetsFor(mId, vId);
  populateSelect(resetSelect, resets, 'label', 'type');
});


/* ============================================================
   RENDER: Warning (selection validation)
   ============================================================ */

function renderWarning(message) {
  resultArea.innerHTML =
    '<div class="warning-card">' +
      '<span class="warning-icon">&#9888;</span>' +
      '<div class="warning-text">' +
        '<strong>Selection needed</strong>' +
        message +
      '</div>' +
    '</div>';
}


/* ============================================================
   RENDER: Result card header (shared by all three render paths)
   ============================================================ */

function buildResultHeader(manufacturerName, vehicleName, resetLabel) {
  return '<div class="result-header">' +
    '<span class="result-vehicle">' + manufacturerName + ' ' + vehicleName + '</span>' +
    '<span class="result-sep">&middot;</span>' +
    '<span class="result-reset-type">' + resetLabel + '</span>' +
  '</div>';
}


/* ============================================================
   RENDER: Verified procedure -- numbered steps + optional note
   ============================================================ */

function renderVerified(manufacturerName, vehicleName, reset) {
  var stepsHTML = '';
  for (var i = 0; i < reset.steps.length; i++) {
    stepsHTML +=
      '<li class="step-item">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<span class="step-text">' + reset.steps[i] + '</span>' +
      '</li>';
  }

  var notesHTML = '';
  if (reset.notes && reset.notes.trim() !== '') {
    notesHTML =
      '<div class="result-notes">' +
        '<span class="result-notes-icon">&#9432;</span>' +
        '<p class="result-notes-text">' + reset.notes + '</p>' +
      '</div>';
  }

  resultArea.innerHTML =
    '<div class="result-card">' +
      buildResultHeader(manufacturerName, vehicleName, reset.label) +
      '<ol class="steps-list">' + stepsHTML + '</ol>' +
      notesHTML +
    '</div>';

  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


/* ============================================================
   RENDER: Unverified procedure -- no steps, informational state
   ============================================================ */

function renderUnverified(manufacturerName, vehicleName, reset) {
  resultArea.innerHTML =
    '<div class="result-card">' +
      buildResultHeader(manufacturerName, vehicleName, reset.label) +
      '<div class="result-info result-info--unverified">' +
        '<span class="result-info-icon">&#9888;</span>' +
        '<div class="result-info-body">' +
          '<p class="result-info-heading">Procedure not yet verified</p>' +
          '<p class="result-info-text">ResetMate only publishes fully verified, step-by-step reset instructions. ' +
          'We are working on confirming this procedure and will add it as soon as it has been tested.</p>' +
          '<p class="result-info-text">If you know the correct steps for this vehicle, use the <strong>Can\'t find your vehicle?</strong> form below to let us know.</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


/* ============================================================
   RENDER: Scanner-only procedure -- informational state
   ============================================================ */

function renderScannerOnly(manufacturerName, vehicleName, reset) {
  resultArea.innerHTML =
    '<div class="result-card">' +
      buildResultHeader(manufacturerName, vehicleName, reset.label) +
      '<div class="result-info result-info--scanner">' +
        '<span class="result-info-icon">&#128268;</span>' +
        '<div class="result-info-body">' +
          '<p class="result-info-heading">Diagnostic scanner required</p>' +
          '<p class="result-info-text">' + reset.message + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


/* ============================================================
   EVENT: Show Steps button
   Dispatches to the correct render function based on status.
   Unverified entries route to renderUnverified regardless of
   whether steps is populated, so no placeholder steps can leak.
   ============================================================ */

showStepsBtn.addEventListener('click', function() {
  var mId       = manufacturerSelect.value;
  var vId       = vehicleSelect.value;
  var resetType = resetSelect.value;

  if (!mId) {
    renderWarning('Please select a manufacturer.');
    return;
  }
  if (!vId) {
    renderWarning('Please select a vehicle.');
    return;
  }
  if (!resetType) {
    renderWarning('Please select a reset type.');
    return;
  }

  var reset = findReset(mId, vId, resetType);

  if (!reset) {
    renderWarning('No procedure found for that combination. Check back soon.');
    return;
  }

  var manufacturerName = catalogue[mId].name;
  var vehicleName      = '';
  var vehicles         = getVehiclesFor(mId);
  for (var i = 0; i < vehicles.length; i++) {
    if (vehicles[i].id === vId) { vehicleName = vehicles[i].name; break; }
  }

  if (reset.status === 'verified' && reset.steps && reset.steps.length > 0) {
    renderVerified(manufacturerName, vehicleName, reset);
  } else if (reset.status === 'scanner-only') {
    renderScannerOnly(manufacturerName, vehicleName, reset);
  } else {
    renderUnverified(manufacturerName, vehicleName, reset);
  }
});


/* ============================================================
   MISSING VEHICLE REQUEST FORM
   ---------------------------------------------------------------
   Currently shows a confirmation message on submit.

   TO CONNECT TO A BACKEND LATER:
   Replace the contents of submitMissingVehicleRequest() below
   with a fetch() POST to your chosen endpoint.
   The `data` object is structured and ready to send.

   Example (Formspree):
     fetch('https://formspree.io/f/YOUR_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });
   ============================================================ */

function submitMissingVehicleRequest(data) {
  /* STUB: replace this body when connecting to a backend.
     `data` contains: { manufacturer, model, year } */
  console.log('Missing vehicle request:', data);

  var feedback = document.getElementById('requestFeedback');
  feedback.textContent = "Thanks -- we've noted your request and will add this vehicle soon.";
  feedback.className   = 'request-feedback request-feedback--success';

  document.getElementById('reqManufacturer').value = '';
  document.getElementById('reqModel').value        = '';
  document.getElementById('reqYear').value         = '';
}

document.getElementById('missingVehicleForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var manufacturer = document.getElementById('reqManufacturer').value.trim();
  var model        = document.getElementById('reqModel').value.trim();
  var year         = document.getElementById('reqYear').value.trim();
  var feedback     = document.getElementById('requestFeedback');

  if (!manufacturer || !model) {
    feedback.textContent = 'Please fill in at least the manufacturer and model.';
    feedback.className   = 'request-feedback request-feedback--error';
    return;
  }

  submitMissingVehicleRequest({ manufacturer: manufacturer, model: model, year: year });
});


/* ============================================================
   FOOTER YEAR
   ============================================================ */

var yearEl = document.getElementById('footer-year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
