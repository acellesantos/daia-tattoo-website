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

    // Abrir imagem
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = 'flex';
        });
    });

    // Fechar no X
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fechar clicando fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

});