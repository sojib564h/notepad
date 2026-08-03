const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 80;
    if (top < visible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Counter animation
const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && !counter.classList.contains("counted")) {
      counter.classList.add("counted");
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = Math.ceil(target / 80);

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          counter.innerText = target.toLocaleString() + "+";
        } else {
          counter.innerText = current.toLocaleString() + "+";
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    }
  });
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);

/* =========================================================
   AlgorithmOptix ULTRA PREMIUM BUTTON RIPPLE SYSTEM
   Applies ripple to most buttons across all pages
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const AlgorithmOptixButtons = document.querySelectorAll(`
    button,
    .btn,
    .btn-primary,
    .btn-secondary,
    .nav-cta,
    .nav-btn,
    .cta-btn,
    .hero-btn,
    a.btn,
    a.btn-primary,
    a.btn-secondary,
    a.nav-cta,
    a.nav-btn,
    a.cta-btn,
    a.hero-btn,
    input[type="submit"],
    input[type="button"]
  `);

  AlgorithmOptixButtons.forEach((btn) => {
    // Hover ripple from center
    btn.addEventListener("mouseenter", function () {
      const rect = btn.getBoundingClientRect();
      createAlgorithmOptixButtonRipple(btn, rect.width / 2, rect.height / 2);
    });

    // Click ripple from click point
    btn.addEventListener("click", function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createAlgorithmOptixButtonRipple(btn, x, y);
    });
  });

  function createAlgorithmOptixButtonRipple(btn, x, y) {
    const ripple = document.createElement("span");
    ripple.className = "AlgorithmOptix-btn-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 900);
  }
});

/* =========================
   SCROLL PROGRESS LINE
========================= */
const scrollProgress = document.querySelector(".scroll-progress");

function updateScrollProgress() {
  if (!scrollProgress) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  scrollProgress.style.width = scrollPercent + "%";
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);

/* =========================
   AlgorithmOptix WAVE LOADER HIDE
========================= */
window.addEventListener("load", function () {
  const pageLoader = document.getElementById("page-loader");

  if (pageLoader) {
    setTimeout(() => {
      pageLoader.classList.add("loader-hide");

      setTimeout(() => {
        pageLoader.style.display = "none";
      }, 700);
    }, 1000);
  }
});

/* =========================
   AlgorithmOptix CUSTOM CURSOR RING
========================= */
const customCursor = document.querySelector(".custom-cursor");

if (customCursor && window.innerWidth > 991) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Elements that trigger purple hover cursor
  const hoverTargets = document.querySelectorAll(
    ".btn, .card, .portfolio-card, .sticky-btn, .nav-links a"
  );

  // Track mouse
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    customCursor.style.opacity = "1";
  });

  // Smooth follow animation
  function animateCursor() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    customCursor.style.left = currentX + "px";
    customCursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide when mouse leaves window
  document.addEventListener("mouseleave", () => {
    customCursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    customCursor.style.opacity = "1";
  });

  // Hover effect on buttons/cards/links
  hoverTargets.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      customCursor.classList.add("cursor-hover");
    });

    item.addEventListener("mouseleave", () => {
      customCursor.classList.remove("cursor-hover");
    });
  });

  // Click effect
  window.addEventListener("mousedown", () => {
    customCursor.classList.add("cursor-click");
  });

  window.addEventListener("mouseup", () => {
    customCursor.classList.remove("cursor-click");
  });
}

/* =========================
   CONTACT FORM - OTHER SERVICE TOGGLE
========================= */
const serviceSelect = document.getElementById("service");
const otherServiceWrap = document.getElementById("other-service-wrap");
const otherServiceField = document.getElementById("other-service");

if (serviceSelect && otherServiceWrap && otherServiceField) {
  function toggleOtherServiceField() {
    if (serviceSelect.value === "Other") {
      otherServiceWrap.style.display = "block";
      otherServiceField.setAttribute("required", "required");
    } else {
      otherServiceWrap.style.display = "none";
      otherServiceField.removeAttribute("required");
      otherServiceField.value = "";
    }
  }

  serviceSelect.addEventListener("change", toggleOtherServiceField);

  // page load pe bhi check
  toggleOtherServiceField();
}

/* =========================
   CONTACT FORM SUBMIT
========================= */

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("form-success");

if(contactForm && submitBtn){

contactForm.addEventListener("submit", function(e){

submitBtn.classList.add("loading");
submitBtn.innerText="Sending...";

setTimeout(()=>{

contactForm.reset();

submitBtn.classList.remove("loading");
submitBtn.innerHTML='<span class="btn-text">Send Inquiry</span>';

if(successMsg){
successMsg.style.display="block";
}

},1500);

});

}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function showToast(){

const contactForm = document.querySelector("form");
const submitBtn = document.querySelector('.contact-form button[type="submit"], form button[type="submit"]');
const successMsg = document.getElementById("thank-you-msg");
const toast = document.getElementById("toast");

function showToast() {
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

if (contactForm && submitBtn) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    submitBtn.classList.add("loading");
    submitBtn.innerText = "Sending...";

    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.innerHTML = '<span class="btn-text">Send Inquiry</span>';

      if (successMsg) {
        successMsg.style.display = "block";
      }

      showToast();
      contactForm.reset();
    }, 1500);
  });
}
}




