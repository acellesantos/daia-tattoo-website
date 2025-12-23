document.addEventListener('DOMContentLoaded', () => {

    // ==== SLIDER ====
    let currentIndex = 0;
    const sliderContainer = document.querySelector('.slider-container');
    const totalSlides = 6;

    function moveSlider() {
        currentIndex++;

        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Volta para a primeira
        }

        const slideWidth = 100 / totalSlides;

        sliderContainer.style.transition = `transform 0.6s ease-in-out`;
        sliderContainer.style.transform = `translateX(${currentIndex * -slideWidth}%)`;
    }

    setInterval(moveSlider, 5000);

    // ==== LIGHTBOX ====

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');

    let currentImageIndex = 0;

    // Abrir imagem
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            showImage(index);
            lightbox.classList.add('active');
        });
    });

    function showImage(index) {
        if (index < 0) {
            currentImageIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentImageIndex = 0;
        } else {
            currentImageIndex = index;
        }

        const img = galleryItems[currentImageIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    }

    // Setas (mouse)
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentImageIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentImageIndex + 1);
    });

    // Fechar no X
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Fechar clicando fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }

        if (e.key === 'ArrowRight') {
            showImage(currentImageIndex + 1);
        }

        if (e.key === 'ArrowLeft') {
            showImage(currentImageIndex - 1);
        }
    });

});