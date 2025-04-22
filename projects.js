document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const projectImages = document.querySelectorAll('.proyecto img');
    let currentImageIndex = 0;

    // Add navigation buttons to modal
    const prevBtn = document.createElement('button');
    prevBtn.className = 'modal-nav prev';
    prevBtn.innerHTML = '&#10094;';
    modal.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'modal-nav next';
    nextBtn.innerHTML = '&#10095;';
    modal.appendChild(nextBtn);

    projectImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            currentImageIndex = index;
        });
    });

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % projectImages.length;
        modalImg.src = projectImages[currentImageIndex].src;
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        modalImg.src = projectImages[currentImageIndex].src;
    }

    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === "flex") {
            if (e.key === "ArrowRight") showNextImage();
            if (e.key === "ArrowLeft") showPrevImage();
            if (e.key === "Escape") modal.style.display = "none";
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});