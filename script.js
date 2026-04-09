/* ============================================================
   ResetMate -- script.js  (v1.3.0)

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
                       +-- type    Slug used for matching (e.g. 'oil-service')
                       +-- label   Display name in dropdown (e.g. 'Oil Service Reset')
                       +-- status  One of: 'verified' | 'unverified' | 'scanner-only'
                       +-- steps   Array of instruction strings (verified only, else [])
                       +-- notes   Optional string shown below steps ('' if unused)
                       +-- message Scanner-only explanation string (scanner-only only)

   STATUS DEFINITIONS
   ------------------
   'verified'     -- Procedure has been tested and confirmed. Renders numbered steps.
   'unverified'   -- Procedure exists but has not been verified. No steps shown.
                     Renders an informational card encouraging the request form.
   'scanner-only' -- Reset cannot be performed manually on this vehicle.
                     The `message` field explains why. Renders an informational card.

   HOW TO ADD A NEW MANUFACTURER:
     Add a new key to `catalogue` following the same pattern.

   HOW TO ADD A NEW VEHICLE:
     Push a new object into the manufacturer's `vehicles` array.

   HOW TO ADD A VERIFIED PROCEDURE:
     Set status: 'verified', populate steps[], set notes if needed.

   HOW TO ADD AN UNVERIFIED ENTRY:
     Set status: 'unverified', leave steps: [] and notes: ''.

   HOW TO ADD A SCANNER-ONLY ENTRY:
     Set status: 'scanner-only', set message to the explanation string.
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'verified',
            steps: [
              'Switch the ignition OFF.',
              'Press and hold the trip 0.0 button with the ignition still OFF.',
              'While continuing to hold the trip button, switch the ignition ON.',
              "When 'Reset oil service?' appears on the display, release the trip button, then tap it once to confirm the reset.",
              'Switch the ignition OFF, then back ON normally.',
              'Confirm the oil service warning light has cleared.'
            ],
            notes:   'The trip 0.0 button can become sticky over time. If it does not respond, try pressing it with slightly more force.',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'verified',
            steps: [
              'Switch the ignition OFF.',
              'Press and hold the trip 0.0 button with the ignition still OFF.',
              'While continuing to hold the trip button, switch the ignition ON.',
              "When 'Reset oil service?' appears, keep holding the trip button until 'Reset inspection?' appears.",
              'Release the trip button, then tap it once to confirm the inspection reset.',
              'Switch the ignition OFF, then back ON normally.',
              'Confirm the inspection warning light has cleared.'
            ],
            notes:   'The trip 0.0 button can become sticky over time. If it does not respond, try pressing it with slightly more force.',
            message: ''
          }
        ]
      },
      {
        id:   'vw-polo-mk6',
        name: 'Polo Mk6 (2017-2021)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'verified',
            steps: [
              'Switch the ignition ON.',
              'Press the CAR button on your multimedia system.',
              'Navigate to the Servicing and checks menu.',
              'Select Service intervals.',
              'Scroll to the bottom of the page and select Reset oil change interval.',
              'Switch the ignition OFF, then back ON to verify.'
            ],
            notes:   'This procedure only works if your service interval is set to Fixed. If set to Flexible, the reset must be performed with a diagnostic scanner tool.',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'scanner-only',
            steps:   [],
            notes:   '',
            message: 'The inspection service light on the Audi A1 8X cannot be reset manually. This reset requires a diagnostic scanner tool connected to the vehicle.'
          }
        ]
      },

      /* --- A1 GB (2018-present) --- */
      {
        id:   'audi-a1-gb',
        name: 'A1 GB (2018-present)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'verified',
            steps: [
              'Switch the ignition ON.',
              'From the home menu on your car radio display, enter the CAR menu.',
              'Navigate to Settings and service.',
              'Scroll down and select Service intervals.',
              'Press the Reset button.',
              'Switch the ignition OFF, then back ON to verify.'
            ],
            notes:   'This procedure only works if your service interval is set to Fixed. If set to Flexible, the reset must be performed with a diagnostic scanner tool.',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'scanner-only',
            steps:   [],
            notes:   '',
            message: 'The inspection service light on the Audi A1 GB cannot be reset manually. This reset requires a diagnostic scanner tool connected to the vehicle.'
          }
        ]
      },

      /* --- A3 8V (2012-2020) --- */
      {
        id:   'audi-a3-8v',
        name: 'A3 8V (2012-2020)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- A4 B8 (2008-2015) --- */
      {
        id:   'audi-a4-b8',
        name: 'A4 B8 (2008-2015)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- A4 B9 (2015-2024) --- */
      {
        id:   'audi-a4-b9',
        name: 'A4 B9 (2015-2024)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- A5 B8 (2007-2016) --- */
      {
        id:   'audi-a5-b8',
        name: 'A5 B8 (2007-2016)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- A6 C7 (2011-2018) --- */
      {
        id:   'audi-a6-c7',
        name: 'A6 C7 (2011-2018)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- Q3 8U (2011-2018) --- */
      {
        id:   'audi-q3-8u',
        name: 'Q3 8U (2011-2018)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },

      /* --- Q5 8R (2008-2017) --- */
      {
        id:   'audi-q5-8r',
        name: 'Q5 8R (2008-2017)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          },
          {
            type:    'inspection',
            label:   'Inspection Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
          }
        ]
      },
      {
        id:   'bmw-1-series-f20',
        name: '1 Series F20 (2011-2019)',
        resets: [
          {
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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
            type:    'oil-service',
            label:   'Oil Service Reset',
            status:  'unverified',
            steps:   [],
            notes:   '',
            message: ''
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

  if (reset.status === 'verified') {
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