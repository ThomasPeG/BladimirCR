document.addEventListener('DOMContentLoaded', function() {
    const projectsData = {
        herreria: 24,    // Number of images in herreria folder
        plomeria: 7,     // Number of images in plomeria folder
        tablaroca: 9,    // Number of images in tablaroca folder
        losetas: 11,      // Number of images in losetas folder
        electricidad: 3,  // Number of images in electricidad folder
        albañileria: 9   // Number of images in albañileria folder
    };

    const container = document.getElementById('proyectos-container');
    
    // Generate project elements
    for (const [category, count] of Object.entries(projectsData)) {
        for (let i = 1; i <= count; i++) {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'proyecto';
            projectDiv.setAttribute('data-category', category);
            
            const img = document.createElement('img');
            img.src = `img/fotos/${category}/${i}.jpg`;
            img.alt = `Proyecto de ${category} ${i}`;
            img.loading = 'lazy';
            
            projectDiv.appendChild(img);
            container.appendChild(projectDiv);
        }
    }

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentImageIndex = 0;
    let visibleImages = [];

    function updateVisibleImages() {
        visibleImages = Array.from(document.querySelectorAll('.proyecto.show img'));
    }

    function openModal(img, index) {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        currentImageIndex = index;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.style.display = currentImageIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentImageIndex < visibleImages.length - 1 ? 'block' : 'none';
    }

    container.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            updateVisibleImages();
            const index = visibleImages.indexOf(e.target);
            openModal(e.target, index);
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            modalImg.src = visibleImages[currentImageIndex].src;
            updateNavigationButtons();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < visibleImages.length - 1) {
            currentImageIndex++;
            modalImg.src = visibleImages[currentImageIndex].src;
            updateNavigationButtons();
        }
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.proyecto');

    projects.forEach(project => project.classList.add('show'));

    // Update the filter button click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
    
            const filter = button.getAttribute('data-filter');
    
            projects.forEach(project => {
                project.classList.remove('show');
                if (filter === 'todos' || project.getAttribute('data-category') === filter) {
                    project.classList.add('show');
                }
            });
    
            // Smooth scroll to top of projects section
            document.querySelector('.portafolio-page').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

// Add this at the beginning of your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-filters');
    const filterButtons = document.querySelector('.filter-buttons');

    toggleButton.addEventListener('click', () => {
        filterButtons.classList.toggle('show-all');
        toggleButton.textContent = filterButtons.classList.contains('show-all') 
            ? 'Ocultar Filtros ▲' 
            : 'Filtrar por Servicio ▼';
    });
});