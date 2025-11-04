document.addEventListener("DOMContentLoaded", () => {
    const span = document.querySelector("h1 span");
    const skills = ["HTML", "CSS", "JavaScript", "PHP", "GSAP", "Three.js", "Creativity"];
    let index = 0;

    function updateText() {
        span.style.opacity = 0;
        span.style.transform = "scale(0.8) rotateX(90deg)";

        setTimeout(() => {
            span.textContent = skills[index];
            span.style.opacity = 1;
            span.style.transform = "scale(1) rotateX(0)";
            index = (index + 1) % skills.length;
        }, 400);
    }

    updateText();
    setInterval(updateText, 2500);

    // 🎇 Particle background
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];

    function resize() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 255, 255, 0.3)";
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 150; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
});
