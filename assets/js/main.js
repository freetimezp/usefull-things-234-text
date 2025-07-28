document.addEventListener("DOMContentLoaded", () => {
    const span = document.querySelector("h1 span");
    const skills = ["HTML", "CSS", "JS", "PHP", "GSAP"];
    let index = 0;

    function updateText() {
        span.style.opacity = 0;

        setTimeout(() => {
            span.textContent = skills[index];
            span.style.opacity = 1;
            index = (index + 1) % skills.length;
        }, 500);
    }

    updateText();
    setInterval(updateText, 3000);
});
