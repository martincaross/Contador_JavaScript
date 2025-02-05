const particleContainer = document.getElementById("particle-container");

let particles = [];
const particleCount = 3; // Número de partículas
const radius = 150; // Radio de movimiento 3D

// Crear las partículas
function createParticles() {
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.position = "absolute";
        particle.style.width = "5px";
        particle.style.height = "5px";
        particle.style.backgroundColor = "rgb(255, 255, 255)";
        particle.style.borderRadius = "50%";
        particle.style.transition = "transform 0.5s ease-out";
        particle.style.willChange = "transform";
        particleContainer.appendChild(particle);

        // Asignar una posición inicial aleatoria
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius + window.innerWidth / 2;
        const y = Math.sin(angle) * radius + window.innerHeight / 2;
        const z = Math.random() * radius - radius / 2; // Distribuir aleatoriamente en z
        particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

        // Asignar velocidad aleatoria
        particle.velocity = {
            x: (Math.random() - 0.5) * 0.5,  // Velocidad en X
            y: (Math.random() - 0.5) * 0.5,  // Velocidad en Y
            z: (Math.random() - 0.5) * 0.5   // Velocidad en Z
        };

        particles.push(particle);
    }
}

// Función para mover las partículas de manera constante y aleatoria
function moveParticles() {
    particles.forEach((particle) => {
        let currentTransform = particle.style.transform.match(/translate3d\(([^)]+)\)/);
        if (currentTransform) {
            let [x, y, z] = currentTransform[1].split(',').map(value => parseFloat(value));

            // Mover las partículas según su velocidad
            x += particle.velocity.x;
            y += particle.velocity.y;
            z += particle.velocity.z;

            // Detectar los bordes de la pantalla y cambiar la dirección de las partículas
            if (x < 0 || x > window.innerWidth) particle.velocity.x = -particle.velocity.x;
            if (y < 0 || y > window.innerHeight) particle.velocity.y = -particle.velocity.y;
            if (z < -radius || z > radius) particle.velocity.z = -particle.velocity.z;

            // Actualizar la posición
            particle.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }
    });
}

// Función para mover las partículas hacia el clic
function moveParticlesToClick(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    particles.forEach((particle) => {
        const angleToClickX = (mouseX - window.innerWidth / 2) / 100;
        const angleToClickY = (mouseY - window.innerHeight / 2) / 100;

        // Cambiar la velocidad de las partículas para que se desplacen hacia el clic
        particle.velocity.x += angleToClickX;
        particle.velocity.y += angleToClickY;
    });
}

// Inicialización
createParticles();
setInterval(moveParticles, 16); // Actualizar las posiciones cada ~16ms (60fps)

// Mover partículas al hacer clic
document.body.addEventListener("click", moveParticlesToClick);
