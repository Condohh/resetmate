/* ============================================================
   ResetMate -- catalogue.js  (v1.3.0)

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
