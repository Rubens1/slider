const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let slideInterval = setInterval(changeSlide, 5000); // Troca automática a cada 5 segundos

// Função para mudar automaticamente para o próximo slide
function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Função para mover manualmente (para frente ou para trás)
function moveSlide(direction) {
    currentIndex += direction;

    // Verifica os limites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();

    // Reinicia o intervalo para a troca automática
    clearInterval(slideInterval);
    slideInterval = setInterval(changeSlide, 5000);
}

// Função para atualizar a posição do slide
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
