# Task 2: Fix and Improve Landing Page Slider

## Objective

Carefully inspect the existing slider/carousel in the landing page and improve its functionality, animation smoothness, and visual consistency.

The goal is to make the slider feel premium, polished, smooth, and professional.

**Do not redesign the slider or change the overall website styling. Improve the existing slider implementation.**

## 1. Inspect Existing Slider

- Read and understand the complete slider HTML, CSS, and JavaScript.
- Check how automatic sliding works.
- Check manual navigation (previous/next buttons).
- Check pagination dots, if available.
- Check hover behaviour.
- Check transition and animation logic.
- Identify conflicts between automatic sliding and hover interactions.
- Check for overlapping timers, duplicate event listeners, or unnecessary re-rendering.

## 2. Fix Automatic Sliding

- Ensure automatic sliding works consistently.
- Transitions must be smooth without flickering or sudden jumps.
- Avoid flashes of different background colours during slide transitions.
- Ensure the next slide appears correctly without unwanted visual changes.
- Prevent automatic sliding from conflicting with manual navigation.
- Reset the autoplay timer correctly after manual interaction.
- Prevent multiple autoplay intervals from running simultaneously.
- Ensure the slider works continuously without glitches.

## 3. Fix Hover and Colour Issues

**This is an important issue that needs special attention.**

Currently, when the slider changes automatically, different colours appear unexpectedly during transitions and hover states.

Investigate and fix this issue.

- Check CSS hover selectors.
- Check active slide classes.
- Check background colours and overlays.
- Check transitions applied to images, cards, buttons, and slide containers.
- Ensure inactive slides do not show unwanted colours.
- Ensure the active slide has consistent styling.
- Ensure hover effects do not interfere with automatic transitions.
- Prevent unexpected colour flashing or background flickering.
- Ensure the slider looks consistent whether the user is hovering over it or not.

## 4. Improve Animation Smoothness

Make the slider feel fluid and premium.

- Use smooth transitions between slides.
- Avoid jerky movement.
- Avoid flickering.
- Avoid sudden opacity changes.
- Avoid layout shifts during transitions.
- Ensure images load and display correctly.
- Use GPU-friendly animation techniques where appropriate.
- Maintain consistent transition timing.
- Avoid unnecessary animations or effects.

Choose the most suitable transition approach based on the existing slider implementation rather than blindly replacing it.

## 5. Improve User Interaction

- Previous and next buttons should work reliably.
- Navigation dots should select the correct slide.
- Hover should not break autoplay.
- If the existing design pauses autoplay on hover, ensure it resumes correctly when the pointer leaves.
- Manual navigation should not cause animation conflicts.
- Ensure touch/swipe interaction works on mobile if currently supported.
- Prevent accidental multiple slide changes from rapid clicks.

## 6. Responsive Behaviour

Test the slider on:

- Desktop
- Tablet
- Mobile

Ensure:

- Images maintain the correct aspect ratio.
- No unwanted cropping or stretching.
- Navigation controls remain properly positioned.
- Transitions remain smooth on mobile.
- No horizontal overflow occurs.

## 7. Important Restrictions

1. Do not change the overall website design.
2. Do not change the slider's existing dimensions.
3. Do not change image sizes or aspect ratios.
4. Do not change the website's colour palette.
5. Do not change fonts, typography, spacing, or layout.
6. Do not remove existing slider features.
7. Do not introduce unnecessary libraries.
8. Do not break any other landing page functionality.
9. Reuse the existing HTML, CSS, and JavaScript wherever possible.
10. Make only the changes required to fix and improve the slider.

## 8. Final Testing

Before completing the task:

- Let the slider run automatically through all slides multiple times.
- Check every slide transition.
- Test hover and mouse leave behaviour.
- Test previous/next controls.
- Test navigation dots.
- Check for unexpected colour changes.
- Check for flickering and jumping.
- Check that autoplay does not stop unexpectedly.
- Check the slider on desktop and mobile.
- Check the browser console for errors.

## Expected Result

The final slider should:

- Run automatically and smoothly.
- Have consistent colours throughout transitions.
- Have no unwanted hover colour changes.
- Have no flickering or sudden jumps.
- Respond properly to manual navigation.
- Work consistently across desktop, tablet, and mobile.
- Feel polished, premium, and professional.

**Final instruction: Focus especially on fixing the automatic slider's colour-changing and hover inconsistency issue. Do not simply hide the issue with CSS. Find the actual cause and fix it properly.**