document.addEventListener("DOMContentLoaded", () => {
    const bgParticles = document.querySelector(".bg-particles");
    const header = document.getElementById("netflixHeader");
    const profileButton = document.getElementById("profileButton");
    const overlay = document.querySelector(".transition-overlay");

    // LOGIN → entrar na home
    if (profileButton && overlay) {
        profileButton.addEventListener("click", () => {
            overlay.classList.add("active");
            document.body.style.pointerEvents = "none";

            setTimeout(() => {
                window.location.href = "pages/home.html";
            }, 900);
        });
    }

    // HEADER COM EFEITO AO ROLAR
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // CRIAR PARTÍCULAS
    function createParticles(quantity = 40) {
        if (!bgParticles) return;

        for (let i = 0; i < quantity; i++) {
            const particle = document.createElement("span");
            particle.classList.add("particle");

            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const delay = Math.random() * 12;
            const duration = Math.random() * 10 + 12;
            const opacity = Math.random() * 0.5 + 0.2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.bottom = `-30px`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.opacity = opacity;

            if (size <= 3.5) {
                particle.classList.add("small");
            } else if (size <= 5.5) {
                particle.classList.add("medium");
            } else {
                particle.classList.add("large");
            }

            bgParticles.appendChild(particle);
        }
    }

    createParticles(45);
});