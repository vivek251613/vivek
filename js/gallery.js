// Gallery Slider Logic

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
        // Handle wrap-around
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Update Slides
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[currentSlide].classList.add('active');

        // Update Dots
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        if(dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    // Event Listeners for Buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Event Listeners for Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Optional: Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const slideImages = document.querySelectorAll('.slide img');

    slideImages.forEach(img => {
        img.addEventListener('click', (e) => {
            // Stop propagation so the slider click doesn't interfere if needed
            e.stopPropagation(); 
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});
