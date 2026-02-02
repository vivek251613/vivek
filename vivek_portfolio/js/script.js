// Initialize VanillaTilt for 3D hover effects
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    scale: 1.05
});

// Scroll Reveal functionality (Custom Intersection Observer)
const revealElements = document.querySelectorAll('.section-title, .about-text h3, .about-text p, .skill-card, .work-item, .timeline-item');

const revealOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            revealOnScroll.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    el.classList.add('hidden');
    revealOnScroll.observe(el);
});

// Add CSS class for hidden/visible animation
// Note: This logic is coupled with styles.css updates for .hidden and .visible

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        navbar.style.padding = '15px 50px';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.8)';
        navbar.style.padding = '20px 50px';
        navbar.style.boxShadow = 'none';
    }
});
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
    });
});

// Contact Form Submission using Fetch API and Google Apps Script

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbz3_iALzw_M6QEi_jitCvyCTgPfqGYJSgyus6G6Xw59pGqCcVO0da3eo1E7E2WxrmDb/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    mode: "no-cors"
  })
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(() => {
    alert("Submission failed!");
  });
});

