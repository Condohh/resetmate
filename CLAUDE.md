# ResetMate Project Rules

ResetMate is a static mobile-first service reset lookup website.

Stack:
- HTML
- CSS
- JavaScript
- Netlify deployment
- No backend

Files:
- index.html
- style.css
- script.js
- resetmate_procedure_catalogue_master.txt
- catalogue.js

Rules:
- Keep the project static and Netlify-compatible
- Do not introduce frameworks
- Do not rewrite style.css unless explicitly asked
- Keep the current workshop-style UI
- Procedure data must live in catalogue.js, not inline in script.js
- The TXT master file is the source of truth for content
- Keep unverified vehicles visible in dropdowns
- Verified procedures show numbered steps and optional notes
- Unverified procedures show the unverified informational state
- Scanner-only procedures show a scanner-required informational state
- Keep the missing vehicle request form visible
- Do not convert the project into a single-file HTML app