// Scroll animation for sections
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        let top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.8s ease";
        }
    });
});
