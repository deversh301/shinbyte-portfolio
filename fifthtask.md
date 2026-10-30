Task 5: Add an Auto-Slide Progress Indicator
Objective
Add a slim, polished progress indicator to the top navigation slider
highlighted in the reference screenshot. The navigation contains Milking
Sessions, Parlour Alerts, Cow Identification, Red Tractor Logs, and AI
Predict.

The associated images/content change automatically. Add a progress bar
that gradually drains while the current slide is visible, then resets
when the next slide becomes active.
1. Inspect the Existing Slider
- Locate the highlighted top navigation slider.
- Understand how active tabs, images/content, and autoplay currently
  work.
- Identify the existing autoplay duration and timer.
- Reuse the existing slider and timer. Do not create a second carousel
  or independent autoplay system.
2. Progress Indicator Behaviour
1. When a slide becomes active, its progress starts at 100%.
2. The progress gradually drains from 100% to 0% while that slide is
   displayed.
3. When it reaches 0%, advance to the next slide using the existing
   autoplay logic.
4. Reset the progress to 100% for the newly active slide.
5. Repeat continuously for all slides.
The progress indicator must be synchronised exactly with the existing
autoplay duration. It must not finish early or late.
3. Placement and Appearance
- Place the indicator within the highlighted top navigation/active-tab
  area.
- Prefer a thin, subtle bar associated with the active tab.
- Match the existing website colour palette and active-tab styling.
- Keep inactive tabs unchanged.
- Do not overlap tab labels, icons, or navigation arrows.
- Do not increase the navigation bar's height or change its overall
  dimensions.
- Keep the result clean, premium, and unobtrusive.
- The red outline in the screenshot only indicates the target area. Do
  not reproduce it on the website.
- Do not place a loader over the main dashboard image; the indicator
  belongs in the top navigation area.
4. Interaction and Timer Handling
- When the user manually selects a tab, reset the progress for that
  tab.
- When previous/next arrows are clicked, reset the progress for the
  newly selected slide.
- Avoid duplicate intervals, competing timers, and animation drift.
- The progress indicator must not independently trigger slide changes.
- If the existing slider pauses autoplay on hover, pause the progress
  at the same time and resume it when autoplay resumes.
- Preserve the existing hover behaviour if autoplay does not currently
  pause on hover.
- Preserve the existing transition effects and slide-changing
  behaviour.
5. Responsive Behaviour
- Check desktop, tablet, and mobile layouts.
- Keep the indicator correctly positioned at every viewport size.
- Do not introduce horizontal overflow or disrupt tab scrolling.
- Ensure the indicator remains visible and appropriately sized on
  smaller screens.
6. Strict Restrictions
1. Do not redesign the navigation slider.
2. Do not change tab labels, icons, order, or slide content.
3. Do not change the existing autoplay speed unless absolutely
   necessary; reuse its current duration.
4. Do not change dimensions, spacing, typography, colours, or overall
   styling.
5. Do not add a new slider library or unnecessary dependencies.
6. Do not break existing arrows, tab selection, or automatic
   transitions.
7. Make only the changes needed to add the progress indicator.
7. Testing Checklist
- [ ] Progress starts when a slide becomes active.
- [ ] Progress gradually drains while the slide is displayed.
- [ ] The next slide appears when progress reaches zero.
- [ ] Progress resets correctly for every new slide.
- [ ] Progress and autoplay stay synchronised over multiple cycles.
- [ ] Clicking a tab resets progress correctly.
- [ ] Previous/next arrows reset progress correctly.
- [ ] Existing hover/pause behaviour is preserved.
- [ ] No flickering, jumping, or timing glitches occur.
- [ ] The indicator works on desktop, tablet, and mobile.
- [ ] Existing slider functionality remains intact.
Expected Result
A subtle, smooth progress bar in the highlighted top navigation area
that gradually drains to show the time remaining before the next
automatic slide change. When it reaches zero, the next slide appears
smoothly and the progress restarts.

Final instruction: Enhance the existing slider rather than replacing
it. Keep the current design intact and synchronise the progress
indicator perfectly with the existing automatic slide-changing
functionality.