document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slider-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    // Show a specific slide
    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.opacity = idx === index ? '1' : '0';
            slide.style.zIndex = idx === index ? '1' : '0';
        });
        currentSlide = index;
        updateButtons();
    }

    // Update active button
    function updateButtons() {
        buttons.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === currentSlide);
        });
    }

    // Auto slide function
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000);
    }

    // Initialize first slide and button
    showSlide(0);
    startAutoSlide();

    // Add click handlers to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
            startAutoSlide(); // Reset auto slide timer
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Only close on mobile
                navLinks.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });
});
