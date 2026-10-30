First Task: Clean and Refactor newlanding.html
Objective
Review newlanding.html and clean up/refactor the code without changing
the website's existing visual design or behaviour.

The most important requirement is:

Do not change the styling or appearance of the landing page. The
page must look and behave exactly as it does before the refactor.
Tasks
1. Review the Existing Code
- Read through the entire newlanding.html file before making
  changes.
- Understand the current page structure, styles, scripts, and
  dependencies.
- Identify duplicate, unused, redundant, outdated, or unnecessary
  code.
- Check for CSS rules and JavaScript that are not used by the page.
2. Clean the HTML
- Remove unnecessary markup, comments, attributes, and duplicate
  elements where safe.
- Improve indentation, spacing, naming consistency, and overall
  readability.
- Use semantic HTML where it does not affect the existing layout or
  behaviour.
- Keep all required content, sections, IDs, classes, attributes, and
  integrations intact.
3. Separate the CSS
- Move the page's CSS out of the HTML file into a separate CSS file or
  an appropriately organised CSS folder.
- Keep the CSS organised and easy to maintain.
- Remove only CSS that is confirmed to be unused or redundant.
- Preserve all existing values, selectors, specificity, media queries,
  breakpoints, animations, transitions, hover states, responsive
  behaviour, and visual effects.
- Do not redesign, simplify, rename, or adjust styles just for the
  sake of refactoring.
4. Separate the JavaScript
- Move inline JavaScript into separate JavaScript file(s), organised
  in a suitable folder if appropriate.
- Remove only code that is confirmed to be unused or redundant.
- Preserve all existing functionality, event listeners, button
  actions, forms, sliders, popups, toasts, chat interactions,
  animations, and third-party integrations.
- Preserve script execution order and use defer or other loading
  changes only when they are safe and do not alter behaviour.
5. Organise the Project
Use a simple, sensible structure. For example:
project/
├── newlanding.html
├── css/
│   └── style.css
└── js/
    └── script.js
You may use multiple CSS or JavaScript files if that makes the code
clearer, but avoid unnecessary complexity. Update all file references
and paths in the HTML correctly.
Strict Rules --- Do Not Violate
1. Do not change the website's existing appearance.
2. Do not change colours, fonts, font sizes, spacing, margins, padding,
   widths, heights, borders, shadows, backgrounds, gradients, or
   positioning.
3. Do not change the layout, responsive design, or mobile appearance.
4. Do not change text, images, icons, content, or section order.
5. Do not remove a class, ID, attribute, or script unless you have
   verified that it is unnecessary and safe to remove.
6. Do not replace existing functionality with a different
   implementation.
7. Do not introduce a new framework, library, dependency, or build
   system.
8. Do not minify the code. Keep it readable and properly formatted.
9. If you are unsure whether something is used, keep it.
10. Do not make unrelated improvements or redesign suggestions as part
    of this task.
Verification Before Completion
After refactoring:
- Check that every CSS and JavaScript file is linked correctly.
- Check for missing assets, broken paths, console errors, and
  JavaScript errors.
- Compare the refactored page with the original at the same viewport
  sizes.
- Verify desktop, tablet, and mobile layouts.
- Test all interactive elements, including buttons, links, forms,
  sliders, popups, toasts, and chat UI.
- Confirm that animations, hover states, and responsive behaviour
  still work.
- Confirm that no visual styling has changed.
If browser testing or visual comparison is not available, clearly state
that it could not be performed. Do not claim that the page is visually
identical without checking it.
Expected Deliverables
1. A cleaned newlanding.html.
2. Separate, organised CSS file(s).
3. Separate, organised JavaScript file(s).
4. All updated file references and paths.
5. A short summary listing:
   - Files created or modified.
   - Unused or duplicate code removed.
   - CSS and JavaScript moved.
   - Checks and tests performed.
   - Any code intentionally retained because its usage was uncertain.
Final Instruction
Work carefully and make the smallest safe changes necessary.

This is a code-cleanup and file-separation task, not a redesign
task. The final website must retain the exact same styling, layout,
content, responsiveness, and functionality as the original
newlanding.html.