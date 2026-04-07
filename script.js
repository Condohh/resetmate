/* ============================================================
   ResetMate — script.js

   This file is loaded at the end of <body> in index.html.
   That means the DOM is fully parsed before any of this code
   runs, so getElementById and addEventListener work directly
   with no DOMContentLoaded wrapper needed.
   ============================================================ */


/* ============================================================
   DATA
   To add a vehicle or reset type, add a new object to this
   array. Nothing else in the codebase needs to change.

   Each entry needs:
     manufacturer — display name for the optgroup heading (e.g. 'Volkswagen')
     vehicleId    — unique slug, used to match dropdown to steps
     vehicleName  — displayed in the dropdown and result header
     resetType    — unique slug, used to match dropdown to steps
     resetLabel   — displayed in the dropdown and result header
     steps        — array of strings, one per numbered step

   To add a new manufacturer: just use a new manufacturer value.
   The dropdown groups are built automatically — no other changes needed.
   ============================================================ */

var procedures = [

  /* --- VW Golf Mk7 (2013-2019) --- */
  {
    manufacturer: 'Volkswagen',
    vehicleId:   'vw-golf-mk7',
    vehicleName: 'Golf Mk7 (2013-2019)',
    resetType:   'oil-service',
    resetLabel:  'Oil Service Reset',
    steps: [
      'Switch the ignition OFF.',
      'Press and hold the trip 0.0 button with the ignition still OFF.',
      'While continuing to hold the trip button, switch the ignition ON.',
      "When 'Reset oil service?' appears on the display, release the trip button, then tap it once to confirm the reset.",
      'Switch the ignition OFF, then back ON normally.',
      'Confirm the oil service warning light has cleared.'
    ]
  },
  {
    manufacturer: 'Volkswagen',
    vehicleId:   'vw-golf-mk7',
    vehicleName: 'Golf Mk7 (2013-2019)',
    resetType:   'inspection',
    resetLabel:  'Inspection Reset',
    steps: [
      'Switch the ignition OFF.',
      'Press and hold the trip 0.0 button with the ignition still OFF.',
      'While continuing to hold the trip button, switch the ignition ON.',
      "When 'Reset oil service?' appears, keep holding the trip button until 'Reset inspection?' appears.",
      'Release the trip button, then tap it once to confirm the inspection reset.',
      'Switch the ignition OFF, then back ON normally.',
      'Confirm the inspection warning light has cleared.'
    ]
  },

  /* --- Audi A3 8V --- */
  {
    manufacturer: 'Audi',
    vehicleId:   'audi-a3-8v',
    vehicleName: 'A3 8V',
    resetType:   'oil-service',
    resetLabel:  'Oil Service Reset',
    steps: [
      'Turn the ignition to position II (accessories on, engine off).',
      'Press and hold the trip reset button on the instrument cluster for 8 seconds until the oil change indicator appears.',
      'Release, then immediately press and hold again for 3 seconds.',
      "The display will show '---' confirming the reset.",
      'Turn the ignition off.',
      'Restart the vehicle and confirm the service light is cleared.'
    ]
  },
  {
    manufacturer: 'Audi',
    vehicleId:   'audi-a3-8v',
    vehicleName: 'A3 8V',
    resetType:   'inspection',
    resetLabel:  'Inspection Reset',
    steps: [
      'Turn the ignition to position II (accessories on, engine off).',
      'Hold the trip reset button on the cluster for 8 seconds until the inspection message appears.',
      'Release, then immediately press and hold again for 3 seconds.',
      "The cluster will confirm with '---' or a clearing spanner icon.",
      'Turn the ignition off and wait 10 seconds.',
      'Restart the vehicle and verify the inspection warning is gone.'
    ]
  },

  /* --- BMW F30 --- */
  {
    manufacturer: 'BMW',
    vehicleId:   'bmw-f30',
    vehicleName: '3 Series F30',
    resetType:   'oil-service',
    resetLabel:  'Oil Service Reset',
    steps: [
      'Press START/STOP without pressing the brake pedal to enter ignition-on mode.',
      'In iDrive, navigate to: Vehicle Info > Service Required.',
      "Scroll to 'Engine Oil' and select it.",
      'Press and hold the BC button (left indicator stalk) for 3 seconds.',
      "Select 'Reset' when the confirmation screen appears.",
      'Press START/STOP to turn off the ignition.',
      'Restart and confirm the CBS oil service indicator is cleared.'
    ]
  },
  {
    manufacturer: 'BMW',
    vehicleId:   'bmw-f30',
    vehicleName: '3 Series F30',
    resetType:   'inspection',
    resetLabel:  'Inspection Reset',
    steps: [
      'Press START/STOP without pressing the brake pedal to enter ignition-on mode.',
      'In iDrive, navigate to: Vehicle Info > Service Required.',
      'Scroll to the Inspection item and select it.',
      'Hold the BC button on the indicator stalk for 3 seconds.',
      "Confirm 'Reset' on the prompt.",
      'Turn ignition off via START/STOP.',
      'Restart and verify the inspection indicator is cleared in the CBS menu.'
    ]
  }

];


/* ============================================================
   HELPERS
   ============================================================ */

/*
   Returns manufacturers in alphabetical order, each with their
   de-duplicated models in alphabetical order. Example output:
   [
     { name: 'Audi',       vehicles: [{ id, name }, ...] },
     { name: 'BMW',        vehicles: [{ id, name }, ...] },
     { name: 'Volkswagen', vehicles: [{ id, name }, ...] }
   ]
*/
function getVehiclesByManufacturer() {
  var groups = {};

  for (var i = 0; i < procedures.length; i++) {
    var p = procedures[i];
    if (!groups[p.manufacturer]) {
      groups[p.manufacturer] = {};
    }
    if (!groups[p.manufacturer][p.vehicleId]) {
      groups[p.manufacturer][p.vehicleId] = p.vehicleName;
    }
  }

  /* Sort manufacturers alphabetically */
  var manufacturerNames = Object.keys(groups).sort();
  var result = [];

  for (var m = 0; m < manufacturerNames.length; m++) {
    var mName    = manufacturerNames[m];
    var modelIds = Object.keys(groups[mName]).sort();
    var vehicles = [];

    for (var v = 0; v < modelIds.length; v++) {
      vehicles.push({ id: modelIds[v], name: groups[mName][modelIds[v]] });
    }

    result.push({ name: mName, vehicles: vehicles });
  }

  return result;
}

/* Returns a de-duplicated list of reset types from the data */
function getResetTypes() {
  var seen = {};
  var result = [];
  for (var i = 0; i < procedures.length; i++) {
    var p = procedures[i];
    if (!seen[p.resetType]) {
      seen[p.resetType] = true;
      result.push({ id: p.resetType, label: p.resetLabel });
    }
  }
  return result;
}

/* Finds the matching procedure object, or returns null */
function findProcedure(vehicleId, resetType) {
  for (var i = 0; i < procedures.length; i++) {
    if (procedures[i].vehicleId === vehicleId && procedures[i].resetType === resetType) {
      return procedures[i];
    }
  }
  return null;
}


/* ============================================================
   POPULATE DROPDOWNS
   Builds the vehicle select using <optgroup> per manufacturer,
   and a flat list for reset types. Runs once on page load.
   ============================================================ */

function populateDropdowns() {
  var vehicleSelect = document.getElementById('vehicleSelect');
  var resetSelect   = document.getElementById('resetSelect');

  /* --- Vehicle dropdown: one <optgroup> per manufacturer --- */
  var groups = getVehiclesByManufacturer();

  for (var m = 0; m < groups.length; m++) {
    var group    = document.createElement('optgroup');
    group.label  = groups[m].name;

    var vehicles = groups[m].vehicles;
    for (var v = 0; v < vehicles.length; v++) {
      var opt = document.createElement('option');
      opt.value       = vehicles[v].id;
      opt.textContent = vehicles[v].name;
      group.appendChild(opt);
    }

    vehicleSelect.appendChild(group);
  }

  /* --- Reset type dropdown: flat list, order from data --- */
  var resetTypes = getResetTypes();
  for (var j = 0; j < resetTypes.length; j++) {
    var opt2 = document.createElement('option');
    opt2.value       = resetTypes[j].id;
    opt2.textContent = resetTypes[j].label;
    resetSelect.appendChild(opt2);
  }
}


/* ============================================================
   RENDER: Warning message
   ============================================================ */

function renderWarning(message) {
  var resultArea = document.getElementById('resultArea');
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
   RENDER: Procedure steps
   ============================================================ */

function renderProcedure(proc) {
  var resultArea = document.getElementById('resultArea');
  var stepsHTML  = '';

  for (var i = 0; i < proc.steps.length; i++) {
    stepsHTML +=
      '<li class="step-item">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<span class="step-text">' + proc.steps[i] + '</span>' +
      '</li>';
  }

  resultArea.innerHTML =
    '<div class="result-card">' +
      '<div class="result-header">' +
        '<span class="result-vehicle">' + proc.manufacturer + ' ' + proc.vehicleName + '</span>' +
        '<span class="result-sep">&middot;</span>' +
        '<span class="result-reset-type">' + proc.resetLabel + '</span>' +
      '</div>' +
      '<ol class="steps-list">' + stepsHTML + '</ol>' +
    '</div>';

  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


/* ============================================================
   EVENT: Show Steps button
   ============================================================ */

document.getElementById('showStepsBtn').addEventListener('click', function () {
  var vehicleId = document.getElementById('vehicleSelect').value;
  var resetType = document.getElementById('resetSelect').value;

  if (!vehicleId && !resetType) {
    renderWarning('Please select a vehicle and a reset type.');
    return;
  }
  if (!vehicleId) {
    renderWarning('Please select a vehicle.');
    return;
  }
  if (!resetType) {
    renderWarning('Please select a reset type.');
    return;
  }

  var proc = findProcedure(vehicleId, resetType);

  if (!proc) {
    renderWarning('No procedure found for that combination. Check back soon.');
    return;
  }

  renderProcedure(proc);
});


/* ============================================================
   INIT — runs immediately when the script is parsed.
   Safe to call directly because this script tag sits at the
   end of <body>, after all HTML elements exist in the DOM.
   ============================================================ */

populateDropdowns();