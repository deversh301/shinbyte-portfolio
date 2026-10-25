/* Shinbyte — accessible mobile navigation disclosure.
   Used by index.html, products.html and contact.html. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  if (!toggle) {
    return;
  }

  var navId = toggle.getAttribute("aria-controls");
  var nav = navId ? document.getElementById(navId) : null;
  if (!nav) {
    return;
  }

  var desktop = window.matchMedia("(min-width: 900px)");

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  /* Close when a destination is chosen. */
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  /* Close on Escape and return focus to the toggle. */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  /* Close when clicking outside the menu. */
  document.addEventListener("click", function (event) {
    if (!isOpen()) {
      return;
    }
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  /* Reset the menu when crossing into the desktop layout. */
  function handleBreakpoint(event) {
    if (event.matches) {
      setOpen(false);
    }
  }

  if (typeof desktop.addEventListener === "function") {
    desktop.addEventListener("change", handleBreakpoint);
  } else if (typeof desktop.addListener === "function") {
    desktop.addListener(handleBreakpoint);
  }
})();
