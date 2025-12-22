let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const totalSlides = 6;

function moveSlider() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Volta para a primeira
    }

    // Move o container lateralmente baseado no índice (0%, -100%, -200%)
    const offset = currentIndex * -100;
    sliderContainer.style.transform = `translateX(${offset / totalSlides}%)`;
    stylerContainer.style.transition = 'translateX(-${(currentIndex * 100) / totalSlides}%)';
}

// Limpa qualquer intervalo e definie um novo de 5 segundos
setInterval(moveSlider, 5000);