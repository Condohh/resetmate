/* ============================================================
   ResetMate -- script.js  (v1.1)

   DATA STRUCTURE OVERVIEW
   -----------------------
   The top-level object is `catalogue`, keyed by manufacturer slug.

   catalogue
   +-- manufacturerId  (e.g. 'volkswagen')
       +-- name        Display name shown in the dropdown
       +-- vehicles    Array of vehicle objects
           +-- vehicle
               +-- id          Unique slug  (e.g. 'vw-golf-mk7')
               +-- name        Display name (e.g. 'Golf Mk7 (2013-2019)')
               +-- resets      Array of reset procedure objects
                   +-- reset
                       +-- type   Slug  (e.g. 'oil-service')
                       +-- label  Display name (e.g. 'Oil Service Reset')
                       +-- steps  Array of instruction strings
                       +-- notes  Optional string shown below steps (or '')

   HOW TO ADD A NEW MANUFACTURER:
     Add a new key to `catalogue` following the same pattern.

   HOW TO ADD A NEW VEHICLE:
     Push a new object into the manufacturer's `vehicles` array.

   HOW TO ADD A NEW RESET TYPE TO AN EXISTING VEHICLE:
     Push a new object into that vehicle's `resets` array.

   HOW TO ADD NOTES TO A PROCEDURE:
     Populate the `notes` string. Leave it as '' if not needed.
   ============================================================ */


/* ============================================================
   CATALOGUE
   ============================================================ */

var catalogue = {

  /* ------------------------------------------------------------------ */
  volkswagen: {
    name: 'Volkswagen',
    vehicles: [
      {
        id:   'vw-golf-mk7',
        name: 'Golf Mk7 (2013-2019)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              'Switch the ignition OFF.',
              'Press and hold the trip 0.0 button with the ignition still OFF.',
              'While continuing to hold the trip button, switch the ignition ON.',
              "When 'Reset oil service?' appears on the display, release the trip button, then tap it once to confirm the reset.",
              'Switch the ignition OFF, then back ON normally.',
              'Confirm the oil service warning light has cleared.'
            ],
            notes: ''
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              'Switch the ignition OFF.',
              'Press and hold the trip 0.0 button with the ignition still OFF.',
              'While continuing to hold the trip button, switch the ignition ON.',
              "When 'Reset oil service?' appears, keep holding the trip button until 'Reset inspection?' appears.",
              'Release the trip button, then tap it once to confirm the inspection reset.',
              'Switch the ignition OFF, then back ON normally.',
              'Confirm the inspection warning light has cleared.'
            ],
            notes: ''
          }
        ]
      },
      {
        id:   'vw-polo-mk6',
        name: 'Polo Mk6 (2017-2021)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  audi: {
    name: 'Audi',
    vehicles: [

      /* --- A1 8X (2010-2018) --- */
      {
        id:   'audi-a1-8x',
        name: 'A1 8X (2010-2018)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- A3 8V (2012-2020) -- VERIFIED --- */
      {
        id:   'audi-a3-8v',
        name: 'A3 8V (2012-2020)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              'Turn the ignition to position II (accessories on, engine off).',
              'Press and hold the trip reset button on the instrument cluster for 8 seconds until the oil change indicator appears.',
              'Release, then immediately press and hold again for 3 seconds.',
              "The display will show '---' confirming the reset.",
              'Turn the ignition off.',
              'Restart the vehicle and confirm the service light is cleared.'
            ],
            notes: ''
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              'Turn the ignition to position II (accessories on, engine off).',
              'Hold the trip reset button on the cluster for 8 seconds until the inspection message appears.',
              'Release, then immediately press and hold again for 3 seconds.',
              "The cluster will confirm with '---' or a clearing spanner icon.",
              'Turn the ignition off and wait 10 seconds.',
              'Restart the vehicle and verify the inspection warning is gone.'
            ],
            notes: ''
          }
        ]
      },

      /* --- A4 B8 (2008-2015) --- */
      {
        id:   'audi-a4-b8',
        name: 'A4 B8 (2008-2015)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- A4 B9 (2015-2024) --- */
      {
        id:   'audi-a4-b9',
        name: 'A4 B9 (2015-2024)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- A5 B8 (2007-2016) --- */
      {
        id:   'audi-a5-b8',
        name: 'A5 B8 (2007-2016)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- A6 C7 (2011-2018) --- */
      {
        id:   'audi-a6-c7',
        name: 'A6 C7 (2011-2018)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- Q3 8U (2011-2018) --- */
      {
        id:   'audi-q3-8u',
        name: 'Q3 8U (2011-2018)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      },

      /* --- Q5 8R (2008-2017) --- */
      {
        id:   'audi-q5-8r',
        name: 'Q5 8R (2008-2017)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to service menu.',
              '[Placeholder] Step 3 -- confirm oil service reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              '[Placeholder] Step 1 -- switch ignition ON.',
              '[Placeholder] Step 2 -- navigate to inspection menu.',
              '[Placeholder] Step 3 -- confirm inspection reset.',
              '[Placeholder] Step 4 -- switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }

    ]
  },

  /* ------------------------------------------------------------------ */
  bmw: {
    name: 'BMW',
    vehicles: [
      {
        id:   'bmw-3-series-f30',
        name: '3 Series F30 (2012-2019)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              'Press START/STOP without pressing the brake pedal to enter ignition-on mode.',
              'In iDrive, navigate to: Vehicle Info > Service Required.',
              "Scroll to 'Engine Oil' and select it.",
              'Press and hold the BC button (left indicator stalk) for 3 seconds.',
              "Select 'Reset' when the confirmation screen appears.",
              'Press START/STOP to turn off the ignition.',
              'Restart and confirm the CBS oil service indicator is cleared.'
            ],
            notes: ''
          },
          {
            type:  'inspection',
            label: 'Inspection Reset',
            steps: [
              'Press START/STOP without pressing the brake pedal to enter ignition-on mode.',
              'In iDrive, navigate to: Vehicle Info > Service Required.',
              'Scroll to the Inspection item and select it.',
              'Hold the BC button on the indicator stalk for 3 seconds.',
              "Confirm 'Reset' on the prompt.",
              'Turn ignition off via START/STOP.',
              'Restart and verify the inspection indicator is cleared in the CBS menu.'
            ],
            notes: ''
          }
        ]
      },
      {
        id:   'bmw-1-series-f20',
        name: '1 Series F20 (2011-2019)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  mercedes: {
    name: 'Mercedes-Benz',
    vehicles: [
      {
        id:   'mercedes-c-class-w205',
        name: 'C-Class W205 (2014-2021)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  toyota: {
    name: 'Toyota',
    vehicles: [
      {
        id:   'toyota-corolla-e210',
        name: 'Corolla E210 (2018-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  honda: {
    name: 'Honda',
    vehicles: [
      {
        id:   'honda-civic-mk10',
        name: 'Civic Mk10 (2016-2021)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  nissan: {
    name: 'Nissan',
    vehicles: [
      {
        id:   'nissan-qashqai-j11',
        name: 'Qashqai J11 (2013-2021)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  mazda: {
    name: 'Mazda',
    vehicles: [
      {
        id:   'mazda-3-bp',
        name: 'Mazda3 BP (2019-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  subaru: {
    name: 'Subaru',
    vehicles: [
      {
        id:   'subaru-impreza-gk',
        name: 'Impreza GK (2017-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  mitsubishi: {
    name: 'Mitsubishi',
    vehicles: [
      {
        id:   'mitsubishi-outlander-gf',
        name: 'Outlander GF (2012-2021)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  suzuki: {
    name: 'Suzuki',
    vehicles: [
      {
        id:   'suzuki-swift-az',
        name: 'Swift AZ (2017-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  peugeot: {
    name: 'Peugeot',
    vehicles: [
      {
        id:   'peugeot-208-mk2',
        name: '208 Mk2 (2019-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  renault: {
    name: 'Renault',
    vehicles: [
      {
        id:   'renault-clio-mk5',
        name: 'Clio Mk5 (2019-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  citroen: {
    name: 'Citroen',
    vehicles: [
      {
        id:   'citroen-c3-mk3',
        name: 'C3 Mk3 (2016-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  skoda: {
    name: 'Skoda',
    vehicles: [
      {
        id:   'skoda-octavia-mk4',
        name: 'Octavia Mk4 (2020-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  seat: {
    name: 'SEAT',
    vehicles: [
      {
        id:   'seat-ibiza-mk5',
        name: 'Ibiza Mk5 (2017-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ */
  volvo: {
    name: 'Volvo',
    vehicles: [
      {
        id:   'volvo-xc40-mk1',
        name: 'XC40 Mk1 (2017-present)',
        resets: [
          {
            type:  'oil-service',
            label: 'Oil Service Reset',
            steps: [
              '[Placeholder] Switch ignition ON.',
              '[Placeholder] Navigate to service menu and confirm reset.',
              '[Placeholder] Switch ignition OFF and verify.'
            ],
            notes: 'Procedure not yet verified. Steps will be updated shortly.'
          }
        ]
      }
    ]
  }

};


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

/* Populates a select from an array of { id, name/label } objects */
function populateSelect(selectEl, items, nameKey) {
  for (var i = 0; i < items.length; i++) {
    var opt = document.createElement('option');
    opt.value       = items[i].id;
    opt.textContent = items[i][nameKey];
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

  /* Always clear downstream selects and result when manufacturer changes */
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

  /* Clear downstream and result when vehicle changes */
  clearSelect(resetSelect, 'Select reset type...');
  resultArea.innerHTML = '';

  if (!vId) return;

  var resets = getResetsFor(mId, vId);
  populateSelect(resetSelect, resets, 'label');
});


/* ============================================================
   RENDER: Warning message
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
   RENDER: Procedure steps (+ optional notes)
   ============================================================ */

function renderProcedure(manufacturerName, vehicleName, reset) {
  var stepsHTML = '';

  for (var i = 0; i < reset.steps.length; i++) {
    stepsHTML +=
      '<li class="step-item">' +
        '<span class="step-num">' + (i + 1) + '</span>' +
        '<span class="step-text">' + reset.steps[i] + '</span>' +
      '</li>';
  }

  /* Notes block -- only rendered if notes string is non-empty */
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
      '<div class="result-header">' +
        '<span class="result-vehicle">' + manufacturerName + ' ' + vehicleName + '</span>' +
        '<span class="result-sep">&middot;</span>' +
        '<span class="result-reset-type">' + reset.label + '</span>' +
      '</div>' +
      '<ol class="steps-list">' + stepsHTML + '</ol>' +
      notesHTML +
    '</div>';

  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


/* ============================================================
   EVENT: Show Steps button
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

  renderProcedure(manufacturerName, vehicleName, reset);
});


/* ============================================================
   MISSING VEHICLE REQUEST FORM
   ---------------------------------------------------------------
   Currently shows a confirmation message on submit.

   TO CONNECT TO A BACKEND LATER:
   Replace the contents of the submitMissingVehicleRequest()
   function below with a fetch() POST to your chosen endpoint.
   The `data` object is already structured and ready to send.

   Example (Formspree):
     fetch('https://formspree.io/f/YOUR_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
     });
   ============================================================ */

function submitMissingVehicleRequest(data) {
  /*
    STUB: Replace this function body when connecting to a backend.
    `data` contains: { manufacturer, model, year }
  */
  console.log('Missing vehicle request:', data);

  /* Show confirmation to user */
  var feedback = document.getElementById('requestFeedback');
  feedback.textContent = 'Thanks -- we\'ve noted your request and will add this vehicle soon.';
  feedback.className   = 'request-feedback request-feedback--success';

  /* Clear the form fields */
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

  /* Basic client-side validation */
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