// Main JavaScript file for newlanding.html
// Extracted from inline scripts in newlanding.html

// Google Sheets API integration - task three
function getUUID() {
  // Reuse existing UUID logic from tracking.js
  const uuid = sessionStorage.getItem("shinbyte_uuid");
  return uuid || "unknown";
}

// Debounce function to prevent duplicate submissions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

async function sendToGoogleSheets(payload) {
  const apiUrl = "https://script.google.com/macros/s/AKfycbys4pVXEYNqqTybmRwsXkJY1MJvFpI6g14hci1NnjpOyAsmgMhrcNRwl8C4FPknQMcc/exec";
  
  try {
    const query = new URLSearchParams(payload).toString();
    await fetch(`${apiUrl}?${query}`, {
      method: "GET",
      mode: "no-cors"
    });
  } catch (error) {
    console.error("API request failed:", error);
  }
}

// Debounced version for button clicks
const debouncedSendToGoogleSheets = debounce(sendToGoogleSheets, 1000);

// Toast notification for API submissions (5 seconds)
function showAPIToast() {
  Toastify({
    text: "We will get in touch with you soon!",
    duration: 5000,
    gravity: "top",
    position: "center",
    close: true,
    stopOnFocus: true,
    style: {
      background: "#2563eb",
      borderRadius: "8px",
      fontSize: "13px",
      padding: "12px 22px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.12)"
    }
  }).showToast();
}

// Toast notification for other actions (5 seconds)
function showToast(message = "Changes saved successfully!") {
  Toastify({
    text: message,
    duration: 5000,
    gravity: "top",
    position: "center",
    close: true,
    stopOnFocus: true,
    style: {
      background: "#16a34a",
      borderRadius: "8px",
      fontSize: "13px",
      padding: "12px 22px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.12)"
    }
  }).showToast();
}

// Main initialization function that runs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLine1 = document.getElementById('menu-line-1');
  const menuLine2 = document.getElementById('menu-line-2');
  const menuLine3 = document.getElementById('menu-line-3');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenu.classList.toggle('hidden');
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Animate hamburger to X
      if (!isExpanded) {
        menuLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
        menuLine2.style.opacity = '0';
        menuLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        menuLine1.style.transform = 'none';
        menuLine2.style.opacity = '1';
        menuLine3.style.transform = 'none';
      }
    });
  }

  // Swiper initialization - improved with better autoplay handling
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 800, // Smooth transition speed
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    // Improved pagination for better visual feedback
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 3
    },
    // Better autoplay configuration to prevent conflicts
    autoplay: {
      delay: 3500, // Balanced delay for better UX
      disableOnInteraction: true, // Stop autoplay on user interaction
      pauseOnMouseEnter: true, // Pause on hover to prevent conflicts
      waitForTransition: true // Wait for transition to complete
    },
    // Navigation buttons - manually handled to sync with tabs
    // navigation: {
    //   nextEl: '#nav-next-btn',
    //   prevEl: '#nav-prev-btn',
    // },
    // Prevent color flashing during transitions
    on: {
      init: function () {
        // Ensure smooth fade transitions
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
          slide.style.willChange = 'opacity';
          slide.style.backfaceVisibility = 'hidden'; // Prevent flickering
        });
        
        // Add initialized class for CSS control
        document.querySelector('.mySwiper').classList.add('swiper-initialized');
        
        // Initialize progress bar for initial active tab
        const activeTab = document.querySelector('.feature-tab.active-tab');
        if (activeTab) {
          const progressBar = document.createElement('div');
          progressBar.className = 'progress-bar';
          activeTab.appendChild(progressBar);
          
          // Start progress animation
          void progressBar.offsetWidth;
          progressBar.classList.add('progress-animating');
        }
      },
      slideChangeTransitionStart: function () {
        // Prevent hover effects during transitions
        document.querySelector('.mySwiper').classList.add('swiper-transitioning');
        
        // Reset all progress bars before transition
        const tabs = document.querySelectorAll('.feature-tab');
        tabs.forEach(tab => {
          const progressBar = tab.querySelector('.progress-bar');
          if (progressBar) {
            progressBar.classList.remove('progress-animating');
            progressBar.style.transform = 'scaleX(1)';
          }
        });
      },
      slideChangeTransitionEnd: function () {
        document.querySelector('.mySwiper').classList.remove('swiper-transitioning');
        
        // Start progress animation for new active tab
        const activeTab = document.querySelector('.feature-tab.active-tab');
        if (activeTab) {
          const progressBar = activeTab.querySelector('.progress-bar');
          if (progressBar) {
            // Force reflow to reset animation state
            void progressBar.offsetWidth;
            progressBar.classList.add('progress-animating');
          }
        }
      },
      autoplayStart: function () {
        // Remove paused class when autoplay starts
        document.querySelector('.mySwiper').classList.remove('swiper-autoplay-paused');
      },
      autoplayStop: function () {
        // Add paused class when autoplay stops
        document.querySelector('.mySwiper').classList.add('swiper-autoplay-paused');
      }
    }
  });

  // Feature button handling
  const featureBtns = document.querySelectorAll(".feature-btn");

  function updateButtons(index) {
    featureBtns.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });
    
    // Also update the tab state
    const tabs = document.querySelectorAll('.feature-tab');
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active-tab');
        tab.classList.remove('feature-btn');
        tab.className = 'feature-tab active-tab flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-600 bg-white border border-blue-200 shadow-pill-active transition-all';
        const icon = tab.querySelector('svg');
        if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-blue-600');
        
        // Add progress bar if it doesn't exist
        if (!tab.querySelector('.progress-bar')) {
          const progressBar = document.createElement('div');
          progressBar.className = 'progress-bar';
          tab.appendChild(progressBar);
        }
      } else {
        tab.classList.remove('active-tab');
        // Reset to original button classes
        tab.className = 'feature-tab feature-btn flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-600 hover:text-gray-900 transition-all';
        const icon = tab.querySelector('svg');
        if (i === 0 || i === 2 || i === 3) {
          if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-gray-500');
        } else if (i === 4) {
          if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-amber-600');
        } else {
          if (icon) icon.setAttribute('class', 'w-3.5 h-3.5 text-gray-500');
        }
        
        // Remove progress bar from inactive tabs
        const progressBar = tab.querySelector('.progress-bar');
        if (progressBar) {
          progressBar.remove();
        }
      }
    });
  }

  featureBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      
      // Reset progress on current active tab immediately
      const currentActiveTab = document.querySelector('.feature-tab.active-tab');
      if (currentActiveTab) {
        const progressBar = currentActiveTab.querySelector('.progress-bar');
        if (progressBar) {
          progressBar.classList.remove('progress-animating');
          progressBar.style.transform = 'scaleX(1)';
        }
      }
      
      swiper.slideToLoop(index, 800); // Smooth transition
    });
  });

  swiper.on("slideChange", () => {
    updateButtons(swiper.realIndex);
  });

  // Navigation button handlers - using Swiper's built-in navigation
  const navPrevBtn = document.getElementById("nav-prev-btn");
  const navNextBtn = document.getElementById("nav-next-btn");

  // Manual navigation with tab synchronization
  if (navPrevBtn) {
    navPrevBtn.onclick = () => {
      // Reset progress on current active tab immediately
      const currentActiveTab = document.querySelector('.feature-tab.active-tab');
      if (currentActiveTab) {
        const progressBar = currentActiveTab.querySelector('.progress-bar');
        if (progressBar) {
          progressBar.classList.remove('progress-animating');
          progressBar.style.transform = 'scaleX(1)';
        }
      }
      
      swiper.slidePrev();
      // Update buttons after a short delay to ensure swiper updated
      setTimeout(() => {
        updateButtons(swiper.realIndex);
      }, 50);
    };
  }

  if (navNextBtn) {
    navNextBtn.onclick = () => {
      // Reset progress on current active tab immediately
      const currentActiveTab = document.querySelector('.feature-tab.active-tab');
      if (currentActiveTab) {
        const progressBar = currentActiveTab.querySelector('.progress-bar');
        if (progressBar) {
          progressBar.classList.remove('progress-animating');
          progressBar.style.transform = 'scaleX(1)';
        }
      }
      
      swiper.slideNext();
      // Update buttons after a short delay to ensure swiper updated
      setTimeout(() => {
        updateButtons(swiper.realIndex);
      }, 50);
    };
  }

  // FAQ Accordion Handling
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const answer = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      if (answer) {
        const isHidden = answer.classList.contains('hidden');
        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('rotate-180'));

        if (isHidden) {
          answer.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      }
    });
  });

  // Video Modal Trigger Handling
  const videoTourBtn = document.getElementById('open-video-tour-btn');
  const videoModal = document.getElementById('video-modal');
  const closeVideoBtn = document.getElementById('close-video-modal-btn');
  const closeVideoBottomBtn = document.getElementById('close-video-modal-bottom-btn');

  function openModal() {
    if (videoModal) {
      videoModal.classList.remove('hidden');
      videoModal.classList.add('flex');
    }
  }

  function closeModal() {
    if (videoModal) {
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
    }
  }

  if (videoTourBtn) videoTourBtn.addEventListener('click', openModal);
  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeModal);
  if (closeVideoBottomBtn) closeVideoBottomBtn.addEventListener('click', closeModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });
  }

  // Chat form handling
  const chatForm = document.getElementById("sbChatForm");
  if (chatForm) {
    // Prevent form spamming
    let isSubmitting = false;
    
    chatForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      if (isSubmitting) return;
      isSubmitting = true;

      const input = document.getElementById("sbChatInput");
      const message = input.value.trim();

      if (!message) {
        isSubmitting = false;
        return;
      }

      console.log("Visitor message:", message);

      // Send to Google Sheets API
      const uuid = getUUID();
      sendToGoogleSheets({
        msg: message,
        buttonClicked: "askanything",
        uuid: uuid
      });

      // Show toast notification
      showAPIToast();

      // Connect your chat or AI backend here.
      input.value = "";
      
      // Reset submission state after 2 seconds
      setTimeout(() => {
        isSubmitting = false;
      }, 2000);
    });
  }

  // Book demo button handling
  const demoBtn = document.querySelector(".sb-demo-btn");
  if (demoBtn) {
    // Prevent button spamming
    let isDemoButtonClicked = false;
    
    demoBtn.addEventListener("click", function(e) {
      e.preventDefault();
      
      if (isDemoButtonClicked) return;
      isDemoButtonClicked = true;
      
      const uuid = getUUID();
      debouncedSendToGoogleSheets({
        buttonClicked: "book Demo",
        uuid: uuid
      });
      
      // Show toast notification
      showAPIToast();
      
      // Allow normal anchor navigation
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      
      // Reset click state after 2 seconds
      setTimeout(() => {
        isDemoButtonClicked = false;
      }, 2000);
    });
  }

  // Start 30-Day Parlour Trial button handling
  const allButtons = document.querySelectorAll("button");
  for (const btn of allButtons) {
    if (btn.textContent.includes("Start 30-Day Parlour Trial")) {
      // Prevent button spamming
      let isTrialButtonClicked = false;
      
      // Remove existing onclick to prevent conflicts
      btn.onclick = null;
      
      btn.addEventListener("click", function(e) {
        if (isTrialButtonClicked) return;
        isTrialButtonClicked = true;
        
        const uuid = getUUID();
        debouncedSendToGoogleSheets({
          buttonClicked: "banner-button",
          uuid: uuid
        });
        
        // Show toast notification
        showAPIToast();
        
        // Reset click state after 2 seconds
        setTimeout(() => {
          isTrialButtonClicked = false;
        }, 2000);
      });
      break;
    }
  }
});