// Función para aplicar el efecto parallax en el scroll
window.addEventListener('scroll', function () {
    const background = document.querySelectorAll('.parallax-background');

    background.forEach((bg) => {
        const scrollPosition = window.scrollY; // Usamos window.scrollY en lugar de window.pageYOffset
        const speed = bg.getAttribute('data-speed') || 0.5; // Velocidad de movimiento
        bg.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});
