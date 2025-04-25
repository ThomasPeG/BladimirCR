document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality (keep existing code)
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slider-btn');
    let currentSlide = 0;
    let slideInterval;

    // Add menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    function showSlide(index) {
        clearInterval(slideInterval);
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(btn => btn.classList.remove('active'));
        
        slides[index].classList.add('active');
        buttons[index].classList.add('active');
        currentSlide = index;
        
        startSlideShow();
    }

    // Initialize first slide
    showSlide(0);

    buttons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(index);
        });
    });

    function startSlideShow() {
        slideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000);
    }

    startSlideShow();
});
