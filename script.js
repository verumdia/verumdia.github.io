// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Smooth scrolling (only for same-page links)
    // -------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------------------
    // Navbar shadow on scroll
    // -------------------------------
    const nav = document.querySelector("nav");

    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.6)";
            } else {
                nav.style.boxShadow = "none";
            }
        });
    }

    // -------------------------------
    // Reveal animation (cards + sections)
    // -------------------------------
    const elements = document.querySelectorAll('.card, .section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.08 });

    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "all 0.7s ease";
        observer.observe(el);
    });

    // -------------------------------
    // Email protection (anti-scraping)
    // -------------------------------
    const emailElements = document.querySelectorAll(".email-protect");

    emailElements.forEach(el => {
        const user = "verum.intelligence";
        const domain = "gmail.com";
        el.textContent = `${user}@${domain}`;
    });

});